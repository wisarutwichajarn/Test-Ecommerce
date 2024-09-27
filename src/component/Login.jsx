import React , {useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Navbar from './Navbar'
import { FaFacebook , FaLinkedin , FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function Login() {
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate(Swal)
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
      const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
          "username": inputs.username,
          "password": inputs.password,
          "expiresIn": 60000
        });

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };

        fetch("https://www.melivecode.com/api/login", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result)
            if(result.status === 'ok'){
              MySwal.fire({
                html: <i>{result.message}</i>,
                icon: 'success'
              }).then((value) => {
                navigate("/profile"); // ใช้เส้นทาง (string) ของหน้าโปรไฟล์
            })
            } else {
              MySwal.fire({
                html: <i>{result.message}</i>,
                icon: 'error'
              })
            }
          })
          .catch((error) => console.error(error));
    console.log(inputs);
  }

  return (
    <div>
        <Navbar></Navbar>
        <div className="bg-gradient-to-b from-primary-yellowLOginGradient1 to-primary-yellowLOginGradient2 min-h-screen 
                        flex flex-col justify-center items-center  ">
          <div className="p-16 mt-12 md:p-20 max-w-screen-lg flex flex-col items-center bg-gradient-to-br from-yellow-200 to-yellow-50
                           rounded-3xl ">
              <div className="">
                <nav className='font-light text-white bg-black pl-5 pr-5 pt-3 pb-3 rounded-3xl '>Sign-in</nav>
              </div>




              <form onSubmit={handleSubmit} className='flex flex-col mt-[1.5rem] space-y-[1rem]'>
                <label> 
                <input className='p-2 rounded-xl'
                  placeholder='Username'
                  type="text" 
                  name="username" 
                  value={inputs.username || ""} 
                  onChange={handleChange}
                />
                </label>
                <label>
                  <input className='p-2 rounded-xl'
                    placeholder='Password'
                    type="password" 
                    name="password" 
                    value={inputs.password  || ""} 
                    onChange={handleChange}
                  />
                  </label>
                  <input  type="submit" 
                                className="bg-blue-500 text-white font-bold mt-12 pl-5 pr-5 pt-3 pb-3 rounded-3xl
                                 transition-all hover:scale-110 hover:bg-blue-700
                                 active:scale-105" />
              </form>
              
            <div className="flex p-3">
              <p className='pr-1.5'>or</p> <p className='font-medium'>Login</p> <p className='pl-1.5'>with</p>
            </div>
            <div className="flex pt-2 gap-4">
              <FaFacebook className='transition-all hover:text-blue-600 hover:scale-110 cursor-pointer' />
              <FaLinkedin className='transition-all hover:text-blue-400 hover:scale-110 cursor-pointer'/>
              <IoIosMail className='transition-all hover:text-red-600 scale-125 hover:scale-125 cursor-pointer'/>
              <FaGithub className='transition-all hover:text-black hover:scale-110 cursor-pointer'/>
            </div>
            

          </div>
        </div>
    </div>
  )
}

export default Login