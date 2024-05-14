'use client';

import { useState } from 'react';
import Image from "next/image";
function Profile() {

  const [isOne, setIsOne] = useState(false);
  const [isTow, setIsTow] = useState(false);
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
    <section className='py-16'>
      <div className="container m-auto">

        <div className='flex pt-10'>
          <div className='relative w-[67%]'>
            <ul className='flex gap-2 mb-8'>
              <li><a href='#' className='text-bluecolor text-base font-regular'>Consultants</a></li>
              <span className='text-bluecolor text-base font-regular'>/</span>
              <li><a className='text-bluecolor text-base font-regular' href='#'>Product & Tech</a></li>
              <span className='text-bluecolor text-base font-regular'>/</span>
              <li><a className='text-bodycolor text-base font-regular' href='#'>Christoph Schneider</a></li>
            </ul>
            <div className='flex items-center shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-[40px] px-8 py-8'>
              <span className='mr-[25px] '>  <Image className="" src="/assets/images/dtailpro.png" width={200} height={200} alt="" /></span>
              <div className=''>
                <h4 className='text-bodycolor text-3xl font-semibold flex items-center justify-between'>Christoph Schneider <span className='flex items-center'><a href='#'><Image className="mr-[10px]" src="/assets/images/rbone.png" width={32} height={32} alt="" /></a>   <a href='#'><Image className="" src="/assets/images/rbtwo.png" width={32} height={32} alt="" /></a></span></h4>
                <h5 className='text-base text-bluecolor font-semibold'>Automotive Software Developer</h5>
                <div className="mx-auto flex gap-x-2 mt-2 mb-3.5">
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-2 text-sm	 text-bluecolor">Javascript</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-2 text-sm	 text-bluecolor">HTML</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-2 text-sm	 text-bluecolor">CSS</span>
                </div>
                <ul className='flex gap-5 mt-3'>
                  <li>
                    <span className='table w-[100%] text-sm	 text-bodycolor font-regular'>Location</span>
                    <label className='table w-[100%] text-base text-bodycolor font-semibold'>Germany</label>
                  </li>
                  <li>
                    <span className='table w-[100%] text-sm	 text-bodycolor font-regular'>Time zone</span>
                    <label className='table w-[100%] text-base text-bodycolor font-semibold'>Europe/Berlin +02:00</label>
                  </li>
                  <li>
                    <span className='table w-[100%] text-sm	 text-bodycolor font-regular'>Speak</span>
                    <label className='table w-[100%] text-base text-bodycolor font-semibold'>English, Arabic, German</label>
                  </li>
                </ul>
              </div>
            </div>

            <div className='mt-5 shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-[40px] px-11 py-11'>
              <h4 className='text-bodycolor text-3xl font-semibold flex items-center justify-between'>About the Teacher </h4>
              <div className="mx-auto flex gap-x-2 mt-[14px] mb-5">
                <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-2 text-sm	 text-bluecolor">Engineering</span>
                <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-2 text-sm	 text-bluecolor">Software Engineering</span>

              </div>
              <p className='text-base text-bodycolor font-regular leading-[28px]'>I am Ahmed, I come from Egypt. I am currently enrolled in the 3rd semester of MEng. Software-based Automotive Systems at Hochschule Esslingen. I’m studying Automotive Systems Architecture, Communication Protocols (CAN, LIN, Flex Ray), Automotive application domains, and Vehicle technology. As part of my studies this semester, I&apos;m working on a project to investigate the quickness of an emergency vehicle with V2X features.</p>

              <h4 className='text-bodycolor text-3xl font-semibold flex items-center justify-between mb-3 mt-5'>Services </h4>
              <div className="border border-dashed border-[#ddd] rounded-3xl mb-4 px-2.5 py-3">
                <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordion}>
                  <div className='text-xl font-medium'>Career Consultation</div>
                  <div>{isOne ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
                </div>
                {isOne && <div className="p-4 pt-[0]">
                  <ul className='flex flex-wrap'>
                    <li className='flex gap-x-1 mb-3 w-auto bg-white items-center shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-full px-6 py-5 text-base text-bodycolor font-regular '> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Resume and Cover Letter Crafting and Review</li>
                    <li className='flex gap-x-1 mb-3 w-auto bg-white items-center shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-full px-6 py-5 text-base text-bodycolor font-regular '> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Job Search Strategies and Personalized Action Plans</li>
                    <li className='flex gap-x-1 mb-3 mr-3.5 w-auto bg-white items-center shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-full px-6 py-5 text-base text-bodycolor font-regular '> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Career Transition Assistance</li>
                    <li className='flex gap-x-1 mb-3 w-auto bg-white items-center shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-full px-6 py-5 text-base text-bodycolor font-regular '><Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Individual Interview Coaching</li>
                  </ul>
                </div>}
              </div>
              <div className="border border-dashed border-[#ddd] rounded-3xl mb-4 px-2.5 py-3">
                <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordionOne}>
                  <div className='text-xl font-medium'>Education Consultation</div>
                  <div>{isTow ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
                </div>
                {isTow && <div className="p-4 pt-[0]">
                  <ul className='flex flex-wrap'>
                    <li className='flex gap-x-1 mb-3 w-auto bg-white items-center shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-full px-6 py-5 text-base text-bodycolor font-regular '> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Resume and Cover Letter Crafting and Review</li>
                    <li className='flex gap-x-1 mb-3 w-auto bg-white items-center shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-full px-6 py-5 text-base text-bodycolor font-regular '> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Job Search Strategies and Personalized Action Plans</li>
                    <li className='flex gap-x-1 mb-3 mr-3.5 w-auto bg-white items-center shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-full px-6 py-5 text-base text-bodycolor font-regular '> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Career Transition Assistance</li>
                    <li className='flex gap-x-1 mb-3 w-auto bg-white items-center shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-full px-6 py-5 text-base text-bodycolor font-regular '><Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Individual Interview Coaching</li>
                  </ul>
                </div>}
              </div>
              <div className="border border-dashed border-[#ddd] rounded-3xl mb-4 px-2.5 py-3">
                <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordionTwo}>
                  <div className='text-xl font-medium'>Skill Development</div>
                  <div>{isThree ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
                </div>
                {isThree && <div className="p-4 pt-[0]">
                  <ul className='flex flex-wrap'>
                    <li className='flex gap-x-1 mb-3 w-auto bg-white items-center shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-full px-6 py-5 text-base text-bodycolor font-regular '> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Resume and Cover Letter Crafting and Review</li>
                    <li className='flex gap-x-1 mb-3 w-auto bg-white items-center shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-full px-6 py-5 text-base text-bodycolor font-regular '> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Job Search Strategies and Personalized Action Plans</li>
                    <li className='flex gap-x-1 mb-3 mr-3.5 w-auto bg-white items-center shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-full px-6 py-5 text-base text-bodycolor font-regular '> <Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Career Transition Assistance</li>
                    <li className='flex gap-x-1 mb-3 w-auto bg-white items-center shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-full px-6 py-5 text-base text-bodycolor font-regular '><Image className="" src="/assets/images/verify.png" width={20} height={20} alt="" /> Individual Interview Coaching</li>
                  </ul>
                </div>}
              </div>
            </div>

            <div className='mt-5 shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-[40px] px-11 py-11'>
              <h4 className='mb-6 text-bodycolor text-3xl font-semibold flex items-center justify-between'>Experience </h4>
              <div className='flex items-center'>
                <span className='mr-4'>
                  <Image className="" src="/assets/images/serone.png" width={72} height={72} alt="" />
                </span>
                <div>
                  <h5 className='text-xl text-bodycolor font-semibold'>Software Developer at Mercedes-Benz</h5>
                  <p className='flex items-center mb-[0] text-base text-bodycolor font-regular'>Full time <span className='px-2 font-bold text-subheading'>.</span> May, 2018 - Now <span className='flex items-center pl-[10px]'> <Image className="" src="/assets/images/location.png" width={20} height={20} alt="" /> Germany</span></p>
                </div>
              </div>
              <h4 className='mb-6 mt-[26px] text-bodycolor text-3xl font-semibold flex items-center justify-between'>Education </h4>
              <div className='flex items-center'>
                <span className='mr-4'>
                  <Image className="" src="/assets/images/sertwo.png" width={72} height={72} alt="" />
                </span>
                <div>
                  <h5 className='text-xl text-bodycolor font-semibold'>Automotive in HS Esslingen</h5>
                  <p className='flex items-center mb-[0] text-base text-bodycolor font-regular'>Masters <span className='px-2 font-bold text-subheading'>.</span> May, 2017 - Jan, 2024 <span className='flex items-center pl-[10px]'> <Image className="" src="/assets/images/location.png" width={20} height={20} alt="" /> Germany</span></p>
                </div>
              </div>
            </div>

            <div className='mt-5 shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-[40px] px-11 py-11'>
              <h4 className='mb-6 text-bodycolor text-3xl font-semibold flex items-center justify-between'>Reviews </h4>
              <form>
                <div className="col-span-full">
                  <div className="mt-2">
                    <textarea id="about" name="about" className="resize-none h-[131px] py-5 px-[20px] block w-full  border border-[#ddd] rounded-3xl text-gray-900 shadow-sm  sm:text-sm sm:leading-6" placeholder='Write a review...'></textarea>
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="mt-2 text-right">
                    <input className="outline-none bg-bluecolor text-white px-[43px] py-[16px] w-auto  rounded-full text-base font-regular" type='submit' value="Submit" />
                  </div>
                </div>
              </form>
              <div className='mt-[30px]'>
                <div className='relative'>
                  <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
                  <div className='flex items-center mt-3 border-[#ddd] border-b-[1px] pb-6 mb-6'>
                    <span className='mr-[12px]'>  <Image className="" src="/assets/images/review.png" width={40} height={40} alt="" /></span>
                    <div className=''>
                      <h5 className='text-bodycolor text-base font-semibold leading-[20px] mb-[0]'>Clara Bertoletti</h5>
                      <span className='text-bodycolor text-sm	 font-medium'>MUI lover</span>
                    </div>
                  </div>
                </div>
                <div className='relative'>
                  <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
                  <div className='flex items-center mt-3 border-[#ddd] border-b-[1px] pb-6 mb-6'>
                    <span className='mr-[12px]'>  <Image className="" src="/assets/images/review.png" width={40} height={40} alt="" /></span>
                    <div className=''>
                      <h5 className='text-bodycolor text-base font-semibold leading-[20px] mb-[0]'>Clara Bertoletti</h5>
                      <span className='text-bodycolor text-sm	 font-medium'>MUI lover</span>
                    </div>
                  </div>
                </div>
                <div className='relative'>
                  <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
                  <div className='flex items-center mt-3 border-[#ddd] border-b-[1px] pb-6 mb-6'>
                    <span className='mr-[12px]'>  <Image className="" src="/assets/images/review.png" width={40} height={40} alt="" /></span>
                    <div className=''>
                      <h5 className='text-bodycolor text-base font-semibold leading-[20px] mb-[0]'>Clara Bertoletti</h5>
                      <span className='text-bodycolor text-sm	 font-medium'>MUI lover</span>
                    </div>
                  </div>
                </div>
                <div className='relative'>
                  <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
                  <div className='flex items-center mt-3 border-[#ddd] border-b-[1px] pb-6 mb-6'>
                    <span className='mr-[12px]'>  <Image className="" src="/assets/images/review.png" width={40} height={40} alt="" /></span>
                    <div className=''>
                      <h5 className='text-bodycolor text-base font-semibold leading-[20px] mb-[0]'>Clara Bertoletti</h5>
                      <span className='text-bodycolor text-sm	 font-medium'>MUI lover</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center py-[25]'>
                <ul className='flex items-center justify-end w-[100%]'>
                  <li><a className="ml-[10px] text-[18px] font-semibold bg-bluecolor text-white w-[48px] h-[48px] flex items-center justify-center rounded-xl" href='#'>1</a></li>
                  <li><a className="ml-[10px] text-[18px] font-semibold bg-[#E6EBF6] text-bluecolor w-[48px] h-[48px] flex items-center justify-center rounded-xl" href='#'>2</a></li>
                  <li><a className="ml-[10px] text-[18px] font-semibold bg-[#E6EBF6] text-bluecolor w-[48px] h-[48px] flex items-center justify-center rounded-xl" href='#'>3</a></li>
                  <li><a className="ml-[10px] text-[18px] font-semibold bg-bluecolor text-white w-[157px] h-[48px] flex items-center justify-center rounded-full" href='#'>Next</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='relative w-[33%] pl-[20px] pt-[60px]'>
            <div className=' shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-[40px] px-8 py-8'>
              <p className='w-[100%] flex items-center text-[18px] text-bodycolor justify-between'>Price Starting From <span className='font-semibold text-3xl text-bluecolor'>$15.99</span></p>
              <div className=''>
                <button className="w-[100%] mt-5  outline-none bg-bluecolor text-white px-[43px] py-[16px]  rounded-full text-base font-regular">Book Now</button>
                <button className="w-[100%] mt-[12px] outline-none bg-[#FF7A00] text-white px-[43px] py-[16px] rounded-full text-base font-regular">Share Profile</button>
              </div>

            </div>
            <div className='mt-5'>
              <h4 className='mb-6 text-bodycolor text-3xl font-semibold flex items-center justify-between'>Similar Profiles </h4>
            </div>
            <div className="mx-auto flex flex-wrap gap-x-5 gap-y-7  lg: lg:grid-cols-3">
              <article className="bg-white rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[100%]  ">
                <div className="relative">
                  <Image
                    className=""
                    src="/assets/images/client.png"
                    width={500}
                    height={226}
                    alt=""
                  />
                  <span className="bg-[#ff7b00c4] rounded-full py-[8px] px-[18px] text-white text-base absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
                </div>
                <div className="px-6 py-[25px]">
                  <h5 className="text-xl text-bodycolor font-bold">Christoph Schneider</h5>
                  <h6 className="text-base text-bodycolor font-regular my-[3px]">Fagikasade krovung monoligt</h6>
                  <label className="text-base text-bluecolor font-regular ">Product & Tech</label>
                  <div className="mx-auto flex gap-x-2 mt-2 mb-3.5">
                    <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-[12px] text-bluecolor">Javascript</span>
                    <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-[12px] text-bluecolor">HTML</span>
                    <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-[12px] text-bluecolor">CSS</span>
                  </div>
                  <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-3.5 py-1.5 text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
                </div>
              </article>
              <article className="bg-white rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[100%]  ">
                <div className="relative">
                  <Image
                    className=""
                    src="/assets/images/client.png"
                    width={500}
                    height={226}
                    alt=""
                  />
                  <span className="bg-[#ff7b00c4] rounded-full py-[8px] px-[18px] text-white text-base absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
                </div>
                <div className="px-6 py-[25px]">
                  <h5 className="text-xl text-bodycolor font-bold">Christoph Schneider</h5>
                  <h6 className="text-base text-bodycolor font-regular my-[3px]">Fagikasade krovung monoligt</h6>
                  <label className="text-base text-bluecolor font-regular ">Product & Tech</label>
                  <div className="mx-auto flex gap-x-2 mt-2 mb-3.5">
                    <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-[12px] text-bluecolor">Javascript</span>
                    <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-[12px] text-bluecolor">HTML</span>
                    <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-[12px] text-bluecolor">CSS</span>
                  </div>
                  <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-3.5 py-1.5 text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
                </div>
              </article>
              <article className="bg-white rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[100%]  ">
                <div className="relative">
                  <Image
                    className=""
                    src="/assets/images/client.png"
                    width={500}
                    height={226}
                    alt=""
                  />
                  <span className="bg-[#ff7b00c4] rounded-full py-[8px] px-[18px] text-white text-base absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
                </div>
                <div className="px-6 py-[25px]">
                  <h5 className="text-xl text-bodycolor font-bold">Christoph Schneider</h5>
                  <h6 className="text-base text-bodycolor font-regular my-[3px]">Fagikasade krovung monoligt</h6>
                  <label className="text-base text-bluecolor font-regular ">Product & Tech</label>
                  <div className="mx-auto flex gap-x-2 mt-2 mb-3.5">
                    <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-[12px] text-bluecolor">Javascript</span>
                    <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-[12px] text-bluecolor">HTML</span>
                    <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-[12px] text-bluecolor">CSS</span>
                  </div>
                  <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-3.5 py-1.5 text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
                </div>
              </article>
              <article className="bg-white rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[100%]  ">
                <div className="relative">
                  <Image
                    className=""
                    src="/assets/images/client.png"
                    width={500}
                    height={226}
                    alt=""
                  />
                  <span className="bg-[#ff7b00c4] rounded-full py-[8px] px-[18px] text-white text-base absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
                </div>
                <div className="px-6 py-[25px]">
                  <h5 className="text-xl text-bodycolor font-bold">Christoph Schneider</h5>
                  <h6 className="text-base text-bodycolor font-regular my-[3px]">Fagikasade krovung monoligt</h6>
                  <label className="text-base text-bluecolor font-regular ">Product & Tech</label>
                  <div className="mx-auto flex gap-x-2 mt-2 mb-3.5">
                    <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-[12px] text-bluecolor">Javascript</span>
                    <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-[12px] text-bluecolor">HTML</span>
                    <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-[12px] text-bluecolor">CSS</span>
                  </div>
                  <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-3.5 py-1.5 text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Profile;