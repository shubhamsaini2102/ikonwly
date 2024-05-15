'use client';

import { useState } from 'react';
import Image from "next/image";
import Slider from "react-slick";

function Meetexpert({config:{slider, teams, teamshow}}: any) {

  var settings = {
    dots: true,
    arrow:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
   <>
      <div className="mx-auto flex gap-x-5  lg: lg:grid-cols-3 max-lg:flex-wrap max-lg:gap-y-6 max-lg:justify-center">
        <article className="bg-white rounded-2xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[33.33%] max-lg:w-[48.5%] max-md:w-full">
          <div className="relative">
            <Image
              className=""
              src="/assets/images/client.png"
              width={500}
              height={226}
              alt=""
            />
            <span className="bg-[#ff7b00c4] rounded-full py-2 px-5 text-white text-Font15 absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
          </div>
          <div className="px-6 py-6">
            <h5 className="text-xl text-[#1B1B1B] font-bold">Christoph Schneider</h5>
            <h6 className="text-Font15 text-[#1B1B1B] font-normal my-[3px]">Fagikasade krovung monoligt</h6>
            <label className="text-Font15 text-bluecolor font-normal ">Product & Tech</label>
            <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">Javascript</span>
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">HTML</span>
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">CSS</span>
            </div>
            <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-3.5 py-1.5 text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
          </div>
        </article>
        <article className="bg-white rounded-2xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[33.33%] max-lg:w-[48.5%] max-md:w-full">
          <div className="relative">
            <Image
              className=""
              src="/assets/images/client.png"
              width={500}
              height={226}
              alt=""
            />
            <span className="bg-[#ff7b00c4] rounded-full py-2 px-5 text-white text-Font15 absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
          </div>
          <div className="px-6 py-6">
            <h5 className="text-xl text-[#1B1B1B] font-bold">Christoph Schneider</h5>
            <h6 className="text-Font15 text-[#1B1B1B] font-normal my-[3px]">Fagikasade krovung monoligt</h6>
            <label className="text-Font15 text-bluecolor font-normal ">Product & Tech</label>
            <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">Javascript</span>
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">HTML</span>
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">CSS</span>
            </div>
            <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-3.5 py-1.5 text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
          </div>
        </article>
        <article className="bg-white rounded-2xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[33.33%] max-lg:w-[48.5%] max-md:w-full">
          <div className="relative">
            <Image
              className=""
              src="/assets/images/client.png"
              width={500}
              height={226}
              alt=""
            />
            <span className="bg-[#ff7b00c4] rounded-full py-2 px-5 text-white text-Font15 absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
          </div>
          <div className="px-6 py-6">
            <h5 className="text-xl text-[#1B1B1B] font-bold">Christoph Schneider</h5>
            <h6 className="text-Font15 text-[#1B1B1B] font-normal my-[3px]">Fagikasade krovung monoligt</h6>
            <label className="text-Font15 text-bluecolor font-normal ">Product & Tech</label>
            <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">Javascript</span>
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">HTML</span>
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">CSS</span>
            </div>
            <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-3.5 py-1.5 text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
          </div>
        </article>
      </div>

     

{slider && 
<div className='mobileSlider md:hidden'>
<Slider {...settings} >
<article className="bg-white rounded-2xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[33.33%] max-lg:w-[48.5%] max-md:shadow-none">
          <div className="relative">
            <Image
              className=""
              src="/assets/images/client.png"
              width={500}
              height={226}
              alt=""
            />
            <span className="bg-[#ff7b00c4] rounded-full py-2 px-5 text-white text-Font15 absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
          </div>
          <div className="px-6 py-6">
            <h5 className="text-xl text-[#1B1B1B] font-bold">Christoph Schneider</h5>
            <h6 className="text-Font15 text-[#1B1B1B] font-normal my-[3px]">Fagikasade krovung monoligt</h6>
            <label className="text-Font15 text-bluecolor font-normal ">Product & Tech</label>
            <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">Javascript</span>
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">HTML</span>
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">CSS</span>
            </div>
            <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-3.5 py-1.5 text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
          </div>
        </article>
        <article className="bg-white rounded-2xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[33.33%] max-lg:w-[48.5%] max-md:shadow-none">
          <div className="relative">
            <Image
              className=""
              src="/assets/images/client.png"
              width={500}
              height={226}
              alt=""
            />
            <span className="bg-[#ff7b00c4] rounded-full py-2 px-5 text-white text-Font15 absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
          </div>
          <div className="px-6 py-6">
            <h5 className="text-xl text-[#1B1B1B] font-bold">Christoph Schneider</h5>
            <h6 className="text-Font15 text-[#1B1B1B] font-normal my-[3px]">Fagikasade krovung monoligt</h6>
            <label className="text-Font15 text-bluecolor font-normal ">Product & Tech</label>
            <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">Javascript</span>
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">HTML</span>
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">CSS</span>
            </div>
            <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-3.5 py-1.5 text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
          </div>
        </article>
        <article className="bg-white rounded-2xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[33.33%] max-lg:w-[48.5%] max-md:shadow-none">
          <div className="relative">
            <Image
              className=""
              src="/assets/images/client.png"
              width={500}
              height={226}
              alt=""
            />
            <span className="bg-[#ff7b00c4] rounded-full py-2 px-5 text-white text-Font15 absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
          </div>
          <div className="px-6 py-6">
            <h5 className="text-xl text-[#1B1B1B] font-bold">Christoph Schneider</h5>
            <h6 className="text-Font15 text-[#1B1B1B] font-normal my-[3px]">Fagikasade krovung monoligt</h6>
            <label className="text-Font15 text-bluecolor font-normal ">Product & Tech</label>
            <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">Javascript</span>
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">HTML</span>
              <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor">CSS</span>
            </div>
            <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-3.5 py-1.5 text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
          </div>
        </article>
  </Slider>
  </div>
}
     
      </>
  )
}

export default Meetexpert