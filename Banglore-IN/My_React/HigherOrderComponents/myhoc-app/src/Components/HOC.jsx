import React from "react";

const HOC = ({ children, entity }) => {
  return (
    <>
      <h1 style={{ color: "blue", backgroundColor: entity }}>{children}</h1>
    </>
  );
};

export default HOC;
