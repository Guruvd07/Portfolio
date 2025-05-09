
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="glass-morphism rounded-xl p-12 max-w-lg w-full text-center">
        <h1 className="text-8xl font-bold text-gradient mb-6">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center glass-morphism px-6 py-3 rounded-lg border border-primary/30 hover:bg-primary/10 transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
