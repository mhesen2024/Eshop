import React from "react";
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";

export default function Category() {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2] text-gray-500 ">Enjoy</p>
                <p className="mb-[2] text-2xl font-semibold ">With</p>
                <p className="mb-4 xl:text-5xl  text-4xl opacity-20 font-bold">Earphone</p>
                <button className="bg-primary text-white cursor-pointer hover:scale-105 duration-300 mb-4 py-2 px-8 rounded-full relative z-10">
                  Browse
                </button>
              </div>
            </div>

            <img className="absolute bottom-0" src={Image1} />
          </div>
          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2]">Enjoy</p>
                <p className="mb-[2] text-2xl font-semibold ">With</p>
                <p className="mb-4 xl:text-5xl  text-4xl opacity-40 font-bold">Gadget</p>
                <button className="bg-white  text-brandYellow cursor-pointer hover:scale-105 duration-300 mb-4 py-2 px-8 rounded-full relative z-10">
                  Browse
                </button>
              </div>

              <img className="absolute top-5" src={Image2} />
            </div>
          </div>
          <div className="py-10 pl-5 bg-gradient-to-br sm:col-span-2 from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
          <div>
            <div className="mb-4">
              <p className="mb-[2]  ">Enjoy</p>
              <p className="mb-[2] text-2xl font-semibold ">With</p>
              <p className="mb-4 text-4xl xl:text-5xl  opacity-40 font-bold">laptop</p>
              <button className="bg-white  text-primary cursor-pointer hover:scale-105 duration-300 mb-4 py-2 px-8 rounded-full relative z-10">
                Browse
              </button>
            </div> 

            <img className="absolute top-4 w-[250px] object-contain right-2" src={Image3} />
    
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
