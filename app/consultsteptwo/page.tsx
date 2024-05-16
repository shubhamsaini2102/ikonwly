'use client';

import { useState } from 'react';
import React from 'react'
import Image from "next/image";
import StepSidebar from '../common/stepsidebar/page';

function Steptwo() {
    const [isOne, setIsOne] = useState(true);
    const [isTow, setIsTow] = useState(true);
    const [isThree, setIsThree] = useState(false);


    const toggleAccordion = () => {
        setIsOne(!isOne);

    };
    const toggleAccordionOne = () => {
        setIsTow(!isTow);
    };
    const toggleAccordionTwo = () => {
        setIsThree(!isThree);
    };
    return (
        <div className='flex max-mobile:flex-wrap'>
            <div className='bg-[#00379e14] w-[30%] py-10 px-11 max-ippad:w-[35%] max-ippadpro:px-6 max-ippadpro:py-6 max-ippadpro:w-[40%] max-mobile:w-full max-mobileland:p-3'>
                <StepSidebar />
            </div>

            <div className='w-[70%] py-14 px-10 max-ippad:w-[65%] max-ippadpro:w-[60%] max-mobile:w-full max-mobile:px-7 max-mobile:py-7 max-mobileland:p-4'>
                <div className='bg-white shadow-[0_16px_50px_0px_rgba(0,0,0,0.1)] rounded-3xl p-10 max-mobile:p-6 max-mobileland:p-4'>


                    <h4 className='text-2xl font-semibold text-bodycolor mb-4 max-mobileland:text-1xl'>About You <span className='text-[#FF0000]'>*</span></h4>
                    <div className='mb-3'>
                        <textarea className='border border-bordercolor p-4 rounded-2xl text-base w-full h-40 resize-none' placeholder='Write about you...'></textarea>
                    </div>
                    <div className="border border-[#ddd] rounded-3xl mb-4 px-3 py-3 max-mobileland:p-0">
                        <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordion}>
                            <div className='text-base font-medium'>What makes a good About You</div>
                            <div>{isOne ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
                        </div>
                        {isOne && <div className="p-4 pt-[0]">
                            <ul className='flex flex-wrap'>
                                <li className='flex gap-x-1 mb-3 w-full items-center text-base text-bodycolor font-regular max-mobileland:text-sm '> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Clear and to the point</li>
                                <li className='flex gap-x-1 mb-3 w-full items-center text-base text-bodycolor font-regular max-mobileland:text-sm'> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Mentions Certifications you've earned</li>
                                <li className='flex gap-x-1 mb-3 w-full items-center text-base text-bodycolor font-regular max-mobileland:text-sm'> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Identifies unique programs or tools you work with</li>
                                <li className='flex gap-x-1 mb-3 w-full items-center text-base text-bodycolor font-regular max-mobileland:text-sm'> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Highlights if you've had Fortune 1000 clients</li>
                                <li className='flex gap-x-1 w-full items-center text-base text-bodycolor font-regular '> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Includes key words that are unique to your industry or specialized function</li>
                            </ul>
                        </div>}
                    </div>
                    <h4 className='text-2xl font-semibold text-bodycolor mb-4 max-mobileland:text-1xl'>Industries <span className='text-[#FF0000]'>*</span></h4>
                    <div className='mb-3 relative'>
                        <span className='absolute top-4 right-4'><Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" /></span>
                        <select className='border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base w-full appearance-none'>
                            <option>Choose an industry</option>
                            <option>Choose an industry</option>
                        </select>
                    </div>
                    <p className='font-base font-medium opacity-55 mt-3 mb-6'>You can choose up to 5 industries</p>
                    <h4 className='text-2xl font-semibold text-bodycolor mb-4 max-mobileland:text-1xl'>Industries <span className='text-[#FF0000]'>*</span></h4>
                    <div className='mb-3 relative'>
                        <input className='border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base w-full' placeholder='Paste Your linkedin Profile link' />


                    </div>


                </div>
                <div className='flex items-center justify-end mt-6'>
                    <button className='flex text-center justify-center items-center text-bluecolor min-w-44 font-medium bg-[#E1ECFF] border border-bluecolor  px-buttonXpadding py-buttonYpadding rounded-full max-mobileland:min-w-20'><Image className="mr-2" src="/assets/images/bkarow.png" width={24} height={3} alt="" /> Back</button>
                    <button className='flex ml-3 items-center text-white font-medium bg-bluecolor px-buttonXpadding py-buttonYpadding rounded-full max-mobileland:min-w-20'>Continue <Image className="ml-2" src="/assets/images/arright.png" width={24} height={3} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Steptwo