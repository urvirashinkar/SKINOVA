import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAuth0 } from '@auth0/auth0-react';

const Login: React.FC = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const [, setLocation] = useLocation();

  // Redirect to home if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      setLocation('/');
    }
  }, [isAuthenticated, setLocation]);

  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center py-12">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-full">
        <div className="flex flex-col md:flex-row">
          {/* Left side with image */}
          <div className="bg-primary/20 dark:bg-primary/10 p-8 md:w-1/2 flex items-center justify-center">
            <div className="max-w-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Discover Your Skin's Story
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get a personalized skin analysis and tailored recommendations for your unique skin type.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-primary/30 dark:bg-primary/20 rounded-full p-2 mr-3">
                    <i className="fas fa-check text-primary"></i>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">AI-powered skin analysis</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/30 dark:bg-primary/20 rounded-full p-2 mr-3">
                    <i className="fas fa-check text-primary"></i>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Personalized product recommendations</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary/30 dark:bg-primary/20 rounded-full p-2 mr-3">
                    <i className="fas fa-check text-primary"></i>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">Track your skincare journey</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side with login options */}
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-1 text-gray-800 dark:text-white">Welcome to GlowScan</h3>
              <p className="text-gray-600 dark:text-gray-400">Your AI skin consultant</p>
            </div>
            
            <div className="space-y-4">
              <button 
                onClick={() => loginWithRedirect()}
                className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-gray-800 dark:text-white rounded-lg flex items-center justify-center transition-colors"
              >
                <span className="mr-2">Continue with Auth0</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              
              <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="flex items-center justify-center py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <i className="fab fa-google mr-2 text-red-500"></i>
                  <span className="text-gray-700 dark:text-gray-300">Google</span>
                </button>
                <button className="flex items-center justify-center py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <i className="fab fa-apple mr-2"></i>
                  <span className="text-gray-700 dark:text-gray-300">Apple</span>
                </button>
              </div>
            </div>
            
            <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-8">
              By continuing, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;