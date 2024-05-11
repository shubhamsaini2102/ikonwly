import React from 'react';
import Image from "next/image";


function Oursteps({ config: { home, becomeStep } }: any) {
  return (
    <section className="pt-[80px] pb-[80px]">
    <div className="container m-auto">
    {home && <h3 className="text-[#1B1B1B] text-[48px] leading-[56px] font-[700] text-center mb-[45px]">Book Your First Consultant Now!</h3>}
    {becomeStep && <h3 className="text-[#1B1B1B] text-[48px] leading-[56px] font-[700] text-center mb-[45px]">How to Apply?</h3>}
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
           {home && <div className="relative mt-[-45px] bg-[#fff] py-[25px] px-[30px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-[15px] max-w-[300px] m-auto">
             <h5 className="text-[24px] text-[#1B1B1B] font-[700] mb-[10px]">Step 1</h5>
              <p className="text-[16px] text-[#000] leading-[28px] font-[400] px-[10px]"> Signup to our platform and create your profile</p> 
            
            </div> }
            {becomeStep &&  <div className="flex  flex-col items-center justify-center min-h-48 relative mt-[-45px] bg-[#fff] py-[25px] px-[20px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-[15px] max-w-[370px] m-auto">
            <h5 className="text-[24px] text-[#1B1B1B] font-[700] mb-[10px]">Submit Your Application</h5>
            <p className="text-[16px] text-[#000] leading-[28px] font-[400] px-[0px]"> Fill out our application form detailing your experience and qualifications.</p> 
            </div>}
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
             {home && <div className="relative mt-[-45px] bg-[#fff] py-[25px] px-[30px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-[15px] max-w-[300px] m-auto">
             <h5 className="text-[24px] text-[#1B1B1B] font-[700] mb-[10px]">Step 2</h5>
              <p className="text-[16px] text-[#000] leading-[28px] font-[400] px-[10px]">Signup to our platform and create your profile</p> 
            
            </div> }
            {becomeStep &&  <div className= "flex  flex-col items-center justify-center min-h-48 relative mt-[-45px] bg-[#fff] py-[25px] px-[20px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-[15px] max-w-[370px] m-auto">
            <h5 className="text-[24px] text-[#1B1B1B] font-[700] mb-[10px]">Interview</h5>
            <p className="text-[16px] text-[#000] leading-[28px] font-[400] px-[0px]"> Upon review, our team will reach out to schedule an interview to discuss your fit with iknowly.</p> 
            </div>}
          
          </article>
          <article className="mb-[18px] w-[33.3%] text-center relative">

            <Image
              className="m-auto"
              src="/assets/images/stthree.png"
              width={300}
              height={300}
              alt=""
            />
             {home && <div className="relative mt-[-45px] bg-[#fff] py-[25px] px-[30px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-[15px] max-w-[300px] m-auto">
             <h5 className="text-[24px] text-[#1B1B1B] font-[700] mb-[10px]">Step 3</h5>
              <p className="text-[16px] text-[#000] leading-[28px] font-[400] px-[10px]">Signup to our platform and create your profile</p> 
            
            </div> }
            {becomeStep &&  <div className="flex  flex-col items-center justify-center min-h-48 relative mt-[-45px] bg-[#fff] py-[25px] px-[20px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-[15px] max-w-[370px] m-auto">
            <h5 className="text-[24px] text-[#1B1B1B] font-[700] mb-[10px]">Onboarding</h5>
            <p className="text-[16px] text-[#000] leading-[28px] font-[400] px-[0px]"> Once accepted, undergo our onboarding process to familiarize yourself with our platform and procedures.</p> 
            </div>}

      
          </article>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Oursteps