import React from "react";

const JobCards = ({ title, company, location, description }) => {
  return (
    <div className="border-2 border-orange-400 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-white">
      <div className="p-5">
     
        <h2 className="text-xl font-semibold text-gray-800 hover:text-orange-500 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-sm text-gray-500 mt-2">{company}</p>
        <p className="text-sm text-gray-500 mt-2">{location}</p>
        <div className="mt-4 h-32">
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default JobCards;
