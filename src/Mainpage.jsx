import React from 'react';
import './App.css';

const App = () => {
  return (

<div>



<div>
            <div className="flex justify-between  items-center p-4 mx-4 md:mx-16">
                <h1>Direct Space</h1>
                <ul className="flex flex-wrap gap-4 md:gap-8 text-sm">
                    <li>All Solution</li>
                    <li>Office Space</li>
                    <li>More</li>
                    <li>List your space</li>
                    <li>Share your requirement</li>
                </ul>
            </div>

            <div
                style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg")' }}
                className="h-96 bg-cover bg-center flex flex-col justify-center items-center p-4"
            >
                <div className="text-left mb-8">
                    <h1 className="text-white text-2xl md:text-4xl font-bold">The new way to offices.</h1>
                    <p className="text-white text-lg md:text-xl mt-2">
                        A one-stop workspace solution for all work-needs. Choose between pay-per-use plans or fixed desks for teams and individuals.
                    </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xl md:max-w-4xl">
                    <div className="bg-green-100 text-center py-2 mb-4 rounded-t-lg">
                        <p className="text-green-600 font-semibold">
                            Rent dedicated seats and private cabins in fully-equipped coworking spaces
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-around gap-4 mb-4">
                        <button className="py-2 px-4 bg-white text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none">
                            Day Pass
                        </button>
                        <button className="py-2 px-4 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 focus:outline-none">
                            Coworking Space
                        </button>
                        <button className="py-2 px-4 bg-white text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none">
                            Meeting Rooms
                        </button>
                        <button className="py-2 px-4 bg-white text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none">
                            Virtual Office
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                        <select className="border border-gray-300 p-2 rounded-lg w-full md:w-auto">
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Chennai">Chennai</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search location or workspaces in Delhi"
                            className="flex-grow border border-gray-300 p-2 rounded-lg w-full md:w-auto"
                        />
                        <button className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none w-full md:w-auto">
                            View Workspaces
                        </button>
                    </div>
                </div>
            </div>
        </div>
        


















    <div className=" md:p-8 sm:p-6 p-4">
      <div className="text-left ">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Premium locations for your office space requirement</h1>
        <p className="text-base text-gray-600   mb-4">Whatever may be your need, we save a solution that’s right for you. Find yourself the most suitable coworking solution.</p>
        <h2 className="text-xl md:text-2xl font-semibold ">Rent longer-term</h2>
        <hr className='bg-indigo-700 h-1 w-12 mb-8' />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <img src="https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_720/web/ssr/pages/home/workspaces-for-everyone/fixed-desk.png" alt="Coworking Space" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg md:text-xl mb-2">Coworking Space</h3>
              <p className="text-green-600 font-medium mb-2">Full-time offices for teams of all sizes</p>
              <ul className="list-disc list-inside mb-4 text-sm md:text-base">
                <li>Dedicated seats & private cabins</li>
                <li>Fully-equipped coworking spaces</li>
                <li>Ideal for individual or small teams</li>
              </ul>
              <a href="#" className="text-indigo-700 font-medium">Explore Coworking Space →</a>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <img src="https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_720/web/ssr/pages/home/workspaces-for-everyone/managed-office-2.png" alt="Managed Office" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg md:text-xl mb-2">Managed Office</h3>
              <p className="text-green-600 font-medium mb-2">Private access office for bigger teams</p>
              <ul className="list-disc list-inside mb-4 text-sm md:text-base">
                <li>Fully furnished customized office</li>
                <li>Fully managed operations & housekeeping</li>
                <li>Ideal for 50+ team size</li>
              </ul>
              <p className="text-gray-500">Coming Soon!</p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <img src="https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_720/web/ssr/pages/home/workspaces-for-everyone/virtual-office.png" alt="Virtual Office" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg md:text-xl mb-2">Virtual Office</h3>
              <p className="text-green-600 font-medium mb-2">Professional address & business services</p>
              <ul className="list-disc list-inside mb-4 text-sm md:text-base">
                <li>Company registration & GST solutions for new businesses</li>
                <li>No physical office costs or high monthly rents</li>
              </ul>
              <a href="#" className="text-indigo-700 font-medium">Explore Virtual Office →</a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-left ">
        <h1 className="text-xl md:text-2xl font-semibold ">Book on-demand</h1>
        <hr className='bg-indigo-700 h-1 w-12 mb-8' />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <img src="https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_720/web/ssr/pages/home/workspaces-for-everyone/flexi-pass.png" alt="Day Pass" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg md:text-xl mb-2">Day Pass</h3>
              <p className="text-green-600 font-medium mb-2">Flexible coworking for individuals</p>
              <ul className="list-disc list-inside mb-4 text-sm md:text-base">
                <li>Desks-by-the-day in coworking spaces</li>
                <li>Starting at ₹200/day</li>
                <li>Ideal for individual or small teams</li>
              </ul>
              <a href="#" className="text-indigo-700 font-medium">Explore Day Pass →</a>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <img src="https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_720/web/ssr/pages/home/workspaces-for-everyone/meeting-room.png" alt="Meeting Room" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg md:text-xl mb-2">Meeting Room</h3>
              <p className="text-green-600 font-medium mb-2">Book by-the-hour or by the day</p>
              <ul className="list-disc list-inside mb-4 text-sm md:text-base">
                <li>Meeting, conference and training rooms for teams</li>
                <li>Modern amenities for a seamless experience</li>
                <li>Ideal for remote & hybrid teams</li>
              </ul>
              <a href="#" className="text-indigo-700 font-medium">Explore Meeting Room →</a>
            </div>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <img src="https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_720/web/ssr/pages/home/workspaces-for-everyone/team-flexi.png" alt="Team Plan" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg md:text-xl mb-2">Team Plan</h3>
              <p className="text-green-600 font-medium mb-2">Flexible day pass for remote & hybrid teams</p>
              <ul className="list-disc list-inside mb-4 text-sm md:text-base">
                <li>Centralized dashboard for entire team</li>
                <li>Manage & track bookings at one place</li>
                <li>Ideal for remote, distributed & hybrid teams</li>
              </ul>
              <a href="#" className="text-indigo-700 font-medium">Explore Team Plan →</a>
            </div>
          </div>
        </div>
        <div className="bg-green-100 p-4 w-full sm:mb-8 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 font-medium">Need expert consultation to upgrade your office space?</p>
            <p className="text-gray-500">Talk to our dedicated enterprise manager for comprehensive and cost-effective rentals for premium office spaces.</p>
          </div>
          <button className="bg-blue-800 text-white py-2 px-8  rounded-lg">Talk to an expert</button>
        </div>
      </div>
















      
      
    </div>









    <div className="bg-white py-8 text-left">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start p-12 bg-gray-100 w-full">
          <div className="lg:w-2/3 lg:pr-8">
            <h1 className="text-3xl font-bold mb-4">Planning your next office space?</h1>
            <p className="text-gray-700 mb-4">Get in touch with our office space experts to secure premium offices designed as per your needs.</p>
            <div className='flex flex-col md:flex-row text-gray-700 mb-8 pl-6'>
              <ul className='mr-0 md:mr-14 list-disc '>
                <li>Customized Managed Offices</li>
                <li>Dedicated Desks and Private Cabins</li>
                <li>Hybrid Solutions</li>
              </ul>
              <ul className='list-disc mt-4 md:mt-0'>
                <li>Ready-to-Move in Custom Offices</li>
                <li>Hub and Spoke Offices</li>
                <li>Virtual Offices</li>
              </ul>
            </div>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Explore Office Spaces</button>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <img src="https://res.cloudinary.com/myhq/image/upload/w_360/f_auto,q_auto/web/ssr/pages/enterprises/hero/enterprises-hero-4.jpg" alt="Office Building" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
        <div className="text-center mb-8 mt-8">
          <h2 className="text-3xl font-bold mb-8">Our Network of Premier Brands</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://myhq.s3.amazonaws.com/perm/workspace_brand/logo/645799b7ed177a5ed3d95b83?time=1711458347" alt="Awfis" className="mb-4 h-8 mx-auto" />
              <p className="text-blue-500 hover:underline cursor-pointer">Explore 7 workspaces →</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://myhq.s3.amazonaws.com/perm/workspace_brand/logo/64a546ab92dab570f3745f21?time=1692347281" alt="MODC" className="mb-4 h-8 mx-auto" />
              <p className="text-blue-500 hover:underline cursor-pointer">Explore 1 workspace →</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/myhq/image/upload/partner/brands/wework/logo.svg" alt="WeWork" className="h-8 mb-4 mx-auto" />
              <p className="text-blue-500 hover:underline cursor-pointer">Explore 1 workspace →</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://res.cloudinary.com/myhq/image/upload/partner/brands/cowrks/logo.svg" alt="CoWrks" className="h-8 mb-4 mx-auto" />
              <p className="text-blue-500 hover:underline cursor-pointer">Explore 1 workspace →</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img src="https://myhq.s3.amazonaws.com/perm/workspace_brand/logo/64ad4eee7b1795720ead3209?time=1711459827" alt="CoWrks" className="h-8 mb-4 mx-auto" />
              <p className="text-blue-500 hover:underline cursor-pointer">Explore 1 workspace →</p>
            </div>
            {/* Add more logos and links as needed */}
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default App;
