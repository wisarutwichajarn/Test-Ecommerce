import React from 'react'
import { Link } from 'react-router-dom'
import { CgColorPicker , CgCopy  } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <div className=' bg-gradient-to-b from-primary-yellowLOginGradient1 to-primary-yellowFooter '>
      <div className="max-w-screen-xl  mx-auto pr-4 pl-4">
        <div className="md:flex justify-between p-12">
          {/* CONTENT Best selling*/}
          <div className="m-10 flex flex-col items-center md:m-0">
            <div className="mb-4 font-bold">Best selling</div>
            <div className="flex flex-col">
              <div className="flex transition-all hover:scale-105 hover:text-blue-800">
                <CgColorPicker className='flex mt-2'/>
                <Link to='/Clothes' className='p-1 '>Fashion clothes</Link>
              </div>
              <div className="flex transition-all hover:scale-105 hover:text-blue-800">
                <CgColorPicker className='flex mt-2'/>
                <Link to="/Trousers" className='p-1 transition-all hover:scale-105 hover:text-blue-800'>Trousers</Link>
              </div>
              <div className="flex transition-all hover:scale-105 hover:text-blue-800">
                <CgColorPicker className='flex mt-2'/>
                <Link to="/Suit" className='p-1 '>Suit</Link>
              </div>
              <div className="flex transition-all hover:scale-105 hover:text-blue-800">
                <CgColorPicker className='flex mt-2'/>
                <Link to="/Hat"  className='p-1 transition-all hover:scale-105 hover:text-blue-800'>Hat</Link>
              </div>
              <div className="flex transition-all hover:scale-105 hover:text-blue-800">
                <CgColorPicker className='flex mt-2'/>
                <Link to="/Shoe" className='p-1 '>Shoe</Link>
              </div>
             
            </div>
          </div>
           {/* CONTENT About us*/}
           <div className="m-10 flex flex-col items-center md:m-0">
            <div className="mb-4 font-bold ">About us</div>
            <div className="flex flex-col">
              <div className="flex transition-all hover:scale-105 hover:text-blue-600">
                <CgCopy  className='flex mt-2'/>
                <Link to="/Differencesandstrengths" className='p-1 '>Differences and strengths</Link>
              </div>
              <div className="flex transition-all hover:scale-105 hover:text-blue-600">
                <CgCopy  className='flex mt-2'/>
                <Link to="/MisionVision" className='p-1 '>Mission and Vision</Link>
              </div>
              <div className="flex transition-all hover:scale-105 hover:text-blue-600">
                <CgCopy  className='flex mt-2'/>
                <Link to="/History" className='p-1 '>History</Link>
              </div>
             
            </div>
          </div>
            {/* CONTENT Contact*/}
          <div className="m-10 flex flex-col items-center md:m-0">
            <div className="mb-4 font-bold">Contact</div>
            <div className="flex flex-col ">
              <div className="flex transition-all hover:scale-105 hover:text-blue-800">
                <FaPhone className='flex mt-2'/>
                <a href="#" className='p-1 '>phone : 123-355-4574</a>
              </div>
              <div className="flex transition-all hover:scale-105 hover:text-blue-400">
                <FaLinkedin className='flex mt-2'/>
                <a href="#" className='p-1 '>LinkedIn : texttest</a>
              </div>
              <div className="flex transition-all hover:scale-105 hover:text-red-600">
                <MdEmail className='flex mt-2'/>
                <a href="#" className='p-1 '>email : test@gmail.com</a>
              </div>
            </div>
          </div>

        </div>
      </div>
        
    </div>
  )
}

export default Footer