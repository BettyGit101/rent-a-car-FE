import React, { useState, lazy, Suspense } from "react";
import Input from "../ui/Input";
import useFetch from "../hooks/useFetch";
import styles from "./AddNewCar.module.css";
import { CircularProgress } from "@mui/material";
import { RequestDetails, CarData } from "../assets/types";
import { KEY_CARS_DATA, ERROR_ID_EXISTS_PREFIX, ERROR_ID_EXISTS_SUFFIX, BASIC_CAR_REQUEST_URL, ERROR_OPTION_NOT_VALID } from "../assets/constants";

const AddNewCar = () => {

  let pageContent;
  const [errorMsg, setErrorMsg] = useState("");
  const NotificationLazy = lazy(() => import("../ui/Notification"));
  const { isLoading, error, sendRequest: postCarsData } = useFetch(KEY_CARS_DATA);


  const updateStorage = (carToAdd: CarData) => {
    const cachedData = localStorage.getItem(KEY_CARS_DATA);
    if (cachedData) {
      let cachedDataObj = JSON.parse(cachedData);
      cachedDataObj.push({
        ...carToAdd,
        id:+carToAdd.id
      });
      localStorage.setItem(KEY_CARS_DATA, JSON.stringify(cachedDataObj));
    }
  }

  const callToAddNewCar = (carToAdd: any) => {
    setErrorMsg("");
    const POST_CAR_REQUEST: RequestDetails = {
      url: BASIC_CAR_REQUEST_URL,
      method: "POST",
      body: carToAdd,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    postCarsData(POST_CAR_REQUEST, () => updateStorage(carToAdd));
  }

  const handleSubmitForm = (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newCarDataToAdd = Object.fromEntries(formData.entries());

    if ((newCarDataToAdd.isAirCondition !== "true" &&  newCarDataToAdd.isAirCondition !== "false")
        || (newCarDataToAdd.isAvailable !== "true" &&  newCarDataToAdd.isAvailable !== "false" ))
         {
          setErrorMsg(ERROR_OPTION_NOT_VALID);
          return;
    }

    const cachedCars = JSON.parse(localStorage.getItem(KEY_CARS_DATA) || '""');

    if (error) {
      setErrorMsg(error);
    }
    else if (cachedCars) {
      const cachedCarsIds = cachedCars.map((car: CarData) => car.id);
      
      if (cachedCarsIds.includes(+newCarDataToAdd.id)) {
        setErrorMsg(`${ERROR_ID_EXISTS_PREFIX} ${newCarDataToAdd.id} ${ERROR_ID_EXISTS_SUFFIX}`);
      } 
      else {
       callToAddNewCar(newCarDataToAdd);
      }
    } else {
      callToAddNewCar(newCarDataToAdd);
    }
  };

  if (isLoading) {
    pageContent = (
      <div className={styles.spinner}>
        <CircularProgress />
      </div>
    );
  }
  else if (error) {
    pageContent = (
      <Suspense fallback={<CircularProgress />}>
        <NotificationLazy message={error} />
      </Suspense>
    );
  } else {
    pageContent = (
      <>
        <h2>Add A New Car</h2>
        <form onSubmit={handleSubmitForm} className={styles.new_car_form}>
          <div className={styles.new_car_form_fields}>
            <div className={styles.left}>
              <Input label="Car ID" id="id" type="number" min="100" max="200"/>
              <Input label="Car Model" id="model" type="text" />
              <Input label="Number Of Seats" id="numOfSeats" type="number" min="2" max="10"/>
              <Input label="Number Of Doors" id="numOfDoors" type="number" min="2" max="5"/>
            </div>
            <div className={styles.right}>
              <Input label="Fuel Capacity" id="fuelCapacity" type="number"min="30" max="100"/>
              <Input label="Air Condition?" id="isAirCondition" type="text" />
              <Input label="Is Available?" id="isAvailable" type="text" />
            </div>
          </div>

          <div className={styles.error}>
            {errorMsg.length > 0 && <p>{errorMsg}</p>}
          </div>

          <div className={styles.actions}>
            <input type="reset" value="Clear" onClick={() => setErrorMsg("")}/>
            <button type="submit">Add</button>
          </div>
        </form>
      </>
    )
  }

  return (
    <div className={styles.new_car}>
      {pageContent}   
    </div>
  );
};

export default AddNewCar;