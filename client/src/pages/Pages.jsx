import { Link } from 'react-router-dom';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HowItWorks from '../components/HowItWorks';

export const Home = () => (
    <>
        <Navbar />
        <div className="pt-20 text-center">Home Page Content</div>
        <Footer />
    </>
);

export const HowItWorksPage = () => (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="pt-32 pb-12 bg-[#F4F9FC] flex-grow">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0890f3] mb-8 text-center">How It Works</h1>
                <HowItWorks />
            </div>
        </div>
        <Footer />
    </div>
);

export const PricesPage = () => (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="pt-32 pb-12 bg-gray-50 flex-grow">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-[#0890f3] mb-8">Prices & Services</h1>
                <p className="text-lg text-gray-600">Full price list goes here...</p>
            </div>
        </div>
        <Footer />
    </div>
);

export const AboutUsPage = () => (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="pt-32 pb-12 bg-white flex-grow">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-[#0890f3] mb-8">About Us</h1>
                <p className="max-w-2xl mx-auto text-gray-600">We are Laundryheap, the world's leading on-demand laundry service.</p>
            </div>
        </div>
        <Footer />
    </div>
);

export const BusinessPage = () => (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="pt-32 pb-12 bg-[#0890f3] text-white flex-grow">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-8">Laundryheap for Business</h1>
                <p className="max-w-2xl mx-auto text-gray-300">Reliable laundry solutions for your business.</p>
            </div>
        </div>
        <Footer />
    </div>
);

export const ServicePage = ({ serviceName, description }) => (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="pt-32 pb-12 bg-white flex-grow text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0890f3] mb-6">{serviceName}</h1>
                <p className="max-w-2xl mx-auto text-gray-600 mb-12">{description}</p>
                <HowItWorks />
                <div className="mt-12">
                    <Link to="/booking" className="bg-[#0890f3] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90">
                        Book {serviceName}
                    </Link>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

export const CitiesPage = () => (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="pt-32 pb-12 bg-[#F4F9FC] flex-grow text-center">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-[#0890f3] mb-8">Cities we serve</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {['London', 'Manchester', 'Birmingham', 'Dublin', 'Amsterdam', 'Dubai', 'New York', 'Los Angeles'].map(city => (
                        <div key={city} className="bg-white p-4 rounded shadow-sm hover:shadow-md transition cursor-pointer text-[#0890f3] font-medium">
                            {city}
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
    </div>
);
