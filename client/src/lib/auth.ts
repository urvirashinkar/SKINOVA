import { Auth0Provider } from '@auth0/auth0-react';
import { ReactNode } from 'react';

interface Auth0ProviderWithNavigateProps {
  children: ReactNode;
}

export const Auth0ProviderWithNavigate = ({ children }: Auth0ProviderWithNavigateProps) => {
  // Get Auth0 configuration from environment variables
  const domain = import.meta.env.VITE_AUTH0_DOMAIN || '';
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID || '';
  const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI || window.location.origin;
  
  const onRedirectCallback = (appState: any) => {
    window.history.replaceState(
      {},
      document.title,
      appState?.returnTo || window.location.pathname
    );
    
    // Navigate to landing page after login
    window.location.href = '/landing';
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};