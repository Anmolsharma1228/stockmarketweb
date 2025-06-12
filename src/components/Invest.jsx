import React, { useEffect, useState } from 'react';
import n1 from '../assets/n1.svg';
import n2 from '../assets/n2.svg';
import n3 from '../assets/n3.svg';
import n4 from '../assets/n4.svg';

const Invest = () => {  

  return (
    <div className="w-[450px] sm:container mx-auto px-4 bg-white text-black py-8 my-28 rounded shadow-lg">
  <h2 className="text-3xl font-bold mb-4 text-center font-sans">
    Why invest with Bull Stock?
  </h2>
  
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5 select-none place-items-center'>
    <div className='w-[300px] space-y-2'>
      <img src={n1} alt="Award-winning platform"/>
      <p className='text-lg sm:text-xl font-sans font-semibold'>Award-winning platform</p>
      <p className='font-sans'>Award-winning software recognized and praised by the most respected experts of the industry.</p>
    </div>

    <div className='w-[300px] space-y-2'>
      <img src={n2} alt="Customizable interface"/>
      <p className='text-lg sm:text-xl font-sans font-semibold'>Customizable interface</p>
      <p className='font-sans'>Customize the platform to make it fit better to your needs — from chart type to color theme.</p>
    </div>

    <div className='w-[300px] space-y-2'>
      <img src={n3} alt="Convenient withdrawals"/>
      <p className='text-lg sm:text-xl font-sans font-semibold'>Convenient withdrawals</p>
      <p className='font-sans'>Withdraw your money in an instant using a wide range of available payment systems.</p>
    </div>

    <div className='w-[300px] space-y-2'>
      <img src={n4} alt="Support 24/7"/>
      <p className='text-lg sm:text-xl font-sans font-semibold'>Support 24/7</p>
      <p className='font-sans'>A team of professionals always here to support you.</p>
    </div>
  </div>
</div>

  );
};

export default Invest;
