import React, { useState, useEffect } from "react";
import Starrate from "../../../images/starrate.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const OrchidsContent = () => {
  const [APIData, setAPIData] = useState([]);

  const baseURL = `https://66643b32932baf9032aa6cd8.mockapi.io/ListOfOrchids`;

  useEffect(() => {
    fetch(baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAPIData(data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className=" bg-[#DADADA]">
      <div className="container top-10 pt-10">
        <div className="row align-items-start">
          {APIData.map((orchid) => (
            <div className="col-3 mb-4" key={orchid.id}>
              <div className="card h-full">
                <img
                  className="card-img-top w-full h-[300px] object-fit-cover rounded"
                  src={orchid.image}
                  alt={orchid.name}
                />
                <div className="card-body shadow-md">
                  <h4 className="card-title fw-bold">{orchid.name}</h4>
                  <p className="card-text">
                    Rating: {orchid.rating}
                    {[...Array(orchid.rating)].map((_, i) => (
                      <img
                        key={i}
                        src={Starrate}
                        width={14}
                        className="inline-block"
                        alt="star"
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
                  <Link to={`/detail/${orchid.id}`}>
                    <button
                      type="button"
                      className="btn btn-outline-warning mt-4 position-relative text-black"
                    >
                      View Details
                      {orchid.isSpecial && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          Special
                        </span>
                      )}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default OrchidsContent;
