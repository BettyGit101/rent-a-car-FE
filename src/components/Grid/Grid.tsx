import React from "react";
import SingleCar from "./SingleCar";
import { CarData } from "../../assets/types";
import GridColumnNames from "./GridColumnNames";

function Grid(props: {data:CarData[]}) {
  return (
    <div>
      <GridColumnNames />
      {props.data.map((car) => (
        <SingleCar key={car.id} data={car} />
      ))}
    </div>
  );
}

export default Grid;
