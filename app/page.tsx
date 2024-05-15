'use client';

import { useState } from 'react';
import Image from "next/image";
import Meetexpert from './common/meet-our-expert/page';
import Slider from "react-slick";
import Oursteps from './common/oursteps/page';


export default function Home() {
  var settings = {
    dots: true,
    arrow:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      
    ]


  };

  const [isOne, setIsOne] = useState(false);
  const [isTow, setIsTow] = useState(false);
  const [isThree, setIsThree] = useState(false);
  const [isFour, setIsFour] = useState(false);

  const toggleAccordion = () => {
    setIsOne(!isOne);
 
  };
  const toggleAccordionOne = () => {
    setIsTow(!isTow);
  };
  const toggleAccordionTwo = () => {
    setIsThree(!isThree);
  };
  const toggleAccordionThree = () => {
    setIsFour(!isFour);
  };
  return (
    <>
      <section className="">
        <Image
          className="max-lg:h-[902px] max-lg:object-cover max-md:h-[850px]"
          src="/assets/images/banner.png"
          width={1920}
          height={500}
          alt=""
        />
        <div className="container m-auto">
          <div className="grid gap-4 items-center absolute top-[65%] translate-y-[-50%] w-[80%] max-lg:top-[75%] max-md:w-[95%]">
            <div className="w-[100%]">
              <span className="text-[orange] text-lg font-regular bg-[#ffffff12] border-[1px] border-[orange] rounded-full px-7 py-3.5 mb-[10px] max-md:text-base md:text-sm">Unlocking Opportunities</span>
              <h2 className="text-consultfont text-white font-bold  leading-[88px] mt-10 max-lg:text-7xl max-md:text-ipadheadingFont max-md:pr-10"><span className="relative">
                iKnowly
                <Image
                  className="absolute bottom-[6px] left-0"
                  src="/assets/images/line.png"
                  width={245}
                  height={19}
                  alt=""
                />
              </span><br/> Community, Hub </h2>
              <p className="text-white text-lg leading-7 font-regular mt-4 mb-5 max-lg:text-lg max-md:text-base">For students, job seekers, and professionals</p>
              <div className="flex items-center max-md:flex-wrap">
                <a href="#" className="bg-bluecolor text-white px-11 py-5 w-auto mr-2.5 rounded-full text-base font-regular max-md:w-full max-md:text-center max-md:mb-3">Book a consultation</a>
                <a href="#" className="bg-[orange] text-white px-11 py-5 w-auto mr-2.5 rounded-full text-base font-regular max-md:w-full max-md:text-center">Become a Consultant</a>
              </div>
              <div className="text-white text-base font-regular my-[15px]">
                <p className="my-[15px] max-md:text-base">Trusted by industry leaders</p>
                <Image
                  className="text-white text-base"
                  src="/assets/images/group.png"
                  width={300}
                  height={48}
                  alt=""
                />
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* new section */}
      <section>
        <div className="container m-auto">
          <div className="bg-bluecolor py-8 px-32 relative rounded-[15px] mt-[-95px] max-lg:px-12 max-lg:py-7 max-lg:mt-[-75px]">
            <Image
              className="absolute top-[-20px] left-[-20px] max-lg:max-w-14 max-md:max-w-12 max-md:left-[-10px]"
              src="/assets/images/shades.png"
              width={100}
              height={175}
              alt=""
            />
            <div className="mx-auto items-center justify-between flex   lg:mx-0 lg: lg:grid-cols-3 max-md:flex-wrap max-md:justify-space">
              <article className=''>
                <h5 className="text-white text-[56px] font-bold max-lg:text-4xl max-md:text-3xl">120+</h5>
                <span className="text-white text-2xl font-regular mt-[0px] max-lg:text-lg max-md:text-base">Consultants</span>
              </article>
              <article className=''>
                <h5 className="text-white text-[56px] font-bold max-lg:text-4xl max-md:text-3xl">10k+</h5>
                <span className="text-white text-2xl font-regular mt-[0px] max-lg:text-lg max-md:text-base">Job Seekers</span>
              </article>
              <article className='max-md:w-[100%] max-md:mt-5 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center'>
                <h5 className="text-white text-[56px] font-bold max-lg:text-4xl max-md:text-3xl">20k+</h5>
                <span className="text-white text-2xl font-regular mt-[0px] max-lg:text-lg max-md:text-base">Consultations</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* new section */}
      <section className="mt-[140px] pb-[120px] max-lg:mt-20 max-lg:pb-20 max-md:mt-14 max-md:pb-14" >
        <div className="container m-auto">
          <h3 className="text-bodycolor text-headingFont leading-[56px] font-bold text-center max-lg:text-4xl max-md:text-listfont max-md:leading-8 max-md:px-3">We&apos;re revolutionizing <span className="text-bluecolor">educational & career <br className='max-lg:hidden'/>consulting </span>to empower your journey.</h3>
          <p className="text-bodycolor text-lg leading-30px] font-regular text-center mt-[10px] max-lg:text-base max-md:text-sm">Our goal is to assist you in building your career, connect you with experts who share your aspirations.<br className='max-lg:hidden'/> We help you reach your full potential through a transformative learning experience.</p>
          <div className="flex items-center justify-center mt-8 mb-[50px] max-md:flex-wrap max-md:mt-4 max-md:mb-7">
            <a href="#" className="bg-bluecolor text-white px-11 py-5 w-auto mr-2.5 rounded-full text-base font-regular max-md:w-full max-md:text-center">Book a consultation</a>
            <a href="#" className="bg-[orange] text-white px-11 py-5 w-auto mr-2.5 rounded-full text-base font-regular max-md:w-full max-md:text-center max-md:mt-3">Become a Consultant</a>
          </div>
          <div className="mx-auto flex gap-x-5  lg: lg:grid-cols-4 max-lg:flex-wrap max-lg:gap-y-6">
            <article className="border-bluecolor border-2 p-5 rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[25%] max-lg:w-[48.5%] max-md:w-full ">
              <Image
                className=""
                src="/assets/images/icone.png"
                width={48}
                height={48}
                alt=""
              />
              <h5 className="text-bodycolor text-lg leading-7 semibold my-2.5 font-semibold">Tailored Guidance</h5>
              <span className="text-bodycolor text-Font15 leading-6 font-regular">Receive personalized advice from experienced consultants to navigate your educational and professional journey in Germany.</span>
            </article>
            <article className="border-[orange] border-2 p-5 rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[25%] max-lg:w-[48.5%] max-md:w-full">
              <Image
                className=""
                src="/assets/images/ictwo.png"
                width={48}
                height={48}
                alt=""
              />
              <h5 className="text-bodycolor text-lg leading-7 semibold my-2.5 font-semibold">Industry Insights</h5>
              <span className="text-bodycolor text-Font15 leading-6 font-regular">Connect with professionals from high-caliber companies who can provide valuable insights and mentorship.</span>
            </article>
            <article className="border-bluecolor border-2 p-5 rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[25%] max-lg:w-[48.5%] max-md:w-full">
              <Image
                className=""
                src="/assets/images/icthree.png"
                width={48}
                height={48}
                alt=""
              />
              <h5 className="text-bodycolor text-lg leading-7 semibold my-2.5 font-semibold">Flexible Options</h5>
              <span className="text-bodycolor text-Font15 leading-6 font-regular">Choose from a range of consultants and book sessions with experts at your own convenience.</span>
            </article>
            <article className="border-[orange] border-2 p-5 rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[25%] max-lg:w-[48.5%] max-md:w-full">
              <Image
                className=""
                src="/assets/images/icfour.png"
                width={48}
                height={48}
                alt=""
              />
              <h5 className="text-bodycolor text-lg leading-7 semibold my-2.5 font-semibold">Cost-Efficient</h5>
              <span className="text-bodycolor text-Font15 leading-6 font-regular">Access expert advice without the high costs associated with traditional consulting services.</span>
            </article>
          </div>
        </div>


      </section>


      {/* new section */}
      <section className="bg-[#00379e12] pt-24 pb-24 max-lg:pt-20 max-lg:pb-20 max-md:pt-10 max-md:pb-10 ">
        <div className="container m-auto">
          <h3 className="text-bodycolor text-headingFont leading-[56px] font-bold text-center max-lg:text-ipadheadingFont max-md:text-listfont">Meet Our  <span className="text-bluecolor">Licensed Experts </span></h3>
          <p className="text-bodycolor text-lg leading-30px font-regular text-center mt-4 max-lg:text-base max-md:text-sm	">Connect with a community of dedicated professionals. Tailored for consultants, our <br className='max-lg:hidden'/>platform fosters collaboration and inspiration for meaningful interactions.</p>

          <div className="mx-auto flex justify-center gap-x-2 mt-8 mb-[30px] max-lg:flex-wrap max-lg:gap-x-5 max-lg:gap-y-3 max-md:gap-x-3">
            <span className="bg-bluecolor rounded-full border-2 border-bluecolor px-10 py-3.5 text-base text-white font-semibold max-md:text-xs max-md:px-7">Tech</span>
            <span className="bg-[#E1ECFF] rounded-full border-2 border-bluecolor px-10 py-3.5 text-base text-bluecolor font-semibold max-md:text-xs max-md:px-7" >Design</span>
            <span className="bg-[#E1ECFF] rounded-full border-2 border-bluecolor px-10 py-3.5 text-base text-bluecolor font-semibold max-md:text-xs max-md:px-7">Accounts</span>
            <span className="bg-[#E1ECFF] rounded-full border-2 border-bluecolor px-10 py-3.5 text-base text-bluecolor font-semibold max-md:text-xs max-md:px-7">SEO</span>
            <span className="bg-[#E1ECFF] rounded-full border-2 border-bluecolor px-10 py-3.5 text-base text-bluecolor font-semibold max-md:text-xs max-md:px-7">Medical</span>
            <span className="bg-[#E1ECFF] rounded-full border-2 border-bluecolor px-10 py-3.5 text-base text-bluecolor font-semibold max-md:text-xs max-md:px-7">Product</span>
          </div>
          <div className="max-w-[860px] mx-auto flex justify-center gap-x-2  mb-10 max-lg:hidden">
            <input className="bg-white text-base text-bodycolor h-[52px] rounded-full px-7 font-semibold w-[100%]" type="text" placeholder="Search a consultant..." />
            <button className="bg-bluecolor rounded-full border-2 border-bluecolor px-10 py-3.5 text-base text-white font-semibold" type="submit">Search</button>
          </div>
         <Meetexpert config={{slider:true, teams:false}}/>
          <div className="text-center mt-10">
            <a href="#" className="m-auto table items-center justify-center bg-bluecolor rounded-full px-10 py-3.5 text-base text-white text-center font-medium  h-[52px] max-md:mt-16">See All Consultants</a>
          </div>
        </div>
      </section>

      {/* new section */}
      <section className="bg-bluecolor pt-24 pb-20 max-lg:pt-20 max-lg:pb-20 max-md:pt-12 max-md:pb-12">
        <div className="container m-auto">
          <h3 className="text-white text-headingFont leading-[56px] font-bold text-center max-lg:text-ipadheadingFont max-md:text-listfont max-md:mb-2">What our clients say!</h3>
          <p className="text-white text-lg leading-30px] font-regular text-center mt-4 mb-10 max-lg:text-base max-md:text-sm max-md:mt-2">Companies from across the globe have had fantastic experiences using theFront. <br />Here’s what they have to say.</p>
          <div className="mx-auto flex-wrap flex gap-x-4  lg: lg:grid-cols-3 max-lg:hidden">
            <article className="mb-[18px] bg-white border-bluecolor border-2 p-[25px] rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-[13px]"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-bodycolor text-base leading-7 font-regular">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-[16px] gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-base text-bodycolor font-medium">Clara Bertoletti</h5>
                  <h6 className="text-[14px] text-bodycolor font-regular">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-[18px] bg-white border-bluecolor border-2 p-[25px] rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-[13px]"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-bodycolor text-base leading-7 font-regular">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-[16px] gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-base text-bodycolor font-medium">Clara Bertoletti</h5>
                  <h6 className="text-[14px] text-bodycolor font-regular">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-[18px] bg-white border-bluecolor border-2 p-[25px] rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-[13px]"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-bodycolor text-base leading-7 font-regular">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-[16px] gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-base text-bodycolor font-medium">Clara Bertoletti</h5>
                  <h6 className="text-[14px] text-bodycolor font-regular">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-[18px] bg-white border-bluecolor border-2 p-[25px] rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-[13px]"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-bodycolor text-base leading-7 font-regular">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-[16px] gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-base text-bodycolor font-medium">Clara Bertoletti</h5>
                  <h6 className="text-[14px] text-bodycolor font-regular">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-[18px] bg-white border-bluecolor border-2 p-[25px] rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-[13px]"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-bodycolor text-base leading-7 font-regular">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-[16px] gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-base text-bodycolor font-medium">Clara Bertoletti</h5>
                  <h6 className="text-[14px] text-bodycolor font-regular">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-[18px] bg-white border-bluecolor border-2 p-[25px] rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-[13px]"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-bodycolor text-base leading-7 font-regular">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-[16px] gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-base text-bodycolor font-medium">Clara Bertoletti</h5>
                  <h6 className="text-[14px] text-bodycolor font-regular">MUI lover</h6>
                </div>
              </div>
            </article>
          </div>
          {/* mobile-slider */}
          <div className='lg:hidden'>
          <Slider {...settings}>
          <article className="mb-[18px] bg-white border-bluecolor border-2 p-[25px] rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-[13px]"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-bodycolor text-base leading-7 font-regular">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-[16px] gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-base text-bodycolor font-medium">Clara Bertoletti</h5>
                  <h6 className="text-[14px] text-bodycolor font-regular">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-[18px] bg-white border-bluecolor border-2 p-[25px] rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-[13px]"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-bodycolor text-base leading-7 font-regular">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-[16px] gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-base text-bodycolor font-medium">Clara Bertoletti</h5>
                  <h6 className="text-[14px] text-bodycolor font-regular">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-[18px] bg-white border-bluecolor border-2 p-[25px] rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-[13px]"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-bodycolor text-base leading-7 font-regular">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-[16px] gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-base text-bodycolor font-medium">Clara Bertoletti</h5>
                  <h6 className="text-[14px] text-bodycolor font-regular">MUI lover</h6>
                </div>
              </div>
            </article>
  
    </Slider>
    </div>
        </div>
      </section>

      {/* new section */}
      <Oursteps config={{home: false, becomeStep: true}}/>
      {/* new section */}
      <section className="pt-20 pb-20 bg-[#00379e12] max-lg:pt-13 max-lg:pb-13 max-md:pt-12 max-md:pb-12">
        <div className="container m-auto">
          <h3 className="text-bodycolor text-headingFont leading-[56px] font-bold text-center mb-[35px] max-lg:text-ipadheadingFont max-lg:mb-5  max-md:text-listfont max-md:mb-0">FAQs</h3>

          <div className="flex justify-center	 flex-wrap flex-col text-center w-[100%]">
            <div className="max-w-[670px] m-auto bg-white text-lg text-bodycolor text-left mt-5 py-2 px-2 rounded-xl shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] w-[100%] group focus:outline-none">
              <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordion}>
                <div className='text-lg font-medium max-md:text-base'>What is iKnowly platforms?</div>
                <div>{isOne ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
              </div>
              {isOne && <div className="p-4 pt-[0]">
                <p className='text-base text-bodycolor leading-7'>iKnowly is a revolutionary platform designed to empower jobseekers, students, and professionals with expert guidance and knowledge. Our mission is to provide personalized, one-on-one consultations with industry experts and experienced consultants, ensuring you have the insights and mentorship you need to excel in your job search and educational pursuits.</p>
              </div>}
            </div>
            <div className="max-w-[670px] m-auto bg-white text-lg text-bodycolor text-left mt-5 py-2 px-2 rounded-xl shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] w-[100%] group focus:outline-none">
              <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordionOne}>
                <div className='text-lg font-medium max-md:text-base'>How do I signup for iKnowly?</div>
                <div>{isTow ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
              </div>
              {isTow && <div className="p-4 pt-[0]">
                <p className='text-base text-bodycolor leading-7'>iKnowly is a revolutionary platform designed to empower jobseekers, students, and professionals with expert guidance and knowledge. Our mission is to provide personalized, one-on-one consultations with industry experts and experienced consultants, ensuring you have the insights and mentorship you need to excel in your job search and educational pursuits.</p>
              </div>}
            </div>
            <div className="max-w-[670px] m-auto bg-white text-lg text-bodycolor text-left mt-5 py-2 px-2 rounded-xl shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] w-[100%] group focus:outline-none">
              <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordionTwo}>
                <div className='text-lg font-medium max-md:text-base'>What services does iKnowly offer?</div>
                <div>{isThree ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
              </div>
              {isThree && <div className="p-4 pt-[0]">
                <p className='text-base text-bodycolor leading-7'>iKnowly is a revolutionary platform designed to empower jobseekers, students, and professionals with expert guidance and knowledge. Our mission is to provide personalized, one-on-one consultations with industry experts and experienced consultants, ensuring you have the insights and mentorship you need to excel in your job search and educational pursuits.</p>
              </div>}
            </div>
            <div className="max-w-[670px] m-auto bg-white text-lg text-bodycolor text-left mt-5 py-2 px-2 rounded-xl shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] w-[100%] group focus:outline-none">
              <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordionThree}>
                <div className='text-lg font-medium max-md:text-base'>How do I book a consultation with a consultant?</div>
                <div>{isFour ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
              </div>
              {isFour && <div className="p-4 pt-[0]">
                <p className='text-base text-bodycolor leading-7'>iKnowly is a revolutionary platform designed to empower jobseekers, students, and professionals with expert guidance and knowledge. Our mission is to provide personalized, one-on-one consultations with industry experts and experienced consultants, ensuring you have the insights and mentorship you need to excel in your job search and educational pursuits.</p>
              </div>}
            </div>


          </div>
          <div className="text-center mt-10 max-md:hidden">
            <a href="#" className="m-auto table items-center justify-center bg-bluecolor rounded-full px-10 py-3.5 text-base text-white text-center font-medium  h-[52px]">View More FAQs</a>
          </div>
        </div>
      </section>
    </>

  );
}