import React from 'react';

const MapSection = () => {
    return (
        <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl font-bold text-[#0890f3] mb-8 text-center">We cover London and beyond</h2>
                <div className="w-full h-96 rounded-xl overflow-hidden shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281066703!2d-0.24168153494793656!3d51.5287718408761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1645564858921!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default MapSection;
