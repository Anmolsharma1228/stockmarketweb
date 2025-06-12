import React from 'react'
import {HashLoader} from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
    <HashLoader color="#000" size={40}/>
   </div>
  )
}

export default Loader