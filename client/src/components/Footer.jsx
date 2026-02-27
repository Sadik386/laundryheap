import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white py-20 border-t-8 border-premium-yellow font-sans overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link to="/" className="inline-block mb-6">
                            <h2 className="text-3xl font-heading font-bold tracking-tighter text-gray-900">
                                laundry<span className="text-premium-yellow">heap</span>
                            </h2>
                        </Link>
                        <p className="text-gray-600 max-w-sm mb-8 leading-relaxed">
                            Expert laundry and dry cleaning delivered to your door. 
                            The smartest way to handle your clothes is here.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'instagram', 'linkedin', 'twitter'].map((social) => (
                                <a 
                                    key={social} 
                                    href="#" 
                                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-premium-yellow transition-all duration-300 group"
                                >
                                    <span className="text-gray-500 group-hover:text-white capitalize text-xs font-bold">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h6 className="font-heading font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest border-b-2 border-premium-yellow inline-block pb-1">
                            Services
                        </h6>
                        <ul className="space-y-4 text-sm text-gray-600">
                            {['Dry Cleaning', 'Wash & Fold', 'Ironing Only', 'All Services'].map(item => (
                                <li key={item}>
                                    <Link to="/" className="hover:text-premium-yellow hover:translate-x-1 transition-all inline-block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h6 className="font-heading font-bold text-gray-900 mb-6 uppercase text-sm tracking-widest border-b-2 border-premium-yellow inline-block pb-1">
                            Company
                        </h6>
                        <ul className="space-y-4 text-sm text-gray-600">
                            {['About us', 'For business', 'Cities', 'Careers'].map(item => (
                                <li key={item}>
                                    <Link to="/" className="hover:text-premium-yellow hover:translate-x-1 transition-all inline-block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* App Links */}
                    <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200">
                        <h6 className="font-heading font-bold text-gray-900 mb-4 text-sm uppercase">Get the app</h6>
                        <div className="flex flex-col gap-3">
                            <a href="#" className="transform hover:scale-105 transition">
                                <img src="https://prod-cdn.laundryheap.com/assets/app_stores/app_store2x-a73b1c878a8772f8f5cea32472ec7cfd2b6f1fd21dde21c6836ff2f4d8eb9c8e.png" className="h-10 w-full object-contain" alt="App Store" />
                            </a>
                            <a href="#" className="transform hover:scale-105 transition">
                                <img src="https://prod-cdn.laundryheap.com/assets/app_stores/play_store2x-1529597177b6267b5a63d73a4174ba925a2f204a36871e247bfc944c477e3593.png" className="h-10 w-full object-contain" alt="Play Store" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 cursor-pointer hover:border-premium-yellow transition group">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="font-bold text-sm text-gray-700 group-hover:text-premium-yellow">London, UK</span>
                        </div>
                        <div className="text-xs text-gray-400 space-x-4">
                            <a href="#" className="hover:text-gray-900 transition">Privacy</a>
                            <a href="#" className="hover:text-gray-900 transition">Terms</a>
                            <a href="#" className="hover:text-gray-900 transition">Cookies</a>
                        </div>
                    </div>

                    <div className="text-sm font-heading font-medium text-gray-500">
                        &copy; {new Date().getFullYear()} laundry<span className="text-premium-yellow">heap</span>. 
                        Crafted with premium care.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
