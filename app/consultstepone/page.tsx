'use client';

import { useState } from 'react';
import React from 'react'
import Image from "next/image";
import StepSidebar from '../common/stepsidebar/page';

function Stepone() {
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
        <div className='flex'>
            <div className='bg-[#00379e14] w-[30%] py-10 px-11'>
                <StepSidebar />
            </div>

            <div className='w-[70%] py-14 px-10 '>
                <div className='bg-white shadow-[0_16px_50px_0px_rgba(0,0,0,0.1)] rounded-3xl p-10 '>


                    <h4 className='text-2xl font-semibold text-bodycolor mb-4'>Headshot</h4>
                    <div className='relative h-14'>
                        <input className='cursor-pointer text-[0px] px-7 py-3 h-14 w-64' type='file' value="" />
                        <span className='pointer-events-none cursor-pointer absolute top-0  left-0 flex align-center bg-[#E1ECFF] rounded-full border border-bluecolor border-dashed px-7 py-3 text-base text-bluecolor'> <Image
                            className="mr-2"
                            src="/assets/images/darow.png"
                            width={24}
                            height={24}
                            alt=""
                        /> Upload Image</span>
                    </div>
                    <p className='text-base text-bodycolor font-medium opacity-60 mt-4 mb-3'>Minimum Requirement:400 x 400 pixels</p>
                    <div className="border border-[#ddd] rounded-3xl mb-4 px-3 py-3">
                        <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordion}>
                            <div className='text-base font-medium'>What makes a good headshot</div>
                            <div>{isOne ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
                        </div>
                        {isOne && <div className="p-4 pt-[0]">
                            <ul className='flex flex-wrap'>
                                <li className='flex gap-x-1 mb-3 w-full items-center text-base text-bodycolor font-regular '> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> High resolution. 72 ppi and 1300 x 700 pixels</li>
                                <li className='flex gap-x-1 mb-3 w-full items-center text-base text-bodycolor font-regular '> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Clean, simple background and composition</li>
                                <li className='flex gap-x-1 w-full items-center text-base text-bodycolor font-regular '> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> A well-lit environment</li>
                            </ul>
                        </div>}
                    </div>
                    <h4 className='text-2xl font-semibold text-bodycolor mb-4'>Tagline <span className='text-[#FF0000]'>*</span></h4>
                    <p className='text-sm font-regular leading-6 border border-[#ddd] rounded-full py-2 px-6 text-[#0000004a] mb-4'>Examples: Innovative EdTech Enthusiast: Transforming Career Trajectories with Advanced<br /> Technology and Education Strategies."_</p>
                    <div className="border border-[#ddd] rounded-3xl mb-4 px-3 py-3">
                        <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordionOne}>
                            <div className='text-base font-medium'>What Constitutes an Effective Tagline on i-Knowly?</div>
                            <div>{isTow ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
                        </div>
                        {isTow && <div className="p-4 pt-[0]">
                            <ul className='flex flex-wrap'>
                                <li className='flex gap-x-1 mb-3 w-full items-center text-base text-bodycolor font-regular'> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Clarity and Conciseness</li>
                                <li className='flex gap-x-1 mb-3 w-full items-center text-base text-bodycolor font-regular '> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> CInclusion of Relevant Keywords</li>
                                <li className='flex gap-x-1 w-full items-center text-base text-bodycolor font-regular'> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Highlighting Unique Qualities</li>
                            </ul>
                        </div>}
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

export default Stepone