import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars , FaTimes } from 'react-icons/fa'; 
import { CiBoxes } from "react-icons/ci";

function Navbar() {

    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


  return (
    <div className='bg-gradient-to-r from-primary-yellowNavbar to-primary-yellowNavbarGradient md:sticky top-0 z-30 opacity-90'>
        <div className="max-w-screen-2xl  mx-auto pr-4 pl-4">
            <div className=" flex justify-between items-center ">

                <div className="justify-center p-4">
                    {/* มาเเก้ตรงนี้ด้วย เรื่องรูปภาพ */}
                    <a href="#"  className='text-2xl ' ><CiBoxes className='transition-all hover:scale-125 hover:text-fuchsia-600'/></a>
                </div>

                {/* toggle button */}
                <div className="md:hidden">
                            <button id='menu-toggle'  className='text-black p-5' onClick={toggleMenu}>
                            {isMenuOpen ?  (
                                  <FaBars className='w-6 h-6  transition-all hover:scale-105 hover:text-blue-600' /> 
                            ) : (
                                  <FaTimes className='w-6 h-6  transition-all hover:scale-105 hover:text-red-500' /> 
                            )}
                              
                            </button>
                </div>

                 
                {/* Menu */}
                <div className="hidden md:flex items-center gap-8 font-light pl-12 ">

                     
                        <Link to="/" className=' transition-all hover:text-blue-600 hover:scale-105 active:text-red-700 '>
                            Home
                        </Link>
                              
                    
                    <div className="relative group">
                        <Link to="/Product" className='transition-all hover:text-blue-600 hover:scale-105 active:text-red-700'>
                            My Product 
                        </Link>
                        <div className="absolute left-0 mt-2 w-[10rem] bg-white shadow-lg opacity-0 
                                        transition-all group-hover:opacity-100">
                                <Link to="/Clothes" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Fashion clothes</Link>
                                <Link to="/Trousers"  className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Trousers</Link>
                                <Link to="/Suit" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Suit</Link>
                                <Link to="/Hat"  className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Hat</Link>
                                <Link to="/Shoe" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Shoe</Link>
                        </div>
                    </div>            
                    
                    <div className="relative group">
                        <Link to="/Contact" className='transition-all hover:text-blue-600 hover:scale-105 active:text-red-700'>
                            Contact
                        </Link> 

                        <div className="absolute left-0 mt-2 w-[8rem] bg-white shadow-lg opacity-0 
                                        transition-all group-hover:opacity-100">
                                <a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Ig</a>
                                <a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Linkedin</a>
                                <a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Goolge+</a>
                        </div>
                    </div> 
                    
                    <div className="relative group">
                        <Link to="/Article" className='transition-all hover:text-blue-600 hover:scale-105 active:text-red-700'>
                            Article
                        </Link>

                        <div className="absolute left-o mt-2 w-[8rem] bg-white shadow-lg opacity-0
                                        transtion-all group-hover:opacity-100">
                                <a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Brand image</a>
                                <a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Mission and Vision</a>          
                                <a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>History</a>
                                <a href="#" className='block px-4 py-2 text-gray-800 hover:bg-gray-100'>Blog</a>          
                        </div>
                    </div> 
                    
                    <Link to="/Login" className='font-medium flex items-center transition-all hover:text-blue-600 hover:scale-105 active:text-red-700'>Sign-in</Link>
                    <Link to="/Signin" className='font-medium p-3 mt-3 mb-3 rounded-3xl bg-black text-white
                                           transition-all hover:text-blue-300 hover:scale-105 active:text-red-700'>Register</Link>
                    
                    
                </div>

            </div>
        </div>
        {/* Moblie menu */}
        {isMenuOpen ? (
            <div className="bg-gradient-to-r from-primary-yellowNavbar to-primary-yellowNavbarGradient ">
                <div className="flex flex-col md:hidden items-center font-light p-4">

                <Link to="/" className='font-medium py-3 flex items-center transition-all hover:text-blue-600 hover:scale-105 active:text-red-700'>Home</Link>
                <Link to="/Product" className='font-medium py-3 flex items-center transition-all hover:text-blue-600 hover:scale-105 active:text-red-700'>Product</Link>
                <Link to="/Contact" className='font-medium py-3 flex items-center transition-all hover:text-blue-600 hover:scale-105 active:text-red-700'>Contact</Link>
                <Link to="/Article" className='font-medium py-3 flex items-center transition-all hover:text-blue-600 hover:scale-105 active:text-red-700'>Article</Link>
                <Link Link to="/Login" className='font-medium py-3 flex items-center transition-all hover:text-blue-600 hover:scale-105 active:text-red-700'>Log-in</Link>
                <Link to="/Signin" className='font-medium py-3 flex items-center transition-all hover:text-blue-600 hover:scale-105 active:text-red-700'>Sign-in</Link>

                </div>
            </div>
            
        ): null}
  
    </div>
  )
}

export default Navbar