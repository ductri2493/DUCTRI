import React from "react";
import { OrchidsData } from "./ListOfOrchids"; // Assumes you have an exported list of orchids from ListOfOrchids.js
import Starrate from "../../images/starrate.png";
export default function OrchidsContent() {
  return (
    <div className="min-h-[1000px] bg-[#DADADA]">
      <div className="container top-10 pt-10">
        <div className="row align-items-start">
          {OrchidsData.map((orchid) => (
            <div className="col-3 mb-4" key={orchid.id}>
              <div className="card">
                <img
                  src={orchid.image}
                  className="card-img-top"
                  alt={orchid.name}
                />
                <div className="card-body">
                  <h3 className="card-title fw-bold">
                    {orchid.name}
                    {orchid.isSpecial && (
                      <span className=" ml-2 badge badge-warning bg-danger">
                        Special
                      </span>
                    )}
                  </h3>
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
                  <button type="button" className="btn btn-primary  mt-3">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
