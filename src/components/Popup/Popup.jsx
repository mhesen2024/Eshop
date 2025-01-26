import React from "react";
import Button from "../Shared/Button"
import { RxCross1 } from "react-icons/rx";
const Popup = ({ orderPopup, handleOrderPopup }) => {
  return (
    <>
    {
        orderPopup && (
            <div>
      <div className="w-screen h-screen fixed top-0 left-0 bg-black-50 z-50 backdrop-blur-sm">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] dark:bg-gray-900 bg-white p-5 rounded-2xl">
          <div className="flex justify-between ">
            <p className="text-black mb-4 font-semibold dark:text-white leading-7">Order Now</p>
            <RxCross1
              size={20}
              onClick={handleOrderPopup}
              className="text-gray-500  hover:text-black hover:dark:text-white duration-300 cursor-pointer"
            />
          </div>
          <div className="">
            <input
              className="form-input"
              placeholder="name"
              type="text"
            />
            <input
              className="form-input"
              placeholder="Email"
              type="Email"
            />
            <input
              className="form-input"
              placeholder="Address"
              type="text"
            />
          </div>
          <div className="text-center">
            <Button  text="Order Now" bgColor="bg-primary" textColor="text-white"/>
          </div>
        </div>
      </div>
    </div>
        )
    }
    </>
  );
};

export default Popup;
