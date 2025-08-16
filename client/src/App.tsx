import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Auth0Provider } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Report from "@/pages/Report";
import Kit from "@/pages/Kit";
import Journal from "@/pages/Journal";
import Login from "@/pages/Login";
import Landing from "@/pages/Landing";
import Account from "@/pages/Account";
import NotFound from "@/pages/not-found";

// Theme provider component
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  useEffect(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    // Apply the theme class to the document element
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Expose theme toggle function to the window for global access
  (window as any).toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  return children;
}

function Footer() {
  return (
    <footer className="bg-primary/10 dark:bg-gray-800 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-semibold logo-text font-poppins">GlowScan</span>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Your AI Skin Consultant</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-300">
            <a href="#" className="hover:text-skin dark:hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-skin dark:hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-skin dark:hover:text-primary transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-skin dark:hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">&copy; 2023 GlowScan. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-skin dark:hover:text-primary transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-skin dark:hover:text-primary transition-colors">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-skin dark:hover:text-primary transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-skin dark:hover:text-primary transition-colors">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Router() {
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-gray-900 text-foreground dark:text-gray-100">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/landing" component={Landing} />
          <Route path="/report" component={Report} />
          <Route path="/kit" component={Kit} />
          <Route path="/journal" component={Journal} />
          <Route path="/account" component={Account} />
          <Route component={NotFound} />
        </Switch>
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN || ''}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID || ''}
      authorizationParams={{
        redirect_uri: 'http://localhost:5001/api/callback'
      }}
      onRedirectCallback={(appState) => {
        window.location.href = appState?.returnTo || '/landing';
      }}
    >
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </Auth0Provider>
  );
}

export default App;
