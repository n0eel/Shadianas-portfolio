
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="text-xl font-bold text-pink-500 mb-4 md:mb-0">
            Portfolio
          </Link>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Sarah Johnson. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#about" className="text-gray-600 hover:text-pink-500 text-sm">
              About
            </a>
            <a href="#skills" className="text-gray-600 hover:text-pink-500 text-sm">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 hover:text-pink-500 text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
