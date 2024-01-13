import React from 'react'
import { useRef } from 'react';

const Login = () => {
    const name = useRef(null);
    const password = useRef(null);
  return (
    <div className='relative'>
        <div>
            <img className='w-full absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
        </div>
            <div className='w-full h-full flex justify-center items-center'>
                <form className='w-[450px] h-[600px] relative top-44 bg-black flex flex-col items-center bg-opacity-65'
                    onSubmit={(e)=>{
                        e.preventDefault();
                        console.log(name.current.value);
                        console.log(password.current.value);
                    }}
                >
                    <div className='text-4xl font-semibold text-white mt-14 p-4 flex justify-start w-9/12'>
                        <h1>Sign In</h1>
                    </div>
                    <input type='text' 
                    ref={name}
                    className='w-9/12 my-2 p-4 bg-[#333] text-base rounded-md' 
                    placeholder='Enter E-mail or Phone Number'/>

                    <input type='text' 
                    ref={password}
                    className='w-9/12 my-2 p-4 bg-[#333] text-base rounded-md' 
                    placeholder='Enter Password'/>

                    <input type='submit' 
                    className='w-9/12 mt-6 p-4 bg-red-600 rounded-md text-lg font-semibold text-white' 
                    value='Sign In'/>

                    <div className='flex mt-20 w-9/12'>
                        <p className='text-[#8f8f8f]'>New to Netfilx?</p>
                        <p className='text-white'>Sign up now</p>
                        <p className='text-[#8f8f8f]'>.</p>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Login