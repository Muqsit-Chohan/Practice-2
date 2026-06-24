import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-64">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>
        
        <button className="w-full bg-yellow-500 text-gray-800 py-2 px-4 rounded-md hover:bg-yellow-600 font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
