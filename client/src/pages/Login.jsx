import React from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
    const { login } = React.useContext(AuthContext);
    const navigate = useNavigate();

    const handleSuccess = async () => {
        try {
            const success = await login();
            if (success) {
                navigate('/dashboard');
            }
        } catch (error) {
            alert(`Login Failed: ${error.message}`);
        }
    };

    const handleError = () => {
        console.log('Login Failed');
        alert('Login Phase Failed');
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex items-center justify-center bg-gray-50 pt-32 pb-12">
                <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold text-[#0890f3] mb-6 text-center">Log in to Laundryheap</h2>

                    <div className="flex justify-center mb-6">
                        <button
                            onClick={handleSuccess}
                            className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-6 py-2 text-sm font-medium hover:bg-gray-50 transition"
                        >
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                            Continue with Google
                        </button>
                    </div>

                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
                        <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">Or log in with email</span></div>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B5E2]" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input type="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00B5E2]" />
                        </div>
                        <button className="w-full bg-[#0890f3] text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition">Log In</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
