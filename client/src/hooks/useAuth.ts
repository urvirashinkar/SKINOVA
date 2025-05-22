import { useAuth0 } from '@auth0/auth0-react';

export function useAuth() {
  const { 
    isAuthenticated, 
    isLoading, 
    user, 
    loginWithRedirect, 
    logout,
    error
  } = useAuth0();

  // Simple authentication hook that provides the Auth0 functionality
  return {
    isLoading,
    isAuthenticated,
    user,
    loginWithRedirect,
    logout,
    error
  };
}