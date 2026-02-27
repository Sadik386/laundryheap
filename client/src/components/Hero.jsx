import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [collectionDate, setCollectionDate] = useState('Today');
    const [collectionTime, setCollectionTime] = useState('08:00 - 10:00');
    const [cityIndex, setCityIndex] = useState(0);

    const cities = ['London', 'Manchester', 'Dhaka', 'Chittagong', 'Sylhet'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCityIndex((prev) => (prev + 1) % cities.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-[#0890f3] min-h-screen pt-32 pb-20 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row relative z-10">

                {/* Left Content */}
                <div className="w-full md:w-1/2 pt-10 md:pt-20 text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Laundry & dry cleaning with 24h delivery <br />
                        <span className="inline-block relative overflow-hidden h-[1.2em] align-bottom">
                            <span
                                key={cityIndex}
                                className="block text-[#FFD06D] animate-slide-up"
                            >
                                {cities[cityIndex]}
                            </span>
                        </span>
                    </h1>

                    {/* Social Proof / Badges */}
                    <div className="flex flex-wrap items-center gap-4 mb-10 text-sm">
                        <div className="flex items-center gap-2">
                            <img src="https://prod-cdn.laundryheap.com/assets/landing/icons/heart_white-a568762b34afabddd46fd849ca9a214364f55c722c47cd1d1f5ed31af99bf3da.svg" alt="heart" className="w-6 h-6" />
                            {/* App Store Icons Placeholder */}
                            <div className="flex gap-2">
                                <img src="https://prod-cdn.laundryheap.com/assets/landing/icons/appStoreBlue-c11d4b8584fd12b26ac724f3577c489bd3544939b149652cdb2a09c6fc05d497.svg" className="w-6 h-6" alt="App Store" />
                                <img src="https://prod-cdn.laundryheap.com/assets/landing/icons/playStoreBlue-64e5095691e856b2395401605ea7aac3ac6ff7b581462f76244026686fd27e61.svg" className="w-6 h-6" alt="Play Store" />
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://prod-cdn.laundryheap.com/assets/landing/testimonials/stars_yellow_blue-b93670de760275330b56cd630db8744e017d34e551ad29dd47bf614957bff67e.svg" className="h-4" alt="Stars" />
                            <span>based on 200,000+ reviews</span>
                        </div>
                    </div>

                    {/* Interactive Schedule Picker */}
                    <div className="bg-white text-[#0890f3] rounded-xl shadow-2xl max-w-lg overflow-hidden border border-blue-50">
                        <div className="p-5 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
                            <h3 className="font-bold text-lg">Schedule your collection</h3>
                            <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">London, UK</span>
                        </div>

                        <div className="p-6">
                            {/* Date Selector */}
                            <div className="mb-6">
                                <label className="text-gray-400 text-xs font-bold uppercase mb-3 block">Select Date</label>
                                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                    {['Today', 'Tomorrow', 'Mon, 12 Jan', 'Tue, 13 Jan'].map((date) => (
                                        <button
                                            key={date}
                                            onClick={() => setCollectionDate(date)}
                                            className={`flex-shrink-0 px-4 py-2 rounded-lg border-2 transition-all ${collectionDate === date
                                                ? 'border-[#0890f3] bg-blue-50 text-[#0890f3] font-bold'
                                                : 'border-gray-100 text-gray-500 hover:border-gray-300'
                                                }`}
                                        >
                                            <span className="text-sm whitespace-nowrap">{date}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Time Slots */}
                            <div className="mb-8">
                                <label className="text-gray-400 text-xs font-bold uppercase mb-3 block">Available Slots</label>
                                <div className="grid grid-cols-2 gap-3">
                                    {['08:00 - 10:00', '10:00 - 12:00', '14:00 - 16:00', '18:00 - 20:00'].map((slot) => (
                                        <button
                                            key={slot}
                                            onClick={() => setCollectionTime(slot)}
                                            className={`p-3 rounded-lg border text-left transition-all relative ${collectionTime === slot
                                                ? 'border-[#0890f3] bg-[#0890f3]/5 text-[#0890f3] ring-1 ring-[#0890f3]'
                                                : 'border-gray-200 text-gray-600 hover:border-[#0890f3]'
                                                }`}
                                        >
                                            <div className="text-sm font-semibold">{slot}</div>
                                            <div className="text-[10px] text-gray-400">Available</div>
                                            {collectionTime === slot && (
                                                <div className="absolute top-2 right-2">
                                                    <div className="w-2 h-2 bg-[#0890f3] rounded-full"></div>
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button className="w-full bg-[#0890f3] text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                                Book Now
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                            </button>

                            <p className="mt-4 text-center text-xs text-gray-400">
                                Free collection & delivery on orders over £20
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2 mt-10 md:mt-0 relative hidden md:block">
                    {/* The image in the original site is actually a picture element with multiple sources. 
                For cloning, we'll use a direct reliable responsive image link or just the largest one. */}
                    <div className="absolute right-[-10%] top-0 w-[120%]">
                        <img
                            src="https://prod-cdn.laundryheap.com/assets/landing/hero/europe_2x-45f94d1b0282fe5831ca474014e73457fdc71072ae5025cb6cc2ba48d283f5a8.jpg"
                            alt="Laundryheap Hero"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
