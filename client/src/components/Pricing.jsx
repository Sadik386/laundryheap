import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="bg-[#0890f3] rounded-2xl p-8 md:p-16 text-white text-left">
                    <div className="flex flex-col-reverse md:flex-row gap-12">

                        {/* Service Cards (Left) */}
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            {/* Wash Card */}
                            <Link to="/services/laundry" className="bg-white rounded-xl p-6 md:p-8 flex items-center gap-6 relative hover:bg-gray-50 transition group">
                                <div className="absolute top-0 right-0 mt-2 mr-2 bg-[#FFD06D] text-[#0890f3] text-xs font-bold px-2 py-1 rounded">Popular</div>
                                <img src="https://prod-cdn.laundryheap.com/assets/icons/wash-pack-5018f7805e20c7b02102d28cc40b451b5de855f22f79bd909642aa3d97d3871d.svg" className="w-14 h-14" alt="Wash" />
                                <div>
                                    <h4 className="text-[#0890f3] font-bold text-lg mb-1">Wash</h4>
                                    <span className="text-[#0890f3] font-bold text-xl">from £3.14/kg</span>
                                </div>
                            </Link>

                            {/* Dry Cleaning Card */}
                            <Link to="/services/dry-cleaning" className="bg-white rounded-xl p-6 md:p-8 flex items-center gap-6 hover:bg-gray-50 transition group">
                                <img src="https://prod-cdn.laundryheap.com/assets/icons/shirt-pack-2c3c0846e05384d8eb9783a0760afe32ac6c1095b1c77963cefae00342d58b00.svg" className="w-14 h-14" alt="Dry Cleaning" />
                                <div>
                                    <h4 className="text-[#0890f3] font-bold text-lg mb-1">Dry Cleaning</h4>
                                    <span className="text-[#0890f3] font-bold text-xl">£2.95<span className="text-sm font-normal">/shirt</span></span>
                                </div>
                            </Link>
                        </div>

                        {/* Content (Right) */}
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-3xl font-bold mb-6">Sparkling clean laundry at a price you'll love</h2>
                            <p className="text-lg mb-8 leading-relaxed">We pick up, clean, and deliver your laundry all for less than you'd spend at the local cleaners. No hassle, just fresh clothes at a fair price.</p>
                            <Link to="/pricing" className="inline-block bg-[#FFD06D] text-[#0890f3] py-3 px-6 rounded font-bold hover:bg-yellow-400 transition">
                                Check prices
                            </Link>
                        </div>
                    </div>

                    {/* Bottom Pills (Desktop mostly) */}
                    <div className="mt-12 pt-8 border-t border-blue-900 hidden md:flex items-center gap-6">
                        <div className="flex gap-4">
                            <Link to="/services/laundry" className="bg-white px-4 py-2 rounded-full flex items-center gap-2">
                                <img src="https://prod-cdn.laundryheap.com/images/static/price_services/web/wash_small.png" className="w-8 h-8 rounded-full" alt="wash" />
                                <span className="text-[#0890f3] font-bold text-sm">Wash</span>
                            </Link>
                            <Link to="/services/ironing" className="bg-white px-4 py-2 rounded-full flex items-center gap-2">
                                <img src="https://prod-cdn.laundryheap.com/images/static/price_services/web/wash_and_iron_small.png" className="w-8 h-8 rounded-full" alt="wash and iron" />
                                <span className="text-[#0890f3] font-bold text-sm">Wash & Iron</span>
                            </Link>
                            <Link to="/services/dry-cleaning" className="bg-white px-4 py-2 rounded-full flex items-center gap-2">
                                <img src="https://prod-cdn.laundryheap.com/images/static/price_services/web/dry_cleaning_small.png" className="w-8 h-8 rounded-full" alt="dry cleaning" />
                                <span className="text-[#0890f3] font-bold text-sm">Dry Cleaning</span>
                            </Link>
                        </div>
                        <Link to="/pricing" className="text-[#00B5E2] font-semibold flex items-center gap-2">
                            See all 5 services
                            <img src="https://prod-cdn.laundryheap.com/assets/ArrowBigger-7d9ee0eedad166a881c84bd0cdb5c35a1a233fadeda1ce775fb748c5fcab1fcf.svg" className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
