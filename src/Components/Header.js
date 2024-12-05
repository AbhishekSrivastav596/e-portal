import React from 'react';
import { Briefcase } from 'react-feather';

const Header = () => {
  return (
    <header className="bg-white border-b-2 border-gray-200 p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Briefcase color="orange" className="mr-2" />
          <div className="text-2xl font-bold text-black">Explorin Solutions</div>
        </div>
        <div className="flex items-center gap-5">
          <button className="bg-white text-gray-500 border-none rounded-md py-2 px-4 text-sm font-medium cursor-pointer hover:bg-orange-400 transition-colors">
            My Saved Jobs only
          </button>
          <span className="text-xl text-gray-400 cursor-pointer hover:text-orange-400 transition-colors">
            🔔
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
