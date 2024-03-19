import React, { useState, lazy, Suspense } from "react";
import Input from "../ui/Input";
import useFetch from "../hooks/useFetch";
import styles from "./UpdateCar.module.css";
import { CircularProgress } from "@mui/material";
import { CarData, RequestDetails } from "../assets/types";
import {KEY_CARS_DATA,BASIC_CAR_REQUEST_URL,VALID_SELECT_OPTIONS} from "../assets/constants";

const UpdateCar = () => {

  let pageContent;
  const [carId, setCarId] = useState("");
  const [availability, setAvailability] = useState("true");
  const NotificationLazy = lazy(() => import("../ui/Notification"));
  const { isLoading, error, sendRequest: updateCarData } = useFetch(KEY_CARS_DATA);

  const updateCarId = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCarId(e.target.value);
  };

  const updateAvailability = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAvailability(e.target.value);
  };

  const isFormValid = () => {
    return (
      carId &&
      availability &&
      +carId >= 100 &&
      +carId <= 200 &&
      VALID_SELECT_OPTIONS.includes(availability)
    );
  };

  const updateCarDetails = () => {
    const isValid = isFormValid();
    if (isValid) {
      const PUT_CAR_REQUEST: RequestDetails = {
        url: `${BASIC_CAR_REQUEST_URL}/${carId}?isAvailable=${availability}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      updateCarData(PUT_CAR_REQUEST);
    }
  };

  let cachedCarsIds = [];
  const cachedCars = JSON.parse(localStorage.getItem(KEY_CARS_DATA) || '""');
  if (cachedCars) {
    cachedCarsIds = cachedCars
      .map((car: CarData) => car.id)
      .sort((a: number, b: number) => (a > b ? 1 : -1));
  }

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
      <h2>Update an existing car</h2>
      <form onSubmit={updateCarDetails} className={styles.form_details}>
          <div className={styles.left}>
            {cachedCarsIds.length > 0 ? 
            (
              <div className={styles.car_id}>
                <label>Please Select Car ID:</label>
                <select onChange={updateCarId}>
                  <option value="Please select">Please select</option>
                  {cachedCarsIds.map((existingId: number) => (
                  <option key={existingId} value={existingId}>
                      {existingId}
                  </option>
                  ))}
                </select>
              </div>
            ) 
            : 
            (
              <Input
                  label="Please Enter Car ID:"
                  id="id" type="number"
                  min="100" max="200"
                  value={carId}
                  onChange={updateCarId}
                  placeholder="Please enter car id"
                />
            )}
            </div>

            <div className={styles.right}>
              <label>Is Car Available?</label>
              <select required onChange={updateAvailability}>
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>

            <div className={styles.actions}>
              <button type="submit">Update</button>
            </div>
          </form>
    </>)
  }
  

  return (
    <div className={styles.update_car}>
     {pageContent}   
    </div>
  );
};

export default UpdateCar;