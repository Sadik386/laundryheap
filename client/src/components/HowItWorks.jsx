import React from 'react';

const HowItWorks = () => {
    const steps = [
        {
            title: "Book it & bag it",
            desc: "Pack your laundry and schedule a pick-up when it suits you.",
            icon: "https://prod-cdn.laundryheap.com/assets/landing/icons/step_1-137031bca9be6972c6647067b9a68fe41f0f68fc4388dae156fd3aa2650d5cef.svg"
        },
        {
            title: "Cleaned with care, locally",
            desc: "We collect your laundry & carefully clean it at our local facilities.",
            icon: "https://prod-cdn.laundryheap.com/assets/landing/icons/step_2-3c6c61c0d2653cb5aeee29af2039f9cd3de3024fc18f92cfd8a70178ab7ffbe4.svg"
        },
        {
            title: "Free delivery, fresh results.",
            desc: "Relax while we clean and deliver your items fresh to your doorstep.",
            icon: "https://prod-cdn.laundryheap.com/assets/landing/icons/step_3-0c4e0a12e032e35d0b0c2ed829a7a6f4183891218183ba5f4672e511aaceb289.svg"
        }
    ];

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="bg-[#FFF8E1] rounded-2xl overflow-hidden shadow-sm">
                    <div className="p-8 md:p-16">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-3xl font-bold text-[#0890f3] mb-4">Take back your time. Leave the laundry to us.</h2>
                            <a href="#" className="flex items-center gap-2 font-bold text-[#0890f3]">
                                How it works
                                <img src="https://prod-cdn.laundryheap.com/assets/landing/icons/arrowBigger-0fe6373d63ad25fcdd4f8da3bab4bb00b2fc4532c7284ee1c29ff004cab5fb6e.svg" className="w-6 h-6" />
                            </a>
                        </div>

                        <div className="relative">
                            {/* Background Image Area */}
                            <div className="mb-10 rounded-2xl overflow-hidden h-64 md:h-96 w-full relative">
                                <img
                                    src="https://prod-cdn.laundryheap.com/assets/landing/how_it_works_2x-2761e5b79d394270f422a3350972f5f66261a49aa3e933051facfa75fdbea011.jpg"
                                    className="w-full h-full object-cover absolute inset-0"
                                    alt="Woman holding laundry"
                                />
                            </div>

                            {/* Steps Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative md:-mt-20 z-10 px-4">
                                {steps.map((step, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="font-bold text-lg text-[#0890f3] max-w-[80%]">{step.title}</h3>
                                            <img src={step.icon} alt={`Step ${idx + 1}`} className="w-8 h-8" />
                                        </div>
                                        <p className="text-gray-700">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features List */}
                        <div className="mt-12 flex flex-wrap gap-8 justify-center md:justify-start">
                            <div className="flex items-center gap-3">
                                <img src="https://prod-cdn.laundryheap.com/assets/landing/icons/VanIcon-58ee891c54fd078cbd1be4c672986b5ec9d220f7e6eb065b7addd8f8aea518fd.svg" className="w-4 h-4" />
                                <span className="font-bold text-[#0890f3]">Free collection and delivery</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="https://prod-cdn.laundryheap.com/assets/landing/icons/HeartIcon-0fbb6397ef692f04eee7ddbf43cb8893da18a78f056a6a2384b1b928962ae9ff.svg" className="w-4 h-4" />
                                <span className="font-bold text-[#0890f3]">24/7 customer support</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="https://prod-cdn.laundryheap.com/assets/landing/icons/BellIcon-a7634857038b7cc087cfc7b4e7a00e336e212aaeb9879085efa3c03bd6534819.svg" className="w-4 h-4" />
                                <span className="font-bold text-[#0890f3]">Live order updates</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
