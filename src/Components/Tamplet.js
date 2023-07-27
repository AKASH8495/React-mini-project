import React from 'react'
import frameImage from '../assets/frame.png'
import SingupForm from './SingupForm'
import LoginForm from './LoginForm'
import {FcGoogle} from 'react-icons/fc'



const Tamplet = ({ title, decs1, decs2, image, formtype, setLoginedIn }) => {
      return (
            <div className='flex justify-between w-11/12 max-w-[1080px] py-12 mx-auto gap-x-12 gap-y-0 mt-1' >
                  <div className='w-11/12 max-w-[450px] h-screen'>
                        <h1 className='text-white font-semibold text-[30px] leading-[2.375rem]'>{title}</h1>

                        <p className='text-[1.125rem] leading-5 mt-4 '>
                              <span className='text-richblack-100'>{decs1}</span>
                              <br/>
                              <span className='text-blue-100 italic'>{decs2}</span>
                        </p>
                        {formtype === 'singUp' ? (<SingupForm setLoginedIn={setLoginedIn}/>) : (<LoginForm setLoginedIn={setLoginedIn}/>)}

                        <div className='flex items-center w-full my-4 gap-x-2'>
                              <div className=' w-full h-[1px] bg-richblack-700'></div>
                              <p className='text-richblack-700 font-medium leading-5'>OR</p>
                              <div className='w-full h-[1px] bg-richblack-700'></div>
                        </div>

                        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-100 px-[12px] py-[8px] gap-x-2 mt-6  '>
                              <FcGoogle/>
                              Sing in with Google
                        </button>
                  </div>

                  <div className='relative w-11/12 max-w-[450px]'>
                        <img src={frameImage} alt='parttern Image' width={558} heigth={504} loading='lazy'/>

                        <img src={image} alt='student' width={558} heigth={490} loading='lazy' className=' absolute -top-4 right-4'/>
                  </div>


            </div>
      )
}

export default Tamplet