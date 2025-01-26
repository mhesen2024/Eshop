import React from 'react'
import Image1 from "../../assets/category/vr.png";
import Image2 from "../../assets/category/speaker.png";
import Image3 from "../../assets/category/gaming.png";
export default function Category2() {
  return (
<div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="py-10 pl-5 bg-gradient-to-br sm:col-span-2 from-gray-400 to-gray-400/90 text-white rounded-3xl relative h-[320px] flex items-end">
          <div>
            <div className="mb-4">
              <p className="mb-[2]  ">Enjoy</p>
              <p className="mb-[2] text-2xl font-semibold ">With</p>
              <p className="mb-4 text-4xl xl:text-5xl  opacity-40 font-bold">playstaion 4</p>
              <button className="bg-primary  text-white cursor-pointer hover:scale-105 duration-300 mb-4 py-2 px-8 rounded-full relative z-10">
                Browse
              </button>
            </div> 

            <img className="absolute top-4 w-[250px] object-contain right-2" src={Image3} />
    
          </div>
          </div>
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2]  ">Enjoy</p>
                <p className="mb-[2] text-2xl font-semibold ">With</p>
                <p className="mb-4 xl:text-5xl  text-4xl opacity-20 font-bold">vr</p>
                <button className="bg-white text-brandGreen cursor-pointer hover:scale-105 duration-300 mb-4 py-2 px-8 rounded-full relative z-10">
                  Browse
                </button>
              </div>
            </div>

            <img className="absolute bottom-0" src={Image1} />
          </div>
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2]">Enjoy</p>
                <p className="mb-[2] text-2xl font-semibold ">With</p>
                <p className="mb-4 xl:text-5xl  text-4xl opacity-40 font-bold">speaker</p>
                <button className="bg-white  text-brandBlue cursor-pointer hover:scale-105 duration-300 mb-4 py-2 px-8 rounded-full relative z-10">
                  Browse
                </button>
              </div>

              <img className="absolute w-[250px] top-5 right-2" src={Image2} />
            </div>
          </div>
      
        </div>
      </div>
    </div>
  )
}
