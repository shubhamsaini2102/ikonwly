import React from 'react'
import Image from "next/image";
function Consultants() {
    return (
        <section className='py-[70px]'>
        <div className="container m-auto">

        <div className='flex pt-[40px]'>
            <div className='relative'>
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
            <label  className='table w-[100%] text-[16px] text-[#1B1B1B] font-[600]'>Germany</label>
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
                </div>
            </div>
        </div>
        </section>
     
    )
}

export default Consultants