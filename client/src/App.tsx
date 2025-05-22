import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import Report from "@/pages/Report";
import Kit from "@/pages/Kit";
import Journal from "@/pages/Journal";
import NotFound from "@/pages/not-found";

function Footer() {
  return (
    <footer className="bg-primary/10 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-xl font-semibold logo-text font-poppins">GlowScan</span>
            <p className="text-gray-600 mt-2">Your AI Skin Consultant</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <a href="#" className="hover:text-olive transition-colors">About</a>
            <a href="#" className="hover:text-olive transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-olive transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-olive transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; 2023 GlowScan. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-olive transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-olive transition-colors">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-olive transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-olive transition-colors">
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/report" component={Report} />
          <Route path="/kit" component={Kit} />
          <Route path="/journal" component={Journal} />
          <Route component={NotFound} />
        </Switch>
      </main>
      
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
