import { Link } from 'wouter';
import FaceScanButton from '@/components/FaceScanButton';
import skinAnalysisImage from "../assets/skin-analysis-image.png";

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 py-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-semibold font-poppins mb-4 text-gray-900">
            Your AI <span className="logo-text">Skin Consultant</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Discover your skin's unique needs with advanced AI analysis. Get personalized skincare recommendations tailored just for you.
          </p>
          <FaceScanButton />
        </div>
        <div className="md:w-1/2">
          <img 
            src={skinAnalysisImage} 
            alt="Beautiful skin analysis portrait" 
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="mt-16 mb-8">
        <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-primary/20">
            <div className="text-primary text-3xl mb-4">
              <i className="fas fa-camera"></i>
            </div>
            <h3 className="font-poppins font-medium text-xl mb-2">Scan Your Face</h3>
            <p className="text-gray-600">Take a quick photo for our AI to analyze your unique skin characteristics.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-primary/20">
            <div className="text-primary text-3xl mb-4">
              <i className="fas fa-chart-pie"></i>
            </div>
            <h3 className="font-poppins font-medium text-xl mb-2">Get Your Analysis</h3>
            <p className="text-gray-600">Receive detailed insights about your skin type, concerns, and conditions.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-primary/20">
            <div className="text-primary text-3xl mb-4">
              <i className="fas fa-magic"></i>
            </div>
            <h3 className="font-poppins font-medium text-xl mb-2">Custom Recommendations</h3>
            <p className="text-gray-600">We'll suggest the perfect products and routines for your skin's needs.</p>
          </div>
        </div>
      </div>

      <div className="bg-primary/10 p-8 rounded-xl mt-16">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold font-poppins text-gray-900 mb-3">Ready to discover your skin's true needs?</h2>
            <p className="text-gray-600 mb-6">Get started with your first skin analysis - it only takes a minute!</p>
            <FaceScanButton 
              variant="success" 
              label="Start Your Skin Journey"
            />
          </div>
          <div className="md:w-1/3">
            <div className="flex items-center justify-center">
              <div className="text-olive text-6xl">
                <i className="fas fa-spa"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
