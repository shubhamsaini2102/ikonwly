import React from 'react';
import Image from "next/image";
import Consultantbanner from '../common/consultbanner/page';
import Emailer from '../common/emailer/page';
function Consultants() {
  return (
    <>
    <Consultantbanner config={{consultants: true, becomeConsultant: false}}/>
      <section className=" pb-[90px]">

        <div className="container m-auto">
          <div className='flex gap-3 mb-[63px]'>
            <div className='relative'>
              <Image
                className="absolute top-[18px] right-[30px]"
                src="/assets/images/down.png"
                width={20}
                height={20}
                alt=""
              />
              <select className='outline-none bg-[#E1ECFF] text-[16px] text-[#00379E] font-[400] px-[20px] py-[15px] rounded-[100px] pr-[40px] border-[1px] border-[#00379E] appearance-none min-w-[144px]'>
                <option>Industry</option>
              </select>
            </div>
            <div className='relative'>
              <Image
                className="absolute top-[18px] right-[30px]"
                src="/assets/images/down.png"
                width={20}
                height={20}
                alt=""
              />
              <select className='outline-none bg-[#E1ECFF] text-[16px] text-[#00379E] font-[400] px-[20px] py-[15px] rounded-[100px] pr-[40px] border-[1px] border-[#00379E] appearance-none min-w-[144px]'>
                <option>Major</option>
              </select>
            </div>
            <div className='relative w-[100%]'>
              <input className="outline-none px-[20px] py-[15px] rounded-[100px] border-[1px] border-[#1b1b1b36] text-[16px] text-[#1b1b1b36] font-[400] w-[100%]" type='text' placeholder='Search a consultant...' />
            </div>
            <div className=''>
              <button className="outline-none bg-[#00379E] text-[#fff] px-[43px] py-[16px] w-auto mr-[10px] rounded-[100px] text-[16px] font-[400]" type='submit'>Search</button>
            </div>

          </div>

          <div className="mx-auto flex flex-wrap gap-x-5 gap-y-7  lg: lg:grid-cols-3">
            <article className="bg-[#fff] rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32%]  ">
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
            <article className="bg-[#fff] rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32%] ">
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
            <article className="bg-[#fff] rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32%] ">
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
            <article className="bg-[#fff] rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32%] ">
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
            <article className="bg-[#fff] rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32%] ">
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
            <article className="bg-[#fff] rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[32%] ">
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
        </div>
      </section>
     <Emailer config={{emailer: false, becomeEmailerp: true}}/>
    </>
  );
}

export default Consultants;