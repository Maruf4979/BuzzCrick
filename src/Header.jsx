// import React from 'react';

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4">
      {/* <h1 className="text-4xl font-bold text-center">XYZ Organization</h1>
      <p className="text-center mt-2">Bringing Cricket to You</p> */}
       <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">XYZ Cricket</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#tournaments" className="hover:text-yellow-400">Tournaments</a></li>
            <li><a href="#register" className="hover:text-yellow-400">Register</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;