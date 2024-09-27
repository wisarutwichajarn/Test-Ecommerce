import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

function History() {
  return (
    <div className='bg-gradient-to-b from-yellow-200 to-black'>
        <Navbar/>
            <div className="flex justify-center max-w-screen-lg mx-auto ">
                <div className="text-[3.25rem] text-white font-light">My History</div>
                
                

            </div>
            <div className="max-w-screen-lg mx-auto mt-[3rem] p-[2rem] mb-[20rem]">
                <div className="text-white font-extralight text-[1.25rem] mt-[1rem]">
                  Late 1990s: The emergence of online clothing stores, with pioneers like Amazon expanding into apparel and eBay allowing users to buy and sell second-hand clothing.
                </div>
                <div className="text-white font-extralight text-[1.25rem] mt-[2rem] ">
                  Early 2000s: Specialized fashion retailers such as Zappos and ASOS gained prominence, offering a wide variety of styles and convenient shopping experiences.
                </div>
                <div className="text-white font-extralight text-[1.25rem] mt-[2rem]">
                Growth of fast fashion brands like Zara and H&M, leveraging the internet to deliver trendy and affordable clothing quickly.
                </div>
                <div className="text-white font-extralight text-[1.25rem] mt-[2rem]">
                Rise of social media platforms like Instagram and Facebook, transforming how fashion brands market their products and connect with customers.
                </div>
                <div className="text-white font-extralight text-[1.25rem] mt-[2rem]">
                Recent years: Technological advancements such as virtual fitting rooms, personalized recommendations, and AI-driven customer service have further enhanced the online clothing shopping experience.
                </div>
            </div>


        <Footer/>
    </div>
  )
}

export default History