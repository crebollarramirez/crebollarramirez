import React from "react";
import "./../../../styles/numbers.css";

export function Number({ num, descrition = "" }) {
  // Default value for descrition
  function replaceSpaces(input) {
    return input.split(" ").map((item, index) => (
      <React.Fragment key={index}>
        {item}
        {index < input.split(" ").length - 1 && <br />}
      </React.Fragment>
    ));
  }

  return (
    <div className="number-item">
      <h1>{num}</h1>
      <h2>{replaceSpaces(descrition)}</h2>
    </div>
  );
}
