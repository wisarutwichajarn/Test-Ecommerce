import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


function Profile() {
  return (
    <div className='bg-gradient-to-br from-yellow-200 to-primary-yellowLOginGradient2'>
      <Navbar/>  
        <div className=" mt-[6rem] mb-[2rem]">
          <div className="flex flex-col items-center justify-center ">
            <div className="text-[2rem] font-extralight mb-12">MY PROFILE</div>
            <img src="/src/component/image/S__81256450.jpg" 
                 alt="" 
                 className='w-[18rem] h-[24rem] rounded-xl transition-all hover:rounded-[2rem] hover:scale-110' />
            <div className="flex  mt-[3rem] text-[1.5rem] cursor-default">
              <h1>name :</h1> <div className="pl-3 ">Wisarut Js</div>
            </div>
            <div className="text-[1.5rem] text-gray-600 mt-[3rem]">john.doe@example.com</div>
            <div className="text-[1.5rem]  mt-[3rem]">+123-456-7890</div>
            <div className="text-[1.5rem]  mt-[3.5rem]">Address</div>
              <div className="text-md text-gray-700 mb-4 mt-3">
                1234 Elm Street, Apt. 567<br/>
                Springfield, IL 62704<br/>
                United States
              </div>
            <button className='text-[1.25rem] mt-[2rem] p-3 bg-blue-500 rounded-lg hover:bg-blue-700 active:hover:bg-blue-800 '>EDIT</button>
          </div>
           

        </div>
      <Footer/>  
    </div>
  )
}

export default Profile