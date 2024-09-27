import React , { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Payment from './Payment'


function Home() {
  const [OpenIsMore , setOpenisMore] = useState(false);
  const [buttonText , setButtontext] = useState('MORE');

  const handleClick = () =>{
    setOpenisMore(!OpenIsMore);
    setButtontext(buttonText === 'MORE' ? "LESS" : "MORE" )
  }



  return (
    <div className='bg-gradient-to-b from-white to-primary-yellowFooter '>
      <Navbar></Navbar>
      <div className="flex flex-col items-center  mt-24 mb-12">
        <div className="text-[2.75rem] cursor-default">
          Welcome
        </div>
        <div className="text-green-500 mt-[3rem] text-[4.5rem] tracking-widest 
                        transition-all hover:scale-110 cursor-default">
          Test Shop
        </div>


        {/* PRODUCT */}
        <div className="mt-[6rem] mb-[6rem] text-[3.75rem] font-extralight cursor-default">
          My Products
        </div>


        <div className="flex flex-col mt-[2.75rem] space-y-[2rem] mb-[4rem] max-w-screen-xl ">
          <div className="font-extralight text-[2.75rem] cursor-default ">Fashion clothes</div>
            <div id='Fashion clothes' className=" rounded-[1.5rem] bg-gradient-to-br from-primary-yellowNavbarGradient to-primary-yellowFooter shadow-md   ">
                <div className="p-[2.5rem] flex space-x-[2.5rem] ">
                  <a href="#" className="p-[2.5rem] bg-gradient-to-br from-yellow-50 to-yellow-200 rounded-[0.5rem] hover:shadow-md hover:scale-[101%]
                            flex flex-col">
                    <div className="pb-3 font-light m-2">clothes1</div>
                    <img src="https://pngimg.com/uploads/dress_shirt/small/dress_shirt_PNG8083.png" className='w-24 transition-all hover:scale-110 hover:brightness-110'  alt="" />
                    <div className="price pt-3 text-2xl hover:font-bold block text-red-700">$129</div>
                    <div className="flex space-x-2">
                      <div className="price text-sm hover:font-bold block line-through">$159</div>
                      <div className="price text-sm hover:font-bold block text-gray-500">-18%</div>
                    </div>
                  </a>
                  <a href="#" className="p-[2.5rem] bg-gradient-to-br from-yellow-50 to-yellow-200 rounded-[0.5rem] hover:shadow-md hover:scale-[101%]
                            flex flex-col">
                    <div className="pb-3 font-light  m-2">clothes2</div>
                    <img src="https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8081.png" className='w-24 transition-all hover:scale-110 hover:brightness-110' alt="" />
                    <div className="price pt-3 text-2xl hover:font-bold block text-red-700">$119</div>
                    <div className="flex space-x-2">
                      <div className="price text-sm hover:font-bold block line-through">$129</div>
                      <div className="price text-sm hover:font-bold block text-gray-500">-7%</div>
                    </div>
                  </a>
                  <a href="#" className="p-[2.5rem] bg-gradient-to-br from-yellow-50 to-yellow-200 rounded-[0.5rem] hover:shadow-md hover:scale-[101%] flex flex-col">
                    <div className="pb-3 font-light m-2">clothes3</div>
                    <img src="https://pngimg.com/uploads/dress_shirt/small/dress_shirt_PNG8080.png" className='w-24 transition-all hover:scale-110 hover:brightness-110' alt="" />
                    <div className="price pt-3 text-2xl hover:font-bold block text-red-700">$109</div>
                    <div className="flex space-x-2">
                      <div className="price text-sm hover:font-bold block line-through">$229</div>
                      <div className="price text-sm hover:font-bold block text-gray-500">-52%</div>
                    </div>
                  </a>
                  <a href="#" className="p-[2.5rem] bg-gradient-to-br from-yellow-50 to-yellow-200 rounded-[0.5rem] hover:shadow-md hover:scale-[101%] flex flex-col">
                    <div className="pb-3 font-light m-2">clothes4</div>
                    <img src="https://pngimg.com/uploads/dress_shirt/small/dress_shirt_PNG8082.png" className='w-24 transition-all hover:scale-110 hover:brightness-110' alt="" />
                    <div className="price pt-3 text-2xl hover:font-bold block text-red-700">$99</div>
                    <div className="flex space-x-2">
                      <div className="price text-sm hover:font-bold block line-through">$179</div>
                      <div className="price text-sm hover:font-bold block text-gray-500">-44%</div>
                    </div>
                  </a>
                  <a href="#" className="p-[2.5rem] bg-gradient-to-br from-yellow-50 to-yellow-200 rounded-[0.5rem] hover:shadow-md hover:scale-[101%] flex flex-col">
                    <div className="pb-3 font-light m-2">clothes5</div>
                    <img src="https://pngimg.com/uploads/dress_shirt/small/dress_shirt_PNG8084.png" className='w-24 transition-all hover:scale-110 hover:brightness-110' alt="" />
                    <div className="price pt-3 text-2xl hover:font-bold block text-red-700">$99</div>
                    <div className="flex space-x-2">
                      <div className="price text-sm hover:font-bold block line-through">$159</div>
                      <div className="price text-sm hover:font-bold block text-gray-500">-38%</div>
                    </div>
                  </a>
                </div>
            </div>
            <div className="font-extralight text-[2.75rem] cursor-default">Trousers</div>
            <div id='Trousers' className="rounded-[1.5rem] bg-gradient-to-br from-primary-yellowNavbarGradient to-primary-yellowFooter shadow-right-bottom shadow-md ">
            <div className="p-[2.5rem] flex space-x-[2.5rem] ">
                  <a href="#" className="p-[2.5rem] bg-gradient-to-br from-white to-yellow-200 rounded-[0.5rem] hover:shadow-md hover:scale-[101%] flex flex-col
                                        ">
                    <div className="pb-3 font-light m-2">Trouser1</div>
                    <img src="https://pluspng.com/img-png/trousers-png-hd-trouser-free-png-image-1500.png" className='w-24 transition-all hover:scale-125 hover:brightness-110'  alt="" />
                    <div className="price pt-3 text-2xl hover:font-bold block text-red-700">$129</div>
                    <div className="flex space-x-2">
                      <div className="price text-sm hover:font-bold block line-through">$159</div>
                      <div className="price text-sm hover:font-bold block text-gray-500">-18%</div>
                    </div>
                  </a>
                  <a href="#" className="p-[2.5rem] bg-gradient-to-br from-white to-yellow-200 rounded-[0.5rem] hover:shadow-md hover:scale-[101%] flex flex-col
                            ">
                    <div className="pb-3 font-light m-2">Trouser2</div>
                    <img src="https://pnghq.com/wp-content/uploads/black-cargo-pants-png-free-png-images-45564-1024x1024.png" className='w-24 transition-all hover:scale-110 hover:brightness-110' alt="" />
                    <div className="price pt-3 text-2xl hover:font-bold block text-red-700">$119</div>
                    <div className="flex space-x-2">
                      <div className="price text-sm hover:font-bold block line-through">$129</div>
                      <div className="price text-sm hover:font-bold block text-gray-500">-7%</div>
                    </div>
                  </a>
                  <a href="#" className="p-[2.5rem] bg-gradient-to-br from-white to-yellow-200 rounded-[0.5rem] hover:shadow-md hover:scale-[101%] flex flex-col">
                    <div className="pb-3 font-light m-2">Trouser3</div>
                    <img src="https://www.pngall.com/wp-content/uploads/5/Pant-PNG-Pic.png" className='w-24 transition-all hover:scale-110 hover:brightness-110' alt="" />
                    <div className="price pt-3 text-2xl hover:font-bold block text-red-700">$109</div>
                    <div className="flex space-x-2">
                      <div className="price text-sm hover:font-bold block line-through">$229</div>
                      <div className="price text-sm hover:font-bold block text-gray-500">-52%</div>
                    </div>
                  </a>
                  <a href="#" className="p-[2.5rem] bg-gradient-to-br from-white to-yellow-200 rounded-[0.5rem] hover:shadow-md hover:scale-[101%] flex flex-col">
                    <div className="pb-3 font-light m-2">Trouser4</div>
                    <img src="http://www.pngall.com/wp-content/uploads/2016/09/Trouser-PNG-Picture.png" className='w-24 transition-all hover:scale-110 hover:brightness-110' alt="" />
                    <div className="price pt-3 text-2xl hover:font-bold block text-red-700">$99</div>
                    <div className="flex space-x-2">
                      <div className="price text-sm hover:font-bold block line-through">$179</div>
                      <div className="price text-sm hover:font-bold block text-gray-500">-44%</div>
                    </div>
                  </a>
                  <a href="#" className="p-[2.5rem] bg-gradient-to-br from-white to-yellow-200 rounded-[0.5rem] hover:shadow-md hover:scale-[101%] flex flex-col">
                    <div className="pb-3 font-light m-2">Trouser5</div>
                    <img src="https://www.pngmart.com/files/7/Khaki-Pant-Transparent-Background.png" className='w-24 transition-all hover:scale-110 hover:brightness-110' alt="" />
                    <div className="price pt-3 text-2xl hover:font-bold block text-red-700">$99</div>
                    <div className="flex space-x-2">
                      <div className="price text-sm hover:font-bold block line-through">$159</div>
                      <div className="price text-sm hover:font-bold block text-gray-500">-38%</div>
                    </div>
                  </a>
                </div>
            </div>

              
              

             

              
              
              {OpenIsMore ? (
                <div className="">
                  <div className="font-extralight text-[2.75rem] cursor-default pb-4">Hat</div>
                  <div id='Hat' className="rounded-[1.5rem] bg-gradient-to-br from-primary-yellowNavbarGradient to-primary-yellowFooter shadow-md ">
                  <div className="p-[2.5rem] flex space-x-[2.5rem] ">
                        <a href="#" className="p-[2.5rem] bg-gradient-to-br from-gray-100 to-yellow-200 rounded-[0.5rem] hover:shadow-md hover:scale-[101%] flex flex-col
                                              ">
                          <div className="pb-3 font-light m-2">Hat1</div>
                          <img src="https://www.pngall.com/wp-content/uploads/2016/05/Hat-Transparent.png" className='w-24 transition-all hover:scale-110 hover:brightness-110'  alt="" />
                          <div className="price pt-3 text-2xl hover:font-bold block text-red-700">$129</div>
                          <div className="flex space-x-2">
                            <div className="price text-sm hover:font-bold block line-through">$159</div>
                            <div className="price text-sm hover:font-bold block text-gray-500">-18%</div>
                          </div>
                        </a>
                        <a href="#" className="p-[2.5rem] bg-gradient-to-br from-gray-100 to-yellow-200 rounded-[0.5rem] hover:shadow-md hover:scale-[101%] flex flex-col
                                  ">
                          <div className="pb-3 font-light m-2">Hat2</div>
                          <img src="https://www.pngall.com/wp-content/uploads/2016/05/Hat-Transparent.png" className='w-24 transition-all hover:scale-110 hover:brightness-110' alt="" />
                          <div className="price pt-3 text-2xl hover:font-bold block text-red-700">$119</div>
                          <div className="flex space-x-2">
                            <div className="price text-sm hover:font-bold block line-through">$129</div>
                            <div className="price text-sm hover:font-bold block text-gray-500">-7%</div>
                          </div>
                        </a>
                        <a href="#" className="p-[2.5rem] bg-gradient-to-br from-gray-100 to-yellow-200 rounded-[0.5rem] hover:shadow-md hover:scale-[101%] flex flex-col">
                          <div className="pb-3 font-light m-2">Hat3</div>
                          <img src="https://www.pngall.com/wp-content/uploads/2016/05/Hat-Transparent.png" className='w-24 transition-all hover:scale-110 hover:brightness-110' alt="" />
                          <div className="price pt-3 text-2xl hover:font-bold block text-red-700">$109</div>
                          <div className="flex space-x-2">
                            <div className="price text-sm hover:font-bold block line-through">$229</div>
                            <div className="price text-sm hover:font-bold block text-gray-500">-52%</div>
                          </div>
                        </a>
                        <a href="#" className="p-[2.5rem] bg-gradient-to-br from-gray-100 to-yellow-200 rounded-[0.5rem] hover:shadow-md hover:scale-[101%] flex flex-col">
                          <div className="pb-3 font-light m-2">Hat4</div>
                          <img src="https://www.pngall.com/wp-content/uploads/2016/05/Hat-Transparent.png" className='w-24 transition-all hover:scale-110 hover:brightness-110' alt="" />
                          <div className="price pt-3 text-2xl hover:font-bold block text-red-700">$99</div>
                          <div className="flex space-x-2">
                            <div className="price text-sm hover:font-bold block line-through">$179</div>
                            <div className="price text-sm hover:font-bold block text-gray-500">-44%</div>
                          </div>
                        </a>
                        <a href="#" className="p-[2.5rem] bg-gradient-to-br from-gray-100 to-yellow-200 rounded-[0.5rem] hover:shadow-md hover:scale-[101%] flex flex-col">
                          <div className="pb-3 font-light m-2">Hat5</div>
                          <img src="https://www.pngall.com/wp-content/uploads/2016/05/Hat-Transparent.png" className='w-24 transition-all hover:scale-110 hover:brightness-110' alt="" />
                          <div className="price pt-3 text-2xl hover:font-bold block text-red-700">$99</div>
                          <div className="flex space-x-2">
                            <div className="price text-sm hover:font-bold block line-through">$159</div>
                            <div className="price text-sm hover:font-bold block text-gray-500">-38%</div>
                          </div>
                        </a>
                      </div>
                  </div>
                  
                </div>
                
                  
              ):(
                    null
              ) }
              
              {/* MORE BUTTON */}
                  <div className="flex justify-center mt-[2rem]" >
                    <button onClick={handleClick}  className='p-[1rem] mt-[2rem] bg-blue-400 rounded-md font-medium text-2xl hover:bg-blue-500'>
                      {buttonText}
                    </button>
                  </div>






            
            
        </div>

        <div className="bg-black w-[85rem] h-1 mb-[7.5rem] mt-12"></div>








      </div>
      <div className="flex justify-center mb-2 font-extralight cursor-default hover:text-red-600">
        Built with Dear
      </div>
      <Payment></Payment>
      <Footer></Footer>
    </div>
  )
}

export default Home