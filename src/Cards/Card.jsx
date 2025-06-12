import React from "react";
import { CiHeart } from "react-icons/ci";

const Card = ({ image, price, rating, FirstName, title }) => {
  return (
    <div className="opacity-0 animate-fade-in">
      <div className="text-gray-900 w-[300px] mx-auto">
         <div className="flex items-center justify-center mt-[80px]">
           <div className=" rounded-lg overflow-hidden shadow-lg w-[300px]">
             <div className="h-48 w-full">
               <img
                 src={image}
                 alt="Home in Countryside"
                 className="h-full w-full object-contain"
               />
             </div>
   
             <div className="p-6">
               <div className="flex items-baseline">
                 <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs uppercase font-semibold tracking-wide">
                 New
                 </span>
               </div>
               <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                 {title}
               </h4>
               <div className="mt-1 flex justify-between">
                 <span className="font-semibold text-lg">Price: ${price}</span>
                 <button>
                 <CiHeart className="text-2xl" />
                 </button>
               </div>
               <div className="mt-2 flex items-center">
                 <span className="ml-2 text-gray-600 text-[18px] space-x-4">{FirstName}</span>
               </div>
             </div>
           </div>
         </div>
       </div>
    </div>
  );
};

export default Card;
