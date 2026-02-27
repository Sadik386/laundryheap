import React from 'react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Alison",
            stars: 5,
            text: "Great helpful service and excellent communication from delivery driver- thank you!",
            source: "internal"
        },
        {
            name: "Carolina",
            stars: 5,
            text: "5 star service! I highly recommend it. Fast, efficient and friendly. The app is super-easy to use...",
            source: "play"
        },
        {
            name: "Tatiana",
            stars: 5,
            text: "Very satisfied with the app and the service - UAE. App was easy to use...",
            source: "play"
        },
        {
            name: "Eddy",
            stars: 5,
            text: "Good presentation, and a smiling driver ! Everything was perfect !",
            source: "internal"
        }
    ];

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="bg-[#F4F9FC] rounded-2xl p-8 md:p-16">
                    <div className="flex flex-col lg:flex-row justify-between mb-12">
                        <h2 className="text-3xl font-bold text-[#0890f3] max-w-lg mb-6 lg:mb-0">200,000 items cleaned and delivered every week.</h2>
                        <a href="#" className="flex items-center gap-2 text-[#00B5E2] font-bold text-lg self-start">
                            Explore reviews
                            <div className="bg-[#00B5E2] rounded-full p-1"><img src="https://prod-cdn.laundryheap.com/assets/ArrowBiggerPrimaryBlue-0fe6373d63ad25fcdd4f8da3bab4bb00b2fc4532c7284ee1c29ff004cab5fb6e.svg" className="w-4 h-4 invert brightness-0" /></div>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {reviews.map((review, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <div className="flex mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <img key={i} src="https://prod-cdn.laundryheap.com/assets/landing/testimonials/stars_5-7bf43dd2b54116645eb9b9ad39d73b5555092bce4bd867904a2829a1a6166744.svg" className="h-4 w-auto object-cover object-left" style={{ width: '15px' }} />
                                            ))}
                                        </div>
                                        <span className="font-semibold text-sm">{review.name}</span>
                                    </div>
                                    {/* Source icon placeholder */}
                                    <div className="opacity-50 text-xs uppercase">{review.source}</div>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
