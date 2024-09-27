import React, { useState }  from 'react'
import Navbar from '../../Navbar';
import Footer from '../../Footer'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FcBookmark } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { MdVerified } from "react-icons/md";
import { FaCcVisa } from "react-icons/fa";
import { FaCcJcb } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { IoQrCodeSharp } from "react-icons/io5";


function Clothes2() {
  const [selectedColor, setSelectedColor] = useState('');
  const colors = ['yellow', 'blue', 'green' ];

  const products = [
    {
      id: 2,
      name: 'Product 3',
      price: 145.00,
      originalPrice: 249.00,
      discount: '45%',
      imageUrl: 'https://pngimg.com/uploads/dress_shirt/small/dress_shirt_PNG8080.png'
    },
    {
      id: 2,
      name: 'Product 4',
      price: 245.00,
      originalPrice: 259.00,
      discount: '7%',
      imageUrl: 'https://pngimg.com/uploads/dress_shirt/small/dress_shirt_PNG8082.png'
    },
    {
      id: 2,
      name: 'Product 5',
      price: 245.00,
      originalPrice: 259.00,
      discount: '7%',
      imageUrl: 'https://pngimg.com/uploads/dress_shirt/small/dress_shirt_PNG8084.png'
    },
    // เพิ่มรายการสินค้าอื่น ๆ ได้ในรูปแบบเดียวกัน
  ];
  const comments =[
    {
      id:1,
      name:'Mr.Wisarut JK.',
      text:"The quality is very good, I hope my friends will  trust it more, the owner has a good attitude, I will patronize again,it can not be cheaper, I will bring my friends to your house to buy",
      date:'6 May 2024',
    },
    {
      id:2,
      name:'Mr.DEAr SC.',
      text:"The quality is very good, I hope my friends will trust it more. The owner has a great attitude. I will definitely patronize again. Even though it can't be cheaper, I will still bring my friends to your store to buy random items",
      date:'12 Jan 2023',
    },
    {
      id:3,
      name:'Mr.Fon namfon',
      text:"The quality is very good, I hope my friends will trust it more. The owner has a great attitude. I will definitely patronize again. Even though it can't be cheaper, I will still bring my friends to your store to buy random items",
      date:'24 Dec 2023',
    },
    
  ]
    
  

  const [quantity , setQuantity] = useState(1);
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }




  return (
    <div className='bg-gradient-to-br from-slate-50 to-yellow-200'>
        <Navbar/>
        <div className="max-w-screen-2xl mx-auto">
                <div className="flex justify-center text-[2.5rem] font-extralight m-[5rem]">
                Clothes 
                </div>
                <div className="bg-gradient-to-r from-primary-yellowLOginGradient1 to-primary-yellowNavbarGradient mb-[3rem] 
                                max-w-screen-lg mx-auto p-3 rounded-[4px] shadow-lg">
                         <div className="md:flex p-4 ">
                            <div className="scale-75 md:scale-100 flex flex-col justify-center">
                              <img src="https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8081.png" 
                              alt="" 
                              className='w-[30rem] transition-all hover:scale-105 hover:brightness-110 p-5'/>
                            </div>
                            <div className="ml-4">
                                <div className="font-light text-[3.5rem]">Product 2</div>
                                <div className="flex items-center ">
                                  <MdOutlineStarPurple500 className='scale-110 mb-1'/>
                                  <MdOutlineStarPurple500 className='scale-110 mb-1' />
                                  <MdOutlineStarPurple500 className='scale-110 mb-1' />
                                  <MdOutlineStarPurple500 className='scale-110 mb-1' />
                                  <MdOutlineStarPurple500 className='scale-110 mb-1' />
                                  <div className="pl-2 mb-1 text-gray-500 ">12 Ratings</div>
                                </div>
                                <div className="flex justify-between mt-[2rem] ">
                                  <div className="font-extralight text-[1.2rem]">Brand : T-Shirt</div>
                                  <div className="flex items-center space-x-2 ">
                                    <FcBookmark className='scale-125'/>
                                    <FcLike className='scale-125'/>
                                  </div>
                                </div>
                                <div className=" mt-2 h-[1px] w-[28rem] bg-black"></div>
                                <div className=" pt-2 text-[3.5rem] font-medium text-orange-400 ">$ 165.00</div>
                                <div className="flex ">
                                  <div className="pl-2 text-[1.5rem] line-through">$ 299.00</div>
                                  <div className=" flex justify-center">
                                    <div className="text-gray-600 pl-2 pt-2">
                                      -81%
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center ">
                                  <div className="pt-4 font-medium text-[1.3rem]">
                                    Color family :
                                  </div>
                                  <div className="flex space-x-2 pt-4 pl-2">

                                      {colors.map((color) => (
                                          <button 
                                          key={color}
                                          className={`w-5 h-5 rounded-full border-1 border-gray-300 ${selectedColor === color ? 'ring-1 ring-offset-1 ring-gray-500' : ''
                                            }`}
                                          style={{backgroundColor : color}}
                                          onClick = {() => setSelectedColor(color)}>
                                          </button>
                                      ))}

                                  </div>
                                  
                                </div>
                              

                                <div className="flex mt-4 ">
                                  <div className=" font-medium mr-2 mt-2 text-[1.3rem]">
                                    Quantity :
                                  </div>
                                  <button className='bg-black text-white font-semibold text-[2rem]
                                  pr-4 pl-4 rounded-xl active:bg-gray-600' onClick={decreaseQuantity}>-</button>
                                      <div className="text-[2rem] mr-2 ml-2">
                                        {quantity}
                                      </div>
                                  <button className='bg-black text-white font-semibold text-[2rem]
                                  pr-4 pl-4 rounded-xl active:bg-gray-600' onClick={increaseQuantity}>+</button>
                                </div>

                                <div className="flex  p-2 mt-[1rem]  ">
                                      <button className=" p-8 bg-yellow-400 mr-16 rounded-2xl active:bg-yellow-500 text-white font-bold text-[1.35rem] hover:shadow-lg">
                                        Buy Now
                                      </button>
                                      <button className=" p-8 bg-yellow-400 rounded-2xl active:bg-yellow-500 text-white font-bold text-[1.35rem] hover:shadow-lg">
                                        Add to Cart
                                      </button>
                                </div>
                                
                            </div>
                         </div>
                         <div className="">
                            <div className=" pl-[2rem] font-bold text-[1.35rem]">Product Reviews</div>
                            <div className=" m-3 h-[0.5px] w-[60rem] bg-black "></div>
                         
                              
                              {/* CUSTOMER */}
                              <div className="mt-[1.05rem] p-2">
                                <div className="flex justify-around p-[1rem] space-x-3">
                                {comments.map((comment) => ( 
                                  
                                  <div  className='block'>
                                      <div className="flex p-2 space-x-1">
                                        <MdOutlineStarPurple500 className='scale-125 mb-1 text-yellow-400'/>
                                        <MdOutlineStarPurple500 className='scale-125 mb-1 text-yellow-400'/>
                                        <MdOutlineStarPurple500 className='scale-125 mb-1 text-yellow-400'/>
                                        <MdOutlineStarPurple500 className='scale-125 mb-1 text-yellow-400'/>
                                        <MdOutlineStarPurple500 className='scale-125 mb-1 text-yellow-400'/>
                                      </div>
                                      <div className="font-medium text-[1.45rem]">{comment.name}</div>
                                      <div className="pt-2 whitespace-pre-line ">{comment.text}</div>
                                      <div className="flex space-x-[2.75rem] position mb-[3rem]">
                                        <div className="pt-5 font-medium absolute">
                                          {comment.date}
                                          <div className="flex ">
                                            <MdVerified className='text-green-500 scale-110 mt-1'></MdVerified>
                                            <div className=" pl-2 pb-1">Vertified Comments</div>
                                          </div>
                                        </div>
                                    </div>

                                    
                                  </div>
                                
                              ))}
                                </div>
                                
                              </div>
                            
                         </div>         



                </div>

                <div className=" mx-auto p-3 mb-[1.25rem]"> 
                  <div className="text-[2.5rem]  font-light cursor-default">Just For You</div>
                    <div className="bg-gradient-to-br from-primary-yellowNavbarGradient  to-primary-yellowLOginGradient2 p-[3rem] rounded-[2rem] shadow-md">
                         <div className="md:flex space-x-[0.2rem] justify-around">
                          {products.map(product => (
                          <a  key={product.id} className="bg-primary-yellowNavbarGradient p-4 space-x-2 hover:shadow-xl">
                            <img src={product.imageUrl} className='w-[12rem] transition-all hover:scale-105 hover:brightness-110' alt={product.name} />
                            <div className="h-[1px] w-[12rem] bg-black mt-4"></div>
                            <div className="text-2xl font-medium pt-2">{product.name}</div>
                            <div className="text-3xl font-medium pt-2 text-orange-400">${product.price}</div>
                            <div className="flex">
                              <div className="text-xl font-normal pt-1 line-through">${product.originalPrice}</div>
                              <div className="text-lg font-normal pt-1 pl-2 text-gray-600">{product.discount}</div>
                            </div>
                          </a>
                          ))}

                          </div>               
                    </div>
                </div>

                <div className="pt-[6rem] flex justify-center p-3 ">
                    <div className="text-[3rem] ">Payment Methods</div>
                    
                </div>
                <div className="flex justify-center space-x-8 mb-12 mt-6">
                  <FaCcVisa className='w-[3rem] h-[3rem] transition-all  hover:scale-105'/>
                  <FaCcJcb className='w-[3rem] h-[3rem] transition-all  hover:scale-105'/>
                  <FaCcPaypal className='w-[3rem] h-[3rem] transition-all  hover:scale-105'/>
                  <IoQrCodeSharp className='w-[3rem] h-[3rem] transition-all  hover:scale-105'/>
                </div>
        </div>
        <Footer/>
    </div>

  )
}

export default lothes2