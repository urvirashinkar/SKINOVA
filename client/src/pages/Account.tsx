import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';

const Account: React.FC = () => {
  const { isAuthenticated, isLoading, user, logout } = useAuth0();
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState('profile');

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setLocation('/login');
    }
  }, [isAuthenticated, isLoading, setLocation]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="loading-spinner w-12 h-12"></div>
        <span className="ml-3 text-gray-600 dark:text-gray-300">Loading account information...</span>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold font-poppins mb-6">Account Settings</h1>

      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
        {/* Account header with user info */}
        <div className="relative bg-primary/20 dark:bg-primary/10 p-6">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full mr-4 overflow-hidden border-2 border-white dark:border-gray-700 shadow-md">
              {user.picture ? (
                <img 
                  src={user.picture} 
                  alt={user.name || 'User'} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-primary flex items-center justify-center">
                  <i className="fas fa-user text-2xl text-white"></i>
                </div>
              )}
            </div>
            <div>
              <h2 className="text-xl font-medium">{user.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            className={`py-3 px-6 font-medium text-sm ${
              activeTab === 'profile'
                ? 'text-skin dark:text-primary border-b-2 border-skin dark:border-primary'
                : 'text-gray-600 dark:text-gray-400 hover:text-skin dark:hover:text-primary'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className={`py-3 px-6 font-medium text-sm ${
              activeTab === 'security'
                ? 'text-skin dark:text-primary border-b-2 border-skin dark:border-primary'
                : 'text-gray-600 dark:text-gray-400 hover:text-skin dark:hover:text-primary'
            }`}
            onClick={() => setActiveTab('security')}
          >
            Security
          </button>
          <button
            className={`py-3 px-6 font-medium text-sm ${
              activeTab === 'preferences'
                ? 'text-skin dark:text-primary border-b-2 border-skin dark:border-primary'
                : 'text-gray-600 dark:text-gray-400 hover:text-skin dark:hover:text-primary'
            }`}
            onClick={() => setActiveTab('preferences')}
          >
            Preferences
          </button>
        </div>

        {/* Tab content */}
        <div className="p-6">
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium mb-4">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user.name || ''}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    disabled
                  />
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Name is managed by your identity provider
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    defaultValue={user.email || ''}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    disabled
                  />
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Email is managed by your identity provider
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Connected Accounts</h3>
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-600 flex items-center justify-center mr-3">
                        <i className={`fab ${user.sub?.includes('google') ? 'fa-google' : user.sub?.includes('apple') ? 'fa-apple' : 'fa-user'} text-gray-600 dark:text-gray-300`}></i>
                      </div>
                      <div>
                        <div className="font-medium">{user.sub?.includes('google') ? 'Google' : user.sub?.includes('apple') ? 'Apple' : 'Email'}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Connected on {new Date().toLocaleDateString()}</div>
                      </div>
                    </div>
                    <div className="text-green-500 dark:text-green-400 text-sm font-medium">Connected</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium mb-4">Security Settings</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Password</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Change your password or manage your password settings
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-primary/10 dark:bg-primary/20 text-skin dark:text-primary hover:bg-primary/20 dark:hover:bg-primary/30 rounded-lg text-sm font-medium transition-colors">
                      Update
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Two-factor Authentication</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-primary/10 dark:bg-primary/20 text-skin dark:text-primary hover:bg-primary/20 dark:hover:bg-primary/30 rounded-lg text-sm font-medium transition-colors">
                      Enable
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Sign Out Everywhere</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Sign out from all devices where you're currently logged in
                      </p>
                    </div>
                    <button 
                      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                      className="px-4 py-2 bg-destructive/10 text-destructive hover:bg-destructive/20 rounded-lg text-sm font-medium transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium mb-4">Appearance & Preferences</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Dark Mode</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Toggle between light and dark mode
                      </p>
                    </div>
                    <button 
                      onClick={() => (window as any).toggleTheme()}
                      className="px-4 py-2 bg-primary/10 dark:bg-primary/20 text-skin dark:text-primary hover:bg-primary/20 dark:hover:bg-primary/30 rounded-lg text-sm font-medium transition-colors"
                    >
                      {document.documentElement.classList.contains('dark') ? 'Light Mode' : 'Dark Mode'}
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Receive updates, reports, and recommendations via email
                      </p>
                    </div>
                    <div className="relative inline-block w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-600 cursor-pointer">
                      <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Data Sharing</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Allow anonymized data to be used for improving our service
                      </p>
                    </div>
                    <div className="relative inline-block w-12 h-6 rounded-full bg-primary cursor-pointer">
                      <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white transition-transform"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;