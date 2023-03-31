import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import moment from "moment";

const Image = () => {
  const [date, setDate] = useState<string>("2023-03-31");
  const [image, setImage] = useState<any>([]);

  useEffect(() => {
    setDate(moment().format("YYYY-MM-DD"));
    if (localStorage.getItem("jwt")) {
      getImages();
    }
  }, []);

  function getImages() {
    axios
      .get(
        `http://localhost:1337/api/images?filters[date][$eq]=${date}&populate=img`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        setImage(res.data.data[0].attributes.img.data.attributes.url);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLeft() {
    setDate(moment(date).subtract(1, "days").format("YYYY-MM-DD"));
    getImages();
  }

  function handleRight() {
    setDate(moment(date).add(1, "days").format("YYYY-MM-DD"));
    getImages();
  }

  return (
    <div className="flex items-center justify-center my-10 space-x-4 lg:space-x-10 text-xl sm:text-3xl mx-2 xs:mx-0">
      {/* <AiOutlineArrowLeft
        className="cursor-pointer"
        onClick={() => handleLeft()}
      /> */}
      <img
        className="w-3/4 lg:w-1/2 h-1/2 object-cover object-center rounded"
        src={`http://localhost:1337${image}`}
      />
      {/* <AiOutlineArrowRight
        className="cursor-pointer"
        onClick={() => handleRight()}
      /> */}
    </div>
  );
};

export default Image;

/*

Add in left and right arrows to change the date later after app is finished



1) Create ui
       - image (test with an image)
       - arrows on the side
2) Make it responsive



- show images on scroll based off of date
- show image with top rated quote

*/
