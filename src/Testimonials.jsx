import React from 'react';

const WorkspaceForm = () => {
  return (
    <div>


    <div className="bg-white py-16 text-left ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center font-extrabold text-gray-900 mb-12">A word from our community</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-6  rounded-lg shadow-lg">
            <img src="https://res.cloudinary.com/myhq/image/upload/web/ssr/common/testimonials/operatorvc.svg" alt="Operator VC logo" className="h-12 w-32 mb-4" />
            <p className="text-lg font-semibold italic text-gray-900 mb-2">"I love using the myHQ spaces to do my meetings!"</p>
            <p className="text-base text-gray-700 mb-4">I love using the myHQ spaces to do my meetings - now I don't have to worry about getting an environment more conducive for work, where one can actually get things done, while it's still comfortable and relaxed. Oh, and the F&B being more affordable than regular obviously helps</p>
            <div className="flex   items-center">
                <hr className='bg-indigo-700 h-1 w-3/4 mb-8' />
              <img src="https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_256/web/ssr/pages/flexi/testimonials/abhishek-agrawal.png" alt="Abhishek Agrawal" className="h-20 w-20  rounded-full " />
              <hr className='bg-indigo-700 h-1 w-20 mb-8' />

            </div>
            <h2 className=" font-medium text-gray-900">Abhishek Agrawal</h2>
                <h2 className=" text-gray-600">General partner at Opreater VC</h2>
                <h2 className=" text-gray-600">Day Pass</h2>

          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <img src="https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_128/web/ssr/common/testimonials/trippin-media.png" alt="Trippin Media logo" className="h-12 w-auto mb-4" />
            <p className="text-lg italic font-semibold text-gray-900 mb-2">"I have had a great experience at every myHQ space"</p>
            <p className="text-base text-gray-700 mb-4">I have had a great experience at every myHQ space. They have chosen just the perfect places. Being a freelancer it really gets boring sometimes to work alone, but whenever I visit any space I get introduced to new people and talk about each other’s work</p>
            <div className="flex items-center">
            <hr className='bg-indigo-700 h-1 w-3/4 mb-8' />

              <img src="https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_256/web/ssr/pages/flexi/testimonials/kriti-puri.png" alt="Kirti Puri" className="h-20 w-20 rounded-full " />
              <hr className='bg-indigo-700 h-1 w-20 mb-8' />

             
              </div>
              <h2  className=" font-medium text-gray-900">Kirti Puri</h2>
              <h2 className="text-gray-600">Founder, Trippin Media</h2>
              <h2 className="text-gray-600">Day Pass</h2>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg ">
            <img src="https://res.cloudinary.com/myhq/image/upload/web/ssr/common/testimonials/spinny.svg" alt="Spinny logo" className="h-12 w-28 mb-4" />
            <p className="text-lg font-semibold text-gray-900 italic mb-2">"myHQ stitches together all key aspects of a productive workspace and networking opportunities."</p>
            <p className="text-base text-gray-700 mb-4">myHQ has helped us find the perfect office space for our team. The best part? We can focus on growing our business without getting occupied with office management. Would strongly recommend myHQ to growing stage companies and startups.</p>
            <div className="flex items-center">
            <hr className='bg-indigo-700 h-1 w-3/4 mb-8' />

              <img src="https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_256/web/ssr/pages/dedicated-landing/testimonials/people/niraj.jpg" alt="Niraj Singh" className="h-20 w-20 rounded-full " />
              <hr className='bg-indigo-700 h-1 w-20 mb-8' />

                
              
            </div>
                <h2 className=" font-medium text-gray-900">Niraj Singh</h2>
                <h2 className=" text-gray-600">Founder & CEO, Spinny</h2>
                <h2 className=" text-gray-600">Coworking Space</h2>
          </div>

        </div>
      </div>
    </div>








    <div className="  flex flex-col lg:flex-row items-center  h-screen lg:items-start p-4 ">
      <div className="w-4/5  h-3/4 ">
        <img 
          src="https://images.pexels.com/photos/159839/office-home-house-desk-159839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Workspace"
          className="w-full h-ful  object-cover rounded"
        />
      </div>
      <div className=" z-index-10  mt-8 lg:mt-0 lg:ml-8 bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">How can we help you?</h2>
        <p className="text-gray-600 mb-8">Speak with a workspace solution expert</p>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Mobile number"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <select
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Select Solution</option>
              <option>Solution 1</option>
              <option>Solution 2</option>
              <option>Solution 3</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Request Callback
          </button>
        </form>
      </div>
    </div>







    <div className="h-96 flex flex-col lg:flex-row mt-20 items-center justify-between p-8 lg:p-20 bg-gray-200 rounded-lg">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl mb-3">Reserve, check-in and check-out</h1>
          <p className='text-sm text-gray-500'>Download the myHQ app to start reserving your nearest desk</p>
          <p className='text-sm text-gray-500'>or meeting room. Cancel any time.</p>
          <div className="flex gap-4 pt-8">
            <button className="flex items-center bg-black text-black p-2 rounded-lg space-x-2 shadow-md hover:bg-gray-100">
              <img
                src="https://res.cloudinary.com/myhq/image/upload/web/ssr/common/assets/play-store-badge.svg"
                alt="Play Store Badge"
                className="w-32 h-10 object-contain"
              />
            </button>
            <button className="flex items-center bg-black text-white p-2 rounded-lg space-x-2 shadow-md hover:bg-gray-800">
              <img
                src="https://res.cloudinary.com/myhq/image/upload/web/ssr/common/assets/Appstore.svg"
                alt="App Store Badge"
                className="w-32 h-10 object-contain"
              />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8 flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_720/web/ssr/pages/flexi/app-promotion.png"
            alt="handImage"
            className="object-contain "
            style={{ width: "50%", height: "50%" }}
          />
        </div>
      </div>
<marquee behavior="loop" direction="right"><div className=" p-8 h-48 lg:p-20">
        <img className='' size="100%" src="https://res.cloudinary.com/myhq/image/upload/web/ssr/common/news/news.svg" alt="" />
      </div></marquee>
      








    </div>
  );
};

export default WorkspaceForm;