import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <footer className="bg-[#00379E] w-full pt-[60px]">
        <div className="container m-auto">
          <div className="mx-auto flex gap-x-4 justify-between w-[100%]">

            <div className="">
              <Image
                className="mb-[15px]"
                src="/assets/images/logo.png"
                width={146}
                height={64}
                alt=""
              />
              <ul>
                <li className="flex items-start text-[16px] text-[#fff] leading-[25px] mb-[13px]">   <Image
                  className="mr-[6px]"
                  src="/assets/images/loc.png"
                  width={23}
                  height={23}
                  alt=""
                /> Büyükesat Mh. Turgutlu SK.<br />NO:10/2 CANKAYA / ANKARA</li>
                <li className="flex items-center text-[16px] text-[#fff] leading-[25px] mb-[13px]">   <Image
                  className="mr-[6px]"
                  src="/assets/images/env.png"
                  width={23}
                  height={23}
                  alt=""
                /> info@iKnowly.com</li>
                <li className="flex items-center text-[16px] text-[#fff] leading-[25px] mb-[13px]">   <Image
                  className="mr-[6px]"
                  src="/assets/images/phn.png"
                  width={23}
                  height={23}
                  alt=""
                /> +123 456 789</li>
              </ul>

              <ul className="flex items-center mt-[30px]">
                <li className="mr-[10px]"><a href="#"><Image className="" src="/assets/images/fb.png" width={32} height={32} alt="" /></a></li>
                <li className="mr-[10px]"><a href="#"><Image className="" src="/assets/images/insta.png" width={32} height={32} alt="" /></a></li>
                <li className="mr-[10px]"><a href="#"><Image className="" src="/assets/images/xra.png" width={32} height={32} alt="" /></a></li>
                <li className="mr-[10px]"><a href="#"><Image className="" src="/assets/images/link.png" width={32} height={32} alt="" /></a></li>
              </ul>
            </div>

            <div className="">
              <h5 className="text-[28px] text-[#fff] font-[600] mb-[12px] mt-[55px]">Links</h5>
              <ul>
                <li><Link className="flex text-[16px] text-[#fff] font-[400] mb-[13px]" href="/">Home</Link></li>
                <li><Link className="flex text-[16px] text-[#fff] font-[400] mb-[13px]" href="/about">About Us</Link></li>
                <li><Link className="flex text-[16px] text-[#fff] font-[400] mb-[13px]" href="/faq">FAQs</Link></li>
                <li><Link className="flex text-[16px] text-[#fff] font-[400] mb-[13px]" href="/career-listing-minimal">Careers</Link></li>
              </ul>
            </div>

            <div className="">
              <h5 className="text-[28px] text-[#fff] font-[600] mb-[12px] mt-[55px]">Consultants</h5>
              <ul>
                <li><Link className="flex text-[16px] text-[#fff] font-[400] mb-[13px]" href="/become-consultant">Become a consultant</Link></li>
                <li><Link className="flex text-[16px] text-[#fff] font-[400] mb-[13px]" href="/consultants">Find a consultant</Link></li>
              </ul>
            </div>

            <div className="">
              <h5 className="text-[28px] text-[#fff] font-[600] mb-[12px] mt-[55px]">Answers</h5>
              <ul>
                <li><Link className="flex text-[16px] text-[#fff] font-[400] mb-[13px]" href="/help-center">Help Center</Link></li>
                <li><Link className="flex text-[16px] text-[#fff] font-[400] mb-[13px]" href="/faq">Find your answers</Link></li>
              </ul>
            </div>

            <div className="">
              <h5 className="text-[28px] text-[#fff] font-[600] mb-[12px] mt-[55px]">Support</h5>
              <ul>
                <li><Link className="flex text-[16px] text-[#fff] font-[400] mb-[13px]" href="/contact-page">Contact us</Link></li>
                <li><Link className="flex text-[16px] text-[#fff] font-[400] mb-[13px]" href="/company-terms">Terms of services</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t-[1px] border-[#ffffff38] mt-[40px]">
            <p className="text-[16px] text-[#fff] font-[400] py-[15px] text-center">© 2024 iknowly.com. All rights reserved.</p>
          </div>


        </div>

      </footer>




    </>

  );
}
