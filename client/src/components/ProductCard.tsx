import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-primary/10">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-poppins font-medium text-lg text-gray-900">{product.name}</h3>
          <span className="bg-primary/20 text-olive px-2 py-1 rounded text-xs font-medium">{product.tag}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-900">{product.price}</span>
          <button className="bg-success hover:bg-success/90 text-white py-2 px-4 rounded transition text-sm shadow-sm hover:shadow">
            <i className="fas fa-shopping-cart mr-1"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
