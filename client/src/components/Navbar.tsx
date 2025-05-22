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
          <div className="text-2xl font-semibold logo-text font-poppins cursor-pointer" onClick={() => window.location.href = '/'}>
            GlowScan
          </div>
        </div>
        <div className="hidden md:flex space-x-6 text-gray-700">
          <div className={`hover:text-skin transition-colors ${location === '/' ? 'text-skin' : ''} cursor-pointer`} onClick={() => window.location.href = '/'}>
            Home
          </div>
          <div className={`hover:text-skin transition-colors ${location === '/report' ? 'text-skin' : ''} cursor-pointer`} onClick={() => window.location.href = '/report'}>
            Results
          </div>
          <div className={`hover:text-skin transition-colors ${location === '/kit' ? 'text-skin' : ''} cursor-pointer`} onClick={() => window.location.href = '/kit'}>
            Products
          </div>
          <div className={`hover:text-skin transition-colors ${location === '/journal' ? 'text-skin' : ''} cursor-pointer`} onClick={() => window.location.href = '/journal'}>
            Journal
          </div>
        </div>
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-gray-700 hover:text-skin"
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
            <div className={`hover:text-skin transition-colors ${location === '/' ? 'text-skin' : ''} cursor-pointer`} onClick={() => window.location.href = '/'}>
              Home
            </div>
            <div className={`hover:text-skin transition-colors ${location === '/report' ? 'text-skin' : ''} cursor-pointer`} onClick={() => window.location.href = '/report'}>
              Results
            </div>
            <div className={`hover:text-skin transition-colors ${location === '/kit' ? 'text-skin' : ''} cursor-pointer`} onClick={() => window.location.href = '/kit'}>
              Products
            </div>
            <div className={`hover:text-skin transition-colors ${location === '/journal' ? 'text-skin' : ''} cursor-pointer`} onClick={() => window.location.href = '/journal'}>
              Journal
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
