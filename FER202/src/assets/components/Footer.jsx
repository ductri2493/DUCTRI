import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#454545] text-white px-6 py-4">
      <footer className="flex">
        <div className="col-3">
          <h2 className="text-xl text-center">
            <span className="text-[#FF8F52]">Flower</span> Shop
          </h2>
          <div className="text-justify text-sm">
            Some random stuff about flower shop and some more info cuz this box
            had to get fill Some random stuff about flower shop and some more
            info cuz this box had to get fill Some random stuff about flower
            shop and some more info cuz this box had to get fill
          </div>
        </div>
        <div className="col-3">
          <div className="text-sm text-center">
            <ul>
              <li className="list-none text-xl">Link</li>
              <li className="list-none ">
                <Link to={`/`} className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li className="list-none ">
                <Link to={`/Shop`} className="hover:text-primary">
                  Shop
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:text-primary">Blog</Link>
              </li>
              <li className="list-none ">
                <Link className="hover:text-primary">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-3">
          <div className="text-sm text-center">
            <ul>
              <li className="list-none text-xl">Link</li>
              <li className="list-none ">
                <Link to={`/`} className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li className="list-none ">
                <Link to={`/Shop`} className="hover:text-primary">
                  Shop
                </Link>
              </li>
              <li className="list-none ">
                <Link className="hover:text-primary">Blog</Link>
              </li>
              <li className="list-none ">
                <Link className="hover:text-primary">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-3">
          <div className="">Contact</div>
          <div className="text-sm flex py-1 pt-2">
            <FaLocationDot />
            <p className="px-2">26985 Brighton Lane, Lake Forest, CA</p>
          </div>
          <div className="text-sm flex py-1">
            <IoMdMail size={15} className="mt-1" />
            <p className="px-2">support@Flowers.com</p>
          </div>
          <div className="text-sm flex py-1">
            <FaPhoneAlt size={15} className="mt-1" />
            <p className="px-2">+1 236 5489</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
