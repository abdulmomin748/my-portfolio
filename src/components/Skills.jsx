import React, { useState } from 'react';

const Skills = () => {
   
    // const [style, setStyle] = useState();
    // setTimeout(() => {
    //     const done = 'w-[90%] bg-[#f57820]'
    //     setStyle(done)
    // }, 3000);
    return (
        <>
            <section className="section skills-sec" id='skills'>
                <div className="container">
                    <h2 className="exp-ttle mb-16 text-5xl font-semibold  section-title relative pb-4">Skills</h2>
                    <div data-aos="fade-right" data-aos-duration="1000" className="experience-cntlr flex lg:px-20 md:px-14 px-10">
                        <div className="exp-rgt w-2/3 ml-auto">
                            <h3 className='text-3xl font-semibold mb-1'>Front - end</h3>
                        </div>
                        <div className="exp-lft w-full ml-auto pl-14 border-[#f57820] border-l-2 relative py-8">
                            <ul>
                                <li>JAVASCRIPT</li>
                                <li>REACT JS</li>
                                <li>HTML/CSS</li>
                                <li>SCSS</li>
                                <li>UI/UX DESIGN</li>
                                <li>JQUERY</li>
                                <li>REDUX</li>
                            </ul>
                            
                            <div className="lg:w-1/4 w-2/4 -ml-4 mt-4 bg-gray-200 rounded-full dark:bg-gray-700">
                                <div className={`text-[10px] font-medium text-white py-[1px] text-center leading-none rounded-full transition-[1s] w-[80%] bg-[#f57820]`}>90% </div>
                            </div>

                        </div>
                    </div>
                    <div  data-aos="fade-left" data-aos-duration="1000" className="experience-cntlr flex order-row lg:py-20 md:py-12 py-10 lg:px-20 md:px-14 px-10">
                        <div className="exp-rgt w-2/3  pl-14 ml-auto order-2">
                            <h3 className='text-3xl font-semibold mb-1'>Backend - end</h3>
                        </div>
                        <div className="exp-lft lg:pr-14 md:pr-12 pr-10 py-8 w-full order-1 border-[#f57820] border-r-2 relative">
                            <div className=' ml-auto'>
                                <ul className='lg:w-1/4 md:w-2/4 w-2/4 ml-auto'>
                                    <li>NODE JS</li>
                                    <li>EXPRESS JS</li>
                                    <li>REST API</li>
                                </ul>
                                
                                <div className="lg:w-1/4 md:w-2/4 w-2/4  ml-auto  mt-4 bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className={`text-[10px] font-medium text-white py-[1px] text-center leading-none rounded-full transition-[1s] w-[50%] bg-[#f57820] `}>50% </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div  data-aos="fade-right" data-aos-duration="1500" className="experience-cntlr flex  px-20">
                        <div className="exp-rgt w-2/3 ml-auto">
                            <h3 className='text-3xl font-semibold mb-1'>Database</h3>
                        </div>
                        <div className="exp-lft w-full ml-auto pl-14 border-[#f57820] border-l-2 relative py-8">
                            <ul>
                                {/* <li>MYSQL</li> */}
                                <li>MONGODB</li>
                                <li>FIREBASE</li>
                            </ul>
                            
                            <div className="lg:w-1/4 w-2/4 -ml-4 mt-4 bg-gray-200 rounded-full dark:bg-gray-700">
                                <div className={`text-[10px] font-medium text-white py-[1px] text-center leading-none rounded-full transition-[1s] w-[50%] bg-[#f57820]`}>50% </div>
                            </div>

                        </div>
                    </div>
                    <div  data-aos="fade-left" data-aos-duration="1500"  className="experience-cntlr flex order-row lg:py-20 md:py-12 py-10 lg:px-20 md:px-14 px-10">
                        <div className="exp-rgt w-2/3  pl-14 ml-auto order-2">
                            <h3 className='text-3xl font-semibold mb-1'>Others</h3>
                        </div>
                        <div className="exp-lft pr-14 py-8 w-full order-1 border-[#f57820] border-r-2 relative">
                            <div className=' ml-auto'>
                                <ul className='lg:w-1/4 w-2/4  ml-auto'>
                                    <li>GIT</li>
                                    <li>GITHUB</li>
                                    <li>FIGMA</li>
                                    <li>PHOTOSHOP</li>
                                    <li>Adobe XD</li>
                                    <li>Vs Code</li>
                                    <li>Netlify</li>
                                    <li>Vercel</li>
                                </ul>
                                <div className="lg:w-1/4 w-2/4 ml-auto  mt-4 bg-gray-200 rounded-full dark:bg-gray-700">
                                    <div className={`text-[10px] font-medium text-white py-[1px] text-center leading-none rounded-full transition-[1s] w-[80%] bg-[#f57820]`}>80% </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;