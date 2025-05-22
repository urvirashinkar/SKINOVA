import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@/components/ui/button';

const Landing: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth0();
  const [, setLocation] = useLocation();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      setLocation('/login');
    }
  }, [isAuthenticated, setLocation]);

  if (!isAuthenticated) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative bg-[#F4F4EF] dark:bg-gray-900">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#F6DBD4]/30 dark:bg-[#C5C27E]/10 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#F6DBD4]/30 dark:bg-[#C5C27E]/10 rounded-tr-full"></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 logo-text">Welcome to GlowScan</h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Your personalized AI skin journey begins here
            </p>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg mb-12">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#F6DBD4] dark:border-[#C5C27E] mb-4">
                  {user?.picture ? (
                    <img 
                      src={user.picture} 
                      alt={user.name || 'User'} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#C5C27E] flex items-center justify-center">
                      <i className="fas fa-user text-2xl text-white"></i>
                    </div>
                  )}
                </div>
                <h2 className="text-2xl font-semibold mb-1">
                  {user?.name ? `Welcome, ${user.name.split(' ')[0]}!` : 'Welcome!'}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {user?.email}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                  <div 
                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setLocation('/scan')}
                  >
                    <div className="w-12 h-12 bg-[#F6DBD4] dark:bg-[#C5C27E]/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <i className="fas fa-camera text-[#C5C27E] dark:text-white"></i>
                    </div>
                    <h3 className="text-lg font-medium text-center mb-2">Start Scan</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                      Analyze your skin with our AI technology
                    </p>
                  </div>
                  
                  <div 
                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setLocation('/report')}
                  >
                    <div className="w-12 h-12 bg-[#F6DBD4] dark:bg-[#C5C27E]/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <i className="fas fa-chart-pie text-[#C5C27E] dark:text-white"></i>
                    </div>
                    <h3 className="text-lg font-medium text-center mb-2">View Reports</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                      Check your previous skin analyses
                    </p>
                  </div>
                  
                  <div 
                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setLocation('/kit')}
                  >
                    <div className="w-12 h-12 bg-[#F6DBD4] dark:bg-[#C5C27E]/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <i className="fas fa-box-open text-[#C5C27E] dark:text-white"></i>
                    </div>
                    <h3 className="text-lg font-medium text-center mb-2">Products</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                      View personalized product recommendations
                    </p>
                  </div>
                </div>
                
                <Button 
                  className="mt-8 bg-[#C5C27E] hover:bg-[#C5C27E]/90 text-white"
                  onClick={() => setLocation('/journal')}
                >
                  <i className="fas fa-book-medical mr-2"></i> Your Skin Journal
                </Button>
              </div>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Did you know?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Consistent tracking of your skin's condition can help identify patterns and triggers that affect your skin health. 
                GlowScan uses advanced AI to identify subtle changes that might not be visible to the naked eye.
              </p>
              
              <div className="flex justify-center">
                <button 
                  onClick={() => logout({ logoutParams: { returnTo: window.location.origin + '/login' } })}
                  className="text-[#C5C27E] hover:underline flex items-center"
                >
                  <i className="fas fa-sign-out-alt mr-2"></i> Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;