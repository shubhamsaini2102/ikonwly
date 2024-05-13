import React from 'react';
import Image from "next/image";

function Emailer({ config: { emailer, becomeEmailerp } }: any) {
  return (
    <section className="bg-orange pt-20 pb-20">
    <div className="container m-auto">
      {emailer && <h3 className="text-white text-headingFont leading-1 font-bold text-center">Did not find what you&apos;re looking for?</h3>}
      {becomeEmailerp && <h3 className="text-white text-headingFont leading-1 font-bold text-center">Ready to Make a Difference?<br/> Join Our Community!</h3>}
      {emailer && <p className="text-white text-lg leading-1 font-regular text-center mt-2 mb-7">But worry not! Our dedicated team is here to help you connect you with the perfect<br /> consultant who will meet your unique requirements.<br /> Your search for the ideal consultant ends here!</p> }
      {becomeEmailerp && <p className="text-white text-lg leading-1 font-regular text-center mt-2 mb-7">Take the first step in becoming a part of our community of consultants dedicated to <br/>empowering individuals in their career journeys.</p> }
      {emailer && <div className=''>
        <div className='relative w-full text-center'>
          <input className="max-w-[470px] bg-white outline-none px-[20px] py-[14px] rounded-full border-[1px] border-[#1b1b1b36] text-base text-[#1b1b1bad] font-regular w-full" type='text' placeholder='Enter consultation field' />
        </div>
        <div className='relative w-full text-center my-[10px]'>
          <input className="max-w-[470px] bg-white outline-none px-[20px] py-[14px] rounded-[100px] border-[1px] border-[#1b1b1b36] text-base text-[#1b1b1bad] font-regular w-full" type='text' placeholder='Enter your email' />
        </div>
        <div className='relative w-full text-center'>
          <button className="outline-none bg-bluecolor text-white px-[43px] py-[14px] max-w-[470px] w-full mr-[10px] rounded-[100px] text-base font-regular" type='submit'>Email us</button>
        </div>
      </div> }

      {becomeEmailerp && <div className=''>
       
        <div className='relative w-full text-center'>
          <button className="outline-none bg-bluecolor text-white px-[43px] py-[14px] max-w-[470px] w-full mr-[10px] rounded-full text-base font-regular" type='submit'>Email us</button>
        </div>
      </div> }

    </div></section>
  )
}

export default Emailer