import React from 'react';
import Image from "next/image";
import Consultantbanner from '../common/consultbanner/page';
import Emailer from '../common/emailer/page';
import Meetexpert from '../common/meet-our-expert/page';
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
<Meetexpert config={{slider:false, teamshow:true} }/>
        </div>
      </section>
     <Emailer config={{emailertext: true, becomeEmailerp: false}}/>
    </>
  );
}

export default Consultants;