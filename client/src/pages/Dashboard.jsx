import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Dashboard = () => {
    const { user, token, logout } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }

        const fetchBookings = async () => {
            try {
                const res = await axios.get(`${API_URL}/api/bookings`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setBookings(res.data);
            } catch (error) {
                console.error('Error fetching bookings', error);
            }
        };

        fetchBookings();
    }, [token, navigate]);

    if (!user) return null;

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <div className="pt-32 pb-12 flex-grow container mx-auto px-4">
                {/* Stats & Promotions Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-[#d2efff] p-6 rounded-2xl flex items-center justify-between col-span-1 md:col-span-3">
                        <div>
                            <h3 className="text-xl font-black text-[#1e2d42] mb-1">Refer a friend</h3>
                            <p className="text-[#0890f3] font-bold">Get 15% off for every friend you refer</p>
                        </div>
                        <button className="bg-[#0890f3] text-white px-6 py-2 rounded-xl font-black text-sm hover:bg-blue-600 transition">
                            Refer now
                        </button>
                    </div>
                    <div className="bg-[#fbe7e9] p-6 rounded-2xl flex flex-col justify-center">
                        <span className="text-sm font-bold text-[#e3424d] uppercase mb-1">My Wallet</span>
                        <span className="text-2xl font-black text-[#e3424d]">৳0.00</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Left Sidebar */}
                    <div className="md:col-span-1 space-y-8">
                        {/* User Profile Card */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <img src={user.picture} alt="Profile" className="w-14 h-14 rounded-full" />
                                <div>
                                    <p className="font-black text-[#1e2d42] leading-none mb-1">{user.name}</p>
                                    <p className="text-xs text-gray-500 truncate max-w-[150px]">{user.email}</p>
                                </div>
                            </div>
                            <button className="w-full bg-[#f4f7f9] text-[#1e2d42] py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition">
                                My Profile Settings
                            </button>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-[#0890f3] p-6 rounded-3xl text-white shadow-lg shadow-blue-100 relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="font-black text-xl mb-2">Need a pick up?</h3>
                                <p className="text-blue-100 text-sm mb-6">Schedule your next laundry collection in seconds.</p>
                                <button onClick={() => navigate('/booking')} className="bg-white text-[#0890f3] w-full py-4 rounded-xl font-black shadow-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                                    Book Now
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </button>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                        </div>
                    </div>

                    {/* Main Dashboard Area */}
                    <div className="md:col-span-3 space-y-12">
                        {/* Prepaid Packs Section */}
                        <section>
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <h2 className="text-2xl font-black text-[#1e2d42]">Get most value with our Prepaid packs!</h2>
                                    <p className="text-gray-500 font-medium">Bulk buy and save on your laundry</p>
                                </div>
                                <button className="text-[#0890f3] font-bold text-sm underline">How it works</button>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    { title: "Shirts prepaid pack", save: "19%", icon: "👔" },
                                    { title: "Wash prepaid pack", save: "17%", icon: "🧺" },
                                    { title: "Trousers prepaid pack", save: "20%", icon: "👖" },
                                    { title: "2-Piece suits prepaid pack", save: "20%", icon: "🤵" },
                                    { title: "T-shirts prepaid pack", save: "20%", icon: "👕" },
                                    { title: "Blouses prepaid pack", save: "19%", icon: "👚" },
                                    { title: "Dresses prepaid pack", save: "19%", icon: "👗" }
                                ].map((pack, idx) => (
                                    <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition group cursor-pointer">
                                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition leading-none">
                                            {pack.icon}
                                        </div>
                                        <h4 className="font-bold text-[#1e2d42] text-sm mb-1 leading-tight">{pack.title}</h4>
                                        <p className="text-[#10b981] font-black text-xs uppercase tracking-wider">Save up to {pack.save}</p>
                                    </div>
                                ))}
                                <div className="bg-gray-50 p-5 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center opacity-70">
                                    <p className="text-xs font-bold text-gray-400">View all offers</p>
                                </div>
                            </div>
                        </section>

                        {/* Recent Bookings Section */}
                        <section>
                            <h2 className="text-2xl font-black text-[#1e2d42] mb-6">My Orders</h2>
                            {bookings.length === 0 ? (
                                <div className="bg-white p-12 rounded-2xl shadow-sm text-center border border-gray-50">
                                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                    </div>
                                    <p className="text-gray-400 font-bold mb-6">You have no active orders.</p>
                                    <button onClick={() => navigate('/booking')} className="text-[#0890f3] font-black uppercase text-sm tracking-wider hover:underline">Start your first order</button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {bookings.map((booking) => (
                                        <div key={booking._id} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center justify-between border-l-8 border-[#00B5E2] border border-gray-50">
                                            <div className="mb-4 md:mb-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-black text-lg text-[#1e2d42]">{booking.serviceType}</span>
                                                    <span className="text-[10px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded font-mono uppercase tracking-tighter">ID: {booking.transactionId?.split('-')[0]}</span>
                                                </div>
                                                <p className="text-sm text-gray-500 font-medium">Pickup: <span className="text-[#1e2d42]">{new Date(booking.pickupDate).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })}</span> at {booking.pickupSlot}</p>
                                                <div className="flex items-center gap-1.5 mt-2 opacity-60">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                                    <p className="text-[10px] text-gray-500 font-bold truncate max-w-xs">{booking.address}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between md:flex-col md:items-end gap-3 border-t md:border-t-0 pt-4 md:pt-0 border-gray-50">
                                                <div className="flex md:flex-col items-center md:items-end gap-2">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                                                        booking.status === 'Failed' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                                                        }`}>
                                                        {booking.status}
                                                    </span>
                                                    <span className={`text-[10px] font-black uppercase tracking-tighter ${booking.paymentStatus === 'Paid' ? 'text-[#10b981]' : 'text-orange-500'}`}>
                                                        {booking.paymentStatus === 'Paid' ? 'Paid (10%)' : 'Payment Pending'}
                                                    </span>
                                                </div>
                                                <p className="font-black text-xl text-[#1e2d42]">৳{booking.totalAmount}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
