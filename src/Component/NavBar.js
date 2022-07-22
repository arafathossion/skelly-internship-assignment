import React from 'react';
import { FaAccusoft } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
    const menus = ['Men','Women','Kids'];
    const icons = ['<FaSistrix/>','<FaUserAlt/>','<FaShoppingCart/>'];

    return (
        <nav className='grid grid-cols-10 items-center pb-4 border-b-2 border-gary-600'>
            <Link to='/' className='font-semibold flex items-center'><FaAccusoft className='text-5xl'></FaAccusoft> <span className='text-orange-500 ml-2'>E-</span> Shop </Link>
            <ul className='col-span-8 m-auto'>
                {
                    menus.map(menu =><li className='inline-block px-6 font-semibold'>{menu}</li>)
                }
            </ul>
            <ul className='flex justify-between'>
                <li><FaSistrix/></li>
                <li><FaShoppingCart/></li>
                <li><FaUserAlt/></li>
            </ul>
        </nav>
    );
};

export default NavBar;