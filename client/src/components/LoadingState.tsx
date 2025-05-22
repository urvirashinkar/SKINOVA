interface LoadingStateProps {
  message?: string;
}

const LoadingState: React.FC<LoadingStateProps> = ({ message = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="text-center">
        <div className="loading-spinner w-12 h-12 border-4 mx-auto mb-4"></div>
        <p className="text-olive font-medium text-lg">{message}</p>
      </div>
    </div>
  );
};

export default LoadingState;
