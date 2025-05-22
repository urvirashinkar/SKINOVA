import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

export function useAuth() {
  const { isAuthenticated, isLoading: isAuth0Loading, user, loginWithRedirect, logout } = useAuth0();

  // Fetch the user data from our backend
  const { data: userData, isLoading: isUserDataLoading } = useQuery({
    queryKey: ['/api/auth/user'],
    enabled: isAuthenticated, // Only run this query when authenticated
    queryFn: async () => {
      if (!isAuthenticated) return null;
      
      try {
        const response = await apiRequest('/api/auth/user');
        return response;
      } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
      }
    }
  });

  return {
    isLoading: isAuth0Loading || (isAuthenticated && isUserDataLoading),
    isAuthenticated,
    user: userData || user,
    loginWithRedirect,
    logout
  };
}