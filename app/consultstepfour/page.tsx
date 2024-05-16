'use client';

import { useState } from 'react';
import React from 'react'
import Image from "next/image";
import StepSidebar from '../common/stepsidebar/page';

function Stepfour() {

    return (
        <div className='flex max-mobile:flex-wrap'>
            <div className='bg-[#00379e14] w-[30%] py-10 px-11 max-ippad:w-[35%] max-ippadpro:px-6 max-ippadpro:py-6 max-ippadpro:w-[40%] max-mobile:w-full max-mobileland:p-3'>
                <StepSidebar />
            </div>

            <div className='w-[70%] py-14 px-10 max-ippad:w-[65%] max-ippadpro:w-[60%] max-mobile:w-full max-mobile:px-7 max-mobile:py-7 max-mobileland:p-4'>
                <div className='bg-white shadow-[0_16px_50px_0px_rgba(0,0,0,0.1)] rounded-3xl p-10 max-mobile:p-6 max-mobileland:p-4'>



                    <h4 className='text-2xl font-semibold text-bodycolor mb-4 max-mobileland:text-1xl'>Skills</h4>
                    <div className='mb-4 relative'>
                        <input className='border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base w-full' placeholder='Add at least 5 skills: Ex. Java' />
                        <p className='text-xs text-placehlder	mt-1'>Add atleast 5 Skills</p>

                    </div>
                    <div className='mb-4 relative'>
                        <span className='absolute top-4 right-4'><Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" /></span>
                        <select className='border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base w-full appearance-none'>
                            <option>Years of Experience *</option>
                            <option>Choose an industry</option>
                        </select>
                        <p className='text-xs text-placehlder	mt-1'>Years of Experience is required</p>
                    </div>
                    <div className='mb-4'>
                        <textarea className='border border-bordercolor p-4 rounded-2xl text-base w-full h-[107px] resize-none' placeholder='Motivation and Contribution *'></textarea>
                        <p className='flex justify-between text-xs text-placehlder	mt-1'><span>0 / 1600 characters</span> <span>please write at least 250 chars</span></p>
                    </div>

                    <div className='mb-4'>
                        <textarea className='border border-bordercolor p-4 rounded-2xl text-base w-full h-[107px] resize-none' placeholder='Statement of Interest (optional)'></textarea>

                    </div>
                    <div className='mb-5'>
                        <label className='text-base text-bodycolor font-regular mb-3 table'>Education Certificate <span className='text-[#FF0000]'>*</span></label>
                        <div className='relative h-14'>
                            <input className='cursor-pointer text-[0px] px-7 py-3 h-14 w-64' type='file' value="" />
                            <span className='pointer-events-none cursor-pointer absolute top-0  left-0 flex align-center bg-[#E1ECFF] rounded-full border border-bluecolor border-dashed px-7 py-3 text-base text-bluecolor'> <Image
                                className="mr-2"
                                src="/assets/images/darow.png"
                                width={24}
                                height={24}
                                alt=""
                            /> Upload Resume</span>
                        </div>

                    </div>
                    <div className=''>
                        <label className='text-base text-bodycolor font-regular mb-3 table'>Education Certificate <span className='text-[#FF0000]'>*</span></label>
                        <div className='relative h-14'>
                            <input className='cursor-pointer text-[0px] px-7 py-3 h-14 w-64' type='file' value="" />
                            <span className='min-w-[209px] pointer-events-none cursor-pointer absolute top-0  left-0 flex align-center bg-[#E1ECFF] rounded-full border border-bluecolor border-dashed px-7 py-3 text-base text-bluecolor'> <Image
                                className="mr-2"
                                src="/assets/images/darow.png"
                                width={24}
                                height={24}
                                alt=""
                            /> Upload Video</span>
                        </div>

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

export default Stepfour