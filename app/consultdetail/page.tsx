'use client'
 
import { useState } from 'react'
import Image from "next/image";
function Consultants() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    return (
        <section className='py-[70px]'>
            <div className="container m-auto">
            <div className="border border-gray-300 rounded-md mb-4">
      <div className="flex items-center justify-between p-4 cursor-pointer" onClick={toggleAccordion}>
        <div>Test</div>
        <div>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && <div className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae harum totam saepe tempora molestiae dolorum. Suscipit, odio consectetur non illum distinctio, numquam quo repellendus consequatur, deleniti quidem enim. Inventore, iure?</div>}
    </div>
                <div className='flex pt-[40px]'>
                    <div className='relative w-[67%]'>
                        <ul className='flex gap-2 mb-[35px]'>
                            <li><a href='#' className='text-[#00379E] text-[16px] font-[400]'>Consultants</a></li>
                            <span className='text-[#00379E] text-[16px] font-[400]'>/</span>
                            <li><a className='text-[#00379E] text-[16px] font-[400]' href='#'>Product & Tech</a></li>
                            <span className='text-[#00379E] text-[16px] font-[400]'>/</span>
                            <li><a className='text-[#1B1B1B] text-[16px] font-[400]' href='#'>Christoph Schneider</a></li>
                        </ul>
                        <div className='flex items-center shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-[40px] px-[30px] py-[30px]'>
                            <span className='mr-[25px] '>  <Image className="" src="/assets/images/dtailpro.png" width={200} height={200} alt="" /></span>
                            <div className=''>
                                <h4 className='text-[#1B1B1B] text-[32px] font-[600] flex items-center justify-between'>Christoph Schneider <span className='flex items-center'><a href='#'><Image className="mr-[10px]" src="/assets/images/rbone.png" width={32} height={32} alt="" /></a>   <a href='#'><Image className="" src="/assets/images/rbtwo.png" width={32} height={32} alt="" /></a></span></h4>
                                <h5 className='text-[16px] text-[#00379E] font-[600]'>Automotive Software Developer</h5>
                                <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
                                    <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[7px] text-[14px] text-[#00379E]">Javascript</span>
                                    <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[7px] text-[14px] text-[#00379E]">HTML</span>
                                    <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[7px] text-[14px] text-[#00379E]">CSS</span>
                                </div>
                                <ul className='flex gap-5 mt-[15px]'>
                                    <li>
                                        <span className='table w-[100%] text-[14px] text-[#1B1B1B] font-[400]'>Location</span>
                                        <label className='table w-[100%] text-[16px] text-[#1B1B1B] font-[600]'>Germany</label>
                                    </li>
                                    <li>
                                        <span className='table w-[100%] text-[14px] text-[#1B1B1B] font-[400]'>Time zone</span>
                                        <label className='table w-[100%] text-[16px] text-[#1B1B1B] font-[600]'>Europe/Berlin +02:00</label>
                                    </li>
                                    <li>
                                        <span className='table w-[100%] text-[14px] text-[#1B1B1B] font-[400]'>Speak</span>
                                        <label className='table w-[100%] text-[16px] text-[#1B1B1B] font-[600]'>English, Arabic, German</label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='mt-[20px] shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-[40px] px-[45px] py-[45px]'>
                            <h4 className='text-[#1B1B1B] text-[32px] font-[600] flex items-center justify-between'>About the Teacher </h4>
                            <div className="mx-auto flex gap-x-2 mt-[14px] mb-[20px]">
                                <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[7px] text-[14px] text-[#00379E]">Engineering</span>
                                <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[7px] text-[14px] text-[#00379E]">Software Engineering</span>

                            </div>
                            <p className='text-[16px] text-[#1B1B1B] font-[400] leading-[28px]'>I am Ahmed, I come from Egypt. I am currently enrolled in the 3rd semester of MEng. Software-based Automotive Systems at Hochschule Esslingen. I’m studying Automotive Systems Architecture, Communication Protocols (CAN, LIN, Flex Ray), Automotive application domains, and Vehicle technology. As part of my studies this semester, I'm working on a project to investigate the quickness of an emergency vehicle with V2X features.</p>
                        </div>

                        <div className='mt-[20px] shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-[40px] px-[45px] py-[45px]'>
                            <h4 className='mb-[25px] text-[#1B1B1B] text-[32px] font-[600] flex items-center justify-between'>Experience </h4>
                            <div className='flex items-center'>
                                <span className='mr-[20px]'>
                                    <Image className="" src="/assets/images/serone.png" width={72} height={72} alt="" />
                                </span>
                                <div>
                                    <h5 className='text-[20px] text-[#1B1B1B] font-[600]'>Software Developer at Mercedes-Benz</h5>
                                    <p className='flex items-center mb-[0] text-[16px] text-[#1B1B1B] font-[400]'>Full time <span className='px-[7px] font-[800] text-[22px]'>.</span> May, 2018 - Now <span className='flex items-center pl-[10px]'> <Image className="" src="/assets/images/location.png" width={20} height={20} alt="" /> Germany</span></p>
                                </div>
                            </div>
                            <h4 className='mb-[25px] mt-[26px] text-[#1B1B1B] text-[32px] font-[600] flex items-center justify-between'>Education </h4>
                            <div className='flex items-center'>
                                <span className='mr-[20px]'>
                                    <Image className="" src="/assets/images/sertwo.png" width={72} height={72} alt="" />
                                </span>
                                <div>
                                    <h5 className='text-[20px] text-[#1B1B1B] font-[600]'>Automotive in HS Esslingen</h5>
                                    <p className='flex items-center mb-[0] text-[16px] text-[#1B1B1B] font-[400]'>Masters <span className='px-[7px] font-[800] text-[22px]'>.</span> May, 2017 - Jan, 2024 <span className='flex items-center pl-[10px]'> <Image className="" src="/assets/images/location.png" width={20} height={20} alt="" /> Germany</span></p>
                                </div>
                            </div>
                        </div>

                        <div className='mt-[20px] shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-[40px] px-[45px] py-[45px]'>
                            <h4 className='mb-[25px] text-[#1B1B1B] text-[32px] font-[600] flex items-center justify-between'>Reviews </h4>
                            <form>
                                <div className="col-span-full">
                                    <div className="mt-2">
                                        <textarea id="about" name="about" className="resize-none h-[131px] py-[20px] px-[20px] block w-full rounded-md border-[1px] border-[#ddd] rounded-[24px] text-gray-900 shadow-sm  sm:text-sm sm:leading-6" placeholder='Write a review...'></textarea>
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <div className="mt-2 text-right">
                                        <input className="outline-none bg-[#00379E] text-[#fff] px-[43px] py-[16px] w-auto  rounded-[100px] text-[16px] font-[400]" type='submit' value="Submit" />
                                    </div>
                                </div>
                            </form>
                            <div className='mt-[30px]'>
                                <div className='relative'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
                                    <div className='flex items-center mt-[15px] border-[#ddd] border-b-[1px] pb-[25px] mb-[25px]'>
                                        <span className='mr-[12px]'>  <Image className="" src="/assets/images/review.png" width={40} height={40} alt="" /></span>
                                        <div className=''>
                                            <h5 className='text-[#000000] text-[16px] font-[600] leading-[20px] mb-[0]'>Clara Bertoletti</h5>
                                            <span className='text-[#000000] text-[14px] font-[500]'>MUI lover</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
                                    <div className='flex items-center mt-[15px] border-[#ddd] border-b-[1px] pb-[25px] mb-[25px]'>
                                        <span className='mr-[12px]'>  <Image className="" src="/assets/images/review.png" width={40} height={40} alt="" /></span>
                                        <div className=''>
                                            <h5 className='text-[#000000] text-[16px] font-[600] leading-[20px] mb-[0]'>Clara Bertoletti</h5>
                                            <span className='text-[#000000] text-[14px] font-[500]'>MUI lover</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
                                    <div className='flex items-center mt-[15px] border-[#ddd] border-b-[1px] pb-[25px] mb-[25px]'>
                                        <span className='mr-[12px]'>  <Image className="" src="/assets/images/review.png" width={40} height={40} alt="" /></span>
                                        <div className=''>
                                            <h5 className='text-[#000000] text-[16px] font-[600] leading-[20px] mb-[0]'>Clara Bertoletti</h5>
                                            <span className='text-[#000000] text-[14px] font-[500]'>MUI lover</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adip iscing elit. Vivamus viverra auctor velit. Vestibulum id velit aliquam, placerat lacus.</p>
                                    <div className='flex items-center mt-[15px] border-[#ddd] border-b-[1px] pb-[25px] mb-[25px]'>
                                        <span className='mr-[12px]'>  <Image className="" src="/assets/images/review.png" width={40} height={40} alt="" /></span>
                                        <div className=''>
                                            <h5 className='text-[#000000] text-[16px] font-[600] leading-[20px] mb-[0]'>Clara Bertoletti</h5>
                                            <span className='text-[#000000] text-[14px] font-[500]'>MUI lover</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center py-[25]'>
                                <ul className='flex items-center justify-end w-[100%]'>
                                    <li><a className="ml-[10px] text-[18px] font-[600] bg-[#00379E] text-[#fff] w-[48px] h-[48px] flex items-center justify-center rounded-[12px]" href='#'>1</a></li>
                                    <li><a className="ml-[10px] text-[18px] font-[600] bg-[#E6EBF6] text-[#00379E] w-[48px] h-[48px] flex items-center justify-center rounded-[12px]" href='#'>2</a></li>
                                    <li><a className="ml-[10px] text-[18px] font-[600] bg-[#E6EBF6] text-[#00379E] w-[48px] h-[48px] flex items-center justify-center rounded-[12px]" href='#'>3</a></li>
                                    <li><a className="ml-[10px] text-[18px] font-[600] bg-[#00379E] text-[#fff] w-[157px] h-[48px] flex items-center justify-center rounded-[100px]" href='#'>Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-[33%] pl-[20px] pt-[60px]'>
                        <div className=' shadow-[0_0px_60px_-9px_rgba(0,0,0,0.1)] rounded-[40px] px-[30px] py-[30px]'>
                            <p className='w-[100%] flex items-center text-[18px] text-[#1B1B1B] justify-between'>Price Starting From <span className='font-[600] text-[32px] text-[#00379E]'>$15.99</span></p>
                            <div className=''>
                                <button className="w-[100%] mt-[20px]  outline-none bg-[#00379E] text-[#fff] px-[43px] py-[16px]  rounded-[100px] text-[16px] font-[400]">Book Now</button>
                                <button className="w-[100%] mt-[12px] outline-none bg-[#FF7A00] text-[#fff] px-[43px] py-[16px] rounded-[100px] text-[16px] font-[400]">Share Profile</button>
                            </div>

                        </div>
                        <div className='mt-[20px]'>
                            <h4 className='mb-[25px] text-[#1B1B1B] text-[32px] font-[600] flex items-center justify-between'>Similar Profiles </h4>
                        </div>
                        <div className="mx-auto flex flex-wrap gap-x-5 gap-y-7  lg: lg:grid-cols-3">
                            <article className="bg-[#fff] rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[100%]  ">
                                <div className="relative">
                                    <Image
                                        className=""
                                        src="/assets/images/client.png"
                                        width={500}
                                        height={226}
                                        alt=""
                                    />
                                    <span className="bg-[#ff7b00c4] rounded-[100px] py-[8px] px-[18px] text-[#fff] text-[15px] absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
                                </div>
                                <div className="px-[25px] py-[25px]">
                                    <h5 className="text-[20px] text-[#1B1B1B] font-[700]">Christoph Schneider</h5>
                                    <h6 className="text-[15px] text-[#1B1B1B] font-[400] my-[3px]">Fagikasade krovung monoligt</h6>
                                    <label className="text-[15px] text-[#00379E] font-[400] ">Product & Tech</label>
                                    <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
                                        <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">Javascript</span>
                                        <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">HTML</span>
                                        <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">CSS</span>
                                    </div>
                                    <a href="#" className="flex items-center justify-center bg-[#00379E] rounded-[100px] px-[14px] py-[6px] text-[16px] text-[#fff] text-center font-[500] w-[100%] h-[52px]">Book Now</a>
                                </div>
                            </article>
                            <article className="bg-[#fff] rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[100%]  ">
                                <div className="relative">
                                    <Image
                                        className=""
                                        src="/assets/images/client.png"
                                        width={500}
                                        height={226}
                                        alt=""
                                    />
                                    <span className="bg-[#ff7b00c4] rounded-[100px] py-[8px] px-[18px] text-[#fff] text-[15px] absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
                                </div>
                                <div className="px-[25px] py-[25px]">
                                    <h5 className="text-[20px] text-[#1B1B1B] font-[700]">Christoph Schneider</h5>
                                    <h6 className="text-[15px] text-[#1B1B1B] font-[400] my-[3px]">Fagikasade krovung monoligt</h6>
                                    <label className="text-[15px] text-[#00379E] font-[400] ">Product & Tech</label>
                                    <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
                                        <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">Javascript</span>
                                        <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">HTML</span>
                                        <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">CSS</span>
                                    </div>
                                    <a href="#" className="flex items-center justify-center bg-[#00379E] rounded-[100px] px-[14px] py-[6px] text-[16px] text-[#fff] text-center font-[500] w-[100%] h-[52px]">Book Now</a>
                                </div>
                            </article>
                            <article className="bg-[#fff] rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[100%]  ">
                                <div className="relative">
                                    <Image
                                        className=""
                                        src="/assets/images/client.png"
                                        width={500}
                                        height={226}
                                        alt=""
                                    />
                                    <span className="bg-[#ff7b00c4] rounded-[100px] py-[8px] px-[18px] text-[#fff] text-[15px] absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
                                </div>
                                <div className="px-[25px] py-[25px]">
                                    <h5 className="text-[20px] text-[#1B1B1B] font-[700]">Christoph Schneider</h5>
                                    <h6 className="text-[15px] text-[#1B1B1B] font-[400] my-[3px]">Fagikasade krovung monoligt</h6>
                                    <label className="text-[15px] text-[#00379E] font-[400] ">Product & Tech</label>
                                    <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
                                        <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">Javascript</span>
                                        <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">HTML</span>
                                        <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">CSS</span>
                                    </div>
                                    <a href="#" className="flex items-center justify-center bg-[#00379E] rounded-[100px] px-[14px] py-[6px] text-[16px] text-[#fff] text-center font-[500] w-[100%] h-[52px]">Book Now</a>
                                </div>
                            </article>
                            <article className="bg-[#fff] rounded-[15px] shadow-[0_20px_50px_-13px_rgba(0,0,0,0.2)] w-[100%]  ">
                                <div className="relative">
                                    <Image
                                        className=""
                                        src="/assets/images/client.png"
                                        width={500}
                                        height={226}
                                        alt=""
                                    />
                                    <span className="bg-[#ff7b00c4] rounded-[100px] py-[8px] px-[18px] text-[#fff] text-[15px] absolute bottom-[15px] left-[15px]">Price starting from <b>$15.99</b></span>
                                </div>
                                <div className="px-[25px] py-[25px]">
                                    <h5 className="text-[20px] text-[#1B1B1B] font-[700]">Christoph Schneider</h5>
                                    <h6 className="text-[15px] text-[#1B1B1B] font-[400] my-[3px]">Fagikasade krovung monoligt</h6>
                                    <label className="text-[15px] text-[#00379E] font-[400] ">Product & Tech</label>
                                    <div className="mx-auto flex gap-x-2 mt-[8px] mb-[15px]">
                                        <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">Javascript</span>
                                        <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">HTML</span>
                                        <span className="bg-[#E1ECFF] rounded-[100px] border-[1px] border-[#00379E] px-[14px] py-[6px] text-[12px] text-[#00379E]">CSS</span>
                                    </div>
                                    <a href="#" className="flex items-center justify-center bg-[#00379E] rounded-[100px] px-[14px] py-[6px] text-[16px] text-[#fff] text-center font-[500] w-[100%] h-[52px]">Book Now</a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Consultants