'use client';

import { useState } from 'react';
import Image from "next/image";
import Oursteps from '../common/oursteps/page';
export default function Home() {

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
          className=""
          src="/assets/images/banner.png"
          width={1920}
          height={500}
          alt=""
        />
        <div className="container m-auto">
          <div className="grid gap-4 items-center absolute top-[65%] translate-y-[-50%] w-[60%]">
            <div className="w-[100%]">
              <span className="text-orange text-lg font-normal bg-[#ffffff12] border border-orange rounded-full px-[30px] py-3.5 mb-[10px]">Unlocking Opportunities</span>
              <h2 className="text-[88px] text-white font-bold  leading-[88px] mt-[40px]"><span className="relative">
                iKnowly
                <Image
                  className="absolute bottom-[6px] left-0"
                  src="/assets/images/line.png"
                  width={245}
                  height={19}
                  alt=""
                />
              </span><br /> Community, Hub </h2>
              <p className="text-white text-xl leading-7 font-normal mt-4 mb-[20px]">For students, job seekers, and professionals</p>
              <div className="flex items-center">
                <a href="#" className="bg-bluecolor text-white px-[43px] py-[19px] w-auto mr-[10px] rounded-full text-base font-normal">Book a consultation</a>
                <a href="#" className="bg-orange text-white px-[43px] py-[19px] w-auto mr-[10px] rounded-full text-base font-normal">Become a Consultant</a>
              </div>
              <div className="text-white text-base font-normal my-[15px]">
                <p className="my-[15px]">Trusted by industry leaders</p>
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
          <div className="bg-bluecolor py-[30px] px-[130px] relative rounded-2xl mt-[-95px]">
            <Image
              className="absolute top-[-20px] left-[-20px]"
              src="/assets/images/shades.png"
              width={100}
              height={175}
              alt=""
            />
            <div className="mx-auto items-center justify-between flex   lg:mx-0 lg: lg:grid-cols-3">
              <article>
                <h5 className="text-white text-[56px] font-bold">120+</h5>
                <span className="text-white text-[24px] font-normal mt-[0px]">Consultants</span>
              </article>
              <article>
                <h5 className="text-white text-[56px] font-bold">10k+</h5>
                <span className="text-white text-[24px] font-normal mt-[0px]">Job Seekers</span>
              </article>
              <article>
                <h5 className="text-white text-[56px] font-bold">20k+</h5>
                <span className="text-white text-[24px] font-normal mt-[0px]">Consultations</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* new section */}
      <section className="mt-[140px] pb-[120px]">
        <div className="container m-auto">
          <h3 className="text-[#1B1B1B] text-[48px] leading-[56px] font-bold text-center">We&aposre revolutionizing <span className="text-bluecolor">educational & career <br />consulting </span>to empower your journey.</h3>
          <p className="text-[#1B1B1B] text-lg leading-30px] font-normal text-center mt-[10px]">Our goal is to assist you in building your career, connect you with experts who share your aspirations.<br /> We help you reach your full potential through a transformative learning experience.</p>
          <div className="flex items-center justify-center mt-[30px] mb-[50px]">
            <a href="#" className="bg-bluecolor text-white px-[43px] py-[19px] w-auto mr-[10px] rounded-full text-base font-normal">Book a consultation</a>
            <a href="#" className="bg-orange text-white px-[43px] py-[19px] w-auto mr-[10px] rounded-full text-base font-normal">Become a Consultant</a>
          </div>
          <div className="mx-auto flex gap-x-5  lg: lg:grid-cols-4">
            <article className="border-bluecolor border-2 p-[20px] rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[25%] ">
              <Image
                className=""
                src="/assets/images/icone.png"
                width={48}
                height={48}
                alt=""
              />
              <h5 className="text-bodycolor text-xl leading-7 font-[600] my-[10px]">Tailored Guidance</h5>
              <span className="text-[#1B1B1B] text-Font15 leading-[23px] font-normal">Receive personalized advice from experienced consultants to navigate your educational and professional journey in Germany.</span>
            </article>
            <article className="border-orange border-2 p-[20px] rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[25%]">
              <Image
                className=""
                src="/assets/images/ictwo.png"
                width={48}
                height={48}
                alt=""
              />
              <h5 className="text-bodycolor text-xl leading-7 font-[600] my-[10px]">Industry Insights</h5>
              <span className="text-[#1B1B1B] text-Font15 leading-[23px] font-normal">Connect with professionals from high-caliber companies who can provide valuable insights and mentorship.</span>
            </article>
            <article className="border-bluecolor border-2 p-[20px] rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[25%]">
              <Image
                className=""
                src="/assets/images/icthree.png"
                width={48}
                height={48}
                alt=""
              />
              <h5 className="text-bodycolor text-xl leading-7 font-[600] my-[10px]">Flexible Options</h5>
              <span className="text-[#1B1B1B] text-Font15 leading-[23px] font-normal">Choose from a range of consultants and book sessions with experts at your own convenience.</span>
            </article>
            <article className="border-orange border-2 p-[20px] rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[25%]">
              <Image
                className=""
                src="/assets/images/icfour.png"
                width={48}
                height={48}
                alt=""
              />
              <h5 className="text-bodycolor text-xl leading-7 font-[600] my-[10px]">Cost-Efficient</h5>
              <span className="text-[#1B1B1B] text-Font15 leading-[23px] font-normal">Access expert advice without the high costs associated with traditional consulting services.</span>
            </article>
          </div>
        </div>


      </section>


      {/* new section */}
      <section className="bg-[#00379e12] pt-24 pb-24">
        <div className="container m-auto">
          <h3 className="text-[#1B1B1B] text-[48px] leading-[56px] font-bold text-center">Meet Our  <span className="text-bluecolor">Licensed Experts </span></h3>
          <p className="text-[#1B1B1B] text-lg leading-30px] font-normal text-center mt-4">Connect with a community of dedicated professionals. Tailored for consultants, our <br />platform fosters collaboration and inspiration for meaningful interactions.</p>

          <div className="mx-auto flex justify-center gap-x-2 mt-[30px] mb-[30px]">
            <span className="bg-bluecolor rounded-full border border-bluecolor px-10 py-3.5 text-base text-white">Tech</span>
            <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-10 py-3.5 text-base text-bluecolor">Design</span>
            <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-10 py-3.5 text-base text-bluecolor">Accounts</span>
            <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-10 py-3.5 text-base text-bluecolor">SEO</span>
            <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-10 py-3.5 text-base text-bluecolor">Medical</span>
            <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-10 py-3.5 text-base text-bluecolor">Product</span>
          </div>
          <div className="max-w-[860px] mx-auto flex justify-center gap-x-2  mb-10">
            <input className="bg-white text-base text-[#1B1B1B] h-[52px] rounded-full px-[30px] font-normal w-[100%]" type="text" placeholder="Search a consultant..." />
            <button className="bg-bluecolor rounded-full border border-bluecolor px-10 py-3.5 text-base text-white" type="submit">Search</button>
          </div>
          <div className="mx-auto flex gap-x-5  lg: lg:grid-cols-3">
            <article className="bg-white rounded-2xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[33.33%] ">
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
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-[14px] py-[6px] text-[12px] text-bluecolor">Javascript</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-[14px] py-[6px] text-[12px] text-bluecolor">HTML</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-[14px] py-[6px] text-[12px] text-bluecolor">CSS</span>
                </div>
                <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-[14px] py-[6px] text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
              </div>
            </article>
            <article className="bg-white rounded-2xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[33.33%] ">
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
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-[14px] py-[6px] text-[12px] text-bluecolor">Javascript</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-[14px] py-[6px] text-[12px] text-bluecolor">HTML</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-[14px] py-[6px] text-[12px] text-bluecolor">CSS</span>
                </div>
                <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-[14px] py-[6px] text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
              </div>
            </article>
            <article className="bg-white rounded-2xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[33.33%] ">
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
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-[14px] py-[6px] text-[12px] text-bluecolor">Javascript</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-[14px] py-[6px] text-[12px] text-bluecolor">HTML</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-[14px] py-[6px] text-[12px] text-bluecolor">CSS</span>
                </div>
                <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-[14px] py-[6px] text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
              </div>
            </article>
          </div>
          <div className="text-center mt-[40px]">
            <a href="#" className="m-auto table items-center justify  -center bg-bluecolor rounded-full px-10 py-3.5 text-base text-white text-center font-medium  h-[52px]">See All Consultants</a>
          </div>
        </div>
      </section>

      {/* new section */}
      <section className="bg-bluecolor pt-24 pb-20">
        <div className="container m-auto">
          <h3 className="text-white text-[48px] leading-[56px] font-bold text-center">What our clients say!</h3>
          <p className="text-white text-lg leading-30px] font-normal text-center mt-4 mb-10">Companies from across the globe have had fantastic experiences using theFront. <br />Here’s what they have to say.</p>
          <div className="mx-auto flex-wrap flex gap-x-4  lg: lg:grid-cols-3">
            <article className="mb-5 bg-white border-bluecolor border-2 p-6 rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-3.5"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-bodycolor text-base leading-7 font-normal">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-4 gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-base text-bodycolor font-medium">Clara Bertoletti</h5>
                  <h6 className="text-sm text-bodycolor font-normal">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-5 bg-white border-bluecolor border-2 p-6 rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-3.5"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-bodycolor text-base leading-7 font-normal">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-4 gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-base text-bodycolor font-medium">Clara Bertoletti</h5>
                  <h6 className="text-sm text-bodycolor font-normal">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-5 bg-white border-bluecolor border-2 p-6 rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-3.5"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-bodycolor text-base leading-7 font-normal">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-4 gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-base text-bodycolor font-medium">Clara Bertoletti</h5>
                  <h6 className="text-sm text-bodycolor font-normal">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-5 bg-white border-bluecolor border-2 p-6 rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-3.5"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-bodycolor text-base leading-7 font-normal">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-4 gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-base text-bodycolor font-medium">Clara Bertoletti</h5>
                  <h6 className="text-sm text-bodycolor font-normal">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-5 bg-white border-bluecolor border-2 p-6 rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-3.5"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-bodycolor text-base leading-7 font-normal">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-4 gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-base text-bodycolor font-medium">Clara Bertoletti</h5>
                  <h6 className="text-sm text-bodycolor font-normal">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-5 bg-white border-bluecolor border-2 p-6 rounded-xl shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-3.5"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-bodycolor text-base leading-7 font-normal">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-4 gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-base text-bodycolor font-medium">Clara Bertoletti</h5>
                  <h6 className="text-sm text-bodycolor font-normal">MUI lover</h6>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* new section */}
     <Oursteps config={{home: false, becomeStep: true}}/>
      {/* new section */}
      <section className="pt-20 pb-20 bg-[#00379e12]">
        <div className="container m-auto">
          <h3 className="text-[#1B1B1B] text-[48px] leading-[56px] font-bold text-center mb-[35px]">FAQs</h3>

          <div className="flex justify-center	 flex-wrap flex-col text-center w-[100%]">
            <div className="max-w-[670px] m-auto bg-white text-lg text-bodycolor text-left mt-5 py-2 px-2 rounded-xl shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] w-[100%] group focus:outline-none">
              <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordion}>
                <div className='text-xl font-medium'>What is iKnowly platforms?</div>
                <div>{isOne ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
              </div>
              {isOne && <div className="p-4 pt-[0]">
                <p className='text-base text-[#22272E] leading-7'>iKnowly is a revolutionary platform designed to empower jobseekers, students, and professionals with expert guidance and knowledge. Our mission is to provide personalized, one-on-one consultations with industry experts and experienced consultants, ensuring you have the insights and mentorship you need to excel in your job search and educational pursuits.</p>
              </div>}
            </div>
            <div className="max-w-[670px] m-auto bg-white text-lg text-bodycolor text-left mt-5 py-2 px-2 rounded-xl shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] w-[100%] group focus:outline-none">
              <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordionOne}>
                <div className='text-xl font-medium'>How do I signup for iKnowly?</div>
                <div>{isTow ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
              </div>
              {isTow && <div className="p-4 pt-[0]">
                <p className='text-base text-[#22272E] leading-7'>iKnowly is a revolutionary platform designed to empower jobseekers, students, and professionals with expert guidance and knowledge. Our mission is to provide personalized, one-on-one consultations with industry experts and experienced consultants, ensuring you have the insights and mentorship you need to excel in your job search and educational pursuits.</p>
              </div>}
            </div>
            <div className="max-w-[670px] m-auto bg-white text-lg text-bodycolor text-left mt-5 py-2 px-2 rounded-xl shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] w-[100%] group focus:outline-none">
              <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordionTwo}>
                <div className='text-xl font-medium'>What services does iKnowly offer?</div>
                <div>{isThree ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
              </div>
              {isThree && <div className="p-4 pt-[0]">
                <p className='text-base text-[#22272E] leading-7'>iKnowly is a revolutionary platform designed to empower jobseekers, students, and professionals with expert guidance and knowledge. Our mission is to provide personalized, one-on-one consultations with industry experts and experienced consultants, ensuring you have the insights and mentorship you need to excel in your job search and educational pursuits.</p>
              </div>}
            </div>
            <div className="max-w-[670px] m-auto bg-white text-lg text-bodycolor text-left mt-5 py-2 px-2 rounded-xl shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] w-[100%] group focus:outline-none">
              <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordionThree}>
                <div className='text-xl font-medium'>How do I book a consultation with a consultant?</div>
                <div>{isFour ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
              </div>
              {isFour && <div className="p-4 pt-[0]">
                <p className='text-base text-[#22272E] leading-7'>iKnowly is a revolutionary platform designed to empower jobseekers, students, and professionals with expert guidance and knowledge. Our mission is to provide personalized, one-on-one consultations with industry experts and experienced consultants, ensuring you have the insights and mentorship you need to excel in your job search and educational pursuits.</p>
              </div>}
            </div>


          </div>
          <div className="text-center mt-[40px]">
            <a href="#" className="m-auto table items-center justify-center bg-bluecolor rounded-full px-10 py-3.5 text-base text-white text-center font-medium  h-[52px]">View More FAQs</a>
          </div>
        </div>
      </section>
    </>

  );
}