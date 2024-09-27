import React , {useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'




function Article() {




  return (
    <div className='bg-gradient-to-b from-white to-primary-yellowFooter'>
      <Navbar></Navbar>
        <div className=" max-w-screen-lg  mx-auto">
          <div className="flex flex-col mt-24 mb-4 pl-0">
            <div className="font-light text-[3rem] ">
              The Ultimate Guide to Summer Fashion: Stay Stylish and Comfortable :
            </div>

            <div className=""><p className='font-semibold mt-[4.5rem] text-[1.5rem]'>Introduction</p>
              Summer is here, and it's time to update your wardrobe with light, breezy, and stylish outfits. Whether you're heading to the beach, 
              a casual brunch, or a summer party, we've got you covered with the latest fashion trends that will keep you looking great and feeling comfortable all season long.
            </div>

            <div className="font-semibold mt-[2rem] text-[1.5rem]">Fashion Tips & Trends</div>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>Embrace Bright Colors: This summer, vibrant colors like coral, turquoise, and sunny yellow are in. Pair a bold top with neutral bottoms to make a statement without going overboard.</li>
                      <li>Lightweight Fabrics: Stay cool with fabrics like cotton, linen, and chambray. These materials are breathable and perfect for hot days.</li>
                      <li>Casual Chic: Oversized shirts, flowy dresses, and relaxed-fit trousers are perfect for a laid-back yet stylish look.</li>
                    </ul>
            <div className="font-semibold mt-[2rem] text-[1.5rem]">Guides</div>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>How to Choose the Right Size: Always refer to the size chart before making a purchase. Measure your bust, waist, and hips, and compare them with the brand’s size guide to ensure a perfect fit.</li>
                      <li>Mix and Match: Create versatile outfits by mixing basics with statement pieces. A plain white tee can be paired with a vibrant skirt for a casual yet chic look.</li>
                    </ul>
          </div>

          <div className="mt-[3.75rem]">
            <div className='font-semibold  text-[1.5rem]'>Customer Stories</div>
              <p className='mt-4'>"I recently bought the Floral Maxi Dress from [Your Brand], and it quickly became my go-to summer outfit. It's comfortable, airy, and the floral print is so on-trend!"</p>
          </div>

          <div className="mt-[3.75rem]">
            <div className='font-semibold  text-[1.5rem]'>Product Highlights</div>
            <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li>New Arrivals: Explore our latest collection featuring summer must-haves like flowy maxi dresses, chic shorts, and breathable tops.</li>
                      <li>Bestsellers: Don’t miss out on our most popular items like the Classic White Shirt and the Denim Skirt – perfect for any occasion.</li>
                    </ul>
          </div>

          <div className="flex justify-center mt-[2rem] space-x-4">
            <div className="h-[1px] w-[3rem] bg-black"></div>
            <div className="h-[1px] w-[3rem] bg-black"></div>
            <div className="h-[1px] w-[3rem] bg-black"></div>
          </div>

          <div className="mt-[4.75rem]">
            <div className='font-semibold  text-[1.75rem] pl-3 pb-2'>Conclusion</div>
            <p className='mb-[5rem] '>
              Ready to refresh your summer wardrobe? Explore our collection and find the perfect pieces to stay stylish and comfortable all season long. Don’t forget to sign up for our newsletter to get the latest updates on new arrivals and exclusive offers.
            </p>
       
          </div>

            <div className="grid grid-cols-3 grid-rows-1 gap-4 mb-[5rem] mt-[7.5rem]">
              <div className="p-4 bg-white rounded-xl font-medium">
                <p className='p-2 pb-3'> "Stay Cool and Stylish: Top Summer Fashion Trends You Need to Know"</p>
                <p className='h-[1px] w-10rem bg-black'></p>
                <p className='font-extralight pt-4'>As the temperature rises, so does the opportunity to refresh your wardrobe with the latest summer fashion trends. 
                                                        Whether you're hitting the beach, attending a garden party, or just enjoying a sunny day out, 
                                                        these trends will keep you cool, comfortable, and stylish all season long.</p>
                                                        <a href='#' className="p-2 bg-black text-white flex justify-center mt-4">More</a>
              </div>
              <div className="p-4 bg-white rounded-xl font-medium">
                <p className='p-2 pb-3'>"Sunny Days Ahead: Your Go-To Guide for Stylish Summer Dressing"</p>
                <p className='h-[1px] w-10rem bg-black'></p>
                <p className='font-extralight pt-4'>Summer is the season of sunshine, beach trips, and outdoor fun. But with the rising temperatures, 
                                                        it can be a challenge to stay both cool and stylish. This guide will help you navigate the best fashion choices for the sunny days ahead, 
                                                        ensuring you're always looking and feeling your best.</p>
                                                        <a href='#' className="p-2 bg-black text-white flex justify-center mt-4">More</a>
              </div>
              <div className="p-4 bg-white rounded-xl font-medium flex flex-col">
                <p className='p-2 pb-3'>"Effortless Summer Outfits: How to Look Fabulous in the Heat"</p>
                <p className='h-[1px] w-10rem bg-black'></p>
                <p className='font-extralight pt-4'>When the temperature rises, dressing stylishly can feel like a challenge. But with the right pieces, \
                                                    you can stay cool and look fabulous all summer long. Here's how to create effortless summer 
                                                    outfits that keep you chic and comfortable, even in the heat.</p>
                                                    <a href='#' className="p-2 bg-black text-white flex justify-center  mt-10">More</a>
              </div>

            </div>
              <div className="p-[3rem] flex justify-center font-extralight text-[3rem] cursor-default">THANK YOU</div>

          
         
        </div>
       <Footer></Footer>
      </div>
  )
}

export default Article