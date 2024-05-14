import React from 'react';
import Image from "next/image";
import Consultantbanner from '../common/consultbanner/page';
import Emailer from '../common/emailer/page';
function Consultants() {
  return (
    <>
    <Consultantbanner config={{consultants: true, becomeConsultant: false}}/>
      <section className=" pb-[90px] max-md:pb-5">

        <div className="container m-auto">
          <div className='flex gap-3 mb-[63px] max-md:flex-wrap max-md:mb-10'>
            <div className='relative max-md:w-[48%] '>
              <Image
                className="absolute top-5 pr-4"
                src="/assets/images/down.png"
                width={20}
                height={20}
                alt=""
              />
              <select className='outline-none bg-[#E1ECFF] text-base text-bluecolor font-regular px-5 py-4 rounded-full pr-5 border border-bluecolor appearance-none min-w-[144px] max-md:py-3 max-md:w-full'>
                <option>Industry</option>
              </select>
            </div>
            <div className='relative max-md:w-[48%]'>
              <Image
                className="absolute top-5 pr-4"
                src="/assets/images/down.png"
                width={20}
                height={20}
                alt=""
              />
              <select className='outline-none bg-[#E1ECFF] text-base text-bluecolor font-regular px-5 py-4 rounded-full pr-5 border border-bluecolor appearance-none min-w-[144px] max-md:py-3 max-md:w-full'>
                <option>Major</option>
              </select>
            </div>
            <div className='relative w-[100%]'>
              <input className="outline-none px-5 py-4 rounded-full border border-[#1b1b1b36] text-base text-[#1b1b1b36] font-regular w-[100%]" type='text' placeholder='Search a consultant...' />
            </div>
            <div className='max-md:w-full'>
              <button className="outline-none bg-bluecolor text-white px-10 py-4 w-auto mr-[10px] rounded-full text-base font-regular max-md:w-full" type='submit'>Search</button>
            </div>

          </div>  

          <div className="mx-auto flex flex-wrap gap-x-5 gap-y-7  lg: lg:grid-cols-3">
            <article className="bg-white rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32%] max-lg:w-[48.5%] max-lg:shadow-none max-md:w-full">
              <div className="relative">
                <Image
                  className=""
                  src="/assets/images/client.png"
                  width={500}
                  height={226}
                  alt=""
                />
                <span className="bg-[#ff7b00c4] rounded-full py-[8px] px-[18px] text-white text-base absolute bottom-[15px] left-[15px] max-lg:text-sm">Price starting from <b>$15.99</b></span>
              </div>
              <div className="px-6 py-6">
                <h5 className="text-xl text-bodycolor font-bold max-lg:text-xl max-md:text-lg">Christoph Schneider</h5>
                <h6 className="text-base text-bodycolor font-regular my-[3px] max-lg:text-sm">Fagikasade krovung monoligt</h6>
                <label className="text-base text-bluecolor font-regular max-lg:text-sm">Product & Tech</label>
                <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">Javascript</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">HTML</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">CSS</span>
                </div>
                <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-3.5 py-1.5 text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
              </div>
            </article>
            <article className="bg-white rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32%] max-lg:w-[48.5%] max-lg:shadow-none max-md:w-full">
              <div className="relative">
                <Image
                  className=""
                  src="/assets/images/client.png"
                  width={500}
                  height={226}
                  alt=""
                />
                <span className="bg-[#ff7b00c4] rounded-full py-[8px] px-[18px] text-white text-base absolute bottom-[15px] left-[15px] max-lg:text-sm">Price starting from <b>$15.99</b></span>
              </div>
              <div className="px-6 py-6">
              <h5 className="text-xl text-bodycolor font-bold max-lg:text-xl max-md:text-lg">Christoph Schneider</h5>
                <h6 className="text-base text-bodycolor font-regular my-[3px] max-lg:text-sm">Fagikasade krovung monoligt</h6>
                <label className="text-base text-bluecolor font-regular max-lg:text-sm">Product & Tech</label>
                <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">Javascript</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">HTML</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">CSS</span>
                </div>
                <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-3.5 py-1.5 text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
              </div>
            </article>
            <article className="bg-white rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32%] max-lg:w-[48.5%] max-lg:shadow-none max-md:w-full">
              <div className="relative">
                <Image
                  className=""
                  src="/assets/images/client.png"
                  width={500}
                  height={226}
                  alt=""
                />
                <span className="bg-[#ff7b00c4] rounded-full py-[8px] px-[18px] text-white text-base absolute bottom-[15px] left-[15px] max-lg:text-sm">Price starting from <b>$15.99</b></span>
              </div>
              <div className="px-6 py-6">
              <h5 className="text-xl text-bodycolor font-bold max-lg:text-xl max-md:text-lg">Christoph Schneider</h5>
                <h6 className="text-base text-bodycolor font-regular my-[3px] max-lg:text-sm">Fagikasade krovung monoligt</h6>
                <label className="text-base text-bluecolor font-regular max-lg:text-sm">Product & Tech</label>
                <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">Javascript</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">HTML</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">CSS</span>
                </div>
                <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-3.5 py-1.5 text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
              </div>
            </article>
            <article className="bg-white rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32%] max-lg:w-[48.5%] max-lg:shadow-none max-md:w-full">
              <div className="relative">
                <Image
                  className=""
                  src="/assets/images/client.png"
                  width={500}
                  height={226}
                  alt=""
                />
                <span className="bg-[#ff7b00c4] rounded-full py-[8px] px-[18px] text-white text-base absolute bottom-[15px] left-[15px] max-lg:text-sm">Price starting from <b>$15.99</b></span>
              </div>
              <div className="px-6 py-6">
              <h5 className="text-xl text-bodycolor font-bold max-lg:text-xl max-md:text-lg">Christoph Schneider</h5>
                <h6 className="text-base text-bodycolor font-regular my-[3px] max-lg:text-sm">Fagikasade krovung monoligt</h6>
                <label className="text-base text-bluecolor font-regular max-lg:text-sm">Product & Tech</label>
                <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">Javascript</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">HTML</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">CSS</span>
                </div>
                <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-3.5 py-1.5 text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
              </div>
            </article>
            <article className="bg-white rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32%] max-lg:w-[48.5%] max-lg:shadow-none max-md:w-full">
              <div className="relative">
                <Image
                  className=""
                  src="/assets/images/client.png"
                  width={500}
                  height={226}
                  alt=""
                />
                <span className="bg-[#ff7b00c4] rounded-full py-[8px] px-[18px] text-white text-base absolute bottom-[15px] left-[15px] max-lg:text-sm">Price starting from <b>$15.99</b></span>
              </div>
              <div className="px-6 py-6">
              <h5 className="text-xl text-bodycolor font-bold max-lg:text-xl max-md:text-lg">Christoph Schneider</h5>
                <h6 className="text-base text-bodycolor font-regular my-[3px] max-lg:text-sm">Fagikasade krovung monoligt</h6>
                <label className="text-base text-bluecolor font-regular max-lg:text-sm">Product & Tech</label>
                <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">Javascript</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">HTML</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">CSS</span>
                </div>
                <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-3.5 py-1.5 text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
              </div>
            </article>
            <article className="bg-white rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32%] max-lg:w-[48.5%] max-lg:shadow-none max-md:w-full">
              <div className="relative">
                <Image
                  className=""
                  src="/assets/images/client.png"
                  width={500}
                  height={226}
                  alt=""
                />
                <span className="bg-[#ff7b00c4] rounded-full py-[8px] px-[18px] text-white text-base absolute bottom-[15px] left-[15px] max-lg:text-sm">Price starting from <b>$15.99</b></span>
              </div>
              <div className="px-6 py-6">
              <h5 className="text-xl text-bodycolor font-bold max-lg:text-xl max-md:text-lg">Christoph Schneider</h5>
                <h6 className="text-base text-bodycolor font-regular my-[3px] max-lg:text-sm">Fagikasade krovung monoligt</h6>
                <label className="text-base text-bluecolor font-regular max-lg:text-sm">Product & Tech</label>
                <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">Javascript</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">HTML</span>
                  <span className="bg-[#E1ECFF] rounded-full border border-bluecolor px-3.5 py-1.5 text-xs text-bluecolor max-lg:text-sm">CSS</span>
                </div>
                <a href="#" className="flex items-center justify-center bg-bluecolor rounded-full px-3.5 py-1.5 text-base text-white text-center font-medium w-[100%] h-[52px]">Book Now</a>
              </div>
            </article>
          </div>
        </div>
      </section>
     <Emailer config={{emailertext: true, becomeEmailerp: false}}/>
    </>
  );
}

export default Consultants;