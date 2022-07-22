import React from 'react';

const PaymentMethod = () => {
    return (
        <div className='grid grid-cols-1'>
            <div>
                <h1 className='text-xl font-semibold pt-4 pb-6'>Payment Method</h1>
                <div className='grid grid-cols-3 gap-3'>
                    <div>
                        <img className='w-32 px-6 border border-gray-500 rounded-full' src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png" alt="" />
                        <img className='w-32 px-6 my-4 border border-gray-500 rounded-full' src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png" alt="" />

                    </div>
                    <div>
                        <img className='w-32 px-6 border border-gray-500 rounded-full' src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png" alt="" />
                        <img className='w-32 px-6 my-4 border border-gray-500 rounded-full' src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png" alt="" />

                    </div>
                    <div>
                        <img className='w-32 px-6 border border-gray-500 rounded-full' src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png" alt="" />
                        <img className='w-32 px-6 my-4 border border-gray-500 rounded-full' src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png" alt="" />

                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-xl font-semibold pt-4 pb-6'>Delivery Method</h1>
                <div className='grid grid-cols-3 gap-3'>
                    <div>
                        <div className='flex justify-around items-center border border-gray-500 rounded-full py-1 px-3'>
                            <img className='w-14' src="https://logos-world.net/wp-content/uploads/2020/04/FedEx-Logo.png" alt="" />
                            <span className='text-md font-semibold'>$10</span>
                        </div>
                        <div className='flex justify-around items-center border border-gray-500 rounded-full py-1 px-3 my-4'>
                            <img className='w-14' src="https://logos-world.net/wp-content/uploads/2020/04/FedEx-Logo.png" alt="" />
                            <span className='text-md font-semibold'>$10</span>
                        </div>

                    </div>
                    <div>
                    <div className='flex justify-around items-center border border-gray-500 rounded-full py-1 px-3'>
                            <img className='w-14' src="https://logos-world.net/wp-content/uploads/2020/04/FedEx-Logo.png" alt="" />
                            <span className='text-md font-semibold'>$10</span>
                        </div>
                        <div className='flex justify-around items-center border border-gray-500 rounded-full py-1 px-3 my-4'>
                            <img className='w-14' src="https://logos-world.net/wp-content/uploads/2020/04/FedEx-Logo.png" alt="" />
                            <span className='text-md font-semibold'>$10</span>
                        </div>

                    </div>
                    <div>
                    <div className='flex justify-around items-center border border-gray-500 rounded-full py-1 px-3'>
                            <img className='w-14' src="https://logos-world.net/wp-content/uploads/2020/04/FedEx-Logo.png" alt="" />
                            <span className='text-md font-semibold'>$10</span>
                        </div>
                        <div className='flex justify-around items-center border border-gray-500 rounded-full py-1 px-3 my-4'>
                            <img className='w-14' src="https://logos-world.net/wp-content/uploads/2020/04/FedEx-Logo.png" alt="" />
                            <span className='text-md font-semibold'>$10</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;