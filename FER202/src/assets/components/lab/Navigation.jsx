import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="sticky top-0 z-10">
      <nav>
        <ul className="flex justify-between items-center px-28 py-4 bg-[#FFFFFF] text-black font-semibold	">
          <div>
            <h2 className="text-3xl ">
              <a href="">
                <span className="text-[#FF8F52]">Flower</span> Shop
              </a>
            </h2>
          </div>
          <div className="flex gap-10 text-xl mr-40">
            <Link to={`/`}>
              <li className="list-none hover:text-primary">
                <a className="" href="">
                  Home
                </a>
              </li>
            </Link>
            <Link to={`/Shop`}>
              <li className="list-none hover:text-primary ">
                <a href="">Shop</a>
              </li>
            </Link>

            <li className="list-none hover:text-primary">
              <a href="">Blog</a>
            </li>
            <li className="list-none hover:text-primary">
              <a href="">About</a>
            </li>
          </div>
          <div className="flex gap-10">
            <div>
              <a href="" className="text-2xl hover:text-primary">
                <FaUser />
              </a>
            </div>
            <div>
              <a href="" className="text-2xl hover:text-primary">
                <FaShoppingCart />
              </a>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}
