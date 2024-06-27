import React from "react";
import Footer from "./Footer";

const About = () => {
    return (
        <div className="bg-[#F3F4F6] min-h-screen">
            <div className="container mx-auto pt-10 pb-20">

                <div className="bg-white p-8 rounded-lg shadow-md">
                    <p className="mb-6 text-lg leading-relaxed text-gray-700">
                        Orchids are a diverse and widespread family of flowering plants, with blooms that are often colorful and fragrant.
                        They are known for their complex and beautiful flowers and are among the most varied of flowering plant families.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Types of Orchids</h2>
                    <p className="mb-6 text-lg text-gray-700">
                        There are over 25,000 species of orchids, making them one of the largest families of plants. Some popular types include:
                    </p>
                    <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
                        <li><strong>Phalaenopsis:</strong> Also known as Moth Orchids, they are popular due to their ease of growing.</li>
                        <li><strong>Cattleya:</strong> Known as the "Queen of Orchids," they are popular in corsages.</li>
                        <li><strong>Dendrobium:</strong> A diverse genus with over 1,800 species, known for their long-lasting flowers.</li>
                        <li><strong>Vanda:</strong> Known for their vibrant colors and large, flat flowers.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Care for Orchids</h2>
                    <p className="mb-6 text-lg text-gray-700">
                        Orchids require specific care to thrive. Here are some tips:
                    </p>
                    <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
                        <li><strong>Light:</strong> Orchids prefer bright, indirect light.</li>
                        <li><strong>Water:</strong> Water thoroughly but infrequently. Allow the potting medium to dry out between waterings.</li>
                        <li><strong>Humidity:</strong> Orchids prefer high humidity levels. A humidity tray or misting can help.</li>
                        <li><strong>Temperature:</strong> Most orchids prefer temperatures between 60-80°F (15-27°C).</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
