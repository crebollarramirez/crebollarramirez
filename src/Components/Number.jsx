import React from "react";

export function Number({ num, descrition = ""}) {
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
    <div className="d-flex gap-2 text-start align-content-center justify-content-center">
      <h1 className="text-white numberSize ">{num}</h1>
      <h2 className="color-beige numDescription ">{replaceSpaces(descrition)}</h2>
    </div>
  );
}
