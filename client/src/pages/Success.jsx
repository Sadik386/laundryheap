import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Success = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <div className="pt-40 pb-20 flex-grow container mx-auto px-4 flex flex-col items-center justify-center text-center">
                <div className="bg-white p-12 rounded-2xl shadow-xl max-w-lg w-full">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-[#0890f3] mb-4">Payment Successful!</h1>
                    <p className="text-gray-600 mb-8">
                        Your booking has been confirmed and the 10% advance has been received. You can see your order details in the dashboard.
                    </p>
                    <div className="space-y-4">
                        <button
                            onClick={() => navigate('/dashboard')}
                            className="w-full bg-lh-cyan text-white py-3 rounded-xl font-bold hover:bg-cyan-600 transition shadow-lg"
                        >
                            Go to Dashboard
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Success;
