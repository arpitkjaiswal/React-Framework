import React from "react";

function Card(props) {
    console.log("props in card.jsx", props);
  return (
    <div className="w-80 rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300">
      <img
        src="https://images.pexels.com/photos/9318572/pexels-photo-9318572.jpeg"
        alt="Tailwind"
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Tailwind CSS
        </h2>

        <p className="text-gray-600 text-sm">
          Build modern, responsive user interfaces quickly using utility-first
          CSS classes with Tailwind.
        </p>

        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card;