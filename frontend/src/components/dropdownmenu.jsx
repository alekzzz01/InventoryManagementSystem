import React, { useState } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <img
        onClick={toggleDropdown}
        src="https://icon2.cleanpng.com/20180523/wxj/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc2ee812.2252011515270566041921.jpg"
        alt="User Avatar"
        className="h-8 w-8 rounded-full cursor-pointer"
      />
      {isOpen && (
        <div className="absolute right-0 mt-6 w-48 bg-white rounded-lg shadow-lg z-10">
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Profile</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
