import React from 'react';
import DropdownMenu from './dropdownmenu'; // Import your dropdown menu component


function NavbarComponent() {
  // Dummy logon time
  const logonTime = "12:00 PM"; // Replace this with actual logon time if available

  return (
     // <nav className="navbar fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white lg:py-5 lg:px-20 sm:px-5 px-3 py-4 flex items-center justify-between">
    <nav className="navbar fixed top-0 left-0 right-0 z-40 w-full bg-gray-800 text-white lg:py-5 lg:px-20 sm:px-5 px-3 py-4 flex items-center justify-between ">
    <div className="flex items-center gap-4">
        <a href="/dashboard"> {/* Anchor tag for the dashboard link */}
          <img
            src="https://scontent.fmnl30-3.fna.fbcdn.net/v/t1.15752-9/417750686_927064292096811_6364758462323471112_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHV2d6k8LTtugkQkbjCT8iVQCRMSVl5_gFAJExJWXn-Adp2c2fU71qSk8-a4CmS8SQVhReddOY_bS7QkemEw66k&_nc_ohc=B3WDho3Sw_wAX9UAjLj&_nc_ht=scontent.fmnl30-3.fna&oh=03_AdRJ0nd29uqou21JxYJjamakb3WHKzGQCuAw19gBzg_tjg&oe=65FFEB51"
            alt="Logo"
            className="h-10 w-15 rounded"
          />
        </a>
        
      <h1 className="ml-12 text-sm font-bold lg:block hidden">All About Vape - Inventory Management </h1>
    </div>

    <div className="flex items-center">
      <div className="mr-4 flex flex-col">
        <span className="mr-2 text-right">Username</span>
        <span className="mr-2 text-right">Logon time: {logonTime}</span>
      </div>
      <div>
        <DropdownMenu /> {/* Your dropdown menu component */}
      </div>

    </div>
  </nav>
  );
}

export default NavbarComponent;
