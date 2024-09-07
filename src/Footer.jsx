import React from 'react';
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { IoIosMail, IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="">
            <img src="https://res.cloudinary.com/myhq/image/upload/web/ssr/common/logo/logo-new-flat.svg" alt="myHQ" className="mb-2 h-8" />
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Refund</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-bold mb-4 text-blue-800">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Day Pass</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Coworking Space</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Managed Office <span className="text-sm text-gray-400">(Coming soon)</span></a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Team Plan</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Virtual Office</a></li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-bold mb-4 text-blue-800">myHQ Community</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Community benefits</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Reopening Office?</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Refer & Earn</a></li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-bold mb-4 text-blue-800">Partnerships</h4>
            <ul>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">List Your Space</a></li>
            </ul>
          </div>
          <div className="">
            <h4 className="font-bold mb-8 text-blue-800">Join the newsletter</h4>
            <div className="flex flex-col md:flex-row items-center mb-4">
              <input
                type="email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto mb-2 md:mb-0 md:mr-2"
                placeholder="Enter your email"
              />
              <button className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-600">Subscribe</button>
            </div>
            <p className="text-blue-800 mb-4">Feel free to connect with us</p>
            <div className="flex flex-col md:flex-row items-center">
              <span className="text-gray-600 mr-2 mb-2 md:mb-0"><IoIosCall /> 9205006361</span>
              <span className="text-gray-600 ml-0 md:ml-4"><IoIosMail /> contact@myhq.in</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center border-t border-gray-300 pt-4">
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <h1>Keep in Touch</h1>
            <FaFacebookF className="text-gray-600 hover:text-gray-800" />
            <FaInstagram className="text-gray-600 hover:text-gray-800" />
            <FaTwitter className="text-gray-600 hover:text-gray-800" />
            <FaLinkedinIn className="text-gray-600 hover:text-gray-800" />
          </div>
          <div className="text-gray-600 mb-4 lg:mb-0">
            <span>Powered by</span>
            <img src="https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_128/web/ssr/common/logo/anarock-logo.png" alt="ANAROCK" className="inline-block h-6 ml-2"/>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Download myHQ App</a>
            <img src="https://res.cloudinary.com/myhq/image/upload/web/ssr/common/assets/play-store-badge.svg" alt="Google Play" className="h-8"/>
            <img src="https://res.cloudinary.com/myhq/image/upload/web/ssr/common/assets/Appstore.svg" alt="App Store" className="h-8"/>
          </div>
        </div>
      </div>









    <div className="bg-gray-100 py-8 text-left">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h4 className="font-bold mb-2">Coworking Spaces by top cities</h4>
          <p className="text-gray-600">
            Coworking Space in Ahmedabad · Coworking Space in Bangalore · Coworking Space in Chennai · Coworking Space in Delhi · Coworking Space in Gurgaon · Coworking Space in Hyderabad · Coworking Space in Mumbai · Coworking Space in Noida · Coworking Space in Pune · Coworking Space in Agra · Coworking Space in Amritsar · Coworking Space in Anand · Coworking Space in Bareja · Coworking Space in Bhopal · Coworking Space in Chandigarh · Coworking Space in Coimbatore · Coworking Space in Dimapur · Coworking Space in Faridabad · Coworking Space in Ghaziabad · Coworking Space in Goa · Coworking Space in Guwahati · Coworking Space in Indore · Coworking Space in Jaipur · Coworking Space in Jamshedpur · Coworking Space in Kanpur · Coworking Space in Kochi · Coworking Space in Kolkata · Coworking Space in Lucknow · Coworking Space in Nashik · Coworking Space in Patna · Coworking Space in Raipur · Coworking Space in Ranchi · Coworking Space in Trivandrum · Coworking Space in Visakhapatnam
          </p>
        </div>
        <div className="mb-8">
          <h4 className="font-bold mb-2">Coworking Day Pass by top cities</h4>
          <p className="text-gray-600">
            Coworking Day Pass in Ahmedabad · Coworking Day Pass in Bangalore · Coworking Day Pass in Chennai · Coworking Day Pass in Delhi · Coworking Day Pass in Gurgaon · Coworking Day Pass in Hyderabad · Coworking Day Pass in Mumbai · Coworking Day Pass in Noida · Coworking Day Pass in Pune · Coworking Day Pass in Chandigarh · Coworking Day Pass in Jaipur · Coworking Day Pass in Kochi · Coworking Day Pass in Kolkata
          </p>
        </div>
        <div className="mb-8">
          <h4 className="font-bold mb-2">Virtual Offices by top cities</h4>
          <p className="text-gray-600">
            Virtual Office in Ahmedabad · Virtual Office in Bangalore · Virtual Office in Chennai · Virtual Office in Delhi · Virtual Office in Gurgaon · Virtual Office in Hyderabad · Virtual Office in Mumbai · Virtual Office in Noida · Virtual Office in Pune · Virtual Office in Amritsar · Virtual Office in Bhopal · Virtual Office in Bhubaneswar · Virtual Office in Chandigarh · Virtual Office in Dehradun · Virtual Office in Dharamsala · Virtual Office in Faridabad · Virtual Office in Goa · Virtual Office in Indore · Virtual Office in Jaipur · Virtual Office in Jalandhar · Virtual Office in Kanpur · Virtual Office in Kochi · Virtual Office in Kolkata · Virtual Office in Lucknow · Virtual Office in Nagpur · Virtual Office in Nashik · Virtual Office in Patna · Virtual Office in Raipur · Virtual Office in Ranchi · Virtual Office in Trivandrum · Virtual Office in Visakhapatnam · Virtual Office in Zirakpur
          </p>
        </div>
        <div className="mb-8">
          <h4 className="font-bold mb-2">Meeting Rooms by top cities</h4>
          <p className="text-gray-600">
            Meeting Room in Ahmedabad · Meeting Room in Bangalore · Meeting Room in Chennai · Meeting Room in Delhi · Meeting Room in Gurgaon · Meeting Room in Hyderabad · Meeting Room in Mumbai · Meeting Room in Noida · Meeting Room in Pune · Meeting Room in Indore · Meeting Room in Kochi · Meeting Room in Kolkata
          </p>
        </div>
        <div className="mb-8">
          <h4 className="font-bold mb-2">Managed Offices by top cities</h4>
          <p className="text-gray-600">
            Managed Office in Ahmedabad · Managed Office in Bangalore · Managed Office in Gurgaon · Managed Office in Hyderabad · Managed Office in Mumbai · Managed Office in Noida · Managed Office in Pune · Managed Office in Indore · Managed Office in Lucknow
          </p>
        </div>
        <div className="mb-8">
          <h4 className="font-bold mb-2">Work Cafes by top cities</h4>
          <p className="text-gray-600">
            Work Cafe in Bangalore · Work Cafe in Delhi · Work Cafe in Gurgaon · Work Cafe in Noida · Work Cafe in Ghaziabad
          </p>
        </div>
        <div className=" border-gray-300 pt-4">
          <div className=" text-gray-600 mt-4">
            <img src="https://res.cloudinary.com/myhq/image/upload/web/ssr/common/logo/logo-new-flat.svg" alt="myHQ" className="h-8 mb-2" />
            <p className='pb-4'>myHQ provides affordable, hyperlocal and flexible office space solutions for businesses and individuals. Choose between pay-per-use plans or fixed desks.</p>
            <hr className='p-4 '/>
            <p>Copyright © 2024, Upflex Anarock India Private Limited. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>








    </footer>
  );
};

export default Footer;