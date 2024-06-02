import React from "react";

const Grid = ({photos}) => {
  return (
    <>
      <h1>Our Gallary</h1>
      <div className="grid grid-cols-4 ">
        {photos.map(({photo, _id}) => {
          return (
            <div className=" p-2">
              <img className=" "
                src={`http://localhost:5000/uploads/${photo}`}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Grid;
