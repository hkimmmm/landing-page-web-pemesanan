import { useState } from 'react';
import { HomeIcon, BookOpenIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-600 p-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold ml-2 md:ml-10">
          My<span className="text-green-500">App</span>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Navigation Links (hidden on mobile) */}
        <nav className="hidden md:flex space-x-8 lg:space-x-12 text-lg items-center">
          <a href="#" className="flex items-center hover:text-gray-400">
            <HomeIcon className="h-6 w-6 mr-2" />
            Home
          </a>
          <a href="#" className="flex items-center hover:text-gray-400">
            <img
              src="https://cdn2.iconfinder.com/data/icons/sports-stickman/48/volley_ball-256.png"
              alt="Play Icon"
              className="h-6 w-6 mr-2"
            />
            Play
          </a>
          <a href="#" className="flex items-center hover:text-gray-400">
            <CalendarIcon className="h-6 w-6 mr-2" />
            Book
          </a>
          <a href="#" className="flex items-center hover:text-gray-400">
            <BookOpenIcon className="h-6 w-6 mr-2" />
            Learn
          </a>
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm md:text-base lg:text-lg">
            Login / Signup
          </button>
        </div>
      </div>

      {/* Mobile Menu (only visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 space-y-4 text-lg">
          <a href="#" className="flex items-center hover:text-gray-400">
            <HomeIcon className="h-6 w-6 mr-2" />
            Home
          </a>
          <a href="#" className="flex items-center hover:text-gray-400">
            <img
              src="https://cdn2.iconfinder.com/data/icons/sports-stickman/48/volley_ball-256.png"
              alt="Play Icon"
              className="h-6 w-6 mr-2"
            />
            Play
          </a>
          <a href="#" className="flex items-center hover:text-gray-400">
            <CalendarIcon className="h-6 w-6 mr-2" />
            Book
          </a>
          <a href="#" className="flex items-center hover:text-gray-400">
            <BookOpenIcon className="h-6 w-6 mr-2" />
            Learn
          </a>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm w-full">
            Login / Signup
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
