import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [location] = useLocation();
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  
  // Update dark mode state based on document class
  useEffect(() => {
    const updateDarkModeState = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    updateDarkModeState();
    
    // Setup mutation observer to watch for class changes
    const observer = new MutationObserver(updateDarkModeState);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsAccountMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isAccountMenuOpen) setIsAccountMenuOpen(false);
  };

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    // Using the globally exposed function from ThemeProvider
    (window as any).toggleTheme();
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm dark:shadow-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-semibold logo-text font-poppins cursor-pointer" onClick={() => window.location.href = '/'}>
            GlowScan
          </div>
        </div>
        <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300">
          <div className={`hover:text-skin dark:hover:text-primary transition-colors ${location === '/' ? 'text-skin dark:text-primary' : ''} cursor-pointer`} onClick={() => window.location.href = '/'}>
            Home
          </div>
          <div className={`hover:text-skin dark:hover:text-primary transition-colors ${location === '/report' ? 'text-skin dark:text-primary' : ''} cursor-pointer`} onClick={() => window.location.href = '/report'}>
            Results
          </div>
          <div className={`hover:text-skin dark:hover:text-primary transition-colors ${location === '/kit' ? 'text-skin dark:text-primary' : ''} cursor-pointer`} onClick={() => window.location.href = '/kit'}>
            Products
          </div>
          <div className={`hover:text-skin dark:hover:text-primary transition-colors ${location === '/journal' ? 'text-skin dark:text-primary' : ''} cursor-pointer`} onClick={() => window.location.href = '/journal'}>
            Journal
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Theme toggle button */}
          <button 
            onClick={toggleTheme}
            className="text-gray-700 dark:text-gray-300 hover:text-skin dark:hover:text-primary transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <i className="fas fa-sun text-lg"></i>
            ) : (
              <i className="fas fa-moon text-lg"></i>
            )}
          </button>
          
          {/* Account menu */}
          <div className="relative">
            {isAuthenticated ? (
              <div>
                <button 
                  onClick={toggleAccountMenu}
                  className="flex items-center focus:outline-none"
                  aria-label="Account menu"
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                    {user?.picture ? (
                      <img src={user.picture} alt={user.name || 'User'} className="w-full h-full object-cover" />
                    ) : (
                      <i className="fas fa-user text-white"></i>
                    )}
                  </div>
                </button>
                
                {isAccountMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 py-2 bg-white dark:bg-gray-800 rounded-md shadow-lg z-20">
                    <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                      <div className="font-medium">{user?.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{user?.email}</div>
                    </div>
                    <div className="py-1">
                      <div 
                        className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                        onClick={() => window.location.href = '/account'}
                      >
                        Account Settings
                      </div>
                      <div 
                        className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                      >
                        Sign out
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button 
                onClick={() => loginWithRedirect()}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition text-sm"
              >
                Sign in
              </button>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-skin dark:hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 py-3 shadow-md dark:shadow-gray-900">
          <div className="flex flex-col space-y-3">
            <div className={`hover:text-skin dark:hover:text-primary transition-colors ${location === '/' ? 'text-skin dark:text-primary' : ''} cursor-pointer`} onClick={() => window.location.href = '/'}>
              Home
            </div>
            <div className={`hover:text-skin dark:hover:text-primary transition-colors ${location === '/report' ? 'text-skin dark:text-primary' : ''} cursor-pointer`} onClick={() => window.location.href = '/report'}>
              Results
            </div>
            <div className={`hover:text-skin dark:hover:text-primary transition-colors ${location === '/kit' ? 'text-skin dark:text-primary' : ''} cursor-pointer`} onClick={() => window.location.href = '/kit'}>
              Products
            </div>
            <div className={`hover:text-skin dark:hover:text-primary transition-colors ${location === '/journal' ? 'text-skin dark:text-primary' : ''} cursor-pointer`} onClick={() => window.location.href = '/journal'}>
              Journal
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
