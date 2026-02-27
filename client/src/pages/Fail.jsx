import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Fail = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <div className="pt-40 pb-20 flex-grow container mx-auto px-4 flex flex-col items-center justify-center text-center">
                <div className="bg-white p-12 rounded-2xl shadow-xl max-w-lg w-full">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-[#0890f3] mb-4">Payment Failed</h1>
                    <p className="text-gray-600 mb-8">
                        Something went wrong during the payment process. Your booking has not been confirmed.
                    </p>
                    <div className="space-y-4">
                        <button
                            onClick={() => navigate('/booking')}
                            className="w-full bg-lh-blue text-white py-3 rounded-xl font-bold hover:bg-blue-900 transition shadow-lg"
                        >
                            Try Again
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className="w-full bg-white text-lh-blue border border-gray-200 py-3 rounded-xl font-bold hover:bg-gray-50 transition"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Fail;
