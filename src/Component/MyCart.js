import React from 'react';
import { FaTruckMoving } from "react-icons/fa";

const MyCart = () => {

    return (
        <div className='w-60'>
            <h3 className='text-xl font-semibold pt-4 pb-6'>My Cart</h3>
            <div className='flex justify-around items-center'>
                <img src="https://media.istockphoto.com/photos/friendly-young-man-in-white-tshirt-picture-id1331278879?b=1&k=20&m=1331278879&s=170667a&w=0&h=FWckAPUkwUJGCv_TPgBJZZwVwJp_u-YPvsIx1UbzNlw=" alt=""  className='w-14 h-14 rounded-full'/>
                <div className='flex flex-col'>
                    <span>T-Shirt</span>
                    <span>Summer Vibes</span>
                    <span>#243561</span>
                </div>
                <span>$89</span>
            </div>
            <div className='flex justify-around items-center my-3'>
                <img src="https://media.istockphoto.com/photos/friendly-young-man-in-white-tshirt-picture-id1331278879?b=1&k=20&m=1331278879&s=170667a&w=0&h=FWckAPUkwUJGCv_TPgBJZZwVwJp_u-YPvsIx1UbzNlw=" alt=""  className='w-14 h-14 rounded-full'/>
                <div className='flex flex-col'>
                    <span>T-Shirt</span>
                    <span>Summer Vibes</span>
                    <span>#243561</span>
                </div>
                <span>$89</span>
            </div>
            <button type='button' className='bg-gray-200 w-full py-3 rounded-full font-medium'> Total Cost: $189</button>
            <div className='flex justify-center items-center mt-8'>
            <FaTruckMoving className='text-3xl'/>
            <span className='pl-4 font-medium text-gray-400'>Your are <span className='text-black'>$30.5</span> away <br /> from free shipping</span>
            </div>
        </div>
    );
};

export default MyCart;