import React from "react";

const Background = (props) => {
  return (
    <div
      // properti to change the class
      className={props.clase}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        height: "100vh",
      }}
    >
      {/*everything that goes into container */}
      {props.children}
    </div>
  );
};

export default Background;
