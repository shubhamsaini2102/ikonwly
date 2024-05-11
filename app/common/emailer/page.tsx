import React from 'react';
import Image from "next/image";

function Emailer({ config: { emailer, becomeEmailerp } }: any) {
  return (
    <section className="bg-[#FF7A00] pt-[80px] pb-[80px]">
    <div className="container m-auto">
      {emailer && <h3 className="text-[#fff] text-[48px] leading-[56px] font-[700] text-center">Did not find what you&apos;re looking for?</h3>}
      {becomeEmailerp && <h3 className="text-[#fff] text-[48px] leading-[56px] font-[700] text-center">Ready to Make a Difference?<br/> Join Our Community!</h3>}
      {emailer && <p className="text-[#fff] text-[18px] leading-30px] font-[400] text-center mt-[15px] mb-[40px]">But worry not! Our dedicated team is here to help you connect you with the perfect<br /> consultant who will meet your unique requirements.<br /> Your search for the ideal consultant ends here!</p> }
      {becomeEmailerp && <p className="text-[#fff] text-[18px] leading-30px] font-[400] text-center mt-[15px] mb-[40px]">Take the first step in becoming a part of our community of consultants dedicated to <br/>empowering individuals in their career journeys.</p> }
      {emailer && <div className=''>
        <div className='relative w-[100%] text-center'>
          <input className="max-w-[470px] bg-[#fff] outline-none px-[20px] py-[14px] rounded-[100px] border-[1px] border-[#1b1b1b36] text-[16px] text-[#1b1b1bad] font-[400] w-[100%]" type='text' placeholder='Enter consultation field' />
        </div>
        <div className='relative w-[100%] text-center my-[10px]'>
          <input className="max-w-[470px] bg-[#fff] outline-none px-[20px] py-[14px] rounded-[100px] border-[1px] border-[#1b1b1b36] text-[16px] text-[#1b1b1bad] font-[400] w-[100%]" type='text' placeholder='Enter your email' />
        </div>
        <div className='relative w-[100%] text-center'>
          <button className="outline-none bg-[#00379E] text-[#fff] px-[43px] py-[14px] max-w-[470px] w-[100%] mr-[10px] rounded-[100px] text-[16px] font-[400]" type='submit'>Email us</button>
        </div>
      </div> }

      {becomeEmailerp && <div className=''>
       
        <div className='relative w-[100%] text-center'>
          <button className="outline-none bg-[#00379E] text-[#fff] px-[43px] py-[14px] max-w-[470px] w-[100%] mr-[10px] rounded-[100px] text-[16px] font-[400]" type='submit'>Email us</button>
        </div>
      </div> }

    </div></section>
  )
}

export default Emailer