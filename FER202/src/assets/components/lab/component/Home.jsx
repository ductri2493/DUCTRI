import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
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
    <div className="bg-[#F2F2F2] min-h-screen flex flex-col">
      <div className="container p-[30px] flex-grow">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <div>
              <h1 className="text-[60px]">Flowers, 🌻 what the world needs</h1>
            </div>
            <div className="py-[30px]">
              <p>Browse between hundreds of flowers</p>
            </div>
            <div className="flex">
              <Link to={`/Shop`}>
                <button className="bg-[#FF8F52] rounded text-white py-1 px-3 transform hover:scale-125 transition-transform duration-200 ease-in-out">
                  <span style={{ color: "inherit", textDecoration: "none" }}>
                    Browse
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-grow mt-5 md:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {APIData.slice(0, 6).map((orchid, index) => (
                <div key={index} className="p-3">
                  <div className="w-[192px] h-[192px] overflow-hidden rounded">
                    <img
                      className="w-full h-full object-cover"
                      src={orchid.image}
                      alt={orchid.name}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
