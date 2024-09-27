import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { FaFacebook , FaLinkedin }  from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Contact() {

  

  return (
    <div className='bg-gradient-to-b from-white to-primary-yellowFooter'>
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center m-24">
            <div className="flex justify-center font-light text-[3rem]">
              Contact
            </div>
        </div>
        <div className="flex  items-center justify-around">
          <div className="flex flex-col">
              <div className="flex flex-col ml-[6rem] cursor-default mb-[3rem]">
                <p className='font-normal text-[1.5rem] '>Address:</p>
                <p>XYZ Company Ltd.</p>
                <p>1234 Sukhumvit Road, Khlong Tan Nuea,</p>
                <p>Watthana, Bangkok 10110, Thailand</p>
              </div>
              <div className="flex flex-col ml-[6rem] cursor-default mb-[3rem]">
                <p className='font-normal text-[1.5rem] '>Phone:</p>
                <p>+66 123-355-4574 Monday-Friday, 9:00 AM - 6:00 PM</p>
                
              </div>
              <div className="flex flex-col ml-[6rem] cursor-default mb-[3rem]">
                <p className='font-normal text-[1.5rem] '>Email:</p>
                <p>test@gmail.com</p>
              </div>
              <div className="flex flex-col ml-[6rem] cursor-default mb-[3rem]">
                <p className='font-normal text-[1.5rem] '>Business Hours:</p>
                <p>Monday-Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday-Sunday: Closed</p>
              </div>
            </div>
            <div className=" flex items-center ml-[2rem] bottom-[2rem]  pb-[45px]">
                <form action="">
                  <div className="p-16 mt-12 md:p-20 max-w-screen-lg flex flex-col items-center bg-gradient-to-br from-yellow-200 to-yellow-50
                              rounded-3xl ">
                    <div className="">
                      <nav className='font-light text-white bg-red-600 pl-5 pr-5 pt-3 pb-3 rounded-3xl '>Contact Form</nav>
                    </div>
                    <form action="" className='pt-10 flex flex-col space-y-3'>
                        <input type="text" placeholder='Username' className='p-3 w-72 h-8 rounded-2xl'/>
                        <input type="password" placeholder='Email' className='p-3 w-72 h-8 rounded-2xl'/>
                        <input type="tel" placeholder='Phone Number' className='p-3 w-72 h-8 rounded-2xl'/>
                        <label htmlFor="" className='text-gray-600 pt-4' >Message</label>
                        <input type="text" placeholder='' className='p-3 w-72 h-24 rounded-2xl '/>
                    </form>
                    
                        <button className="bg-black text-white font-bold mt-12 pl-5 pr-5 pt-3 pb-3 rounded-3xl
                                            transition-all hover:translate-x-0.5 hover:-translate-y-0.5 hover:bg-blue-800
                                            active:-translate-x-0.5 active:translate-y-0.5">
                          Submit
                        </button>
                
                

                  </div>
                </form>
            </div>
        </div>

        <div className="flex justify-center mt-12 mb-10 font-light text-[2.10rem] cursor-default">
          Map
        </div>
        <div className="max-w-screen-lg mx-auto">
          <div className="w-full h-[400px] overflow-hidden flex justify-center mb-[5rem] rounded-[3px]" >
            
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.8324371527772!2d100.52745723668924!3d13.738728191990843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2997d150d2ba3%3A0x7df5ba5c41ce37d4!2z4Liq4Liz4LiZ4Lix4LiB4LiH4Liy4LiZ4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4LiiICjguKrguJnguKEuKQ!5e0!3m2!1sth!2sth!4v1724988843657!5m2!1sth!2sth"
              width="100%"
              height="100%"
              className="border-0 "
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
      
          
          </div>
        </div>

        <div className="flex justify-center">
          <div className="h-0.5 w-[25rem] bg-black  mb-[5rem]"></div>
        </div>
        <div className="flex flex-col items-center  text-[1.5rem] mb-[2rem]">
          <p className='font-bold'> Additional Contact Channels</p>
          

          <p>---- Follow us or reach out through these channels ----</p>
          <div className="flex justify-center mt-[2.25rem] space-x-8 ">
            <FaFacebook className='w-12 h-12 hover:scale-110 '/>
            <FaLinkedin className='w-12 h-12 hover:scale-110'/>
            <AiFillInstagram className='w-12 h-12 hover:scale-110'/>

          </div>
        </div>

        <div className="flex justify-center mt-[5rem] font-extralight text-[2.2rem]">Frequently Asked Questions (FAQ)</div>
        <div className="flex justify-center mt-[4.5rem] max-w-screen-lg mx-auto space-x-[3rem] mb-[4rem] cursor-default ">
          <div className="1 p-[1rem] bg-gradient-to-tr from-yellow-50 to-white rounded-[5px] shadow-lg transition-all hover:scale-105">
            <p className='pb-5 text-red-500'><p className='font-semibold'>Q:</p> How can I place an order?</p>
            <p><p className='font-semibold'>A:</p> You can place an order through our website or by calling our customer service team directly.</p>
          </div>
          <div className="2 p-[1rem] bg-gradient-to-tr from-yellow-50 to-white rounded-[5px] shadow-lg transition-all hover:scale-105">
            <p className='pb-5 text-red-500'><p className='font-semibold'>Q:</p> What is your return policy?</p>
            <p><p className='font-semibold'>A:</p> You can return products within 7 days of receipt. Please contact our customer service for assistance.</p>
          </div>
          <div className="3 p-[1rem] bg-gradient-to-tr from-yellow-50 to-white rounded-[5px] shadow-lg transition-all hover:scale-105">
            <p className='pb-5 text-red-500'><p className='font-semibold '>Q:</p> How long does shipping take?</p>
            <p><p className='font-semibold'>A:</p>  Shipping typically takes 5-7 business days for standard delivery. Expedited shipping options are available at checkout.</p>
          </div>
        </div>
        
         
          
          
      </div>
      
        
      <Footer></Footer>
    </div>
  )
}

export default Contact