import React from 'react';
import Image from "next/image";

function Apply() {
    return (
        <div className='pb-10'>
            <div className="container m-auto">
                <Image
                    className="mt-3 mb-14"
                    src="/assets/images/logobk.png"
                    width={177}
                    height={78}
                    alt=""
                />
                <h3 className='text-headingFont text-bodycolor leading-none font-bold mb-8'>Great! Next, you'll create and submit <br />a profile to apply</h3>
                <p className='text-bodycolor text-lg mb-3'>Embark on a transformative journey with iknowly by creating your expert profile and positioning<br /> yourself at the forefront of career development for international professionals in Germany.</p>
                <p className='text-bodycolor text-lg mb-3'>Follow these steps to join our vibrant community:</p>
                <div className='flex flex-wrap gap-y-6 justify-between mt-7'>
                    <div className='shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-3xl p-8 w-[49%]'>
                        <Image
                            className=""
                            src="/assets/images/iicone.png"
                            width={40}
                            height={40}
                            alt=""
                        />
                        <h5 className='text-subheading text-bodycolor font-semibold my-3'>Build Your Profile</h5>
                        <p className='text-bodycolor text-base '>Craft a comprehensive profile that showcases your expertise, experience, and commitment to empowering others in their career and education pursuits. Highlight your achievements and let your passion shine through.</p>
                    </div>
                    <div className='shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-3xl p-8 w-[49%]'>
                        <Image
                            className=""
                            src="/assets/images/iictwo.png"
                            width={40}
                            height={40}
                            alt=""
                        />
                        <h5 className='text-subheading text-bodycolor font-semibold my-3'>Submit for Review</h5>
                        <p className='text-bodycolor text-base '>Once your profile is complete, submit it for our team's review. We carefully evaluate profiles to ensure a curated pool of highly qualified and engaged Experts who align with our mission and vision.</p>
                    </div>
                    <div className='shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-3xl p-8 w-[49%]'>
                        <Image
                            className=""
                            src="/assets/images/iicthree.png"
                            width={40}
                            height={40}
                            alt=""
                        />
                        <h5 className='text-subheading text-bodycolor font-semibold my-3'>Review Process</h5>
                        <p className='text-bodycolor text-base '>Our team will review your profile, considering both your qualifications and the quality of your profile. This process typically takes a few business days, during which you won't be able to make further edits. Your patience is appreciated.</p>
                    </div>
                    <div className='shadow-[0_16px_50px_-6px_rgba(0,0,0,0.1)] rounded-3xl p-8 w-[49%]'>
                        <Image
                            className=""
                            src="/assets/images/iicfour.png"
                            width={40}
                            height={40}
                            alt=""
                        />
                        <h5 className='text-subheading text-bodycolor font-semibold my-3'>Acceptance Notification</h5>
                        <p className='text-bodycolor text-base '>Upon completion of the review, you will receive an email notifying you of your acceptance to join iknowly .This email will also include next steps to kickstart your journey with us.</p>
                    </div>
                </div>

                <div className='text-right my-7'>
                    <button className='flex ml-auto items-center text-white font-medium bg-bluecolor px-buttonXpadding py-buttonYpadding rounded-full'>Continue <Image
                        className="ml-2"
                        src="/assets/images/arright.png"
                        width={24}
                        height={10}
                        alt=""
                    /> </button>
                </div>
            </div>
        </div>
    )
}

export default Apply