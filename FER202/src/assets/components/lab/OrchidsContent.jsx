import React from "react";
import { useState } from "react";
import { OrchidData } from "./ListOfOrchids";
import Starrate from "../../images/starrate.png";
import "./OrchidContent.css";
import { Link } from "react-router-dom";

const OrchidsContent = () => {
  const [orchid, setOrchid] = useState([]);
  return (
    <div className="min-h-[1000px] bg-[#DADADA]">
      <div className="container top-10 pt-10">
        <div className="row align-items-start">
          {OrchidData.map((orchid) => (
            <div className="col-3 mb-4" key={orchid.Id}>
              <div className="card h-full">
                <img
                  className="card-img-top w-full h-[300px] object-fit-cover rounded"
                  src={orchid.Image}
                  alt={orchid.Name}
                />
                <div className="card-body shadow-md ">
                  <h4 className="card-title fw-bold">{orchid.Name}</h4>
                  <p className="card-text ">
                    Rating: {orchid.Rating}
                    {[...Array(orchid.Rating)].map((_, i) => (
                      <img
                        key={i}
                        src={Starrate}
                        width={14}
                        className="inline-block"
                      />
                    ))}
                    <br />
                    Color: {orchid.Color}
                    <br />
                    Origin: {orchid.Origin}
                    <br />
                    Category: {orchid.Category}
                    <br />
                  </p>
                  <Link to={`/detail/${orchid.Id}`}>
                    <button
                      onClick={() => {
                        setOrchid(orchid);
                      }}
                      type="button"
                      className="btn btn-outline-warning mt-4 position-relative text-black "
                    >
                      <a>
                        View Details
                        {orchid.IsSpecial && (
                          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            Special
                          </span>
                        )}
                      </a>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
export default OrchidsContent;
