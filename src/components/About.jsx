import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/ABOUTmEIMG.jpg';
import { Typewriter  } from 'react-simple-typewriter';



const About = () => {
    return (
        <>
            <section className="section about-sec" id="about">
            <div className="container">
                <h2 className="abt-ttle mb-2 text-4xl ">My specialization</h2>
                <h2 className="exp-ttle mb-16 text-5xl font-semibold  section-title relative pb-4">About Me</h2>
                <div className="about-cntlr pb-10">
                    <div data-aos="fade-right" data-aos-duration="1000" className="order-2 abt-rgt w-[700px] pr-8 ml-auto">
                        <div className="abt-rgt-cntlr">
                        <div className="abr-rgt-top"> 
                            <h3 className="abt-des-ttle text-2xl mb-2 text-[#ff9040]">
                            <span className='mr-1 text-white'>I'm a </span>
                            <Typewriter
                            className='mr-1 text-[#f57820]' 
                                words={['Junior MERN Stack Developer', 'React Developer', 'Front End Developer', 'React Devloper']}
                                loop={30}
                                cursor={Text}
                                cursorStyle='👨‍💻'
                                typeSpeed={200}
                            /></h3>
                            <p className='mb-4'>Hello! I’m Momin, a Junior MERN Stack Developer and React Developer. I build modern, responsive, and scalable web applications using React.js, Next.js, Node.js, Express.js, and MongoDB.</p>
                            <p className='mb-4'>I have a strong foundation in HTML5, CSS3, JavaScript (ES6+), Bootstrap, Tailwind CSS, React Bootstrap, and Material UI. I enjoy building clean user interfaces and developing full-stack applications that solve real-world problems.</p>
                            <p>My goal is to continuously grow in the fields of computer science and web development, learn new technologies, and contribute to meaningful digital solutions that create real impact.</p>
                        </div>
                       
                        </div>
                    </div>
                    <div className="order-1 abt-lft w-[500px] ml-auto">
                        <div data-aos="fade-in" data-aos-duration="3000" className="abt-lft-inr text-right relative">
                            <img data-aos="fade-up"  className='w-[400px] rounded-2xl' src={profile} alt="img" />
                            <div className="experience-info absolute font-bold text-8xl text-[#fff]">
                                <div className="experience-number">1</div>
                                <div className="experience-text pl-4 pt-[45px] text-gray-400 text-sm text-left">
                                    YEAR<br /> EXPERIENCE
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default About;