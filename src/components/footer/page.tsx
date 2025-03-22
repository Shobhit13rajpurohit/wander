import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaBitcoin, FaMapPin, FaPhone, FaEnvelope } from 'react-icons/fa';
import { LiaCcVisa } from "react-icons/lia";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaFacebookF className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">flytzen</span>
            </div>
            <p className="text-gray-400 mb-4">
              Making travel accessible, affordable, and enjoyable for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Destinations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Hotels</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Flights</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Packages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Travel Guides</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cancellation Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapPin className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                <span>
                  123 Travel Street, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-start">
                <FaPhone className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                <span>info@flytzen.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods Section */}
        {/* <div className="border-t border-gray-800 pt-8">
          <div className="mb-8">
            <h3 className="font-bold text-lg mb-4 text-center">We Accept All Payment Methods</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center">
             
              <div className="bg-white rounded-md p-2 w-16 h-10 flex items-center justify-center">
              <LiaCcVisa className='h-12 w-12' />
              </div>
              <div className="bg-white rounded-md p-2 w-16 h-10 flex items-center justify-center">
              <LiaCcVisa />              </div>
              <div className="bg-white rounded-md p-2 w-16 h-10 flex items-center justify-center">
                <img src="/placeholder.svg" alt="American Express" width="50" height="30" />
              </div>
              <div className="bg-white rounded-md p-2 w-16 h-10 flex items-center justify-center">
                <img src="/placeholder.svg" alt="Discover" width="50" height="30" />
              </div>
              <div className="bg-white rounded-md p-2 w-16 h-10 flex items-center justify-center">
                <img src="/placeholder.svg" alt="JCB" width="50" height="30" />
              </div>
              <div className="bg-white rounded-md p-2 w-16 h-10 flex items-center justify-center">
                <img src="/placeholder.svg" alt="Diners Club" width="50" height="30" />
              </div>

              
              <div className="bg-white rounded-md p-2 w-16 h-10 flex items-center justify-center">
                <img src="/placeholder.svg" alt="PayPal" width="50" height="30" />
              </div>
              <div className="bg-white rounded-md p-2 w-16 h-10 flex items-center justify-center">
                <img src="/placeholder.svg" alt="Apple Pay" width="50" height="30" />
              </div>
              <div className="bg-white rounded-md p-2 w-16 h-10 flex items-center justify-center">
                <img src="/placeholder.svg" alt="Google Pay" width="50" height="30" />
              </div>
              <div className="bg-white rounded-md p-2 w-16 h-10 flex items-center justify-center">
                <img src="/placeholder.svg" alt="Samsung Pay" width="50" height="30" />
              </div>

              
              <div className="bg-white rounded-md p-2 w-14 h-8 flex items-center justify-center">
                <FaBitcoin className="h-12 w-12 text-[#F7931A]" />
              </div>
              <div className="bg-white rounded-md p-2 w-14 h-8 flex items-center justify-center">
                <img src="/https://th.bing.com/th?id=OIP.czTQN9WmTYUZz9XXnk9x3AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2" alt="Ethereum" width="30" height="30" />
              </div>
              <div className="bg-white rounded-md p-2 w-14 h-8 flex items-center justify-center">
                <img src="/placeholder.svg" alt="USDT" width="30" height="30" />
              </div>
              <div className="bg-white rounded-md p-2 w-14 h-8 flex items-center justify-center">
                <img src="/placeholder.svg" alt="XRP" width="30" height="30" />
              </div>
              <div className="bg-white rounded-md p-2 w-14 h-8 flex items-center justify-center">
                <img src="/placeholder.svg" alt="Litecoin" width="30" height="30" />
              </div>
              <div className="bg-white rounded-md p-2 w-14 h-8 flex items-center justify-center">
                <img src="/placeholder.svg" alt="Dogecoin" width="30" height="30" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} flytzen. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-2 md:justify-end">
              <a href="#" className="text-xs text-gray-400 hover:text-white">
                Terms
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-xs text-gray-400 hover:text-white">
                Privacy
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-xs text-gray-400 hover:text-white">
                Cookies
              </a>
              <span className="text-gray-600">•</span>
              <a href="#" className="text-xs text-gray-400 hover:text-white">
                Sitemap
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
