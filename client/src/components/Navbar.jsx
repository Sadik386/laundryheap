import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full fixed top-0 z-50 transition-all duration-300">
            {/* Top Banner (hidden on mobile mostly, simplified for now) */}


            <nav className={`${isScrolled ? 'bg-white shadow-md py-2' : 'bg-[#0890f3] md:bg-transparent py-4'} w-full px-4 md:px-8 flex justify-between items-center transition-all duration-300`}>
                <div className="flex items-center">
                    {/* Logo */}
                    <Link to="/" aria-label="Laundryheap homepage" className="focus:outline-none border-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="30" viewBox="0 0 194 29" fill="none" className="block w-32 md:w-48 transition-colors">
                            <path d="M37.3223 3.27734V22.4H40.9481V3.27734H37.3223Z" fill={isScrolled ? "#0890f3" : "white"}></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M55.5331 13.81C55.5331 10.289 53.267 8.6499 49.8224 8.6499C46.2872 8.6499 44.2024 10.5622 43.7492 13.294L47.0426 13.5975C47.3448 12.2923 48.1606 11.3817 49.6714 11.3817C51.2123 11.3817 51.9979 12.2923 51.9979 13.7796V14.0832L48.3419 14.8116C45.3204 15.4187 43.2657 16.4811 43.2657 19.0308C43.2657 21.3376 44.9578 22.7339 47.7376 22.7339C49.7016 22.7339 51.5145 21.9143 52.2699 20.3663C52.6022 21.8233 53.5691 22.7035 55.0799 22.7035C56.2885 22.7035 57.0137 22.3089 57.5878 21.8536V19.911C57.195 20.0931 56.8324 20.1842 56.4698 20.1842C55.8957 20.1842 55.5331 19.8503 55.5331 19.1522V13.81ZM51.9979 16.6025C51.9979 18.7576 50.5476 20.2146 48.644 20.2146C47.4959 20.2146 46.8009 19.6682 46.8009 18.7576C46.8009 17.422 47.9189 17.1489 49.4901 16.815L51.9979 16.2686V16.2686V16.6025Z" fill={isScrolled ? "#0890f3" : "white"}></path>
                            <path d="M65.1704 19.911C66.9531 19.911 68.0408 18.4541 68.0408 16.1776V9.01414H71.6667V22.4H68.0408V20.2146C67.3459 21.7626 65.7747 22.7642 63.7503 22.7642C60.2151 22.7642 59.0065 20.3663 59.0065 17.3917V9.01414H62.6323V16.6632C62.6323 18.6969 63.3877 19.911 65.1704 19.911Z" fill={isScrolled ? "#0890f3" : "white"}></path>
                            <path d="M78.3632 15.2366C78.3632 12.9904 79.5113 11.5335 81.3545 11.5335C83.1372 11.5335 83.953 12.7173 83.953 14.7813V22.4H87.5788V14.0528C87.5788 11.0782 86.2796 8.6499 82.7142 8.6499C80.7199 8.6499 79.0279 9.68192 78.3632 11.1996V9.01414H74.7373V22.4H78.3632V15.2366Z" fill={isScrolled ? "#0890f3" : "white"}></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M103.94 22.4H100.314V19.8503C99.7098 21.459 98.0782 22.7642 95.7214 22.7642C91.7632 22.7642 89.7085 19.6682 89.7085 15.7222C89.7085 11.7763 91.7632 8.6499 95.7214 8.6499C98.0782 8.6499 99.7098 9.9551 100.314 11.5942V3.27734H103.94V22.4ZM96.8091 19.911C98.8638 19.911 100.344 18.4237 100.344 15.9651V15.4491C100.344 13.0208 98.8638 11.5031 96.8091 11.5031C94.543 11.5031 93.3646 13.1726 93.3646 15.7222C93.3646 18.2416 94.543 19.911 96.8091 19.911Z" fill={isScrolled ? "#0890f3" : "white"}></path>
                            <path d="M116.204 9.19626C115.811 8.86238 115.147 8.6499 114.331 8.6499C112.488 8.6499 111.098 10.0462 110.614 11.5638V9.01414H106.989V22.4H110.614V15.783C110.614 13.3547 111.884 12.0191 113.757 12.0191C114.633 12.0191 115.237 12.2013 115.932 12.5958L116.204 9.19626Z" fill={isScrolled ? "#0890f3" : "white"}></path>
                            <path d="M131.436 9.01414L123.791 27.378H120.226L122.28 22.4607L116.751 9.01414H120.558L124.184 18.1505H124.305L127.9 9.01414H131.436Z" fill={isScrolled ? "#0890f3" : "white"}></path>
                            <path d="M136.699 15.2366C136.699 12.9904 137.847 11.5335 139.69 11.5335C141.473 11.5335 142.289 12.7173 142.289 14.7813V22.4H145.914V14.0528C145.914 11.0782 144.615 8.6499 141.05 8.6499C139.056 8.6499 137.363 9.68192 136.699 11.1996V3.27734H133.073V22.4H136.699V15.2366Z" fill={isScrolled ? "#0890f3" : "white"}></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M155.235 20.0021C157.018 20.0021 158.076 19.2432 158.589 17.7256L161.52 18.0291C160.825 21.0037 158.529 22.7642 155.115 22.7642C151.005 22.7642 148.044 20.1235 148.044 15.9044C148.044 11.6852 151.035 8.6499 155.024 8.6499C159.375 8.6499 161.611 11.6852 161.611 15.3277V16.6329H151.61C151.73 18.6058 153.271 20.0021 155.235 20.0021ZM154.994 11.321C152.999 11.321 152.002 12.6869 151.67 14.3563H158.076C157.955 12.8083 157.018 11.321 154.994 11.321Z" fill={isScrolled ? "#0890f3" : "white"}></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M175.48 13.81C175.48 10.289 173.213 8.6499 169.769 8.6499C166.234 8.6499 164.149 10.5622 163.696 13.294L166.989 13.5975C167.291 12.2923 168.107 11.3817 169.618 11.3817C171.159 11.3817 171.944 12.2923 171.944 13.7796V14.0832L168.288 14.8116C165.267 15.4187 163.212 16.4811 163.212 19.0308C163.212 21.3376 164.904 22.7339 167.684 22.7339C169.648 22.7339 171.461 21.9143 172.216 20.3663C172.549 21.8233 173.516 22.7035 175.026 22.7035C176.235 22.7035 176.96 22.3089 177.534 21.8536V19.911C177.141 20.0931 176.779 20.1842 176.416 20.1842C175.842 20.1842 175.48 19.8503 175.48 19.1522V13.81ZM171.944 16.6025C171.944 18.7576 170.494 20.2146 168.591 20.2146C167.442 20.2146 166.747 19.6682 166.747 18.7576C166.747 17.422 167.865 17.1489 169.437 16.815L171.944 16.2686V16.2686V16.6025Z" fill={isScrolled ? "#0890f3" : "white"}></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M187.47 22.7642C185.083 22.7642 183.482 21.459 182.877 19.8503V27.378H179.252V9.01414H182.877V11.5942C183.482 9.9551 185.083 8.6499 187.47 8.6499C191.398 8.6499 193.483 11.7763 193.483 15.7222C193.483 19.6682 191.398 22.7642 187.47 22.7642ZM186.352 11.5031C184.298 11.5031 182.847 13.0208 182.847 15.4491V15.9651C182.847 18.4237 184.298 19.911 186.352 19.911C188.649 19.911 189.827 18.2416 189.827 15.7222C189.827 13.1726 188.649 11.5031 186.352 11.5031Z" fill={isScrolled ? "#0890f3" : "white"}></path>
                            <path className="heart" d="M1.87927 3.50891C0.742539 4.3123 0.065918 5.62262 0.065918 7.02057V15.9498C0.065918 17.9088 1.04509 19.7364 2.6714 20.8128L13.0621 27.6902C14.484 28.6314 16.3258 28.6314 17.7477 27.6902L28.1384 20.8128C29.7647 19.7364 30.7439 17.9088 30.7439 15.9498V7.02057C30.7439 5.62262 30.0672 4.3123 28.9305 3.50891L26.27 1.62854C24.6761 0.502087 22.5265 0.605744 21.0469 1.88039L18.1776 4.35243C16.5816 5.72744 14.2282 5.72744 12.6322 4.35243L9.76283 1.88039C8.28331 0.605742 6.13364 0.502088 4.53981 1.62854L1.87927 3.50891Z" fill="#FFD06D"></path>
                        </svg>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden lg:flex items-center ml-20 gap-8">
                        <Link to="/how-it-works" className={`${isScrolled ? 'text-[#0890f3]' : 'text-white'} hover:opacity-80 transition-all font-medium`}>How it works</Link>
                        <Link to="/pricing" className={`${isScrolled ? 'text-[#0890f3]' : 'text-white'} hover:opacity-80 transition-all font-medium`}>Prices & Services</Link>
                        <Link to="/about" className={`${isScrolled ? 'text-[#0890f3]' : 'text-white'} hover:opacity-80 transition-all font-medium`}>About us</Link>
                        <Link to="/business" className={`${isScrolled ? 'text-[#0890f3]' : 'text-white'} hover:opacity-80 transition-all font-medium`}>For business</Link>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <Link to="/login" className={`${isScrolled ? 'text-[#0890f3]' : 'text-white'} font-medium hidden md:block transition-all`}>Log in</Link>
                    <a href="#" className={`${isScrolled ? 'bg-[#0890f3] text-white shadow-lg' : 'bg-white text-[#0890f3]'} px-6 py-2 rounded font-medium hover:opacity-90 transition-all hidden md:block`}>
                        Book now
                    </a>
                    {/* Mobile Menu Toggle (simplified) */}
                    <div className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="18" viewBox="0 0 27 18" fill="none">
                            <rect width="27" height="2" fill={isScrolled ? "#0890f3" : "white"}></rect>
                            <rect y="8" width="27" height="2" fill={isScrolled ? "#0890f3" : "white"}></rect>
                            <rect y="16" width="27" height="2" fill={isScrolled ? "#0890f3" : "white"}></rect>
                        </svg>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
