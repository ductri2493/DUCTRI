import { useState } from "react";
import { useParams } from "react-router-dom";
import { OrchidsData } from "./ListOfOrchids";

const OrchidProduct = () => {
  const userName = useParams();
  const orchid = OrchidsData.find((obj) => {
    return obj.id == userName.id;
  });
//   let cost = orchid.cost.toLocaleString();
  return (
    <div className="min-h-[800px] bg-[#DADADA]">
      <div className="container top-10 pt-10 ">
        <div className="row bg-white p-10 min-h-[500px]">
          <div className="col-4">
            <img src={`../${orchid.image}`} />
          </div>
          <div className="col-8">
            <h1 className="fw-bold fs-3">{orchid.name}</h1>
            <p className="mt-3">{orchid.description}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrchidProduct;
