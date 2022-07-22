import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";

const Header = () => {
    return (
        <div className='flex justify-between my-8'>
            <h4 className='font-bold'>Shipping and Payment</h4>
            <div className='flex'>
                <span className='mr-12 p-2 rounded-full border border-cyan-800 '>
                    <FaShoppingCart />
                </span>
                <span className='p-2 rounded-full bg-cyan-800 text-white'>
                    <FaTruckMoving />
                </span>
            </div>
        </div>
    );
};

export default Header;