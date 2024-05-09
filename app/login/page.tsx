'use client';

import { useState } from 'react';
import Link from 'next/link'
import Image from "next/image";

function Login() {
  return (
    <>
      <div className='pt-padding100 pb-padding100'>
        <Image
          className="m-auto"
          src="/assets/images/logobk.png"
          width={192}
          height={84}
          alt=""
        />
        <h3 className='text-5xl text-center mt-10 mb-5 font-bold	'>Sign up as a Consultant</h3>
        <form>
          <div className=''>
            <input className="outline-0 border placeholder:text-slate-400 rounded-md	border-slate-400 h-14 px-4 max-w-lg	w-full font-normal m-auto table text-base text-slate-400" type='text' placeholder='Full Name' />
          </div>
          <div className='my-4'>
            <input className="outline-0 border placeholder:text-slate-400 rounded-md	border-slate-400 h-14 px-4 max-w-lg	w-full font-normal m-auto table text-base text-slate-400" type='text' placeholder='Email Address' />
          </div>
          <div className=''>
            <input className="outline-0 border placeholder:text-slate-400 rounded-md	border-slate-400 h-14 px-4 max-w-lg	w-full font-normal m-auto table text-base text-slate-400" type='password' placeholder='Password' />
          </div>
          <div className=''>
            <input className="bg-bluecolor text-white	rounded-full outline-0  h-14 px-4 max-w-lg	w-full font-normal m-auto table text-base mt-4" type='submit' value='Sign Up' />
          </div>
          <div className='mt-5'>
            <p className='text-black text-base font-normal text-center'>Already have an Account? <Link className='text-bluecolor font-medium' href="/">Sign in</Link></p>
          </div>
          <div className='mt-9'>
            <label className='font-normal text-slate-400	m-auto table bg-white px-11 relative' >Or</label>
            <span className='max-w-lg	w-full font-normal m-auto table h-px bg-slate-300 mt-[-12px]'></span>
          </div>
          <div className='mt-9'>
            <button className="outline-0 border flex justify-center items-center	rounded-full	border-slate-400 h-14 px-4 max-w-lg	w-full font-normal m-auto  text-base text-slate-900">  <Image
              className="mr-4"
              src="/assets/images/google.png"
              width={24}
              height={24}
              alt=""
            />Sign up with Google</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login