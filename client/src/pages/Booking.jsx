import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Booking = () => {
    const { token, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [collectionDate, setCollectionDate] = useState('Today');
    const [collectionTime, setCollectionTime] = useState('08:00 - 10:00');
    const [deliveryDate, setDeliveryDate] = useState('Tomorrow');
    const [deliveryTime, setDeliveryTime] = useState('08:00 - 10:00');
    const [selectedServices, setSelectedServices] = useState(['Wash & Fold']);
    const [contactInfo, setContactInfo] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phone: ''
    });
    const [paymentMethod, setPaymentMethod] = useState('sslcommerz');
    const [isProcessing, setIsProcessing] = useState(false);

    // Test locations in Bangladesh
    const bdLocations = [
        { id: 1, name: 'Pan Pacific Sonargaon Dhaka', city: 'Dhaka' },
        { id: 2, name: 'InterContinental Dhaka', city: 'Dhaka' },
        { id: 3, name: 'Radisson Blu Water Garden Hotel', city: 'Dhaka' },
        { id: 4, name: 'The Westin Dhaka', city: 'Dhaka' },
        { id: 5, name: 'Radisson Blu Chittagong Bay View', city: 'Chittagong' },
        { id: 6, name: 'Hotel Agrabad', city: 'Chittagong' },
        { id: 7, name: 'Rose View Hotel', city: 'Sylhet' },
        { id: 8, name: 'Grand Sylhet Hotel & Resort', city: 'Sylhet' },
    ];

    const filteredLocations = searchQuery.length > 2
        ? bdLocations.filter(loc => loc.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : [];

    const handleLocationSelect = (loc) => {
        setSelectedLocation(loc);
        setSearchQuery(loc.name);
    };

    const steps = [
        { id: 1, name: 'Address', active: step >= 1 },
        { id: 2, name: 'Collection time', active: step >= 2 },
        { id: 3, name: 'Delivery time', active: step >= 3 },
        { id: 4, name: 'Selected services', active: step >= 4 },
        { id: 5, name: 'Contact', active: step >= 5 },
        { id: 6, name: 'Payment', active: step >= 6 },
    ];

    const handleShowNearMe = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const nearest = bdLocations[0];
                handleLocationSelect(nearest);
                alert(`Located! Selected ${nearest.name} for you.`);
            }, (error) => {
                alert("Please allow location access.");
            });
        }
    };

    const handleNext = async () => {
        if (step < 6) {
            setStep(prev => prev + 1);
        } else {
            // Handle final booking submission with real payment
            setIsProcessing(true);
            try {
                const bookingData = {
                    serviceType: selectedServices.join(', '),
                    pickupDate: collectionDate,
                    pickupSlot: collectionTime,
                    address: selectedLocation?.name,
                    contact: contactInfo
                };

                const base = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                let endpoint = `${base}/api/bookings/init`;
                if (paymentMethod === 'stripe') endpoint = `${base}/api/bookings/init-stripe`;
                if (paymentMethod === 'paypal') endpoint = `${base}/api/bookings/init-paypal`;

                const response = await axios.post(endpoint, bookingData, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (response.data.url) {
                    window.location.replace(response.data.url);
                }
            } catch (error) {
                console.error('Payment Error:', error);
                alert('Failed to initialize payment. Please try again.');
            } finally {
                setIsProcessing(false);
            }
        }
    };

    const toggleService = (service) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter(s => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <header className="border-b border-gray-100 py-4 px-6 fixed top-0 w-full bg-white z-50 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#0890f3] rounded-lg rotate-45 flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm -rotate-45"></div>
                    </div>
                    <span className="font-black text-2xl tracking-tighter text-[#1e2d42]">laundryheap</span>
                </Link>
                <div className="flex items-center gap-4">
                    <button className="hidden md:flex items-center gap-2 bg-[#fbe7e9] text-[#e3424d] px-4 py-2 rounded-lg font-bold text-sm">
                        <span className="text-lg">%</span> Promotions
                    </button>
                    <Link to="/pricing" className="hidden md:block text-[#1e2d42] font-semibold text-sm border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                        Prices & Services
                    </Link>
                </div>
            </header>

            <div className="pt-24 pb-12 container mx-auto px-4 max-w-6xl flex flex-col lg:flex-row gap-8">
                <div className="flex-grow">
                    {step === 1 && (
                        <div className="max-w-2xl">
                            <h1 className="text-4xl font-black text-[#1e2d42] mb-10">Search for your hotel</h1>
                            <div className="relative mb-6">
                                <label className="text-xs font-bold text-[#0890f3] absolute -top-2 left-4 bg-white px-2">Hotel name</label>
                                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Start typing..." className="w-full border-2 border-[#0890f3] rounded-xl p-5 pt-6 text-lg focus:outline-none transition" />
                                {filteredLocations.length > 0 && (
                                    <div className="absolute top-full left-0 w-full bg-white shadow-xl rounded-xl mt-2 border border-gray-100 overflow-hidden z-20">
                                        {filteredLocations.map(loc => (
                                            <button key={loc.id} onClick={() => handleLocationSelect(loc)} className="w-full text-left p-4 hover:bg-blue-50 transition border-b border-gray-50 last:border-0">
                                                <div className="font-bold text-[#1e2d42]">{loc.name}</div>
                                                <div className="text-sm text-gray-500">{loc.city}, Bangladesh</div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <button onClick={handleShowNearMe} className="flex items-center gap-2 text-[#0890f3] font-bold mb-10 hover:underline">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                                Show hotels near me
                            </button>
                        </div>
                    )}

                    {(step === 2 || step === 3) && (
                        <div className="max-w-2xl animate-fade-in">
                            <h1 className="text-4xl font-black text-[#1e2d42] mb-10">Select {step === 2 ? 'collection' : 'delivery'} time</h1>
                            <div className="space-y-6">
                                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                                    {['Today', 'Tomorrow', 'Monday', 'Tuesday'].map(day => (
                                        <button
                                            key={day}
                                            onClick={() => step === 2 ? setCollectionDate(day) : setDeliveryDate(day)}
                                            className={`flex-shrink-0 px-8 py-4 rounded-xl font-bold border-2 transition-all ${(step === 2 ? collectionDate : deliveryDate) === day
                                                ? 'border-[#0890f3] bg-blue-50 text-[#0890f3]'
                                                : 'border-gray-100 text-gray-400 hover:border-gray-200'
                                                }`}
                                        >
                                            {day}
                                        </button>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {['08:00 - 10:00', '10:00 - 12:00', '14:00 - 16:00', '18:00 - 20:00'].map(time => (
                                        <button
                                            key={time}
                                            onClick={() => step === 2 ? setCollectionTime(time) : setDeliveryTime(time)}
                                            className={`p-4 rounded-xl font-bold border-2 text-center transition-all ${(step === 2 ? collectionTime : deliveryTime) === time
                                                ? 'border-[#0890f3] bg-blue-50 text-[#0890f3]'
                                                : 'border-gray-100 text-gray-400 hover:border-gray-200'
                                                }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="max-w-2xl animate-fade-in">
                            <h1 className="text-4xl font-black text-[#1e2d42] mb-10">Selected services</h1>
                            <div className="space-y-4">
                                {['Wash & Fold', 'Dry Cleaning', 'Ironing Only'].map(service => (
                                    <div
                                        key={service}
                                        onClick={() => toggleService(service)}
                                        className={`p-6 rounded-2xl border-2 cursor-pointer transition-all flex justify-between items-center ${selectedServices.includes(service)
                                            ? 'border-[#0890f3] bg-blue-50'
                                            : 'border-gray-100 hover:border-gray-200'
                                            }`}
                                    >
                                        <div>
                                            <h3 className="font-black text-[#1e2d42] text-xl">{service}</h3>
                                            <p className="text-gray-500 font-medium">Starting from ৳250</p>
                                        </div>
                                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${selectedServices.includes(service) ? 'bg-[#0890f3] border-[#0890f3]' : 'border-gray-200'
                                            }`}>
                                            {selectedServices.includes(service) && <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 5 && (
                        <div className="max-w-2xl animate-fade-in">
                            <h1 className="text-4xl font-black text-[#1e2d42] mb-10">Contact</h1>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-black text-gray-400 mb-2 uppercase">Full Name</label>
                                    <input type="text" value={contactInfo.name} onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })} className="w-full border-2 border-gray-100 rounded-xl p-4 text-lg focus:border-[#0890f3] focus:outline-none transition" />
                                </div>
                                <div>
                                    <label className="block text-sm font-black text-gray-400 mb-2 uppercase">Email</label>
                                    <input type="email" value={contactInfo.email} onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })} className="w-full border-2 border-gray-100 rounded-xl p-4 text-lg focus:border-[#0890f3] focus:outline-none transition" />
                                </div>
                                <div>
                                    <label className="block text-sm font-black text-gray-400 mb-2 uppercase">Phone Number</label>
                                    <input type="tel" placeholder="+880" value={contactInfo.phone} onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })} className="w-full border-2 border-gray-100 rounded-xl p-4 text-lg focus:border-[#0890f3] focus:outline-none transition" />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 6 && (
                        <div className="max-w-2xl animate-fade-in text-center py-10">
                            <h1 className="text-4xl font-black text-[#1e2d42] mb-4">Payment</h1>
                            <p className="text-gray-500 mb-10">Pay 10% advance to confirm your booking at {selectedLocation?.name}</p>

                            {/* Payment Method Selector */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                                {[
                                    { id: 'sslcommerz', name: 'SSLCommerz', icon: '💳' },
                                    { id: 'stripe', name: 'Stripe', icon: '🏧' },
                                    { id: 'paypal', name: 'PayPal', icon: '🅿️' }
                                ].map(method => (
                                    <button
                                        key={method.id}
                                        onClick={() => setPaymentMethod(method.id)}
                                        className={`p-6 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${paymentMethod === method.id
                                            ? 'border-[#0890f3] bg-blue-50'
                                            : 'border-gray-100 hover:border-gray-200'
                                            }`}
                                    >
                                        <span className="text-3xl">{method.icon}</span>
                                        <span className="font-black text-[#1e2d42]">{method.name}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="bg-gray-50 rounded-3xl p-8 mb-10 text-left">
                                <h3 className="font-black text-xl mb-6">Order Summary</h3>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between">
                                        <span className="text-gray-500 font-bold">Services</span>
                                        <span className="text-[#1e2d42] font-black">{selectedServices.join(', ')}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-500 font-bold">Total Amount</span>
                                        <span className="text-[#1e2d42] font-black">৳1000</span>
                                    </div>
                                    <div className="flex justify-between text-[#0890f3]">
                                        <span className="font-black underline">10% Advance Now</span>
                                        <span className="font-black text-2xl">৳100</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={handleNext}
                                disabled={isProcessing}
                                className="w-full bg-[#0890f3] text-white py-6 rounded-2xl font-black text-xl shadow-lg hover:shadow-blue-100 transition disabled:opacity-50"
                            >
                                {isProcessing ? 'Processing...' : `Pay ৳100 via ${paymentMethod.toUpperCase()}`}
                            </button>
                        </div>
                    )}
                </div>

                <div className="lg:w-[380px] flex-shrink-0">
                    <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm sticky top-24">
                        <button disabled={!selectedLocation} onClick={handleNext} className={`w-full py-6 text-xl font-black uppercase tracking-widest transition-all ${selectedLocation ? 'bg-[#0890f3] text-white' : 'bg-[#e0e5eb] text-gray-400'}`}>Next</button>
                        <div className="p-2">
                            {steps.map(s => (
                                <div key={s.id} className="flex items-center gap-4 p-4 border-b border-gray-100 last:border-0 cursor-pointer" onClick={() => (step > s.id) && setStep(s.id)}>
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${s.active ? (step > s.id ? 'bg-green-500' : 'bg-[#0890f3]') : 'bg-gray-200'}`}>
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className={`font-bold ${s.active ? 'text-[#1e2d42]' : 'text-gray-400'}`}>{s.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;

