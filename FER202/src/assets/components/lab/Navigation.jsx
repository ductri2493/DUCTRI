// src/assets/components/lab/Navigation.jsx
import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import { UserAuth } from "../../../context/AuthConext";

export default function Navigation() {
  const { user, logOut, googleSignIn } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sticky top-0 z-10">
      <nav>
        <ul className="flex justify-between items-center px-28 py-4 bg-[#FFFFFF] text-black font-semibold">
          <div>
            <h2 className="text-3xl">
              <Link to="/">
                <span className="text-[#FF8F52]">Flower</span> Shop
              </Link>
            </h2>
          </div>
          <div className="flex gap-10 text-xl mr-40">
            <li className="list-none hover:text-primary hover:transform hover:scale-125 transition-transform">
              <Link to="/">Home</Link>
            </li>
            <li className="list-none hover:text-primary hover:transform hover:scale-125 transition-transform">
              <Link to="/Shop">Shop</Link>
            </li>
            <li className="list-none hover:text-primary hover:transform hover:scale-125 transition-transform">
              <Link to="/Blog">Blog</Link>
            </li>
            <li className="list-none hover:text-primary hover:transform hover:scale-125 transition-transform">
              <Link to="/About">About</Link>
            </li>
          </div>
          <div className="flex gap-10">
            <div>
              <Link to="/Add" className="text-2xl hover:text-primary ">
                <FaUser />
              </Link>
            </div>
            <div>
              <Link to="/Cart" className="text-2xl hover:text-primary ">
                <FaShoppingCart />
              </Link>
            </div>
            <div>
              {user ? (
                <Typography
                  textAlign="center"
                  onClick={handleSignOut}
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </Typography>
              ) : (
                <Button
                  onClick={handleSignIn}
                  sx={{ color: "white", display: "block" }}
                  className="bg-black hover:transform hover:scale-125 transition-transform"
                >
                  Sign in with Google
                </Button>
              )}
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}
