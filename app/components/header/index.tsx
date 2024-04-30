import Image from "next/image";


export default function Home() {
  return (
<>
   <header className="bg-[transparent] w-full fixed top-0 left-0 right-0 ">
   <div className="container m-auto">
  <nav className="mx-auto flex  items-center justify-between py-4 " aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">        
        <Image
      src="/assets/images/logo.png"
      width={146}
      height={64}
      alt="Picture of the author"
    />
      </a>
    </div>
    <div className="flex items-center lg:hidden ">
      <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#787878]">
        <span className="sr-only">Open main menu</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div className="hidden items-center lg:flex lg:gap-x-5">
    <button type="button" className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
    <span className="text-[16px] leading-6 text-[#fff] font-[400]">Solutions</span>
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="#fff" aria-hidden="true">
      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
    </svg>
  </button>
  <div className="relative">
    <span> <Image
    className="absolute top-[10px] left-[12px]"
      src="/assets/images/search.svg"
      width={20}
      height={20}
      alt="Picture of the author"
    /></span>
    <input className="font-[400] h-[40px] w-[205px] rounded-[100px] bg-[#ffffff12] px-[15px]  pl-[38px] border-[1px] border-[#fff] size-[16px] text-[#fff] outline-[0]" type="text" placeholder="Search"/>
  </div>
      <a href="#" className="font-[400] text-[16px] leading-6 text-[#fff] ml-[13px]">Home</a>
      <a href="#" className="font-[400] text-[16px] leading-6 text-[#fff] ml-[13px]">Consultants</a>
      <a href="#" className="font-[400] text-[16px] leading-6 text-[#fff] ml-[13px]">Become a consultant</a>
      <a href="#" className="font-[400] text-[16px] leading-6 text-[#fff] ml-[13px]">Sign in</a>
   
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
      <button className="text-[16px] bg-[#00379E] text-[#fff] py-4 px-9 rounded-[100px]	font-[600]">Register</button>
    </div>
  </nav>
  </div>

</header>


   

</>

  );
}
