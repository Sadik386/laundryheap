import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-16 border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    {/* Services Column */}
                    <div>
                        <h6 className="font-bold text-[#0890f3] mb-4 uppercase text-xs tracking-wider">Services</h6>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link to="/services/dry-cleaning" className="hover:text-[#0890f3]">Dry Cleaning</Link></li>
                            <li><Link to="/services/laundry" className="hover:text-[#0890f3]">Wash & Fold</Link></li>
                            <li><Link to="/services/ironing" className="hover:text-[#0890f3]">Ironing Only</Link></li>
                            <li><Link to="/pricing" className="hover:text-[#0890f3]">All Services</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h6 className="font-bold text-[#0890f3] mb-4 uppercase text-xs tracking-wider">Company</h6>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link to="/about" className="hover:text-[#0890f3]">About us</Link></li>
                            <li><Link to="/business" className="hover:text-[#0890f3]">For business</Link></li>
                            <li><Link to="/cities" className="hover:text-[#0890f3]">Cities</Link></li>
                        </ul>
                    </div>

                    {/* Help Column */}
                    <div>
                        <h6 className="font-bold text-[#0890f3] mb-4 uppercase text-xs tracking-wider">Help</h6>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-[#0890f3]">FAQ</a></li>
                            <li><a href="#" className="hover:text-[#0890f3]">Contact us</a></li>
                            <li><a href="#" className="hover:text-[#0890f3]">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-[#0890f3]">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* App Links */}
                    <div className="col-span-2 lg:col-span-2">
                        <h6 className="font-bold text-[#0890f3] mb-4 uppercase text-xs tracking-wider">Download our app</h6>
                        <div className="flex gap-4">
                            <a href="#"><img src="https://prod-cdn.laundryheap.com/assets/app_stores/app_store2x-a73b1c878a8772f8f5cea32472ec7cfd2b6f1fd21dde21c6836ff2f4d8eb9c8e.png" className="h-10" alt="App Store" /></a>
                            <a href="#"><img src="https://prod-cdn.laundryheap.com/assets/app_stores/play_store2x-1529597177b6267b5a63d73a4174ba925a2f204a36871e247bfc944c477e3593.png" className="h-10" alt="Play Store" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Social Links */}
                    <div className="flex gap-4">
                        <a href="#"><img src="https://prod-cdn.laundryheap.com/assets/social/new/facebook-31f3c36b2cd22528dfcd0ff00cce57354300ddb52357c97a26d41bc43f5adaed.png" className="w-8 h-8 hover:opacity-80 transition" /></a>
                        <a href="#"><img src="https://prod-cdn.laundryheap.com/assets/social/new/instagram-34c2b6748ad2dc63281aec8d3ccb6fcae92ff0658a1bd5427e7d03ea0a7639c7.png" className="w-8 h-8 hover:opacity-80 transition" /></a>
                        <a href="#"><img src="https://prod-cdn.laundryheap.com/assets/social/new/linkedin-577ad0d33a91ce5cf4af7d2f475fe422844f107aaa1fb460ef8a1d225b329368.png" className="w-8 h-8 hover:opacity-80 transition" /></a>
                    </div>

                    {/* Locale Picker */}
                    <div className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 cursor-pointer hover:bg-gray-100 transition">
                        <img src="https://prod-cdn.laundryheap.com/assets/locale_picker/pin-a97cd2ea1f157014c72e0477b727bbf9cd40c661fc477ae6a66300ebcb782b94.svg" className="w-5 h-5" />
                        <span className="font-medium text-[#0890f3]">United Kingdom</span>
                        <img src="https://prod-cdn.laundryheap.com/assets/icons/dropdown-819d3d4a818468a06515caf5469f68e51f3e27173dee64a189bf27604ad1298e.svg" className="w-4 h-4" />
                    </div>

                    <div className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} Laundryheap. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
