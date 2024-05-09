'use client';

import { useState } from 'react';
import Image from "next/image";
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
              <span className="text-[#FF7A00] text-[18px] font-[400] bg-[#ffffff12] border-[1px] border-[#FF7A00] rounded-[100px] px-[30px] py-[14px] mb-[10px]">Unlocking Opportunities</span>
              <h2 className="text-[88px] text-[#fff] font-[700]  leading-[88px] mt-[40px]"><span className="relative">
                iKnowly
                <Image
                  className="absolute bottom-[6px] left-0"
                  src="/assets/images/line.png"
                  width={245}
                  height={19}
                  alt=""
                />
              </span><br /> Community, Hub </h2>
              <p className="text-[#fff] text-[20px] leading-[28px] font-[400] mt-[15px] mb-[20px]">For students, job seekers, and professionals</p>
              <div className="flex items-center">
                <a href="#" className="bg-[#00379E] text-[#fff] px-[43px] py-[19px] w-auto mr-[10px] rounded-[100px] text-[16px] font-[400]">Book a consultation</a>
                <a href="#" className="bg-[#FF7A00] text-[#fff] px-[43px] py-[19px] w-auto mr-[10px] rounded-[100px] text-[16px] font-[400]">Become a Consultant</a>
              </div>
              <div className="text-[#fff] text-[16px] font-[400] my-[15px]">
                <p className="my-[15px]">Trusted by industry leaders</p>
                <Image
                  className="text-[#fff] text-[16px]"
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
          <div className="bg-[#00379E] py-[30px] px-[130px] relative rounded-[15px] mt-[-95px]">
            <Image
              className="absolute top-[-20px] left-[-20px]"
              src="/assets/images/shades.png"
              width={100}
              height={175}
              alt=""
            />
            <div className="mx-auto items-center justify-between flex   lg:mx-0 lg: lg:grid-cols-3">
              <article>
                <h5 className="text-[#fff] text-[56px] font-[700]">120+</h5>
                <span className="text-[#fff] text-[24px] font-[400] mt-[0px]">Consultants</span>
              </article>
              <article>
                <h5 className="text-[#fff] text-[56px] font-[700]">10k+</h5>
                <span className="text-[#fff] text-[24px] font-[400] mt-[0px]">Job Seekers</span>
              </article>
              <article>
                <h5 className="text-[#fff] text-[56px] font-[700]">20k+</h5>
                <span className="text-[#fff] text-[24px] font-[400] mt-[0px]">Consultations</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* new section */}
      <section className="mt-[140px] pb-[120px]">
        <div className="container m-auto">
          <h3 className="text-[#1B1B1B] text-[48px] leading-[56px] font-[700] text-center">We&apos;re revolutionizing <span className="text-[#00379E]">educational & career <br />consulting </span>to empower your journey.</h3>
          <p className="text-[#1B1B1B] text-[18px] leading-30px] font-[400] text-center mt-[10px]">Our goal is to assist you in building your career, connect you with experts who share your aspirations.<br /> We help you reach your full potential through a transformative learning experience.</p>
          <div className="flex items-center justify-center mt-[30px] mb-[50px]">
            <a href="#" className="bg-[#00379E] text-[#fff] px-[43px] py-[19px] w-auto mr-[10px] rounded-[100px] text-[16px] font-[400]">Book a consultation</a>
            <a href="#" className="bg-[#FF7A00] text-[#fff] px-[43px] py-[19px] w-auto mr-[10px] rounded-[100px] text-[16px] font-[400]">Become a Consultant</a>
          </div>
          <div className="mx-auto flex gap-x-5  lg: lg:grid-cols-4">
            <article className="border-[#00379E] border-[2px] p-[20px] rounded-[10px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[25%] ">
              <Image
                className=""
                src="/assets/images/icone.png"
                width={48}
                height={48}
                alt=""
              />
              <h5 className="text-[#000] text-[20px] leading-[28px] font-[600] my-[10px]">Tailored Guidance</h5>
              <span className="text-[#1B1B1B] text-[15px] leading-[23px] font-[400]">Receive personalized advice from experienced consultants to navigate your educational and professional journey in Germany.</span>
            </article>
            <article className="border-[#FF7A00] border-[2px] p-[20px] rounded-[10px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[25%]">
              <Image
                className=""
                src="/assets/images/ictwo.png"
                width={48}
                height={48}
                alt=""
              />
              <h5 className="text-[#000] text-[20px] leading-[28px] font-[600] my-[10px]">Industry Insights</h5>
              <span className="text-[#1B1B1B] text-[15px] leading-[23px] font-[400]">Connect with professionals from high-caliber companies who can provide valuable insights and mentorship.</span>
            </article>
            <article className="border-[#00379E] border-[2px] p-[20px] rounded-[10px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[25%]">
              <Image
                className=""
                src="/assets/images/icthree.png"
                width={48}
                height={48}
                alt=""
              />
              <h5 className="text-[#000] text-[20px] leading-[28px] font-[600] my-[10px]">Flexible Options</h5>
              <span className="text-[#1B1B1B] text-[15px] leading-[23px] font-[400]">Choose from a range of consultants and book sessions with experts at your own convenience.</span>
            </article>
            <article className="border-[#FF7A00] border-[2px] p-[20px] rounded-[10px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[25%]">
              <Image
                className=""
                src="/assets/images/icfour.png"
                width={48}
                height={48}
                alt=""
              />
              <h5 className="text-[#000] text-[20px] leading-[28px] font-[600] my-[10px]">Cost-Efficient</h5>
              <span className="text-[#1B1B1B] text-[15px] leading-[23px] font-[400]">Access expert advice without the high costs associated with traditional consulting services.</span>
            </article>
          </div>
        </div>


      </section>


      {/* new section */}
      <section className="bg-[#00379e12] pt-[90px] pb-[90px]">
        <div className="container m-auto">
          <h3 className="text-[#1B1B1B] text-[48px] leading-[56px] font-[700] text-center">Meet Our  <span className="text-[#00379E]">Licensed Experts </span></h3>
          <p className="text-[#1B1B1B] text-[18px] leading-30px] font-[400] text-center mt-[15px]">Connect with a community of dedicated professionals. Tailored for consultants, our <br />platform fosters collaboration and inspiration for meaningful interactions.</p>

          <div className="mx-auto flex justify-center gap-x-2 mt-[30px] mb-[30px]">
            <span className="bg-[#00379E] rounded-[100px] border-[1px] border-[#00379E] px-[40px] py-[13px] text-[16px] text-[#fff]">Tech</span>
            <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[40px] py-[13px] text-[16px] text-[#00379E]">Design</span>
            <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[40px] py-[13px] text-[16px] text-[#00379E]">Accounts</span>
            <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[40px] py-[13px] text-[16px] text-[#00379E]">SEO</span>
            <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[40px] py-[13px] text-[16px] text-[#00379E]">Medical</span>
            <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[40px] py-[13px] text-[16px] text-[#00379E]">Product</span>
          </div>
          <div className="max-w-[860px] mx-auto flex justify-center gap-x-2  mb-[40px]">
            <input className="bg-[#fff] text-[16px] text-[#1B1B1B] h-[52px] rounded-[100px] px-[30px] font-[400] w-[100%]" type="text" placeholder="Search a consultant..." />
            <button className="bg-[#00379E] rounded-[100px] border-[1px] border-[#00379E] px-[40px] py-[13px] text-[16px] text-[#fff]" type="submit">Search</button>
          </div>
          <div className="mx-auto flex gap-x-5  lg: lg:grid-cols-3">
            <article className="bg-[#fff] rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[33.33%] ">
              <div className="relative">
                <Image
                  className=""
                  src="/assets/images/client.png"
                  width={500}
                  height={226}
                  alt=""
                />
                <span className="bg-[#ff7b00c4] rounded-[100px] py-[8px] px-[18px] text-[#fff] text-[15px] absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
              </div>
              <div className="px-[25px] py-[25px]">
                <h5 className="text-[20px] text-[#1B1B1B] font-[700]">Christoph Schneider</h5>
                <h6 className="text-[15px] text-[#1B1B1B] font-[400] my-[3px]">Fagikasade krovung monoligt</h6>
                <label className="text-[15px] text-[#00379E] font-[400] ">Product & Tech</label>
                <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
                  <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">Javascript</span>
                  <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">HTML</span>
                  <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">CSS</span>
                </div>
                <a href="#" className="flex items-center justify-center bg-[#00379E] rounded-[100px] px-[14px] py-[6px] text-[16px] text-[#fff] text-center font-[500] w-[100%] h-[52px]">Book Now</a>
              </div>
            </article>
            <article className="bg-[#fff] rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[33.33%] ">
              <div className="relative">
                <Image
                  className=""
                  src="/assets/images/client.png"
                  width={500}
                  height={226}
                  alt=""
                />
                <span className="bg-[#ff7b00c4] rounded-[100px] py-[8px] px-[18px] text-[#fff] text-[15px] absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
              </div>
              <div className="px-[25px] py-[25px]">
                <h5 className="text-[20px] text-[#1B1B1B] font-[700]">Christoph Schneider</h5>
                <h6 className="text-[15px] text-[#1B1B1B] font-[400] my-[3px]">Fagikasade krovung monoligt</h6>
                <label className="text-[15px] text-[#00379E] font-[400] ">Product & Tech</label>
                <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
                  <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">Javascript</span>
                  <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">HTML</span>
                  <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">CSS</span>
                </div>
                <a href="#" className="flex items-center justify-center bg-[#00379E] rounded-[100px] px-[14px] py-[6px] text-[16px] text-[#fff] text-center font-[500] w-[100%] h-[52px]">Book Now</a>
              </div>
            </article>
            <article className="bg-[#fff] rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[33.33%] ">
              <div className="relative">
                <Image
                  className=""
                  src="/assets/images/client.png"
                  width={500}
                  height={226}
                  alt=""
                />
                <span className="bg-[#ff7b00c4] rounded-[100px] py-[8px] px-[18px] text-[#fff] text-[15px] absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
              </div>
              <div className="px-[25px] py-[25px]">
                <h5 className="text-[20px] text-[#1B1B1B] font-[700]">Christoph Schneider</h5>
                <h6 className="text-[15px] text-[#1B1B1B] font-[400] my-[3px]">Fagikasade krovung monoligt</h6>
                <label className="text-[15px] text-[#00379E] font-[400] ">Product & Tech</label>
                <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
                  <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">Javascript</span>
                  <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">HTML</span>
                  <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">CSS</span>
                </div>
                <a href="#" className="flex items-center justify-center bg-[#00379E] rounded-[100px] px-[14px] py-[6px] text-[16px] text-[#fff] text-center font-[500] w-[100%] h-[52px]">Book Now</a>
              </div>
            </article>
          </div>
          <div className="text-center mt-[40px]">
            <a href="#" className="m-auto table items-center justify-center bg-[#00379E] rounded-[100px] px-[39px] py-[14px] text-[16px] text-[#fff] text-center font-[500]  h-[52px]">See All Consultants</a>
          </div>
        </div>
      </section>

      {/* new section */}
      <section className="bg-[#00379E] pt-[90px] pb-[80px]">
        <div className="container m-auto">
          <h3 className="text-[#fff] text-[48px] leading-[56px] font-[700] text-center">What our clients say!</h3>
          <p className="text-[#fff] text-[18px] leading-30px] font-[400] text-center mt-[15px] mb-[40px]">Companies from across the globe have had fantastic experiences using theFront. <br />Here’s what they have to say.</p>
          <div className="mx-auto flex-wrap flex gap-x-4  lg: lg:grid-cols-3">
            <article className="mb-[18px] bg-[#fff] border-[#00379E] border-[2px] p-[25px] rounded-[10px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-[13px]"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-[#000000] text-[16px] leading-[28px] font-[400]">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-[16px] gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-[16px] text-[#000] font-[500]">Clara Bertoletti</h5>
                  <h6 className="text-[14px] text-[#000] font-[400]">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-[18px] bg-[#fff] border-[#00379E] border-[2px] p-[25px] rounded-[10px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-[13px]"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-[#000000] text-[16px] leading-[28px] font-[400]">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-[16px] gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-[16px] text-[#000] font-[500]">Clara Bertoletti</h5>
                  <h6 className="text-[14px] text-[#000] font-[400]">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-[18px] bg-[#fff] border-[#00379E] border-[2px] p-[25px] rounded-[10px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-[13px]"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-[#000000] text-[16px] leading-[28px] font-[400]">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-[16px] gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-[16px] text-[#000] font-[500]">Clara Bertoletti</h5>
                  <h6 className="text-[14px] text-[#000] font-[400]">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-[18px] bg-[#fff] border-[#00379E] border-[2px] p-[25px] rounded-[10px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-[13px]"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-[#000000] text-[16px] leading-[28px] font-[400]">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-[16px] gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-[16px] text-[#000] font-[500]">Clara Bertoletti</h5>
                  <h6 className="text-[14px] text-[#000] font-[400]">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-[18px] bg-[#fff] border-[#00379E] border-[2px] p-[25px] rounded-[10px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-[13px]"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-[#000000] text-[16px] leading-[28px] font-[400]">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-[16px] gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-[16px] text-[#000] font-[500]">Clara Bertoletti</h5>
                  <h6 className="text-[14px] text-[#000] font-[400]">MUI lover</h6>
                </div>
              </div>
            </article>
            <article className="mb-[18px] bg-[#fff] border-[#00379E] border-[2px] p-[25px] rounded-[10px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32.3%] ">
              <Image
                className="mb-[13px]"
                src="/assets/images/star.png"
                width={136}
                height={24}
                alt=""
              />
              <p className="text-[#000000] text-[16px] leading-[28px] font-[400]">Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
              <div className="flex items-center mt-[16px] gap-x-3">
                <Image
                  className=""
                  src="/assets/images/testo.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="">
                  <h5 className="text-[16px] text-[#000] font-[500]">Clara Bertoletti</h5>
                  <h6 className="text-[14px] text-[#000] font-[400]">MUI lover</h6>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* new section */}
      <section className="pt-[80px] pb-[80px]">
        <div className="container m-auto">
          <h3 className="text-[#1B1B1B] text-[48px] leading-[56px] font-[700] text-center mb-[45px]">Book Your First Consultant Now!</h3>
          <div className="relative">
            <Image
              className="m-auto absolute left-0 top-[150px] right-0 z-[-1]"
              src="/assets/images/lined.png"
              width={786}
              height={1}
              alt=""
            />
            <div className="mx-auto flex gap-x-4  lg: lg:grid-cols-3">
              <article className="mb-[18px] w-[33.3%] text-center relative">
                <Image
                  className="m-auto"
                  src="/assets/images/stone.png"
                  width={300}
                  height={300}
                  alt=""
                />
                <Image
                  className="absolute top-[132px] right-[-28px]"
                  src="/assets/images/ar.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="relative mt-[-45px] bg-[#fff] py-[25px] px-[30px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-[15px] max-w-[300px] m-auto">
                  <h5 className="text-[24px] text-[#1B1B1B] font-[700] mb-[10px]">Step 1</h5>
                  <p className="text-[16px] text-[#000] leading-[28px] font-[400] px-[10px]"> Signup to our platform and create your profile</p>
                </div>
              </article>
              <article className="mb-[18px]  w-[33.3%] text-center relative">
                <Image
                  className="m-auto"
                  src="/assets/images/sttwo.png"
                  width={300}
                  height={300}
                  alt=""
                />
                <Image
                  className="absolute top-[132px] right-[-28px]"
                  src="/assets/images/ar.png"
                  width={40}
                  height={40}
                  alt=""
                />
                <div className="relative mt-[-45px] bg-[#fff] py-[25px] px-[30px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-[15px] max-w-[300px] m-auto">
                  <h5 className="text-[24px] text-[#1B1B1B] font-[700] mb-[10px]">Step 2</h5>
                  <p className="text-[16px] text-[#000] leading-[28px] font-[400] px-[10px]"> Book your first consultation with one of our experts</p>
                </div>
              </article>
              <article className="mb-[18px] w-[33.3%] text-center relative">

                <Image
                  className="m-auto"
                  src="/assets/images/stthree.png"
                  width={300}
                  height={300}
                  alt=""
                />
                <div className="relative mt-[-45px] bg-[#fff] py-[25px] px-[30px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-[15px] max-w-[300px] m-auto">
                  <h5 className="text-[24px] text-[#1B1B1B] font-[700] mb-[10px]">Step 3</h5>
                  <p className="text-[16px] text-[#000] leading-[28px] font-[400] px-[10px]"> Get Expert advice and unlock your potential</p>
                </div>
              </article>
            </div>

          </div>
        </div>
      </section>
      {/* new section */}
      <section className="pt-[80px] pb-[80px] bg-[#00379e12]">
        <div className="container m-auto">
          <h3 className="text-[#1B1B1B] text-[48px] leading-[56px] font-[700] text-center mb-[35px]">FAQs</h3>

          <div className="flex justify-center	 flex-wrap flex-col text-center w-[100%]">
            <div className="max-w-[670px] m-auto bg-[#FFFFFF] text-[18px] text-[#000000] text-left mt-5 py-[8px] px-[8px] rounded-[10px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] w-[100%] group focus:outline-none">
              <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordion}>
                <div className='text-[20px] font-[500]'>What is iKnowly platforms?</div>
                <div>{isOne ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
              </div>
              {isOne && <div className="p-4 pt-[0]">
                <p className='text-[16px] text-[#22272E] leading-[26px]'>iKnowly is a revolutionary platform designed to empower jobseekers, students, and professionals with expert guidance and knowledge. Our mission is to provide personalized, one-on-one consultations with industry experts and experienced consultants, ensuring you have the insights and mentorship you need to excel in your job search and educational pursuits.</p>
              </div>}
            </div>
            <div className="max-w-[670px] m-auto bg-[#FFFFFF] text-[18px] text-[#000000] text-left mt-5 py-[8px] px-[8px] rounded-[10px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] w-[100%] group focus:outline-none">
              <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordionOne}>
                <div className='text-[20px] font-[500]'>How do I signup for iKnowly?</div>
                <div>{isTow ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
              </div>
              {isTow && <div className="p-4 pt-[0]">
                <p className='text-[16px] text-[#22272E] leading-[26px]'>iKnowly is a revolutionary platform designed to empower jobseekers, students, and professionals with expert guidance and knowledge. Our mission is to provide personalized, one-on-one consultations with industry experts and experienced consultants, ensuring you have the insights and mentorship you need to excel in your job search and educational pursuits.</p>
              </div>}
            </div>
            <div className="max-w-[670px] m-auto bg-[#FFFFFF] text-[18px] text-[#000000] text-left mt-5 py-[8px] px-[8px] rounded-[10px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] w-[100%] group focus:outline-none">
              <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordionTwo}>
                <div className='text-[20px] font-[500]'>What services does iKnowly offer?</div>
                <div>{isThree ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
              </div>
              {isThree && <div className="p-4 pt-[0]">
                <p className='text-[16px] text-[#22272E] leading-[26px]'>iKnowly is a revolutionary platform designed to empower jobseekers, students, and professionals with expert guidance and knowledge. Our mission is to provide personalized, one-on-one consultations with industry experts and experienced consultants, ensuring you have the insights and mentorship you need to excel in your job search and educational pursuits.</p>
              </div>}
            </div>
            <div className="max-w-[670px] m-auto bg-[#FFFFFF] text-[18px] text-[#000000] text-left mt-5 py-[8px] px-[8px] rounded-[10px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] w-[100%] group focus:outline-none">
              <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordionThree}>
                <div className='text-[20px] font-[500]'>How do I book a consultation with a consultant?</div>
                <div>{isFour ? <Image className="" src="/assets/images/ard.png" width={24} height={24} alt="" /> : <Image className="" src="/assets/images/aru.png" width={24} height={24} alt="" />}</div>
              </div>
              {isFour && <div className="p-4 pt-[0]">
                <p className='text-[16px] text-[#22272E] leading-[26px]'>iKnowly is a revolutionary platform designed to empower jobseekers, students, and professionals with expert guidance and knowledge. Our mission is to provide personalized, one-on-one consultations with industry experts and experienced consultants, ensuring you have the insights and mentorship you need to excel in your job search and educational pursuits.</p>
              </div>}
            </div>


          </div>
          <div className="text-center mt-[40px]">
            <a href="#" className="m-auto table items-center justify-center bg-[#00379E] rounded-[100px] px-[39px] py-[14px] text-[16px] text-[#fff] text-center font-[500]  h-[52px]">View More FAQs</a>
          </div>
        </div>
      </section>
    </>

  );
}