import React from "react";
import axios from "axios";

import {AiFillPlusCircle} from "react-icons/ai";
function Button() {
  const handleChange = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", e.target.files[0]);
    axios
      .post("http://localhost:5000/api/save", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <label
      className=" "
      htmlFor=""
    >
      <AiFillPlusCircle />
      <input
        onChange={(e) => handleChange(e)}
        type="file"
      />
    </label>
  );
}

export default Button;
