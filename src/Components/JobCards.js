import React from "react";

const JobCards = ({ title, company, location, description }) => {
  return (
    <div className="relative flex-col pl-5 ml-2 mb-2 border-2 border-orange-400 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg bg-white">
      

      <h2 className="text-xl font-semibold text-gray-800 hover:text-orange-500 transition-colors duration-300 mt-2">
        {title}
      </h2>

      <p className="text-sm text-gray-500 mt-2">{location}</p>
      <div className="flex items-center space-x-3"> 
        <img
          src="/google.jpg" 
          alt="Google"
          className="h-6 w-6 object-cover rounded-lg" 
        />
        <p className="text-sm text-gray-500">{company}</p> 
      </div>

      <div className="mt-4 h-32">
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default JobCards;
