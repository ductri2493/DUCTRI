import { OrchidData } from "./ListOfOrchids";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-[#F2F2F2]">
      <div className="container p-[30px]">
        <div className="row">
          <div className="col-5">
            <div className="row">
              <h1 className="text-[60px]">Flowers, 🌻 what the world needs</h1>
            </div>
            <div className="row py-[30px]">
              <p>Browse between hounders of flowers</p>
            </div>
            <div className="row d-inline-flex p-2">
              <Link to={`/Shop`}>
                <button className="bg-[#FF8F52] rounded text-white py-1 px-3">
                  <a
                    href=""
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Browse
                  </a>
                </button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {OrchidData.slice(0, 3).map((orchid, index) => (
                <div className="col p-3 " key={index}>
                  <img
                    className="w-[192px] h-[192px] rounded"
                    src={orchid.Image}
                  />
                </div>
              ))}
            </div>
            <div className="row">
              {OrchidData.slice(3, 6).map((orchid, index) => (
                <div className="col p-3 " key={index}>
                  <img
                    className="w-[192px] h-[192px] rounded"
                    src={orchid.Image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer class="text-center text-lg-start bg-white">
        <div className="text-center p-3">
          © 2024 Copyright:
          <a className="text-body">OrchidsShop.com</a>
        </div>
      </footer>
    </div>
  );
};
export default Home;
