import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useLocation } from 'wouter';

const Login: React.FC = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const [location, setLocation] = useLocation();

  // Redirect to home if already logged in
  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      setLocation('/');
    }
  }, [isAuthenticated, isLoading, setLocation]);

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-40 bg-primary/20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl md:text-4xl font-bold font-poppins logo-text">GlowScan</h1>
            </div>
          </div>
          
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-center mb-2">Your Personal AI Skin Advisor</h2>
            <p className="text-gray-600 text-center mb-8">Sign in to begin your skin journey.</p>
            
            <div className="space-y-4">
              <button 
                onClick={() => loginWithRedirect({
                  authorizationParams: {
                    connection: 'google-oauth2'
                  }
                })}
                className="w-full flex items-center justify-center py-3 px-4 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 transition shadow-sm"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/>
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/>
                  <path d="M6.5 12c0-.691.12-1.354.344-1.969l-3.25-2.501A8.935 8.935 0 002 12c0 1.347.303 2.625.844 3.772l3.198-2.451A5.44 5.44 0 016.5 12z" fill="#34A853"/>
                  <path d="M12.48 5.52c1.664 0 3.154.57 4.327 1.686l2.018-2.018C17.102 3.553 14.967 2.64 12.48 2.64 9.01 2.64 6 4.204 4.404 6.65l3.25 2.5C8.44 7.025 10.315 5.52 12.48 5.52z" fill="#EA4335"/>
                  <path d="M12.48 18.36c-2.165 0-4.04-1.505-4.826-3.53l-3.25 2.501c1.596 2.446 4.606 4.01 8.076 4.01 2.382 0 4.464-.794 6.065-2.152l-3.097-2.399c-.842.566-1.952.9-3.168.9z" fill="#FBBC05"/>
                </svg>
                Continue with Google
              </button>
              
              <button 
                onClick={() => loginWithRedirect({
                  authorizationParams: {
                    connection: 'apple'
                  }
                })}
                className="w-full flex items-center justify-center py-3 px-4 rounded-lg bg-black text-white hover:bg-gray-900 transition shadow-sm"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.498 0H7.502C6.849 0 6.213 0 5.595.015c-.452.016-.9.041-1.348.12A5.343 5.343 0 002.358.736 5.424 5.424 0 00.736 2.358 5.326 5.326 0 00.135 4.247C.056 4.695.031 5.144.015 5.596.001 6.212 0 6.848 0 7.502v8.996c0 .654 0 1.29.015 1.908.016.452.04.901.12 1.348.133.66.388 1.293.736 1.89.344.585.788 1.1 1.302 1.531.576.472 1.227.826 1.89 1.042.446.08.896.105 1.347.12.618.015 1.254.015 1.908.015h8.996c.654 0 1.29 0 1.908-.015.45-.015.9-.04 1.347-.12a5.357 5.357 0 001.89-.736 5.4 5.4 0 001.532-1.301 5.367 5.367 0 001.043-1.89c.08-.447.104-.897.12-1.348.014-.618.014-1.254.014-1.908V7.502c0-.654 0-1.29-.015-1.908-.015-.451-.04-.9-.12-1.347a5.417 5.417 0 00-.736-1.89 5.413 5.413 0 00-1.302-1.532 5.357 5.357 0 00-1.89-.736c-.445-.08-.896-.104-1.347-.12C17.785 0 17.149 0 16.498 0" fill="#FFFFFF"/>
                  <path d="M12 19.25c-.873 0-1.73-.236-2.475-.67a5.192 5.192 0 01-1.783-1.82 5.325 5.325 0 01-.642-2.51c0-.93.23-1.838.67-2.643.439-.805 1.065-1.46 1.82-1.898.757-.435 1.615-.67 2.488-.67.873 0 1.73.235 2.489.67.757.439 1.383 1.093 1.82 1.898.44.805.67 1.713.67 2.643a5.345 5.345 0 01-.642 2.51 5.222 5.222 0 01-1.783 1.82c-.747.434-1.602.67-2.475.67m4.532-12.053c-.868-.782-1.937-1.198-3.205-1.198-1.23 0-2.195.338-2.875.977-.265.249-.504.564-.719.944v-1.745h-2.907v13.543h2.907v-7.77c0-.834.212-1.536.637-2.1.424-.566 1.09-.851 1.998-.851s1.522.259 1.845.77c.323.51.485 1.128.485 1.84v8.111h2.907v-8.335c0-1.643-.358-2.9-1.073-3.782z" fill="#000000"/>
                </svg>
                Continue with Apple
              </button>
              
              <button 
                onClick={() => loginWithRedirect()}
                className="w-full flex items-center justify-center py-3 px-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition shadow-sm"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Continue with Email
              </button>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 text-center text-sm text-gray-500">
            We never post without your permission.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;