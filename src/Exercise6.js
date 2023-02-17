import React from "react";

const data = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

const DataHolder = (props) => (
  <div className="border border-solid border-gray-500">{props.value}</div>
);

const Exercise6 = () => {
  return (
    <div>
      {data.map((value, index) => {
        return <DataHolder key={index} value={value} />;
      })}
    </div>
  );
};

export default Exercise6;
