import React from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const FooterLinks = [
  {
    title: "Home",
    link: "/#"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Contact",
    link: "/contact"
  },
  {
    title: "Blog",
    link: "/blog"
  }
];
const FooterLinks2 = [
  {
    title: "Home",
    link: "/#"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Contact",
    link: "/contact"
  },
  {
    title: "Blog",
    link: "/blog"
  }
];
const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="py-2 px-4">
          <div className="grid md:grid-cols-3 pb-20 pt-5">
            <div className="py-8 px-4">
              <h1 className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                ESHOP
              </h1>
              <p className="text-gray-600 dark:text-white/70  lg:pr-24 pt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maiores alias cum
              </p>
            </div>
            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left mb-3">
                  Important Links
                </h1>
                <ul className="space-y-2">
                  {FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400
                   hover:dark:text-white hover:text-black
                   duration-300"
                      >
                        {data.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left mb-3">
                  Quick Links
                </h1>
                <ul className="space-y-2">
                  {FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-600 dark:text-gray-400
                   hover:dark:text-white hover:text-black
                   duration-300"
                      >
                        {data.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
                <div>
                  <div className="flex gap-4 font-semibold mb-4">
                    <FaLocationArrow size={20} />
                    <p>Noida , Uttar Pradesh</p>
                  </div>
                  <div className="flex gap-4 font-semibold">
                    <FaMobileScreen size={20} />
                    <p>+91 1234567890</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center mt-10">
                  <FaLinkedin
                    size={30}
                    className="hover:text-primary cursor-pointer duration-300"
                  />
                  <FaInstagram
                    size={30}
                    className="hover:text-primary cursor-pointer duration-300"
                  />
                  <FaFacebook
                    size={30}
                    className="hover:text-primary cursor-pointer duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
