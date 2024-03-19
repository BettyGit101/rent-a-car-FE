import React, { useState, useEffect, Suspense, lazy } from "react";
import styles from "./Home.module.css";
import Grid from "../components/Grid/Grid";
import { CarData } from "../assets/types";
import useFetch from "../hooks/useFetch";
import { CircularProgress } from "@mui/material";
import { KEY_CARS_DATA, GET_CAR_REQUEST, NO_CARS_FOUND } from "../assets/constants";


const Home = () => {

  let pageContent;
  const [carInfo, setCarInfo] = useState<CarData[]>([]);
  const NotificationLazy = lazy(() => import("../ui/Notification"));
  const { isLoading, error, sendRequest: fetchCarsData } = useFetch(KEY_CARS_DATA);

  
  if (isLoading) {
    pageContent = (
      <div className={styles.home__spinner}>
        <CircularProgress />
      </div>
    );
  } else if (error) {
    pageContent = (
      <Suspense fallback={<CircularProgress />}>
        <NotificationLazy message={error} />
      </Suspense>
    );
  } else if (carInfo?.length === 0) {
    pageContent = (
      <Suspense fallback={<CircularProgress />}>
        <NotificationLazy message={NO_CARS_FOUND} />
      </Suspense>
    );
  } else if (carInfo?.length > 0) {
    pageContent = (
      <div className={styles.home__content}>
         <Grid data={carInfo}/>
      </div>

    );
  }

  const setFetchedCarsData = (apiData: CarData[]) => {
    setCarInfo(apiData);
    localStorage.setItem(KEY_CARS_DATA, JSON.stringify(apiData));
  };

  useEffect(() => {
    fetchCarsData(GET_CAR_REQUEST, setFetchedCarsData);
  }, [fetchCarsData]);


  return(
    <div>
       {pageContent}
    </div>
  )
};

export default Home;
