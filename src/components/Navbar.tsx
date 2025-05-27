
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-amber-800">
          Portfolio
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-700 hover:text-amber -800 transition-colors">
            About
          </a>
          <a href="#skills" className="text-gray-700 hover:text-amber-800 transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-gray-700 hover:text-amber -800 transition-colors">
            Contact
          </a>
        </div>
        <Button className="bg-amber-800 hover:bg-amber -600 text-white font-medium hover:bg-amber-600 duration-300">
          <a href="#contact">Get in touch</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
