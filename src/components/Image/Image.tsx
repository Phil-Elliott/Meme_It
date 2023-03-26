import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Image = () => {
  return (
    <div className="flex items-center justify-center my-10 space-x-4 sm:space-x-10 text-xl sm:text-3xl mx-2 xs:mx-0">
      <AiOutlineArrowLeft className="cursor-pointer" />
      <img
        className="w-3/4 sm:w-1/2 h-1/2 object-cover object-center rounded"
        src="https://plus.unsplash.com/premium_photo-1667516819655-55413f299fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
      />
      <AiOutlineArrowRight className="cursor-pointer" />
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
