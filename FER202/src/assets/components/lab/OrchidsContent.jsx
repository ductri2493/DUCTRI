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
                  src={orchid.Image}
                  className="card-img-top"
                  alt={orchid.Name}
                />
                <div className="card-body">
                  <h4 className="card-title fw-bold">{orchid.Name}</h4>
                  <p className="card-text ">
                    Rating: {orchid.Rating}
                    {[...Array(orchid.Rating)].map((_, i) => (
                      <img
                        key={i}
                        src={Starrate}
                        width={14}
                        alt=""
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
                  <Link to={`detail/${orchid.Id}`}>
                    <button
                      onClick={() => {
                        setOrchid(orchid);
                      }}
                      type="button"
                      className="btn btn-outline-warning mt-4 position-relative"
                    >
                      <a href="#popup1" id="openPopUp">
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
        <div id="popup1" className="overlay">
          <div className="popup">
            <img src={orchid.Image} />
            <h2>{orchid.Name}</h2>
            <a href="#" className="close">
              &times;
            </a>
            <div className="content">{orchid.Infor}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrchidsContent;
