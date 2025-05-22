interface ErrorStateProps {
  message?: string;
  onDismiss: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ 
  message = "We couldn't process your request. Please try again.", 
  onDismiss 
}) => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-error text-white p-5 rounded-xl shadow-lg max-w-md mx-4">
        <div className="flex items-start">
          <div className="mr-4 text-2xl">
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <div>
            <h3 className="font-medium text-xl mb-2">Something went wrong</h3>
            <p className="mb-4">{message}</p>
            <button 
              onClick={onDismiss}
              className="bg-white text-error hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorState;
