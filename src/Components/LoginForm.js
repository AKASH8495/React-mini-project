import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
const LoginForm = ({setLoginedIn}) => {

      const navgate =  useNavigate();

      const [formData, setFormData] = useState({
            email:"", password:""
      })

      const [showPassowrd, setShowPassword] = useState(false);

      function changeHandler(event) {
            setFormData((prevData) => ({
                  ...prevData,
                  [event.target.name]:[event.target.value]
            }))
      }

      function submitHandler(event){
            event.preventDefault()
            setLoginedIn(true);
            toast.success('Logged In')
            navgate('/dashBoard');
      }
  return (
     <form onSubmit={submitHandler} className='flex flex-col gap-y-4 w-full mt-6'>
            <lable className='w-full'>
                  <p className='text-[15px] text-richblack-5 mb-1 leading-5'>Email Address <sup className=' text-pink-200'>*</sup></p>

                  <input
                  required
                  type='email'
                  value={formData.email}
                  onChange={changeHandler}
                  placeholder='Enter email id'
                  name='email'
                  className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px] focus:outline-none'

                  />
            </lable>

            <lable className='w-full relative'>
                  <p  className='text-[15px] text-richblack-5 mb-1 leading-5'>Password<sup className=' text-pink-200'>*</sup></p>

                  <input
                  required
                  type={showPassowrd ? ('text'): ('password')}
                  value={formData.password}
                  onChange={changeHandler}
                  placeholder='Enter Password'
                  name='password'
                  className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px] focus:outline-none'

                  />

                  <span className=' absolute right-3 top-[38px] cursor-pointer '
                  
                  onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassowrd ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>): (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                  </span>

                  <Link to='#'>

                        <p className=' text-xs text-blue-100 mt-1 max-w-max ml-auto'>
                              Forgot Password
                        </p>
                  
                  
                  </Link>


            </lable>

            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-800 px-[12px] py-[8px] mt-3 '>
                  Sing In
            </button>


     </form>
     
      )
}

export default LoginForm