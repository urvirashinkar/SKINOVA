import { Link } from 'wouter';
import SkinReportCard from '@/components/SkinReportCard';
import { skinAnalysisData, keyInsights } from '@/lib/data';

const Report: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold font-poppins mb-3 text-gray-900">Your Skin Analysis Results</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Based on our AI analysis, here's what we've discovered about your skin's unique characteristics and needs.</p>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-primary/30 mb-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img 
              src="https://pixabay.com/get/g8b372c692c282c2636f36931bd2913182a92d5a7a0b72cc226f80bedcd6856db1b6f1ef6192fb45c4c3cd33e0654ef602e574662ddbf189b8486988280557aa9_1280.jpg" 
              alt="Your skin scan" 
              className="rounded-lg shadow w-full h-auto object-cover"
            />
            <div className="mt-4 bg-primary/10 p-4 rounded-lg">
              <h3 className="font-medium text-skin text-lg mb-2">Scan Summary</h3>
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-600">Scan Date:</span>
                <span className="font-medium text-gray-800">{skinAnalysisData.scanDate}</span>
              </div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-600">Scan Quality:</span>
                <span className="font-medium text-gray-800">{skinAnalysisData.scanQuality}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Confidence:</span>
                <span className="font-medium text-success">{skinAnalysisData.confidence}</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <SkinReportCard analysis={skinAnalysisData} />
            
            <div className="mt-8 flex justify-end">
              <Link href="/kit">
                <a className="bg-success hover:bg-success/90 text-white py-2 px-6 rounded-lg transition shadow-sm hover:shadow flex items-center">
                  <span>View Recommended Products</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-primary/5 p-6 rounded-xl">
        <h3 className="font-poppins font-medium text-xl mb-4 text-gray-900">Key Insights & Recommendations</h3>
        <ul className="space-y-3 text-gray-700">
          {keyInsights.map((insight, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-check-circle text-success mt-1 mr-3"></i>
              <span>{insight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Report;
