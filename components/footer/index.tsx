import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="bg-bluecolor w-full pt-16">
        <div className="container m-auto">
          <div className="mx-auto flex gap-x-4 justify-between w-[100%] max-md:flex-wrap max-md:justify-start">

            <div className="max-md:w-full">
              <Image
                className="mb-4"
                src="/assets/images/logo.png"
                width={146}
                height={64}
                alt=""
              />
              <ul className="max-lg:hidden">
                <li className="flex items-start text-base text-white leading-6 mb-4">   <Image
                  className="mr-[6px]"
                  src="/assets/images/loc.png"
                  width={23}
                  height={23}
                  alt=""
                /> Büyükesat Mh. Turgutlu SK.<br />NO:10/2 CANKAYA / ANKARA</li>
                <li className="flex items-center text-base text-white leading-6 mb-4">   <Image
                  className="mr-[6px]"
                  src="/assets/images/env.png"
                  width={23}
                  height={23}
                  alt=""
                /> info@iKnowly.com</li>
                <li className="flex items-center text-base text-white leading-6 mb-4">   <Image
                  className="mr-[6px]"
                  src="/assets/images/phn.png"
                  width={23}
                  height={23}
                  alt=""
                /> +123 456 789</li>
              </ul>

              <ul className="flex items-center mt-[30px]">
                <li className="mr-2.5"><a href="#"><Image className="" src="/assets/images/fb.png" width={32} height={32} alt="" /></a></li>
                <li className="mr-2.5"><a href="#"><Image className="" src="/assets/images/insta.png" width={32} height={32} alt="" /></a></li>
                <li className="mr-2.5"><a href="#"><Image className="" src="/assets/images/xra.png" width={32} height={32} alt="" /></a></li>
                <li className="mr-2.5"><a href="#"><Image className="" src="/assets/images/link.png" width={32} height={32} alt="" /></a></li>
              </ul>
            </div>

            <div className="max-md:w-[30%]">
              <h5 className="text-listfont text-white font-semibold mb-3 mt-14 max-lg:text-xl max-md:mt-9">Links</h5>
              <ul>
                <li><Link className="flex text-base text-white font-regular mb-4 max-lg:text-sm	" href="/">Home</Link></li>
                <li><Link className="flex text-base text-white font-regular mb-4 max-lg:text-sm" href="/about">About Us</Link></li>
                <li><Link className="flex text-base text-white font-regular mb-4 max-lg:text-sm" href="/faq">FAQs</Link></li>
                <li><Link className="flex text-base text-white font-regular mb-4 max-lg:text-sm" href="/career-listing-minimal">Careers</Link></li>
              </ul>
            </div>

            <div className="max-md:w-[50%]">
              <h5 className="text-listfont text-white font-semibold mb-3 mt-14 max-lg:text-xl max-md:mt-9">Consultants</h5>
              <ul>
                <li><Link className="flex text-base text-white font-regular mb-4 max-lg:text-sm" href="/become-consultant">Become a consultant</Link></li>
                <li><Link className="flex text-base text-white font-regular mb-4 max-lg:text-sm" href="/consultants">Find a consultant</Link></li>
              </ul>
            </div>

            <div className="">
              <h5 className="text-listfont text-white font-semibold mb-3 mt-14 max-lg:text-xl max-md:mt-9">Answers</h5>
              <ul>
                <li><Link className="flex text-base text-white font-regular mb-4 max-lg:text-sm" href="/help-center">Help Center</Link></li>
                <li><Link className="flex text-base text-white font-regular mb-4 max-lg:text-sm" href="/faq">Find your answers</Link></li>
              </ul>
            </div>

            <div className="">
              <h5 className="text-listfont text-white font-semibold mb-3 mt-14 max-lg:text-xl max-md:mt-9">Support</h5>
              <ul>
                <li><Link className="flex text-base text-white font-regular mb-4 max-lg:text-sm" href="/contact-page">Contact us</Link></li>
                <li><Link className="flex text-base text-white font-regular mb-4 max-lg:text-sm" href="/company-terms">Terms of services</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t-[1px] border-[#ffffff38] mt-10">
            <p className="text-base text-white font-regular py-[15px] text-center max-lg:text-sm">© 2024 iknowly.com. All rights reserved.</p>
          </div>


        </div>

      </footer>




    </>

  );
}
