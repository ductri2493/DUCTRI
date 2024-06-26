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
    <div className=" bg-white">
      <div className="flex flex-col">
        <div className="flex-grow">
          <div className="flex flex-col items-center justify-center min-h-[70vh]">
            <div className="bg-white p-10  w-full max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1">
                  <div className="h-64 overflow-hidden">
                    <img
                      className="w-full h-full object-cover rounded-xl"
                      src={orchid.image}
                      alt={orchid.name}
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <h1 className="font-bold text-3xl">{orchid.name}</h1>
                  <p className="mt-3 font-bold">{orchid.info}</p>
                  <div className="flex justify-between ">
                    <p className="mt-2 ">
                      Color: {orchid.color}
                      <br />
                      Origin: {orchid.origin}
                      <br />
                      Category: {orchid.category}
                      <br />
                    </p>
                    <button className="bg-[red] p-1">kakakak</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default OrchidProduct;
