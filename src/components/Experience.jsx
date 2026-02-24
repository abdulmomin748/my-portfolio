import React from 'react';
const Experience = () => {
    return (
        <>
            <section className="section experience-sec" id='experience'>
                <div className="container">
                    <h2 className="exp-ttle mb-16 text-5xl font-semibold  section-title relative pb-4">Experience</h2>
                    <div className="experience-cntlr flex  px-20">
                        <div data-aos="fade-right" data-aos-duration="1500" className="exp-rgt w-2/3 ml-auto pr-8">
                            <h3 className='text-3xl font-semibold mb-1'>Front End Developer</h3>
                            <p className='text-sm mb-1'>january 2021 - February 2022</p>
                            <p className='text-xl'>Ideaintec</p>
                        </div>
                        <div data-aos="fade-down" data-aos-duration="2000" className="exp-lft  w-full ml-auto pl-14 border-[#f57820] border-l-2 relative py-16">
                            <ul>
                                <li>Designing any website responsively.</li>
                                <li>Confirmed that completed met client requirements.</li>
                                <li>Planned, wrote, and debugged web applications with complete accuracy.</li>
                                <li>modern applications with Node JS, No SQL,Firebase, Mongo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Experience;