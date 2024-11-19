import React from 'react';
import { NavLink } from 'react-router-dom';
// import brandLogo from '../assets/logo.png';

const Navbar = ({ onUpload, setLoading }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLoading(true);

      const formData = new FormData();
      formData.append('file', file);

      fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData,
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Upload failed');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        onUpload(data);
      })
      .catch(error => console.error('Error uploading file:', error))
      .finally(() => {
        setLoading(false);
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-navBar py-4 px-32 font-giga border-b-2 border-black">
      <div className="container mx-auto flex justify-between items-center">
        {/* <div className="text-white text-xl font-bold">
          <NavLink to="/">
            <img src={brandLogo} alt="Brand Logo" className="h-[40px] w-[125px]" />
          </NavLink>
        </div> */}
        <div className="space-x-12 font-bold flex justify-end w-full">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `relative text-navItemsColor p-2 border-y-2 hover:border-navItemsHover transition-colors duration-300 ${isActive ? 'bg-navItemsHover text-white' : ''} border-transparent hover:border-navItemsHover`
            }
          >
            Home
          </NavLink>
          <input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="hidden"
            id="fileUpload"
          />
          <label 
            htmlFor="fileUpload" 
            className="cursor-pointer text-navItemsColor p-2 border-y-2 hover:border-navItemsHover transition-colors duration-300"
          >
            Upload
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;