import { Link } from 'wouter';
import ProductCard from '@/components/ProductCard';
import { productsData } from '@/lib/data';

const Kit: React.FC = () => {
  const calculatedBundlePrice = () => {
    const originalTotal = productsData.reduce((sum, product) => {
      const price = parseFloat(product.price.replace('$', ''));
      return sum + price;
    }, 0);
    
    // Apply 15% discount
    const discountedTotal = (originalTotal * 0.85).toFixed(2);
    return `$${discountedTotal}`;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold font-poppins mb-3 text-gray-900">Your Personalized Skincare Kit</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Based on your skin analysis, we've curated these products specifically for your needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-12 bg-primary/10 p-6 rounded-xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="font-poppins font-medium text-xl text-gray-900 mb-2">Complete Routine Bundle</h3>
            <p className="text-gray-600">Get all recommended products at a 15% discount</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium text-xl text-gray-900">{calculatedBundlePrice()}</span>
            <button className="bg-success hover:bg-success/90 text-white py-3 px-6 rounded-lg transition shadow-sm hover:shadow">
              <i className="fas fa-shopping-cart mr-2"></i> Buy Bundle
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-10 flex justify-between">
        <Link href="/report">
          <a className="text-olive hover:text-primary flex items-center transition-colors">
            <i className="fas fa-arrow-left mr-2"></i>
            <span>Back to Analysis</span>
          </a>
        </Link>
        <Link href="/journal">
          <a className="text-olive hover:text-primary flex items-center transition-colors">
            <span>Track Your Progress</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Kit;
