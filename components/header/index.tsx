import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
export default function Home() {

  const pathname: any = usePathname()

  const textColor = ["/"].includes(pathname) ? "white" : "bodycolor"

  return (
    
    <>
      <header className="bg-[transparent] w-full absolute top-0 left-0 right-0 ">
        <div className="container m-auto">
          <nav className="mx-auto flex  items-center justify-between py-4 " aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                { textColor === "white" ? <Image
                  src="/assets/images/logo.png"
                  width={146}
                  height={64}
                  alt="Picture of the author"
                /> : 
                <Image
                  src="/assets/images/logobk.png"
                  width={146}
                  height={64}
                  alt="Picture of the author"
                />
}
              </a>
            </div>
            <div className="flex items-center lg:hidden max-lg:block max-md:block">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-1 text-white bg-bluecolor">
           
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden items-center lg:flex lg:gap-x-5">
              <button type="button" className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false">
                <span className={`font-normal text-base leading-6 text-${textColor}`}>Categories</span>
                { textColor === "white" ? <svg className="h-5 w-5" viewBox="0 0 20 20" fill="#fff" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg> :
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="#000" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
}
              </button>
              <div className="relative">
                <span>
                { textColor === "white" ?  <Image
                  className="absolute top-[10px] left-[12px]"
                  src="/assets/images/search.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                /> :
                <Image
                  className="absolute top-[10px] left-[12px]"
                  src="/assets/images/srchblk.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
}
                
                </span>
                <input className={`font-normal h-10 w-50 rounded-full bg-[#ffffff12] px-5  pl-10 border border-${textColor} text-base text-white outline-[0]`} type="text" placeholder="Search" />
              </div>
              <Link href="/" className={`font-normal text-base leading-6 text-${textColor} ml-4`}>Home</Link>
              <Link href="/consultants" className={`font-normal text-base leading-6 text-${textColor} ml-4`}>Consultants</Link>
              <a href="#" className={`font-normal text-base leading-6 text-${textColor} ml-4`}>Become a consultant</a>
              <a href="#" className={`font-normal text-base leading-6 text-${textColor} ml-4`}>Sign in</a>

            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
              <button className="text-base bg-bluecolor text-white py-4 px-9 rounded-full font-normal">Register</button>
            </div>
          </nav> 
        </div>

      </header>




    </>

  );
}
