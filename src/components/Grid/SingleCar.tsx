import React from "react";
import styles from "./SingleCar.module.css";
import { RiDeleteBinLine } from "react-icons/ri";
import useFetch from '../../hooks/useFetch';
import { CarData, RequestDetails } from "../../assets/types";
import {KEY_CARS_DATA,BASIC_CAR_REQUEST_URL} from '../../assets/constants';

const SingleCar = (props: { data: CarData }) => {
  const { sendRequest: deleteCarById } = useFetch(KEY_CARS_DATA);

  const handleDelete = () => {
    const DELETE_CAR_REQUEST: RequestDetails = {
      url: `${BASIC_CAR_REQUEST_URL}/${props.data.id}`,
      method: 'DELETE' 
    }
    deleteCarById(DELETE_CAR_REQUEST);
  }

  return (
    <div className={styles.grid__row}>
      <span className={styles.grid__item}>{props.data.id}</span>
      <span className={styles.grid__item}>{props.data.model}</span>
      <span className={styles.grid__item}>{props.data.fuelCapacity}L</span>
      <span className={styles.grid__item}>{props.data.isAirCondition.toString()}</span>
      <span className={styles.grid__item}>{props.data.isAvailable.toString()}
      </span>
      <span onClick={handleDelete} className={[styles.grid__item, styles.grid__delete_btn].join(' ')}>
        <RiDeleteBinLine size={25}/>
      </span>
    </div>
  );
};

export default SingleCar;
