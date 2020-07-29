import React from "react";

const FourBack = (props) => {
  return (
    <div
      // properti to change the class
      className={props.clase}
      style={{
        display: "flex",
        flexDirection: "column",

        height: "100vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default FourBack;
