import React from "react";
import { useState } from "react";
import { OrchidsData } from "./ListOfOrchids"; // Assumes you have an exported list of orchids from ListOfOrchids.js
import Starrate from "../../images/starrate.png";
import "./OrchidContent.css";
import { Link } from "react-router-dom";

const OrchidsContent = () => {
  const [orchid, setOrchid] = useState([]);
  return (
    <div className="min-h-[1000px] bg-[#DADADA]">
      <div className="container top-10 pt-10">
        <div className="row align-items-start">
          {OrchidsData.map((orchid) => (
            <div className="col-3 mb-4" key={orchid.id}>
              <div className="card h-full">
                <img
                  src={orchid.image}
                  className="card-img-top"
                  alt={orchid.name}
                />
                <div className="card-body">
                  <h4 className="card-title fw-bold">{orchid.name}</h4>
                  <p className="card-text ">
                    Rating: {orchid.rating}
                    {[...Array(orchid.rating)].map((_, i) => (
                      <img
                        key={i}
                        src={Starrate}
                        width={14}
                        alt=""
                        className="inline-block"
                      />
                    ))}
                    <br />
                    Color: {orchid.color}
                    <br />
                    Origin: {orchid.origin}
                    <br />
                    Category: {orchid.category}
                    <br />
                  </p>
                  <Link to={`detail/${orchid.id}`}>
                    <button
                      onClick={() => {
                        setOrchid(orchid);
                      }}
                      type="button"
                      className="btn btn-outline-warning mt-2 position-relative"
                    >
                      <a href="#popup1" id="openPopUp">
                        View Details
                        {orchid.isSpecial && (
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
        <div id="popup1" className="overlay">
          <div className="popup">
            <img src={orchid.image} />
            <h2>{orchid.name}</h2>
            <a href="#" className="close">
              &times;
            </a>
            <div className="content">{orchid.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrchidsContent;
