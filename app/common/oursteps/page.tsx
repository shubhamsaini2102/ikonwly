import React from 'react';
import Image from "next/image";


function Oursteps({ config: { home, becomeStep } }: any) {
  return ( 
    <section className="pt-20 pb-20 max-md:pt-12 max-md:pb-10">
    <div className="container m-auto">
    {home && <h3 className="text-bodycolor text-headingFont leading-1 font-bold text-center mb-6 max-lg:text-ipadheadingFont max-md:text-listfont">Book Your First Consultant Now!</h3>}
    {becomeStep && <h3 className="text-bodycolor text-headingFont leading-1 font-bold text-center mb-6 max-lg:text-ipadheadingFont max-md:text-listfont">How to Apply?</h3>}
      <div className="relative">
        <Image
          className="m-auto absolute left-0 top-[150px] right-0 z-[-1] max-lg:top-[98px] max-lg:left-[20px] max-lg:w-[90%] max-md:hidden"
          src="/assets/images/lined.png"
          width={786}
          height={1}
          alt=""
        />
        <div className="mx-auto flex gap-x-4  lg: lg:grid-cols-3 max-md:flex-wrap">
          <article className="mb-[18px] w-[33.3%] text-center relative max-md:w-full max-md:mb-14">
            <Image
              className="m-auto  max-lg:max-w-48"
              src="/assets/images/stone.png"
              width={300}
              height={300}
              alt=""
            />
            <Image
          className="m-auto absolute left-0 hidden top-[150px] right-0 z-[-1] max-lg:top-[98px] max-lg:left-[20px] max-lg:w-[90%] max-md:block max-md:rotate-90	max-md:left-0 max-md:right-0 max-md:bottom-[-20px]"
          src="/assets/images/lined.png"
          width={786}
          height={1}
          alt=""
        />
            <Image
              className="absolute top-[132px] right-[-28px] max-lg:top-[86px] max-lg:right-[-22px] max-lg:max-w-[26px] max-md:top-[100%] max-md:left-0 max-md:right-0 m-auto max-md:bottom-[-55px]"
              src="/assets/images/ar.png"
              width={40}
              height={40}
              alt=""
            />
           {home && <div className="relative mt-[-45px] bg-[#fff] py-[25px] px-[30px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-[15px] max-w-[300px] m-auto">
             <h5 className="text-2xl text-bodycolor font-bold mb-2 max-lg:text-base max-md:text-2xl ">Step 1</h5>
              <p className="text-base text-bodycolor leading-1 font-regular px-0 max-lg:text-[11px] max-lg:leading-5 max-md:text-base"> Signup to our platform and create your profile</p> 
            
            </div> }
            {becomeStep &&  <div className="flex  flex-col items-center justify-center min-h-48 relative mt-[-45px] bg-[#fff] py-[25px] px-[20px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-[15px] max-w-[370px] m-auto max-lg:min-h-40">
            <h5 className="text-2xl text-bodycolor font-bold mb-2 max-lg:text-base max-md:text-2xl">Submit Your Application</h5>
            <p  className="text-base text-bodycolor leading-1 font-regular px-0 max-lg:text-[11px] max-lg:leading-5 max-md:text-base"> Fill out our application form detailing your experience and qualifications.</p> 
            </div>}
          </article>
          <article className="mb-[18px]  w-[33.3%] text-center relative max-md:w-full max-md:mb-14">
            <Image
              className="m-auto  max-lg:max-w-48"
              src="/assets/images/sttwo.png"
              width={300}
              height={300}
              alt=""
            /><Image
            className="m-auto absolute left-0 hidden top-[150px] right-0 z-[-1] max-lg:top-[98px] max-lg:left-[20px] max-lg:w-[90%] max-md:block max-md:rotate-90	max-md:left-0 max-md:right-0 max-md:bottom-[-20px]"
            src="/assets/images/lined.png"
            width={786}
            height={1}
            alt=""
          />
            <Image
             className="absolute top-[132px] right-[-28px] max-lg:top-[86px] max-lg:right-[-22px] max-lg:max-w-[26px] max-md:top-[100%] max-md:left-0 max-md:right-0 m-auto max-md:bottom-[-55px]"
              src="/assets/images/ar.png"
              width={40}
              height={40}
              alt=""
            />
             {home && <div className="relative mt-[-45px] bg-[#fff] py-[25px] px-[30px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-[15px] max-w-[300px] m-auto">
             <h5 className="text-2xl text-bodycolor font-bold mb-2 max-lg:text-base max-md:text-2xl">Step 2</h5>
              <p  className="text-base text-bodycolor leading-1 font-regular px-0 max-lg:text-[11px] max-lg:leading-5 max-md:text-base ">Signup to our platform and create your profile</p> 
            
            </div> }
            {becomeStep &&  <div className= "flex  flex-col items-center justify-center min-h-48 relative mt-[-45px] bg-[#fff] py-[25px] px-[20px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-[15px] max-w-[370px] m-auto max-lg:min-h-40">
            <h5 className="text-2xl text-bodycolor font-bold mb-2 max-lg:text-base max-md:text-2xl">Interview</h5>
            <p  className="text-base text-bodycolor leading-1 font-regular px-0 max-lg:text-[11px] max-lg:leading-5 max-md:text-base"> Upon review, our team will reach out to schedule an interview to discuss your fit with iknowly.</p> 
            </div>}
          
          </article>
          <article className="mb-[18px] w-[33.3%] text-center relative max-md:w-full">

            <Image
              className="m-auto  max-lg:max-w-48"
              src="/assets/images/stthree.png"
              width={300}
              height={300}
              alt=""
            />
             {home && <div className="relative mt-[-45px] bg-[#fff] py-[25px] px-[30px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-[15px] max-w-[300px] m-auto">
             <h5 className="text-2xl text-bodycolor font-bold mb-2 max-lg:text-base max-md:text-2xl">Step 3</h5>
              <p  className="text-base text-bodycolor leading-1 font-regular px-0 max-lg:text-[11px] max-lg:leading-5  max-md:text-base">Signup to our platform and create your profile</p> 
            
            </div> }
            {becomeStep &&  <div className="flex  flex-col items-center justify-center min-h-48 relative mt-[-45px] bg-[#fff] py-[25px] px-[20px] shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-[15px] max-w-[370px] m-auto max-lg:min-h-40">
            <h5 className="text-2xl text-bodycolor font-bold mb-2 max-lg:text-base max-md:text-2xl">Onboarding</h5>
            <p  className="text-base text-bodycolor leading-1 font-regular px-0 max-lg:text-[11px] max-lg:leading-5  max-md:text-base"> Once accepted, undergo our onboarding process to familiarize yourself with our platform and procedures.</p> 
            </div>}

      
          </article>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Oursteps