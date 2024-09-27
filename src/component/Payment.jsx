import React from 'react'
import { IoLogoPaypal } from "react-icons/io5";
import { IoIosCash } from "react-icons/io";
import { FaCcVisa , FaCcJcb  } from "react-icons/fa";

function Payment() {
  return (
    <div className='bg-gradient-to-b from-white to-primary-yellowLOginGradient1'>
        <div className="max-w-screen-2xl mx-auto">
            <div className="flex justify-center font-bold text-[1.25rem] pt-[2rem] 
                            cursor-default pb-[2rem]">
                Payment method
            </div>

            <div className="max-w-screen-sm mx-auto flex justify-center space-x-8">
                <IoLogoPaypal className='size-[3rem] hover:scale-110'/>
                <FaCcVisa className='size-[3rem] hover:scale-110'/>
                <IoIosCash className='size-[3rem] hover:scale-110'/>
                <FaCcJcb className='size-[3rem] hover:scale-110'/>
            </div>
        </div>
        
    </div>
  )
}

export default Payment