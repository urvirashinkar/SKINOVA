import { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-2xl font-semibold logo-text font-poppins">GlowScan</a>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/">
            <a className={`hover:text-olive transition-colors ${location === '/' ? 'text-olive' : ''}`}>Home</a>
          </Link>
          <Link href="/report">
            <a className={`hover:text-olive transition-colors ${location === '/report' ? 'text-olive' : ''}`}>Results</a>
          </Link>
          <Link href="/kit">
            <a className={`hover:text-olive transition-colors ${location === '/kit' ? 'text-olive' : ''}`}>Products</a>
          </Link>
          <Link href="/journal">
            <a className={`hover:text-olive transition-colors ${location === '/journal' ? 'text-olive' : ''}`}>Journal</a>
          </Link>
        </div>
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-olive"
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-3 shadow-md">
          <div className="flex flex-col space-y-3">
            <Link href="/">
              <a className={`hover:text-olive transition-colors ${location === '/' ? 'text-olive' : ''}`}>Home</a>
            </Link>
            <Link href="/report">
              <a className={`hover:text-olive transition-colors ${location === '/report' ? 'text-olive' : ''}`}>Results</a>
            </Link>
            <Link href="/kit">
              <a className={`hover:text-olive transition-colors ${location === '/kit' ? 'text-olive' : ''}`}>Products</a>
            </Link>
            <Link href="/journal">
              <a className={`hover:text-olive transition-colors ${location === '/journal' ? 'text-olive' : ''}`}>Journal</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
