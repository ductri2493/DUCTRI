import { useParams } from "react-router-dom";
import Footer from "../Footer";
import { useEffect, useState } from "react";

const OrchidProduct = () => {
  const [APIData, setAPIData] = useState([]);
  const { id } = useParams(); // id will be a string

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

  // Convert id to string for comparison
  const orchid = APIData.find((obj) => obj.id === id);

  console.log("ID from useParams:", id);
  console.log("Fetched APIData:", APIData);
  console.log("Found Orchid:", orchid);

  // Handle case where orchid is not found
  if (!orchid) {
    return <div>No orchid found for ID: {id}</div>;
  }

  return (
    <div className="bg-[#DADADA]">
      <div className="top-10">
        <div className="row bg-white p-10 min-h-[400px]">
          <div className="col-4">
            <img className="w-full object-fit" src={orchid.image} alt={orchid.name} />
          </div>
          <div className="col-8">
            <h1 className="fw-bold fs-3">{orchid.name}</h1>
            <p className="mt-3 font-bold">{orchid.info}</p>
            <h2>
              Color: {orchid.color}
              <br />
              Origin: {orchid.origin}
              <br />
              Category: {orchid.category}
              <br />
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrchidProduct;
