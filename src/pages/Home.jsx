import React from 'react';
import t1 from '../assets/t1.jpeg';
import t2 from '../assets/t2.jpeg';
import t3 from '../assets/t3.jpeg';
import b3 from '../assets/b3.webp';
import { Link } from 'react-router-dom';
import Invest from '../components/Invest';
// UQMRRW1NCBW4JBSA
const Home = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <div className="w-[450px] sm:w-full mx-auto flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-12 my-28 gap-6">
        <div className="text-center md:text-left md:w-1/2 mx-auto">
          <p className="text-3xl md:text-4xl font-bold leading-snug">
            Stock <span className="text-gray-400">Market</span> is the Best Way to{' '}
            <span className="text-gray-400">invest</span> your Money
          </p>
          <p className='text-lg font-sans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className=' font-serif bg-red-500 px-5 py-2 rounded-sm text-xl my-4 text-white hover:bg-red-600'>Create an Account</button>
        </div>
        <div className="w-full md:w-1/2">
          <img src={b3} alt="Stock Market" className="w-full rounded-xl shadow-lg" />
        </div>
      </div>


      {/* Learning Section */}
      <div className="bg-white text-black mt-10 w-[450px] mx-auto sm:container rounded shadow-sm py-8 px-4">
        <h1 className="text-gray-600 font-semibold text-center text-2xl mb-6">
          LEARN FROM <span className="text-indigo-800">THE BEST</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-around items-center gap-6">
          {/* Card 1 */}
          <div className="text-center">
            <img src={t3} alt="Trading" className="w-[120px] h-[120px] object-cover rounded-full mx-auto" />
            <p className="mt-2 text-sm font-medium text-gray-700">TRADING FOR</p>
            <Link className="text-indigo-800 font-semibold">TUTORIALS</Link>
          </div>

          {/* Card 2 */}
          <div className="text-center">
            <img src={t2} alt="Strategies" className="w-[120px] h-[120px] object-cover rounded-full mx-auto" />
            <p className="mt-2 text-sm font-medium text-gray-700">STRATEGIES</p>
            <Link className="text-indigo-800 font-semibold">EBOOK</Link>
          </div>

          {/* Card 3 */}
          <div className="text-center">
            <img src={t1} alt="Educational" className="w-[120px] h-[120px] object-cover rounded-full mx-auto" />
            <p className="mt-2 text-sm font-medium text-gray-700">EDUCATIONAL</p>
            <Link className="text-indigo-800 font-semibold">TUTORIALS</Link>
          </div>
        </div>
      </div>
      <Invest/>
    </div>
  );
};

export default Home;
