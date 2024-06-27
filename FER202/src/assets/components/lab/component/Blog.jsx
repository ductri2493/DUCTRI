import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const blogData = [
  {
    id: 1,
    title: "The Beauty of Orchids",
    description: "Explore the diverse world of orchids and discover their unique beauty.",
    image: "https://www.floraqueen.com/blog/wp-content/uploads/2020/02/shutterstock_117979837.jpg",
    link: "/blog/the-beauty-of-orchids"
  },
  {
    id: 2,
    title: "Caring for Your Orchids",
    description: "Learn essential tips and tricks for taking care of your orchids.",
    image: "https://www.thespruce.com/thmb/chszT95DB4AHAHb2b4iJiKImqNU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grow-orchids-indoors-1902818_final-5c2fd10a46e0fb00017a5ace.png",
    link: "/blog/caring-for-your-orchids"
  },
  {
    id: 3,
    title: "Orchid Varieties You Should Know",
    description: "Get to know the most popular and unique orchid varieties.",
    image: "https://www.thespruce.com/thmb/dQPJ_Fdmfq9T1x10cbzui-k8o9I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/orchid-identification-1315976_final-481fe66a85724d94b1f2a181b86bb70d.jpg",
    link: "/blog/orchid-varieties-you-should-know"
  }
];

const Blog = () => {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      <div className="container mx-auto pt-10 pb-20">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <Link to={post.link} className="text-blue-500 hover:text-blue-700">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
