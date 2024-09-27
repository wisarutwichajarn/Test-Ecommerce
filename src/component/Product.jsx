import React , {useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom';


function Product() {

  const [isOpen , setIsOpen] = useState(false);
  const [buttonText , setbuttonText] = useState("More");
  const handdleClick = () => {
    setIsOpen(!isOpen)
    setbuttonText(buttonText === "More" ? "Less" : "More" );
  }

  return (
    
    <div className='bg-gradient-to-b from-white to-primary-yellowFooter'>
      <Navbar/>

      <div className="pt-[6rem] flex justify-center font-light text-[2.75rem]">
        My Product 
      </div>

      <div className="flex flex-col items-center m-24 max-w-screen-xl mx-auto">
        <div className="Clothes ">
          <div className=" p-8  rounded-[0.5rem] flex justify-start gap-5">
            <img src="https://www.pngall.com/wp-content/uploads/5/Long-Sleeve-Shirt-PNG-Picture.png" alt="" 
              className='w-[15rem] transition-all hover:scale-110 hover:brightness-125 '/>
              <div className="flex flex-col ">
              <div className="text-[1.5rem] cursor-default tracking-widest font-extrabold">Clothes</div>
              <div className="w-[1s2rem] h-0.5 bg-black m-2"></div>
                <p className='pt-1'>
                    <div className=" font-semimedium cursor-default">
                    The Essential Principles for Buying Clothes: A Practical Guide
                    </div>
                    
                      <p className=' flex'><p className='font-bold pr-2 pl-2'>Fit and Size :</p>Ensure proper fit and refer to size charts.</p>
                      <p className=' flex'><p className='font-bold pr-2 pl-2'>Comfort :</p> Choose comfortable fabrics and styles for your activities.</p>
                      <p className=' flex'><p className='font-bold pr-2 pl-2'>Style :</p> Select clothes that match your personal style and the occasion.</p>
                      <p className=' flex'><p className='font-bold pr-2 pl-2'>Quality :</p> Check the material and construction for durability.</p>
                    

                </p> 
                
                  <Link to='/Clothes' className='p-5 mt-4 rounded-md bg-white flex justify-center tracking-widest w-auto hover:bg-gray-200 font-thin text-[1.25rem]'>
                    View products
                  </Link>
                

              </div>
          </div>

        </div>
        <div className="Trousers w-[843.43px] ">
          <div className=" p-8  rounded-[0.5rem] flex justify-start gap-5">
            <img src="https://pluspng.com/img-png/trousers-png-hd--1400.png" alt="" 
              className='w-[16rem] pr-4 transition-all hover:scale-110 hover:brightness-125 '/>
              <div className="flex flex-col ">
              <div className="text-[1.5rem] cursor-default tracking-widest font-extrabold">Trousers</div>
              <div className="w-[1s2rem] h-0.5 bg-black m-2"></div>
                <p className='pt-1'>
                    <div className=" font-semimedium cursor-default">
                    Trousers are a type of clothing that covers 
                    the lower part of the body from the waist to the ankles. They typically have separate legs and can be made from various materials, including denim, cotton, and wool. Trousers are a staple in both casual and formal wardrobes.
                    </div>
                    
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                      <li className="text-gray-700">Ensure proper fit and refer to size charts.</li>
                      <li className="text-gray-700">Choose comfortable fabrics and styles for your activities.</li>
                      <li className="text-gray-700">Select clothes that match your personal style and the occasion.</li>
                      <li className="text-gray-700">Check the material and construction for durability.</li>
                    </ul>
                    

                </p> 
                <Link to='/Suit' className='p-5 mt-4 rounded-md bg-white flex justify-center tracking-widest w-auto hover:bg-gray-200 font-thin text-[1.25rem]'>
                    View products
                </Link>

              </div>
          </div>

        </div>
        <div className="Suit w-[843.43px] ">
          <div className=" p-8  rounded-[0.5rem] flex justify-start gap-5">
            <img src="https://pngimg.com/uploads/suit/suit_PNG93239.png" alt="" 
              className='w-[20rem] pr-4 transition-all hover:scale-110 hover:brightness-105 '/>
              <div className="flex flex-col ">
              <div className="text-[1.5rem] cursor-default tracking-widest font-extrabold">Suit</div>
              <div className="w-[1s2rem] h-0.5 bg-black m-2"></div>
                <p className='pt-1'>
                    <div className=" font-semimedium cursor-default">
                    A well-fitted suit is considered a classic piece of formalwear that offers a polished and sophisticated appearance.
                    </div>
                    
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 pt-4">
                      <li>A tailored coat with lapels, buttons, and often pockets.</li>
                      <li>Matching pants that complement the jacket.</li>
                      <li>Usually a dress shirt worn under the jacket.</li>
                      <li>Often worn with a tie to complete the formal look (optional in some cases).</li>
                    </ul>
                    

                </p> 
                  <Link to='/Clothes' className='p-5 mt-4 rounded-md bg-white flex justify-center tracking-widest w-auto hover:bg-gray-200 font-thin text-[1.25rem]'>
                    View products
                  </Link>
              </div>
          </div>

        </div>


        

        { isOpen ? (
          <div className="">
            <div className="hat  w-[843.43px] ">
            <div className=" p-8  rounded-[0.5rem] flex justify-start gap-5">
              <img src="https://freepngimg.com/thumb/hat/7-hat-png-image.png" alt="" 
                className='w-[18rem] h-[18rem] pr-4 transition-all hover:scale-110 hover:brightness-105 '/>
                <div className="flex flex-col ">
                <div className="text-[1.5rem] cursor-default tracking-widest font-extrabold">hat </div>
                <div className="w-[1s2rem] h-0.5 bg-black m-2"></div>
                  <p className='pt-1'>
                      <div className=" font-semimedium cursor-default">
                      A hat is a headwear designed to provide various functions such as protection from the elements, fashion, or cultural significance. Here are some common types:
                      </div>
                      
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Baseball Cap: A casual hat with a rounded crown and a stiff bill or brim.</li>
                        <li>Fedora: A formal hat with a soft brim, a creased crown, and typically made from felt.</li>
                        <li>Beanie: A soft, close-fitting hat usually made from knit fabric, ideal for warmth.</li>
                        
                      </ul>
                                          

                  </p> 
                  <Link to='/Hat' className='p-5 mt-4 rounded-md bg-white flex justify-center tracking-widest w-auto hover:bg-gray-200 font-thin text-[1.25rem]'>
                    View products
                  </Link>
                </div>
            </div>

            </div>
            <div className="Shoe  w-[843.43px] ">
            <div className=" p-8  rounded-[0.5rem] flex justify-start gap-5">
              <img src="http://pluspng.com/img-png/shoes-png--2339.png" alt="" 
                className='w-[20rem] h-[18rem] pr-4 transition-all hover:scale-110 hover:brightness-105 '/>
                <div className="flex flex-col ">
                <div className="text-[1.5rem] cursor-default tracking-widest font-extrabold">Shoe </div>
                <div className="w-[1s2rem] h-0.5 bg-black m-2"></div>
                  <p className='pt-1'>
                      <div className=" font-semimedium cursor-default">
                        Choosing the right pair of shoes depends on several factors, including the occasion, your style preferences, comfort,
                        and the specific use case. Here’s a guide to help you select the perfect shoes:
                      </div>
                      
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Casual Wear: Sneakers, loafers, or slip-ons are great for everyday casual wear.</li>
                        <li>Formal Wear: Opt for dress shoes like oxfords, brogues, or heels for formal occasions.</li>
                        <li>Sports/Outdoor Activities: Choose specialized shoes like running shoes, hiking boots, or training shoes for sports or outdoor activities.</li>
                        <li>Work: Depending on your job, you might need comfortable, supportive shoes like office shoes, work boots, or safety shoes.</li>
                        
                      </ul>
                                          

                  </p> 
                  <Link to='/Shoe' className='p-5 mt-4 rounded-md bg-white flex justify-center tracking-widest w-auto hover:bg-gray-200 font-thin text-[1.25rem]'>
                    View products
                  </Link>
                </div>
            </div>

            </div>
          </div>
          
        ):(
          null
        )
        }
        <button className='bg-blue-400 pr-5 pl-5 pt-3 pb-3 rounded-lg m-8 font-bold text-[1.10rem] active:bg-blue-500' 
                      onClick={handdleClick}> 
          {buttonText} 
        </button>
        


      </div>

      <Footer/>
    </div>
  )
}

export default Product