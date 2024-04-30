import Image from "next/image";

  export default function Home() {
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
      <div className="grid grid-cols-2 gap-4 items-center absolute top-[50%] translate-y-[-50%]">
          <div className="">
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
              </span><br/> Community, Hub </h2>
            <p className="text-[#fff] text-[20px] leading-[28px] font-[400] mt-[15px] mb-[20px]">For students, job seekers, and professionals</p>
            <div className="flex items-center">
              <a href="#" className="bg-[#00379E] text-[#fff] px-[43px] py-[19px] w-auto mr-[10px] rounded-[100px] text-[16px] font-[400]">Book a consultation</a>
              <a href="#" className="bg-[#FF7A00] text-[#fff] px-[43px] py-[19px] w-auto mr-[10px] rounded-[100px] text-[16px] font-[400]">Become a Consultant</a>
            </div>
            <div  className="text-[#fff] text-[16px] font-[400] my-[15px]">
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
        <h5 className="text-[#fff] text-[56px] font-[600]">120+</h5>
        <span className="text-[#fff] text-[24px] font-[400] mt-[0px]">Consultants</span>
      </article>
      <article>
        <h5 className="text-[#fff] text-[56px] font-[600]">10k+</h5>
        <span className="text-[#fff] text-[24px] font-[400] mt-[0px]">Job Seekers</span>
      </article>
      <article>
        <h5 className="text-[#fff] text-[56px] font-[600]">20k+</h5>
        <span className="text-[#fff] text-[24px] font-[400] mt-[0px]">Consultations</span>
      </article>
  </div>
  </div>
    </div>
</section>
<section className="mt-[140px] pb-[120px]">
<div className="container m-auto">
      <h3 className="text-[#1B1B1B] text-[48px] leading-[56px] font-[600] text-center">We're revolutionizing <span className="text-[#00379E]">educational & career <br/>consulting </span>to empower your journey.</h3>
      <p className="text-[#1B1B1B] text-[18px] leading-30px] font-[400] text-center mt-[10px]">Our goal is to assist you in building your career, connect you with experts who share your aspirations.<br/> We help you reach your full potential through a transformative learning experience.</p>
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
    <h5 className="text-[#000] text-[20px] leading-[28px] font-[500] my-[10px]">Tailored Guidance</h5>
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
    <h5 className="text-[#000] text-[20px] leading-[28px] font-[500] my-[10px]">Industry Insights</h5>
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
    <h5 className="text-[#000] text-[20px] leading-[28px] font-[500] my-[10px]">Flexible Options</h5>
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
    <h5 className="text-[#000] text-[20px] leading-[28px] font-[500] my-[10px]">Cost-Efficient</h5>
    <span className="text-[#1B1B1B] text-[15px] leading-[23px] font-[400]">Access expert advice without the high costs associated with traditional consulting services.</span>
      </article>
      </div>
  </div>
</section>
</>

  )
}