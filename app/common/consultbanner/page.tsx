import React from 'react';
import Image from "next/image";
import Link from 'next/link'
function Consultantbanner({ config: { consultants, becomeConsultant } }: any) {

    console.log("alert", becomeConsultant);


    return (
        <section className="">

            <div className="container m-auto">
                <div className="flex gap-4 items-center pt-40 pb-40 max-lg:pt-20 max-lg:pb-10 max-lg:mt-5 max-md:flex-wrap max-ld:mt-0">
                    <div className="w-[70%] max-lg:w-[100%] max-md:w-[100%]">
                        {becomeConsultant && <h2 className="text-consultfont text-slate-900 font-bold  leading-none mt-10 max-lg:text-max-lg max-md:text-4xl ">
                            Join Our Team<br />  as a

                            <span className="relative text-bluecolor"> Consultant!</span> </h2>}

                        {consultants && <h2 className="text-consultfont text-slate-900 font-bold  leading-none mt-10 max-lg:text-max-lg max-md:text-4xl max-md:pr-4">
                            Meet Our  <br />

                            <span className="relative text-bluecolor"> Licensed Experts</span> </h2>}

                        {becomeConsultant && <p className="text-slate-900 text-xl leading-8 font-normal  mt-4 mb-5 max-lg:text-ipad-body max-lg:leading-7 max-md:text-base">Are you passionate about guiding individuals in their career paths? Do you have expertise in career education and counseling?
                            At iknowly, we're seeking dedicated professionals like you to join our team of consultants.</p>}

                        {consultants && <p className="text-slate-900 text-xl leading-8 font-normal  mt-4 mb-5 max-lg:text-ipad-body max-lg:leading-7 max-md:text-base max-md:mb-0">Connect with a community of dedicated professionals. Tailored for<br /> consultants, our platform fosters collaboration and inspiration for<br /> meaningful interactions.</p>}

                        {becomeConsultant && <Link href="/" className="float-left flex items-center justify-center bg-bluecolor rounded-full px-12 py-4 text-base text-white text-center font-medium max-md:px-10 max-md:py-3 ">Become a consultant now</Link>
                        }


                    </div>
                    <div className="w-[30%] max-lg:w-[40%] max-md:w-[100%] max-md:mt-3 max-lg:hidden">
                        <div className='relative'>
                            {consultants && <Image
                                className=""
                                src="/assets/images/consult.png"
                                width={503}
                                height={506}
                                alt=""
                            />}
                            {becomeConsultant && <Image
                                className=""
                                src="/assets/images/becomeconsult.png"
                                width={503}
                                height={506}
                                alt=""
                            />}  
                            <div className=''>
                                {becomeConsultant && <Image
                                    className="absolute top-20 left-[-100px] max-lg:max-w-48 max-lg:left-[-20px]"
                                    src="/assets/images/bcone.png"
                                    width={250}
                                    height={72}
                                    alt=""
                                />
                                }
                                {consultants && <Image
                                    className="absolute top-8 left-[-100px] max-lg:max-w-48  max-lg:left-[-20px]"
                                    src="/assets/images/conone.png"
                                    width={250}
                                    height={72}
                                    alt=""
                                />
                                }
                                {becomeConsultant && <Image
                                    className="absolute bottom-9 right-[-50px] max-lg:max-w-48  max-lg:right-[-0px]"
                                    src="/assets/images/bctwo.png"
                                    width={250}
                                    height={72}
                                    alt=""
                                />
                                }
                                {consultants && <Image
                                    className="absolute bottom-5 right-[-50px] max-lg:max-w-48 max-lg:right-[-0px] "
                                    src="/assets/images/contwo.png"
                                    width={250}
                                    height={72}
                                    alt=""
                                />
                                }
                            </div>

                        </div>


                    </div>


                </div>
            </div>
        </section>
    )
}

export default Consultantbanner