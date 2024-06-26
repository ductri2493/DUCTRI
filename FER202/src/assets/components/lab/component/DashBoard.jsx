import React, { useState, useEffect } from "react";
import Starrate from "../../../images/starrate.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [APIData, setAPIData] = useState([]);
  const [editOrchid, setEditOrchid] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const baseURL = `https://66643b32932baf9032aa6cd8.mockapi.io/ListOfOrchids`;

  useEffect(() => {
    fetchOrchids();
  }, []);

  const fetchOrchids = () => {
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
  };

  const handleDelete = (id) => {
    fetch(`${baseURL}/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        fetchOrchids(); // Refresh the list after deletion
      })
      .catch((error) => console.log(error.message));
  };

  const handleEdit = (orchid) => {
    setEditOrchid(orchid);
    setIsModalOpen(true); // Open modal on edit
  };

  const handleUpdate = () => {
    fetch(`${baseURL}/${editOrchid.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editOrchid),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => {
        setEditOrchid(null);
        setIsModalOpen(false); // Close modal after update
        fetchOrchids(); // Refresh the list after update
      })
      .catch((error) => console.log(error.message));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditOrchid((prevOrchid) => ({
      ...prevOrchid,
      [name]: name === "rating" ? parseInt(value, 10) : value,
    }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditOrchid(null);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto pt-10">
        <button className="bg-blue-500 text-white px-4 py-2 mb-10 rounded">
          <Link to="/Add" className="text-white no-underline">
            Add Product
          </Link>
        </button>
        {APIData.map((orchid) => (
          <div className="flex justify-between items-center mb-4 w-full bg-gray-100 p-4 rounded shadow" key={orchid.id}>
            <div className="flex items-center">
              <img
                className="w-20 h-20 object-cover rounded"
                src={orchid.image}
                alt={orchid.name}
              />
              <div className="ml-4">
                <div className="font-semibold text-lg">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-xl">Name</span> {orchid.name}
                </div>
                <div className="text-gray-700">
                  <span className="inline-block bg-gray-200 rounded-full mt-3 px-2 text-sm font-semibold text-gray-700 "> Category </span>{orchid.category}
                </div>
              </div>
            </div>
            <div>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => handleEdit(orchid)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleDelete(orchid.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {/* Edit Form/Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div
              className="absolute inset-0"
              onClick={closeModal}
            ></div>
            <div className="relative max-w-lg w-full bg-white p-8 rounded shadow-lg z-10">
              <span
                className="absolute top-2 right-4 text-2xl cursor-pointer text-gray-500"
                onClick={closeModal}
              >
                &times;
              </span>
              <h2 className="text-2xl mb-4">Edit Orchid</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="block">Name</label>
                  <input
                    type="text"
                    className="form-control w-full p-2 border border-gray-300 rounded"
                    id="name"
                    name="name"
                    value={editOrchid.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="block">Image URL</label>
                  <input
                    type="text"
                    className="form-control w-full p-2 border border-gray-300 rounded"
                    id="image"
                    name="image"
                    value={editOrchid.image}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="rating" className="block">Rating</label>
                  <input
                    type="number"
                    className="form-control w-full p-2 border border-gray-300 rounded"
                    id="rating"
                    name="rating"
                    value={editOrchid.rating}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="color" className="block">Color</label>
                  <input
                    type="text"
                    className="form-control w-full p-2 border border-gray-300 rounded"
                    id="color"
                    name="color"
                    value={editOrchid.color}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="origin" className="block">Origin</label>
                  <input
                    type="text"
                    className="form-control w-full p-2 border border-gray-300 rounded"
                    id="origin"
                    name="origin"
                    value={editOrchid.origin}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="block">Category</label>
                  <input
                    type="text"
                    className="form-control w-full p-2 border border-gray-300 rounded"
                    id="category"
                    name="category"
                    value={editOrchid.category}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3 flex items-center">
                  <input
                    type="checkbox"
                    className="form-check-input mr-2"
                    id="isSpecial"
                    name="isSpecial"
                    checked={editOrchid.isSpecial}
                    onChange={(e) =>
                      setEditOrchid((prevOrchid) => ({
                        ...prevOrchid,
                        isSpecial: e.target.checked,
                      }))
                    }
                  />
                  <label className="form-check-label" htmlFor="isSpecial">Is Special</label>
                </div>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
