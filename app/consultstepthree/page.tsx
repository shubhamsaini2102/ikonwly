'use client';

import { useState } from 'react';
import React from 'react'
import Image from "next/image";
import StepSidebar from '../common/stepsidebar/page';

function Stepthree() {

    return (
        <div className='flex max-mobile:flex-wrap'>
            <div className='bg-[#00379e14] w-[30%] py-10 px-11 max-ippad:w-[35%] max-ippadpro:px-6 max-ippadpro:py-6 max-ippadpro:w-[40%] max-mobile:w-full max-mobileland:p-3'>
                <StepSidebar />
            </div>

            <div className='w-[70%] py-14 px-10 max-ippad:w-[65%] max-ippadpro:w-[60%] max-mobile:w-full max-mobile:px-7 max-mobile:py-7 max-mobileland:p-4'>
                <div className='bg-white shadow-[0_16px_50px_0px_rgba(0,0,0,0.1)] rounded-3xl p-10 max-mobile:p-6 max-mobileland:p-4'>


                    <h4 className='text-2xl font-semibold text-bodycolor mb-4 max-mobileland:text-1xl'>Professional Details <span className='text-[#FF0000]'>*</span></h4>
                    <h4 className='text-2xl font-semibold text-bodycolor mb-4 max-mobileland:text-1xl'>Role <span className='text-[#FF0000]'>*</span></h4>
                    <div className='mb-3 relative'>
                        <span className='absolute top-4 right-4'><Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" /></span>
                        <select className='border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base w-full appearance-none'>
                            <option>Company Name</option>
                            <option>Choose an industry</option>
                        </select>
                    </div>
                    <div className='mb-3 relative'>
                        <input className='border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base w-full' placeholder='Title (e.g. Lead Finance Analyst)' />


                    </div>


                    <h4 className='text-2xl font-semibold text-bodycolor mb-4 max-mobileland:text-1xl'>Timeframe <span className='text-[#FF0000]'>*</span></h4>
                    <div className='mb-3 flex justify-between relative max-mobileland:flex-wrap'>
                        <div className='w-[40%] flex items-end max-mobileland:flex-wrap max-mobileland:w-full max-mobileland:mb-5'>
                            <div className='relative w-[50%] pr-3 max-mobileland:w-full max-mobileland:pr-0 max-mobileland:mb-3'>
                                <label className='text-base text-bodycolor mb-2 table'>From</label>
                                <span className='absolute bottom-4 right-8'><Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" /></span>
                                <select className='w-full border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base  appearance-none'>
                                    <option>Month</option>
                                    <option>Month</option>
                                </select>
                            </div>
                            <input className='w-[50%] border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base max-mobileland:w-full' type="text" placeholder='' />

                        </div>
                        <div className='w-[40%] flex items-end max-mobileland:flex-wrap max-mobileland:w-full max-mobileland:mb-5'>
                            <div className='relative w-[50%] pr-3 max-mobileland:w-full max-mobileland:pr-0 max-mobileland:mb-3'>
                                <label className='text-base text-bodycolor mb-2 table'>To</label>
                                <span className='absolute bottom-4 right-8'><Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" /></span>
                                <select className='w-full border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base  appearance-none'>
                                    <option>Month</option>
                                    <option>Month</option>
                                </select>
                            </div>
                            <input className='w-[50%] border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base max-mobileland:w-full' type="text" placeholder='' />

                        </div>
                    </div>
                    <div className="relative flex gap-x-3 mb-5">
                        <div className="flex h-6 items-center">
                            <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border border-[#ddd] text-bluecolor focus:ring-bluecolor" />
                        </div>
                        <div className="text-sm leading-6">
                            <label className="font-medium text-bodycolor text-base">Currently working here</label>
                        </div>
                    </div>
                    <h4 className='text-2xl font-semibold text-bodycolor mb-4 max-mobileland:text-1xl'>Key Achievements <span className='text-[#FF0000]'>*</span></h4>
                    <div className='mb-3 relative'>
                        <input className='border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base w-full' type='text' placeholder='Bullet # 1' />

                    </div>
                    <div className='mb-3 relative'>
                        <input className='border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base w-full' type='text' placeholder='Bullet # 2' />

                    </div>
                    <div className='mb-3 relative'>
                        <input className='border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base w-full' type='text' placeholder='Bullet # 3' />

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

export default Stepthree