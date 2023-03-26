import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Image = () => {
  return (
    <div className="flex items-center justify-center my-20 space-x-10 text-3xl">
      <AiOutlineArrowLeft />
      <img
        className="w-1/2 h-1/2 object-cover object-center"
        src="https://plus.unsplash.com/premium_photo-1667516819655-55413f299fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
      />
      <AiOutlineArrowRight />
    </div>
  );
};

export default Image;

/*

1) Create ui
       - image (test with an image)
       - arrows on the side
2) Make it responsive



- show images on scroll based off of date
- show image with top rated quote

*/
