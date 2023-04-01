import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import moment from "moment";

const Image = () => {
  const [date, setDate] = useState<string>(moment().format("YYYY-MM-DD"));
  const [image, setImage] = useState<any>([]);

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      getImages(date);
    }
  }, []);

  function getImages(dateToFetch: string) {
    console.log(date, "date");
    axios
      .get(
        `http://localhost:1337/api/images?filters[date][$eq]=${dateToFetch}&populate=img`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        setImage(res.data.data[0].attributes.img.data.attributes.url);
        console.log(date);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    console.log(date);
  }, [date]);

  function handleLeft() {
    getImages(moment(date).subtract(1, "days").format("YYYY-MM-DD"));
    setDate(moment(date).subtract(1, "days").format("YYYY-MM-DD"));
  }

  function handleRight() {
    getImages(moment(date).add(1, "days").format("YYYY-MM-DD"));
    setDate(moment(date).add(1, "days").format("YYYY-MM-DD"));
  }

  return (
    <div className="flex items-center justify-center my-10 space-x-4 lg:space-x-10 text-xl sm:text-3xl mx-2 xs:mx-0">
      {moment(date).isSame("2023-03-30", "day") ? (
        <AiOutlineArrowLeft className="invisible" />
      ) : (
        <AiOutlineArrowLeft
          className="cursor-pointer"
          onClick={() => handleLeft()}
        />
      )}
      <img
        className="w-3/4 lg:w-1/2 md:h-96 object-cover object-center rounded shadow-lg"
        src={`http://localhost:1337${image}`}
      />
      {moment(date).isSame(moment(), "day") ? (
        <AiOutlineArrowRight className="invisible" />
      ) : (
        <AiOutlineArrowRight
          className="cursor-pointer"
          onClick={() => handleRight()}
        />
      )}
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
