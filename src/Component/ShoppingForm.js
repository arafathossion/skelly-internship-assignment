import React from 'react';
import { useForm } from "react-hook-form";
import './ShoppingForm.css'

const ShoppingForm = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <button type='button' className='text-base border border-black text-white bg-cyan-800 py-2 px-6 rounded-full font-normal uppercase' >LOG IN</button>
                <button type='button' className='text-base ml-10 border border-black   py-2 px-6 rounded-full font-normal uppercase' >SIGN UP</button>
                <h3 className='text-xl font-semibold pt-4 pb-6'>Shopping Information</h3>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='grid grid-cols-1'>
                        <input className='border border-gray-300 py-3 px-6 rounded-full' placeholder='Email' {...register("email")} />
                        <input className='border border-gray-300 py-3 px-6 rounded-full my-4' placeholder='First Name' {...register("firstName")} />
                        <input className='border border-gray-300 py-3 px-6 rounded-full' placeholder='Last Name' {...register("lastName")} />
                        <input className='border border-gray-300 py-3 px-6 rounded-full my-4' placeholder='Phone Number' {...register("phone")} />
                    </div>
                    <div className='grid grid-cols-1'>
                        <input className='border border-gray-300 py-3 px-6 rounded-full' placeholder='Address' {...register("address")} />
                        <input className='border border-gray-300 py-3 px-6 rounded-full my-4' placeholder='City' {...register("city")} />
                        <input className='border border-gray-300 py-3 px-6 rounded-full' placeholder='Postal Code' {...register("zip")} />
                        <select className='border border-gray-300 py-3 px-6 rounded-full my-4' placeholder='poland' {...register("poland")}>
                            <option value="poland1">poland1</option>
                            <option value="poland2">poland2</option>
                            <option value="poland3">poland3</option>
                        </select>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ShoppingForm;