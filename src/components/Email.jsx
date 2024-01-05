import React from "react";

const Email = ({ generateEmail }) => {
  //   console.log(generateEmail);
  return (
    <>
      <div className="container my-2">
        <div className="row text-center">
          <div className="w-50 m-auto">
            <p>{generateEmail}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
