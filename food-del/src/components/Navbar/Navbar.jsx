import React,{ useState } from 'react'
import { assets } from '../../assets/assets'
import search from '../../assets/search.svg'

export default function Navbar(){

    const[currentPage,setCurrentPage] = useState('Home')

    const handleClick = (page) => {
        setCurrentPage(page)
    }

    return(
        <nav className='flex justify-between'>
            <div>
                <img src={assets.logo} alt="" />
            </div>
            <ul className='flex items-center'>
            <li><a href="#" onClick={() => handleClick('Home')} className={ currentPage === 'Home' ? 'px-4 py-2 bg-gray-600 text-white rounded' : "px-4 py-2 text-gray-800"}>Home</a></li>
            <li><a href="#" onClick={() => handleClick('Menu')} className={ currentPage === 'Menu' ? 'px-4 py-2 bg-gray-600 text-white rounded' : "px-4 py-2 text-gray-800"}>Menu</a></li>
            <li><a href="#" onClick={() => handleClick('Mobile App')} className={ currentPage === 'Mobile App' ? 'px-4 py-2 bg-gray-600 text-white rounded' : "px-4 py-2 text-gray-800"}>Mobile App</a></li>
            <li><a href="#" onClick={() => handleClick('Contact Us')} className={ currentPage === 'Contact Us' ? 'px-4 py-2 bg-gray-600 text-white rounded' : "px-4 py-2 text-gray-800"}>Contact Us</a></li>
            </ul>
            <div className='flex space-x-8  items-center'>
                <img src={search} alt=""/>
               <button onClick={() => handleClick('Sign in')} className={currentPage === 'Sign in' ? 'px-4 py-2 bg-gray-600 text-white rounded' : "px-4 py-2 text-gray-800"}>Sign in</button>
            </div>
        </nav>
    )
} 