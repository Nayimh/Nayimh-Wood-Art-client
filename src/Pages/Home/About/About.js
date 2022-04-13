import React, { useEffect } from 'react';
import './About.css';

import img from '../../../image/about.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init();
      })

    return (
        <div className=' container mt-5 mb-5 p-3 shadow-sm about'>
            <h1 className='headingt text-center'>About Us</h1>
            <hr />
            <div className='container'>
                <div className="row ">
                <div className='col-md-6 col-sm-12'>
                <img data-aos="zoom-in-up" data-aos-duration="2000" className='aboutimg mb-3 mt-3 ' src={img} alt="" />
                    </div>
                
                <div data-aos="fade-right" data-aos-duration="2000" className='col-md-6 col-sm-12 acenter'>
                    <h1 className='aboutH mt-3'>We’re here to help everyone, anywhere create their feeling of home.</h1>
                    <p className='aboutP'>We’re here to create that feeling of home for everyone, anywhere. We provide true partnership to help you define your vision. We empower you to create spaces that reflect who you are, what you need, and what you value, so that you and the ones you love can feel right at home.</p>
                    <div ><button className="button">Learn More</button></div>
                </div>
                
                
                </div>
                </div>
        </div>
    );
};

export default About;