import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAuth0 } from '@auth0/auth0-react';
import { useToast } from '@/hooks/use-toast';

const Login: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, error } = useAuth0();
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  // Redirect to landing page if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      setLocation('/landing');
    }
  }, [isAuthenticated, setLocation]);

  // Handle authentication errors
  useEffect(() => {
    if (error) {
      toast({
        title: "Authentication Error",
        description: error.message,
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const handleGoogleLogin = () => {
    loginWithRedirect({
      authorizationParams: {
        connection: 'google-oauth2'
      }
    });
  };

  const handleAppleLogin = () => {
    loginWithRedirect({
      authorizationParams: {
        connection: 'apple'
      }
    });
  };

  const handleEmailLogin = () => {
    loginWithRedirect({
      authorizationParams: {
        connection: 'Username-Password-Authentication'
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F4F4EF] dark:bg-gray-900">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#F6DBD4] dark:bg-[#C5C27E]/20 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#F6DBD4] dark:bg-[#C5C27E]/20 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-4xl w-full mx-auto z-10">
        <div className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left side with brand messaging */}
            <div className="bg-[#F6DBD4]/30 dark:bg-[#C5C27E]/10 p-8 md:p-12 md:w-1/2 flex items-center justify-center">
              <div className="max-w-sm">
                <div className="mb-8 text-center md:text-left">
                  <h1 className="text-3xl font-bold logo-text">GlowScan</h1>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">Your Personal AI Skin Advisor</p>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
                    Sign in to begin your skin journey.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-[#F6DBD4] dark:bg-[#C5C27E]/30 rounded-full p-2 mr-3">
                        <i className="fas fa-check text-[#C5C27E] dark:text-[#F6DBD4]"></i>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">AI-powered skin analysis</p>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-[#F6DBD4] dark:bg-[#C5C27E]/30 rounded-full p-2 mr-3">
                        <i className="fas fa-check text-[#C5C27E] dark:text-[#F6DBD4]"></i>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">Personalized product recommendations</p>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-[#F6DBD4] dark:bg-[#C5C27E]/30 rounded-full p-2 mr-3">
                        <i className="fas fa-check text-[#C5C27E] dark:text-[#F6DBD4]"></i>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">Track your skincare journey</p>
                    </div>
                  </div>
                  
                  <div className="py-6 md:hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNraW5jYXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" 
                      alt="Skincare" 
                      className="h-40 w-full object-cover rounded-xl shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side with login options */}
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <div className="text-center md:text-left mb-8">
                <h3 className="text-2xl font-bold mb-1 text-gray-800 dark:text-white">Welcome Back</h3>
                <p className="text-gray-600 dark:text-gray-400">Sign in to access your skin profile</p>
              </div>
              
              <div className="space-y-5">
                <button 
                  onClick={handleGoogleLogin}
                  className="w-full py-3.5 px-4 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-xl flex items-center justify-center transition-colors shadow-sm"
                >
                  <i className="fab fa-google mr-3 text-[#4285F4]"></i>
                  <span className="font-medium">Continue with Google</span>
                </button>
                
                <button 
                  onClick={handleAppleLogin}
                  className="w-full py-3.5 px-4 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-xl flex items-center justify-center transition-colors shadow-sm"
                >
                  <i className="fab fa-apple mr-3"></i>
                  <span className="font-medium">Continue with Apple</span>
                </button>
                
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-3 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                      Or sign in with email
                    </span>
                  </div>
                </div>
                
                <button 
                  onClick={handleEmailLogin}
                  className="w-full py-3.5 px-4 bg-[#C5C27E] hover:bg-[#C5C27E]/90 text-white rounded-xl flex items-center justify-center transition-colors shadow-md"
                >
                  <i className="fas fa-envelope mr-3"></i>
                  <span className="font-medium">Continue with Email</span>
                </button>
              </div>
              
              <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-8">
                <p>
                  We never post without your permission.
                </p>
                <p className="mt-2">
                  By signing in, you agree to our <a href="#" className="text-[#C5C27E] hover:underline">Terms</a> and <a href="#" className="text-[#C5C27E] hover:underline">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;