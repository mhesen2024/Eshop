import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

import DarkMode from "./DarkMode";
export default function Navbar() {
  const Menulinks = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Shop", link: "/#shop" },
    { id: 3, name: "About", link: "/#about" },
    { id: 4, name: "Blogs", link: "/#blogs" }
  ];

  const DropDownLinks = [
    {
      id: 1,
      name: "Trending Product",
      link: "/#"
    },
    {
      id: 2,
      name: "Trending Product",
      link: "/#"
    },
    {
      id: 3,
      name: "Trending Product",
      link: "/#"
    },

  ];

  return (
    <div>
      <div
        className="bg-white dark:bg-gray-900
       dark:text-white
       duration-200   z-40
       "
      >
        <div className="py-4">
          <div className="container flex justify-between">
            {/* logo and links section  */}
            <div className="flex items-center gap-4">
              <a
                className="text-primary font-semibold  text-2xl uppercase sm:text-3xl"
                href="#"
              >
                Eshop
              </a>
              {/* menu items */}
              <div className="hidden lg:block">
                <ul className="flex items-center gap-4">
                  {Menulinks.map((data, index) => (
                    <li key={index}>
                      <a
                        className="inline-block px-4 font-semibold text-gray-500
                 hover:text-black
                 dark:hover:text-white duration-200
                 "
                        href={data.link}
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                  {/* DropDown item */}
                  <li className="cursor-pointer group">
                    <a
                      href="#"
                      className="flex items-center gap-[2px] font-semibold py-2 text-gray-500 dark:hover:text-white"
                    >
                      QuickLinks
                      <span>
                        <FaCaretDown className="group-hover:rotate-180 duration-300" />
                      </span>
                    </a>
                    {/* DropDowns Links  */}
                    <div className="absolute hidden  z-[9999] group-hover:block
                     w-[200px] rounded-md bg-white shadow-md
                      dark:bg-gray-900 p-2 dark:text-white ">
                      <ul className="space-y-2">{
                        DropDownLinks.map((data,index) => (
                          <li key={data.id}>
                            <a
                              href={data.link}
                              className=" 
                              hover:bg-primary/20 dark:hover:bg-brandBlue/20 p-1 rounded-sm
                               text-gray-500 dark:hover:text-white
                                hover:text-black duration-200
                               inline-block w-full font-semibold
                               "
                            >
                              {data.name}
                            </a>
                          </li>
                        ))
                      }
                        
                      </ul>

                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* navbar Right section */}
            <div className="flex justify-between items-center gap-4">
              {/* search bar section  */}
              <div className="relative group hidden sm:block ">
                <input
                  type="text"
                  placeholder="Search"
                  className="search-bar"
                />
                <IoMdSearch
                  className="absolute text-xl text-gray-600 dark:text-gray-400
                group-hover:text-pretty
                top-3 -translate-y-1 right-3 duration-200
                "
                />
              </div>
              {/* dark button section */}
              <button className="relative">
                <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
                <div
                  className="w-4 h-4 bg-red-500 text-white rounded-full absolute -top-2 -right-2 flex
             items-center justify-center text-xs
             "
                >
                  4
                </div>
              </button>
              {/* dark mode section */}
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
