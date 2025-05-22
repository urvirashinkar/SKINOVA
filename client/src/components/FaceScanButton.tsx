import { useState } from 'react';
import { useLocation } from 'wouter';
import LoadingState from './LoadingState';

interface FaceScanButtonProps {
  variant?: 'primary' | 'success';
  label?: string;
  withIcon?: boolean;
  className?: string;
}

const FaceScanButton: React.FC<FaceScanButtonProps> = ({
  variant = 'primary',
  label = 'Start Face Scan',
  withIcon = true,
  className = '',
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Analyzing your skin...');
  const [, navigate] = useLocation();
  
  const handleScan = () => {
    setIsLoading(true);
    setLoadingMessage('Analyzing your skin...');
    
    // Simulate scan analysis process
    setTimeout(() => {
      setLoadingMessage('Processing results...');
      
      setTimeout(() => {
        setIsLoading(false);
        navigate('/report');
      }, 1500);
    }, 2000);
  };
  
  const bgColor = variant === 'primary' 
    ? 'bg-primary hover:bg-olive' 
    : 'bg-success hover:bg-success/80';
  
  return (
    <>
      <button
        onClick={handleScan}
        className={`${bgColor} text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center ${className}`}
      >
        {withIcon && <i className="fas fa-camera-retro mr-2"></i>}
        {label}
      </button>
      
      {isLoading && <LoadingState message={loadingMessage} />}
    </>
  );
};

export default FaceScanButton;
