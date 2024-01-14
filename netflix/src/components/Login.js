import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import checkVlidateData from '../utils/validate';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeuser } from '../store/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useRef(null);
    const password = useRef(null);
    const mail = useRef(null);
    const [signup,setSignUp] = useState(false);
    const [err,setErr] = useState(null);

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                const {uid, email, displayName} = user;
                dispatch(addUser({uid:uid, email:email, displayName:displayName}));
                navigate('/browse')
            }
            else{
                dispatch(removeuser);
            }
        })
    },[]);

    const handleClick = ()=>{
        const res = (checkVlidateData(mail.current.value,password.current.value));

        if(res){
            setErr(res);
            return;
        };
        if(signup){
            createUserWithEmailAndPassword(auth, mail.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                navigate('/browse');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage + errorCode);
                // ..
            });
        }
        else{
            signInWithEmailAndPassword(auth, mail.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/browse');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErr(errorCode+' '+errorMessage)
            });
        }
    }

  return (
    <div className='relative'>
        <div>
            <img className='w-full absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
        </div>
            <div className='w-full h-full flex justify-center items-center'>
                <form className='w-[450px] h-[600px] relative top-44 bg-black flex flex-col items-center bg-opacity-65'
                    onSubmit={(e)=>{
                        e.preventDefault();
                        handleClick();
                    }}
                >
                    <div className='text-4xl font-semibold text-white mt-14 p-4 flex justify-start w-9/12'>
                        {!signup? <h1>Sign In</h1> : <h1>Sign Up</h1>}
                    </div>
                    {
                        signup && 
                        <input type='text' 
                        required
                        ref={name}
                        className='w-9/12 my-2 p-4 bg-[#333] text-base rounded-md' 
                        placeholder='Enter Name'/>
                    }

                    <input type='text' 
                    required
                    ref={mail}
                    className='w-9/12 my-2 p-4 bg-[#333] text-base rounded-md' 
                    placeholder='Enter E-mail'/>

                    <input type='password' 
                    required
                    ref={password}
                    className='w-9/12 my-2 p-4 bg-[#333] text-base rounded-md' 
                    placeholder='Enter Password'/>

                    {err && <h1 className='text-sm font-semibold text-red-500 w-9/12' >{err}</h1>}

                    { !signup? <>
                    <input type='submit' 
                    className='w-9/12 mt-6 p-4 bg-red-600 rounded-md text-lg font-semibold text-white hover:cursor-pointer' 
                    value='Sign In'/>

                    <div className='flex mt-20 w-9/12'>
                        <p className='text-[#8f8f8f]'>New to Netfilx?</p>
                        <p
                        onClick={()=>{
                            setSignUp(true);
                        }}
                        className='text-white cursor-pointer'>Sign up now</p>
                        <p className='text-[#8f8f8f]'>.</p>
                    </div>
                    </>
                    :
                    <>
                    <input type='submit' 
                    className='w-9/12 mt-6 p-4 bg-red-600 rounded-md text-lg font-semibold text-white hover:cursor-pointer' 
                    value='Log In'/>

                    <div className='flex mt-20 w-9/12'>
                        <p className='text-[#8f8f8f]'>Already a user?</p>
                        <p
                        onClick={()=>{
                            setSignUp(false);
                        }}
                        className='text-white cursor-pointer'>Login now</p>
                        <p className='text-[#8f8f8f]'>.</p>
                    </div>
                    </>
                    }
                </form>
            </div>
    </div>
  )
}

export default Login