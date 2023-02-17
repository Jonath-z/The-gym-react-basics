import React from "react";

const data = ["dog", "cat", "chicken", "cow", "sheep", "horse"];

const Exercise5 = () => {
  return (
    <div className="flex flex-col mt-24 justify-center ml-[50%] gap-2">
      {data.map((dogType, index) => (
        <ol key={index}>
          <li>{dogType}</li>
        </ol>
      ))}
    </div>
  );
};

export default Exercise5;
