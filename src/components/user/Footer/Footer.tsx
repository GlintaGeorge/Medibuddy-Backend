import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-fuchsia-950 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-2xl font-bold mb-4">MediBuddy</p>
        <p className="text-lg text-center mb-4">Leading the Way in Medical Excellence, Trusted Care.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Doctors</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">About us</a>
          <a href="#" className="hover:text-gray-300">Appoinment</a>
        </div>
        <p className="mt-4">© 2024 MediBuddy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
