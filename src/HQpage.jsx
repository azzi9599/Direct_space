import React from 'react';

const MyHQPage = () => {
  return (
    <div className=''>
    <div className="min-h-screen  max-w-full  flex items-center justify-center">
      <div className="w-full max-w-7xl  bg-white shadow-md rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="bg-green-100 p-10 rounded-lg text-center col-span-1">
            <div className="text-4xl font-semibold text-blue-700">100+</div>
            <div className="text-lg mt-2 text-gray-700">Office Space Consultants</div>
            <div className="mt-6 text-4xl font-semibold text-blue-700">5,000+</div>
            <div className="text-lg mt-2 text-gray-700">Partner Spaces</div>
            <div className="mt-6 text-4xl font-semibold text-blue-700">2,000+</div>
            <div className="text-lg mt-2 text-gray-700">Clients Served</div>
            <div className="mt-6 text-4xl font-semibold text-blue-700">20,000+</div>
            <div className="text-lg mt-2 text-gray-700">Seats Delivered</div>
          </div>
          <div className="flex flex-col text-left justify-center col-span-2">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Why businesses choose myHQ</h1>
            <p className="mb-4 text-lg text-gray-600">Focus on your core business as we handle workspace customization, management, and ensure it's always ready for your business growth.</p>
            <h2 className="text-lg font-semibold ">Prime options nationwide</h2>
            <p className="text-lg text-gray-700 mb-4">Explore our diverse and unparalleled portfolio of office spaces, offering the finest options strategically located across the nation.</p>
            <ul className="list pl-5 list-disc space-y-2 text-lg text-gray-700">
              <li>One-stop solution for all office space needs</li>
              <li>Premium spaces in strategic locations</li>
              <li>Cost effective solutions</li>
              <li>Contemporary amenities for increased output</li>
            </ul>
            <button className="mt-6 w-44 bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Request Callback</button>
          </div>
        </div>
      </div>
    </div>














    <div className="min-h-screen  text-left flex items-center justify-center">
      <div className="w-full max-w-7xl p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Workspaces for everyone</h1>
        <p className="mb-6 text-lg text-gray-600">Whether you are a freelancer, early stage start-up or an enterprise. Find the workspace that's right for you.</p>
        
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Select & customize your ideal solutions</h2>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <button className="bg-blue-100 border-2 border-blue-500 p-4 rounded-lg">Enterprise & Large Scale Companies</button>
          <button className="bg-white border-2 border-gray-200 p-4 rounded-lg">Growing Companies & Small Businesses</button>
          <button className="bg-white border-2 border-gray-200 p-4 rounded-lg">Freelancers & Business Travellers</button>
          <button className="bg-white border-2 border-gray-200 p-4 rounded-lg">Early stage startups & Non-Profits</button>
          <button className="bg-white border-2 border-gray-200 p-4 rounded-lg">Remote & Mobile Teams</button>
          <button className="bg-white border-2 border-gray-200 p-4 rounded-lg">New and Expanding Businesses</button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src="https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_720/web/ssr/pages/home/workspaces-for-everyone/fixed-desk.png" alt="Coworking Space" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Coworking Space</h3>
              <p className="text-green-600 mb-2">Full-time offices for teams of all sizes</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Dedicated seats & private cabins</li>
                <li>Fully-equipped coworking spaces</li>
                <li>Ideal for individual or small teams</li>
              </ul>
              <a href="#" className="text-blue-600 mt-2 inline-block">Explore Coworking Space &rarr;</a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src="https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_720/web/ssr/pages/home/workspaces-for-everyone/managed-office-2.png" alt="Managed Office" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Managed Office</h3>
              <p className="text-green-600 mb-2">Private access office for bigger teams</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Fully furnished customized office</li>
                <li>Fully managed operations & housekeeping</li>
                <li>Ideal for 50+ team size</li>
              </ul>
              <p className="text-gray-500 mt-2">Coming Soon!</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src="https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_720/web/ssr/pages/home/workspaces-for-everyone/team-flexi.png" alt="Team Plan" className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Team Plan</h3>
              <p className="text-green-600 mb-2">Flexible day pass for remote & hybrid teams</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Centralized dashboard for entire team</li>
                <li>Manage & track bookings at one place</li>
                <li>Ideal for remote, distributed & hybrid teams</li>
              </ul>
              <a href="#" className="text-blue-600 mt-2 inline-block">Explore Team Plan &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default MyHQPage;
