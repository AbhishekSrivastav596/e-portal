import React from "react";
import { Search } from "react-feather";
import { MapPin } from "react-feather";

const SearchBar = ({ filters = { keyword: "", location: "" }, setFilters, handleSearch }) => {
  return (

    <div className="flex h-screen items-center justify-center bg-gray-100  h-100 w-100">
      <div className="flex h-auto w-full max-w-4xl items-center justify-center px-6 py-4 shadow-md rounded-lg border border-gray-300 bg-white">
        <span className="mr-4 flex items-center w-1/2">
          <Search color="orange" className="mr-3 text-orange-500" />
          <input
            type="text"
            placeholder="Search by: Job title, Position, Keywords..."
            value={filters.keyword}
            onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
            className="w-full p-3 border border-gray-300  rounded-lg focus:ring-2 focus:ring-orange-500"
          />
        </span>

        <span className="flex items-center w-1/2 mr-4">
          <MapPin color="orange" className="mr-3 text-orange-500" />
          <input
            type="text"
            placeholder="City, state or country"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
        </span>

        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-orange-500 "
        >
          Find Job
        </button>

      </div>
    </div>
  );
};

export default SearchBar;