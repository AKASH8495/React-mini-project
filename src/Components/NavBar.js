import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg'
import { toast } from 'react-hot-toast';

const NavBar = (props) => {

      let isLoginedIn = props.isLoginedIn;
      let setLoginedIn = props.setLoginedIn;
      return (
            <div className='flex items-center justify-between w-11/12 max-w-[1080px] py-4 mx-auto'>
                  <Link to="/">
                        <img src={logo} alt='logo' widht={160} height={32} loading='lazy' />
                  </Link>

                  <nav>
                        <ul className='flex gap-x-6 text-white font-semibold'>
                              <li>
                                    <Link to='/'>Home</Link>
                              </li>
                              <li>
                                    <Link to='/about'>About</Link>
                              </li>
                              <li>
                                    <Link to='/contact'>Contact</Link>
                              </li>
                        </ul>
                  </nav>


                  {/* Login, singup, logout, dashboard */}

                  <div className='flex items-center gap-x-6'>
                        { !isLoginedIn &&
                              <Link to='/login'>

                                    <button className='bg-richblack-800 text-white py-[6px] px-[12px] rounded-[8px] border border-richblack-700 font-semibold'>
                                          Log in
                                    </button>

                              </Link>

                        }

                        { !isLoginedIn &&
                              <Link to='/singup'>

                                    <button className='bg-richblack-800 text-white py-[6px] px-[12px] rounded-[8px] border border-richblack-700 font-semibold '>
                                          Sing up
                                    </button>

                              </Link>

                        }

                        { isLoginedIn &&
                              <Link to='/'>

                                    <button className='bg-richblack-800 text-white py-[6px] px-[12px] rounded-[8px] border border-richblack-700' onClick={() => {
                                          setLoginedIn(false);
                                          toast.success('Logged Out')
                                    }}>
                                          Log Out
                                    </button>

                              </Link>

                        }

                        { isLoginedIn &&
                              <Link to='/dashboard'>

                                    <button className='bg-richblack-800 text-white py-[6px] px-[12px] rounded-[8px] border border-richblack-700'>
                                          Dashboard
                                    </button>

                              </Link>

                        }
                  </div>








            </div>
      )
}

export default NavBar