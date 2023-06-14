import React from "react";
import cbeans from "../../data/image/bookbg.png";
import { BsTelephone } from "react-icons/bs";
import "./book.css";
const Book = () => {
  return (
    <div className="bG h-80 w-11/12 relative rounded-3xl">
      <div className=" bg-black opacity-80 absolute top-0 bottom-0 right-0 left-0 rounded-3xl z-0"></div>
      <div className="absolute top-0 bottom-0 right-0 left-0 z-20 flex justify-center items-center">
        <div className=" flex flex-col   ">
          <h2 className=" text-white font-bold text-4xl">
            Lets Book Your Table
          </h2>
          <div className=" flex h-12 bg-orange-100">
            <div className="flex items-center">
              <BsTelephone color="white" />
              <input className=" " type="text" />
            </div>
            <div className=""></div>
            <button>Book Table</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
