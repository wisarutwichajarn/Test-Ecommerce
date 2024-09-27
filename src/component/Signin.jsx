import React from 'react'
import Navbar from './Navbar'
import { FaFacebook , FaLinkedin , FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
function Signin() {
  return (
<div>
        <Navbar></Navbar>
        <div className="bg-gradient-to-b from-primary-yellowLOginGradient1 to-primary-yellowLOginGradient2 min-h-screen 
                        flex flex-col justify-center items-center  ">
          <div className="p-20 mt-12 md:p-20 max-w-screen-lg flex flex-col items-center 
                        bg-gradient-to-br from-yellow-200 to-yellow-50 rounded-3xl ">
                          
              <div className="">
                <nav className='font-light text-white bg-black pl-5 pr-5 pt-3 pb-3 rounded-3xl '>Sign-up</nav>
              </div>



              {/* FORM */}
              <form action="" className='pt-12 flex flex-col space-y-3'>

                <label htmlFor="" >
                  <input type="text" placeholder="Firstname" className='p-3 w-96 h-8 rounded-xl mt-2'/>
                </label>
                <label htmlFor="" >
                  <input type="text" placeholder="Lastname" className='p-3 w-96 h-8 rounded-xl mt-2'/>
                </label>
                <label htmlFor="" >
                  <input type="text" placeholder="Email" className='p-3 w-96 h-8 rounded-xl mt-2'/>
                </label>
                <label htmlFor="" >
                  <input type="Password" placeholder="Password" className='p-3 w-96 h-8 rounded-xl mt-2'/>
                </label>
                <label htmlFor="" >
                  <input type="Password" placeholder="Confirm Password" className='p-3 w-96 h-8 rounded-xl mt-2'/>
                </label>
                <label htmlFor="" >
                  <input type="tel" placeholder="Phone Number" className='p-3 w-96 h-8 rounded-xl mt-2'/>
                </label>

              </form>



            <button className="bg-red-500 text-white font-bold mt-12 pl-5 pr-5 pt-3 pb-3 rounded-3xl
                                 transition-all hover:scale-110 hover:bg-red-700
                                 active:scale-105">
              REGISTER
            </button>


            <div className="mt-4">
              Have an Account ?
              <a href="#" className='font-semibold pl-1 '>Sign-in</a>
            </div>
            
            
            

          </div>
        </div>
    </div>
  )
}

export default Signin