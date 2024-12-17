import React from "react";

const Number = ({ num, description = "", isLoading = false }) => {
  // Function to replace spaces with line breaks
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
      {isLoading ? (
        <div className="d-flex gap-2 align-items-center">
          <h1 className="text-white fs-6">Loading...</h1>
          <h2 className="color-beige numDescription">
            {replaceSpaces(description)}
          </h2>
        </div>
      ) : (
        <>
          <h1 className="text-white fs-2">{num}</h1>
          <h2 className="color-beige fs-5">{replaceSpaces(description)}</h2>
        </>
      )}
    </div>
  );
}

export default Number;
