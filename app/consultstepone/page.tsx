import React from 'react'
import Image from "next/image";

function Stepone() {
  return (
    <div className='flex'>
        <div className='bg-[#00379e14] w-[30%] py-10 px-11'>
        <Image
                    className="mt-3 mb-14"
                    src="/assets/images/logobk.png"
                    width={177}
                    height={78}
                    alt=""
                />

                <ul>
                        <li className='relative'>
                        <Image
                    className="absolute top-14 left-8 -z-50"
                    src="/assets/images/darkline.png"
                    width={3}
                    height={216}
                    alt=""
                />
                             <h6 className='flex items-center text-listfont text-bodycolor font-bold mb-3'><span className='w-[65px] h-[65px] items-center mr-4 justify-center flex border-[10px] border-[#becce6]  rounded-full bg-bluecolor text-white text-2xl font-semibold'>1</span>Head Start</h6>   
                             <div className='pl-[83px]'>
                                <h6 className='text-bluecolor text-base font-medium'>Visual Impact:</h6>
                                <p className='text-bodycolor text-base'>A professional headshot adds authenticity and relatability to your profile.</p>
                             </div>
                             <div className='pl-[83px] mt-5'>
                                <h6 className='text-bluecolor text-base font-medium'>Tagline Excellence:</h6>
                                <p className='text-bodycolor text-base'>Craft a tagline that encapsulates your unique approach and commitment to career and education guidance.</p>
                             </div>
                        </li>
                        <li className='relative'>
                        <Image
                    className="absolute top-20 left-8 -z-50"
                    src="/assets/images/blurline.png"
                    width={3}
                    height={32}
                    alt=""
                />
                             <h6 className='opacity-40 flex items-center text-listfont text-bodycolor font-bold mb-3 py-3'><span className='w-[65px] h-[65px] items-center mr-4 justify-center flex border-[10px] border-[#becce6]  rounded-full bg-bluecolor text-white text-2xl font-semibold'>2</span>Personal Information</h6>                                
                        </li>
                        <li className='relative'>
                        <Image
                    className="absolute top-20 left-8 -z-50"
                    src="/assets/images/blurline.png"
                    width={3}
                    height={32}
                    alt=""
                />
                             <h6 className='opacity-40 flex items-center text-listfont text-bodycolor font-bold mb-3 py-3'><span className='w-[65px] h-[65px] items-center mr-4 justify-center flex border-[10px] border-[#becce6]  rounded-full bg-bluecolor text-white text-2xl font-semibold'>3</span>Professional Details</h6>                               
                        </li>
                        <li className='relative'>
                        <Image
                    className="absolute top-20 left-8 -z-50"
                    src="/assets/images/blurline.png"
                    width={3}
                    height={32}
                    alt=""
                />
                             <h6 className='opacity-40 flex items-center text-listfont text-bodycolor font-bold mb-3 py-3'><span className='w-[65px] h-[65px] items-center mr-4 justify-center flex border-[10px] border-[#becce6]  rounded-full bg-bluecolor text-white text-2xl font-semibold'>4</span>Skills</h6>                               
                        </li>
                        <li className='relative'>
                        <Image
                    className="absolute top-20 left-8 -z-50"
                    src="/assets/images/blurline.png"
                    width={3}
                    height={32}
                    alt=""
                />
                             <h6 className='opacity-40 flex items-center text-listfont text-bodycolor font-bold mb-3 py-3'><span className='w-[65px] h-[65px] items-center mr-4 justify-center flex border-[10px] border-[#becce6]  rounded-full bg-bluecolor text-white text-2xl font-semibold'>5</span>Consulting Preferences</h6>                               
                        </li>
                        <li>
                             <h6 className='opacity-40 flex items-center text-listfont text-bodycolor font-bold mb-3 py-3'><span className='w-[65px] h-[65px] items-center mr-4 justify-center flex border-[10px] border-[#becce6]  rounded-full bg-bluecolor text-white text-2xl font-semibold'>6</span>Review</h6>                               
                        </li>
                </ul>
        </div>

        <div>

        </div>
    </div>
  )
}

export default Stepone