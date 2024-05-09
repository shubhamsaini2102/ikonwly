import React from 'react';
import Image from "next/image";
import Link from 'next/link'
function Consultantbanner({ config: { consultants, becomeConsultant } }: any) {

    console.log("alert", becomeConsultant);


    return (
        <section className="">

            <div className="container m-auto">
                <div className="flex gap-4 items-center pt-40 pb-40">
                    <div className="w-[70%]">
                        {becomeConsultant && <h2 className="text-consultfont text-slate-900 font-bold  leading-none mt-10">
                            Join Our Team<br />  as a

                            <span className="relative text-[#00379E]"> Consultant!</span> </h2>}

                        {consultants && <h2 className="text-consultfont text-slate-900 font-bold  leading-none mt-10">
                            Meet Our  <br />

                            <span className="relative text-[#00379E]"> Licensed Experts</span> </h2>}

                        {becomeConsultant && <p className="text-slate-900 text-xl leading-8 font-normal  mt-4 mb-5">Are you passionate about guiding individuals in their career paths? Do you have expertise in career education and counseling?
                            At iknowly, we're seeking dedicated professionals like you to join our team of consultants.</p>}

                        {consultants && <p className="text-slate-900 text-xl leading-8 font-normal  mt-4 mb-5">Connect with a community of dedicated professionals. Tailored for<br /> consultants, our platform fosters collaboration and inspiration for<br /> meaningful interactions.</p>}

                        {becomeConsultant && <Link href="/" className="float-left flex items-center justify-center bg-bluecolor rounded-full px-12 py-5 text-base text-white text-center font-medium  h-[52px]">Become a consultant now</Link>
                        }


                    </div>
                    <div className="w-[30%]">
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
                                    className="absolute top-20 left-[-100px]"
                                    src="/assets/images/bcone.png"
                                    width={250}
                                    height={72}
                                    alt=""
                                />
                                }
                                {consultants && <Image
                                    className="absolute top-8 left-[-100px]"
                                    src="/assets/images/conone.png"
                                    width={250}
                                    height={72}
                                    alt=""
                                />
                                }
                                {becomeConsultant && <Image
                                    className="absolute bottom-9 right-[-50px]"
                                    src="/assets/images/bctwo.png"
                                    width={250}
                                    height={72}
                                    alt=""
                                />
                                }
                                {consultants && <Image
                                    className="absolute bottom-5 right-[-50px]"
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