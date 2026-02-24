import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from './Projects/Projects';
import Blog from '../components/Blog';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import ProjectShowcase from './Projects/TestProj';

const Home = () => {
    return (
        <div>
           
            <Banner />
            <About />
            {/* optional */}
            {/* <Experience /> */}
            <Skills />
            <Projects />
            {/* <Blog /> */}
            {/* optional */}
            {/* <Testimonial /> */}
            <Contact />
        </div>
    );
};

export default Home;