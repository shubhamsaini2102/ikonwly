'use client';

import { useState } from 'react';
import React from 'react'
import Image from "next/image";
import StepSidebar from '../common/stepsidebar/page';

function Stepfive() {

    return (
        <div className='flex max-mobile:flex-wrap'>
            <div className='bg-[#00379e14] w-[30%] py-10 px-11 max-ippad:w-[35%] max-ippadpro:px-6 max-ippadpro:py-6 max-ippadpro:w-[40%] max-mobile:w-full max-mobileland:p-3'>
                <StepSidebar />
            </div>

            <div className='w-[70%] py-14 px-10 max-ippad:w-[65%] max-ippadpro:w-[60%] max-mobile:w-full max-mobile:px-7 max-mobile:py-7 max-mobileland:p-4'>
                <div className='bg-white shadow-[0_16px_50px_0px_rgba(0,0,0,0.1)] rounded-3xl p-10 max-mobile:p-6 max-mobileland:p-4'>


                    <h4 className='text-2xl font-semibold text-bodycolor mb-4 max-mobileland:text-1xl'>Consulting Preferences</h4>

                    <div className='mb-4 relative'>
                        <span className='absolute top-4 right-4'><Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" /></span>
                        <select className='border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base w-full appearance-none'>
                            <option>Preferred Working Hours per week *</option>
                            <option>Choose an industry</option>
                        </select>
                        <p className='text-xs text-placehlder	mt-1'>0 / 1600 characters</p>
                    </div>
                    <div className='mb-4'>
                        <h5 className='text-xl text-bodycolor font-semibold mb-3 max-mobileland:text-lg max-mobileland:leading-5' >Your Preferred Pricing for each type of Consultation (Euros):</h5>
                        <div className="flex gap-x-3 max-mobileland:flex-wrap max-mobileland:gap-y-3">
                            <input className='border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base w-full' placeholder='Pricing 30 mins' />
                            <input className='border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base w-full' placeholder='Pricing 60 mins' />
                            <input className='border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base w-full' placeholder='Total Pricing' />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <h5 className='text-xl text-bodycolor font-semibold mb-3 max-mobileland:text-lg max-mobileland:leading-5'>Select your preferred consulting services (Minimum 5):</h5>
                        <h6 className='text-base text-bluecolor font-semibold mb-3'>CAREER CONSULTATION</h6>
                        <div className="flex flex-wrap gap-x-5 gap-y-6 max-mobileland:gap-y-3">
                            <span className='text-base text-white bg-bluecolor text-regular border border-bluecolor rounded-lg flex px-4 py-[6px]'>Personalized Career Assessments</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Tailored Career Planning</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Visa</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Career Transition Sklills</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Individual Interview Coaching</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Job Search Strategies</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Negotiations Skill Coaching</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Resume and Cover letter Crafting and Review</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Personalized Action Plans</span>
                        </div>
                    </div>

                    <div className='mb-4'>
                        <h6 className='text-base text-bluecolor font-semibold mb-3'>EDUCATION CONSULTATION</h6>
                        <div className="flex flex-wrap gap-x-5 gap-y-6 max-mobileland:gap-y-3">
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Personalized Career Assessments</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Tailored Career Planning</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Visa</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Career Transition Sklills</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Individual Interview Coaching</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Job Search Strategies</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Negotiations Skill Coaching</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Resume and Cover letter Crafting and Review</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Personalized Action Plans</span>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <h6 className='text-base text-bluecolor font-semibold mb-3'>SKILLS DEVELOPMENT</h6>
                        <div className="flex flex-wrap gap-x-5 gap-y-6 max-mobileland:gap-y-3">
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Personalized Career Assessments</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Tailored Career Planning</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Visa</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Career Transition Sklills</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Individual Interview Coaching</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Job Search Strategies</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Negotiations Skill Coaching</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Resume and Cover letter Crafting and Review</span>
                            <span className='text-base text-bodycolor text-regular border border-bordercolor rounded-lg flex px-4 py-[6px]'>Personalized Action Plans</span>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <h5 className='text-xl text-bodycolor font-semibold mb-3 max-mobileland:text-lg max-mobileland:leading-5'>Other Services on your mind</h5>
                        <input className='border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base w-full' placeholder='Preferred Working Hours per week *' />
                    </div>

                    <div className='mb-4 relative'>
                        <span className='absolute top-4 right-4'><Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" /></span>
                        <select className='border bg-white text-placehlder border-bordercolor p-4 rounded-full text-base w-full appearance-none'>
                            <option>How did you hear about us? *</option>
                            <option>Choose an industry</option>
                        </select>
                        <p className='text-xs text-placehlder	mt-1'>Referral Source is required</p>
                    </div>

                    <div className='mb-4'>
                        <textarea className='border border-bordercolor p-4 rounded-2xl text-base w-full h-[107px] resize-none' placeholder='Motivation and Contribution *'></textarea>
                        <p className='flex justify-between text-xs text-placehlder	mt-1'><span>0 / 1600 characters</span> </p>
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

export default Stepfive