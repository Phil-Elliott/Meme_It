import React from "react";
import Avatar from "../../shared/avatar/Avatar";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

const MemeData = [
  {
    id: 1,
    name: "Piyush",
    time: "2 hours ago",
    votes: 10,
    meme: "To eat a banana cold. like a savage To eat a banana cold. like a savage To eat a banana cold.",
  },
  {
    id: 2,
    name: "Tom",
    time: "20 mins ago",
    votes: 10,
    meme: "To eat an apple hot",
  },
  {
    id: 3,
    name: "Bob",
    time: "4 mins ago",
    votes: 10,
    meme: "To not eat anything",
  },
];

const RankedMemes = () => {
  return (
    <div className="mt-10 flex justify-center">
      <div className="w-full px-4 sm:px-20 lg:px-0 lg:w-1/2">
        {MemeData.map((meme, i) => (
          <div className="flex justify-between border-b-2 py-4" key={i}>
            <div className="flex ">
              <div>
                <Avatar />
              </div>
              <div className="">
                <div className="flex space-x-4 ml-4 text-sm">
                  <p className="font-bold">{meme.name}</p>
                  <p>{meme.time}</p>
                </div>
                <p className="ml-4 pt-2 pr-4 text-lg">{meme.meme}</p>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-4 text-lg">
                <button>
                  <BsFillArrowUpCircleFill />
                </button>
                <p>{meme.votes}</p>
                <button>
                  <BsFillArrowDownCircleFill />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankedMemes;

/*

Avatar image (make a shared component for this)
Name and time of post
Meme
Upvote
votes in the middle
Downvote

*/
