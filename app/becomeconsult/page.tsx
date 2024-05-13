import React from 'react';
import Image from "next/image";
import Consultantbanner from '../common/consultbanner/page';
import Oursteps from '../common/oursteps/page';
import Emailer from '../common/emailer/page';
function Becomeconsultants() {

    console.log("P  A  G  E");
  return (
    <>
    <Consultantbanner config={{consultants: false, becomeConsultant: true}}/>
    <section>
    <div className="container m-auto">
            <div className='flex  gap-6'>
            <div className='w-[50%]'>
                <Image
                className=""
                src="/assets/images/constleft.png"
                width={570}
                height={510}
                alt=""
              />
                </div>
                <div className='w-[50%]'>
                    <h4 className='text-5xl text-slate-900 font-bold mb-7 max-lg:text-3xl'>Why Choose <span className='text-orange'>Iknowly?</span></h4>
                    <div className='shadow-[0_16px_50px_0px_rgba(0,0,0,0.1)] py-5 px-8 rounded-3xl max-lg:px-5'>
                        <h5 className='text-bodycolor font-semibold text-subheading flex items-center mb-2 max-lg:text-xl'><Image className="mr-2" src="/assets/images/verify.png" width={22} height={22} alt=""/>Global Reach</h5>
                        <p className='text-base text-bodycolor font-regular'>Access a vast pool of individuals seeking career guidance, not limited to geographical boundaries.</p>
                    </div>
                    <div className='shadow-[0_16px_50px_0px_rgba(0,0,0,0.1)] py-5 px-8 rounded-3xl my-5 max-lg:px-5'>
                        <h5 className='text-bodycolor font-semibold text-subheading flex items-center mb-2 max-lg:text-xl'><Image className="mr-2" src="/assets/images/verify.png" width={22} height={22} alt=""/>Flexibility</h5>
                        <p className='text-base text-bodycolor font-regular'>Work on your schedule and choose the number of sessions you would like to conduct each month</p>
                    </div>
                    <div className='shadow-[0_16px_50px_0px_rgba(0,0,0,0.1)] py-5 px-8 rounded-3xl max-lg:px-5'>
                        <h5 className='text-bodycolor font-semibold text-subheading flex items-center mb-2 max-lg:text-xl'><Image className="mr-2" src="/assets/images/verify.png" width={22} height={22} alt=""/>Competitive Compensation</h5>
                        <p className='text-base text-bodycolor font-regular'>Earn based on your sessions, with a competitive net profit per consultation.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className='pt-28 pb-20 max-lg:pb-10'>
    <div className="container m-auto">
            <div className='flex  gap-6'>
           
                <div className='w-[50%]'>
                    <h4 className='text-5xl text-slate-900 font-bold mb-7 max-lg:text-3xl'>What We are Looking For? </h4>
                    <div className='shadow-[0_16px_50px_0px_rgba(0,0,0,0.1)] py-5 px-8 rounded-3xl max-lg:px-5'>
                        <h5 className='text-bodycolor font-semibold text-subheading flex items-center mb-2 max-lg:text-xl'><Image className="mr-2" src="/assets/images/orverify.png" width={22} height={22} alt=""/>Expertise</h5>
                        <p className='text-base text-bodycolor font-regular'>Professionals experienced in career education, counseling, HR, or related fields.</p>
                    </div>
                    <div className='shadow-[0_16px_50px_0px_rgba(0,0,0,0.1)] py-5 px-8 rounded-3xl my-5 max-lg:px-5'>
                        <h5 className='text-bodycolor font-semibold text-subheading flex items-center mb-2 max-lg:text-xl'><Image className="mr-2" src="/assets/images/orverify.png" width={22} height={22} alt=""/>Passion</h5>
                        <p className='text-base text-bodycolor font-regular'>Dedication to assisting individuals in achieving their career aspirations.</p>
                    </div>
                    <div className='shadow-[0_16px_50px_0px_rgba(0,0,0,0.1)] py-5 px-8 rounded-3xl max-lg:px-5'>
                        <h5 className='text-bodycolor font-semibold text-subheading flex items-center mb-2 max-lg:text-xl'><Image className="mr-2" src="/assets/images/orverify.png" width={22} height={22} alt=""/>Commitment</h5>
                        <p className='text-base text-bodycolor font-regular'>Willingness to conduct a minimum number of sessions per month.</p>
                    </div>
                </div>
                <div className='w-[50%]'>
                <Image
                className=""
                src="/assets/images/thumb.png"
                width={570}
                height={510}
                alt=""
              />
                </div>
            </div>
        </div>
    </section>
    <Oursteps config={{home: false, becomeStep: true}}/>
    <Emailer config={{emailer: false, becomeEmailerp: true}}/>
    </>
  )
}

export default Becomeconsultants