import React from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='flex justify-between mt-10'>
            <span className='flex items-center'><FaLongArrowAltLeft /> <span className='font-bold pl-3'>Back</span>  </span>
            <div>
                <button type='button' className='text-base border border-black py-3 px-5 rounded-full font-normal uppercase' >Continue Shipping</button>
                <button type='button' className='text-base ml-10 border border-black bg-cyan-800 text-white py-3 px-5 rounded-full font-normal uppercase' >Continue Shipping</button>
            </div>
        </div>
    );
};

export default Footer;