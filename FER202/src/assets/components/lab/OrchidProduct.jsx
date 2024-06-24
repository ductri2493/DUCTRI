import { useState } from "react";
import { useParams } from "react-router-dom";
import { OrchidData } from "./ListOfOrchids";
const OrchidProduct = () => {
  const userName = useParams();
  const orchid = OrchidData.find((obj) => {
    return obj.Id === userName.Id;
  });
  return (
    <div className="min-h-[800px] bg-[#DADADA]">
      <div className="container top-10 pt-10 ">
        <div className="row bg-white p-10 min-h-[500px]">
          <div className="col-4">
            <img
              className="w-full object-fit-cover"
              src={`../${orchid.Image}`}
            />
          </div>
          <div className="col-8">
            <h1 className="fw-bold fs-3">{orchid.Name}</h1>
            <p className="mt-3 font-bold">{orchid.Infor}</p>
            <h2>
              Color: {orchid.Color}
              <br />
              Origin: {orchid.Origin}
              <br />
              Category: {orchid.Category}
              <br />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrchidProduct;
