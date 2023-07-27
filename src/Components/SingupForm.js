import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SingupForm = ({ setLoginedIn }) => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState('student')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  }

  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowConfirmPasswrod] = useState(false)

  function onSubmitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    setLoginedIn(true);
    toast.success('Account Created Successfully');

    navigate('/DashBoard');
  }

  return (
    <div>
      {/* Student instructor tab */}
      <div className='flex bg-richblack-800 p-1 rounded-full my-6 gap-x-3 max-w-max'>
        <button className={`${accountType === 'student' ? 'bg-richblack-900 text-white' : 'text-richblack-200 bg-transparent'} py-2 px-5 rounded-full transition-all duration-200 `}
        
        onClick={()=> setAccountType('student')}>Student</button>

        <button className={`${accountType === 'instructor' ? 'bg-richblack-900 text-white' : 'text-richblack-200 bg-transparent'} py-2 px-5 rounded-full transition-all duration-200 `}
        onClick={()=> setAccountType('instructor')}>Instructor</button>
      </div>

      <form onSubmit={onSubmitHandler}>
        {/* first name and last name */}
        <div className='flex gap-x-4 mt-4'>
          <label className='w-full'>
            <p className='text-[15px] text-richblack-5 mb-1 leading-5'>
              First Name <sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type='text'
              name='firstName'
              onChange={changeHandler}
              placeholder='Enter First Name'
              value={formData.firstName}
              className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px] focus:outline-none'
            />
          </label>

          <label className='w-full'>
            <p className='text-[15px] text-richblack-5 mb-1 leading-5'>
              Last Name <sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type='text'
              name='lastName'
              onChange={changeHandler}
              placeholder='Enter Last Name'
              value={formData.lastName}
              className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px] focus:outline-none'
            />
          </label>
        </div>

        {/* email id */}
        <div className='mt-4'>
        <label className='w-full mt-4'>
          <p className='text-[15px] text-richblack-5 mb-1 leading-5'>
            Email <sup className='text-pink-200'>*</sup>
          </p>
          <input
            required
            type='email'
            name='email'
            onChange={changeHandler}
            placeholder='Enter Email Address'
            value={formData.email}
            className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px] focus:outline-none'
          />
        </label>
        </div>
        

        <div className='flex gap-x-5 mt-4'>
          <label className='relative w-full'>
            <p className='text-[15px] text-richblack-5 mb-1 leading-5'>
              Create Password <sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              name='password'
              onChange={changeHandler}
              placeholder='Enter Password'
              value={formData.password}
              className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px] focus:outline-none'
            />
            <span  className=' absolute right-3 top-[38px] cursor-pointer '
            onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF'/>}
            </span>
          </label>

          <label className='relative w-full'>
            <p className='text-[15px] text-richblack-5 mb-1 leading-5'>
              Confirm Password <sup className='text-pink-200'>*</sup>
            </p>
            <input
              required
              type={showconfirmPassword ? 'text' : 'password'}
              name='confirmPassword'
              onChange={changeHandler}
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              className='bg-richblack-800 text-richblack-5 rounded-[0.5rem] w-full p-[12px] focus:outline-none'
            />
            <span className=' absolute right-3 top-[38px] cursor-pointer '
            
            onClick={() => setShowConfirmPasswrod((prev) => !prev)}>
              {showconfirmPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
            </span>
          </label>
        </div>

        <button type='submit' className='bg-yellow-50 w-full rounded-[8px] font-medium text-richblack-800 px-[12px] py-[8px] mt-3 '>Create Account</button>
      </form>
    </div>
  );
};

export default SingupForm;
