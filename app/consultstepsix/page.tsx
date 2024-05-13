'use client';

import { useState } from 'react';
import React from 'react'
import Image from "next/image";
import StepSidebar from '../common/stepsidebar/page';

function Stepsix() {
   
  return (
    <div className='flex'>
    <div className='bg-[#00379e14] w-[30%] py-10 px-11'>
        <StepSidebar />
    </div>

    <div className='w-[70%] py-14 px-10 '>
        <div className='bg-white shadow-[0_16px_50px_0px_rgba(0,0,0,0.1)] rounded-3xl p-10 '>


            <h4 className='text-2xl font-semibold text-bodycolor'>Review Your Information</h4>
           <div className='border-b border-bordercolor pb-5 pt-5'>
            <h5 className='text-xl flex gap-x-2 text-bluecolor font-semibold items-center mb-3'><Image className="" src="/assets/images/iicone.png" width={40} height={40} alt="" />  Personal Information</h5>
            <ul className='flex flex-wrap gap-y-5'>
                <li className='w-[50%] text-base font-semibold text-bodycolor'>Tagline:</li>
                <li className='w-[50%] text-base font-semibold text-bodycolor'>Last Name:</li>
                <li className='w-[50%] text-base font-semibold text-bodycolor'>First Name:</li>
                <li className='w-[50%] text-base font-semibold text-bodycolor'>Gender:</li>
                <li className='w-[50%] text-base font-semibold text-bodycolor'>Birth Date:</li>
                <li className='w-[50%] text-base font-semibold text-bodycolor'>Phone Number:</li>
                <li className='w-[50%] text-base font-semibold text-bodycolor'>Skype Id:</li>
                <li className='w-[50%] text-base font-semibold text-bodycolor'></li>

                <li className='w-[50%] text-base font-semibold text-bodycolor'>Address:</li>
                <li className='w-[50%] text-base font-semibold text-bodycolor'>Major:</li>
                <li className='w-[50%] text-base font-semibold text-bodycolor'>Industry Selected:</li>
                <li className='w-[50%] text-base font-semibold text-bodycolor'></li>
                <li className='w-[50%] text-base font-semibold text-bodycolor'>About Me:</li>
            </ul>
           </div>
        
           <div className='border-b border-bordercolor pb-5 pt-5'>
            <h5 className='text-xl flex gap-x-2 text-bluecolor font-semibold items-center mb-3'><Image className="" src="/assets/images/lineone.png" width={40} height={40} alt="" />  Professional Details</h5>
            <ul className='flex flex-wrap gap-y-5'>
                <li className='w-full text-base font-semibold text-bodycolor'>Working History:</li>
                <li className='w-full text-base font-semibold text-bodycolor'>Education Background:</li>
                <h5 className='w-full text-xl flex gap-x-2 text-bluecolor font-semibold items-center'> Certification Attachments</h5>
                <li className='w-full text-base font-semibold text-bodycolor'>Working History:</li>
                <li className='w-full text-base font-semibold text-bodycolor'>Education Background:</li>
                
            </ul>
           </div>


           <div className='border-b border-bordercolor pb-5 pt-5'>
            <h5 className='text-xl flex gap-x-2 text-bluecolor font-semibold items-center mb-3'><Image className="" src="/assets/images/linetwo.png" width={40} height={40} alt="" />  Skills and Expertise</h5>
            <ul className='flex flex-wrap gap-y-5'>
                <li className='w-full text-base font-semibold text-bodycolor'>Skills:</li>
                <li className='w-full text-base font-semibold text-bodycolor'>Years of Experience:</li>
                <li className='w-full text-base font-semibold text-bodycolor'>Motivation and Contribution:</li>
                <h5 className='w-full text-xl flex gap-x-2 text-bluecolor font-semibold items-center'> Attachments</h5>
                <li className='w-full text-base font-semibold text-bodycolor'>Resume Attached:</li>
                <li className='w-full text-base font-semibold text-bodycolor'>Motivational Video:</li>
                
            </ul>
           </div>

           <div className=' pt-5'>
            <h5 className='text-xl flex gap-x-2 text-bluecolor font-semibold items-center mb-3'><Image className="" src="/assets/images/linethree.png" width={40} height={40} alt="" />  Consulting Preferences:</h5>
            <ul className='flex flex-wrap gap-y-5'>
                <li className='w-full text-base font-semibold text-bodycolor'>Preferred Working Hours:</li>
                <li className='w-full text-base font-semibold text-bodycolor'>Preferred Pricing:</li>
                <li className='w-full text-base font-semibold text-bodycolor'>Selected Services:</li>
                <li className='w-full text-base font-semibold text-bodycolor'>Other Services:</li>
                <li className='w-full text-base font-semibold text-bodycolor'>How Did You Hear About Us:</li>
                <li className='w-full text-base font-semibold text-bodycolor'>Additional Information:</li>
                
            </ul>
           </div>
          
            
         
          

          
        </div>
        <div className='flex items-center justify-end mt-6'>
                <button className='flex text-center justify-center items-center text-bluecolor min-w-44 font-medium bg-[#E1ECFF] border border-bluecolor  px-buttonXpadding py-buttonYpadding rounded-full'><Image className="mr-2" src="/assets/images/bkarow.png" width={24} height={3} alt="" /> Back</button>
                <button className='flex ml-3 items-center text-white font-medium bg-bluecolor px-buttonXpadding py-buttonYpadding rounded-full'>Continue <Image className="ml-2" src="/assets/images/arright.png" width={24} height={3} alt="" /></button>
            </div>
    </div>
</div>
  )
}

export default Stepsix