import React from 'react';
import { FaSearch, FaCog, FaUser } from 'react-icons/fa';

const AdminHeader: React.FC = () => {
  return (
    <header className="bg-white text-fuchsia-800 py-4 px-6 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-fuchsia-200 text-fuchsia-800 px-3 py-1 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-fuchsia-500" />
        </div>
        <button className="focus:outline-none">
          <FaCog className="text-xl text-fuchsia-800 hover:text-fuchsia-800" />
        </button>
        <button className="focus:outline-none">
          <FaUser className="text-xl text-fuchsia-800 hover:text-fuchsia-800" />
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
