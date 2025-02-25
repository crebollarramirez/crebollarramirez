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
    <div className="flex gap-2 text-left items-center justify-center">
      {isLoading ? (
        <div className="flex gap-2 items-center">
          <h1 className="text-white/85 text-lg">Loading...</h1>
          <h2 className="text-beige numDescription">
            {replaceSpaces(description)}
          </h2>
        </div>
      ) : (
        <>
          <h1 className="text-white/85 text-2xl">{num}</h1>
          <h2 className="text-beige text-lg">{replaceSpaces(description)}</h2>
        </>
      )}
    </div>
  );
}

export default Number;