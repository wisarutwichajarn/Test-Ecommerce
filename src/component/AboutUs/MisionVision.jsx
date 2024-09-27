import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

function MisionVision() {
  return (
    <div className='bg-gradient-to-br from-yellow-200 to-primary-yellowLOginGradient2 '>
        <Navbar/>
        <div className="flex flex-col items-center mb-[15rem] cursor-default">
            <div className="text-[2.75rem] cursor-default mt-[4rem] mb-[4rem]">
                Mission and Vision
            </div>
            <div className=" p-[3rem] bg-gradient-to-r rounded-[3rem] transition-all hover:scale-110">
                <div className="text-[4rem] font-bold mt-[2.5rem]">
                    Mission 
                </div>
                <div className="text-[2.5rem] font-light max-w-screen-lg mt-[3rem]">
                    "EcoPack provides sustainable and innovative packaging solutions to businesses worldwide, reducing environmental impact through biodegradable materials and efficient designs."
                </div>
            </div>
            
            <div className=" mt-[4.5rem] p-[3rem] bg-gradient-to-r rounded-[3rem] transition-all hover:scale-110">
                <div className="text-[4rem] font-bold ">
                    Vision 
                </div>
                <div className="text-[2.5rem] font-light max-w-screen-lg mt-[3rem]">
                    "Our vision is to lead the global shift towards a plastic-free future by creating packaging solutions that are both eco-friendly and accessible to all, promoting a healthier planet for future generations."
                </div>
            </div>
            
        </div>
            



        <Footer/>
    </div>
  )
}

export default MisionVision