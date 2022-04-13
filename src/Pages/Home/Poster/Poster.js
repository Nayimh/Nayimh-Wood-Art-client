import React, { useEffect } from 'react';
import './Poster.css';
import img from '../../../image/img8.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Poster = () => {

    useEffect(() => {
        AOS.init();
      })

    return (
        <div className='container poster mt-5 mb-5 w-75'>
           
                <div className="row align-items-center">
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <img data-aos="zoom-in-down" data-aos-duration="2000" className='w-100' src={img} alt="" />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className='col-lg-6 col-md-6 col-sm-12 text-center'>
                        <h1  >Irresistibly Amazing Furniture</h1>
                        <p className='cgpara'>Find an Idea that suits your test with our great selection of hanging systems, floor lamps and table lamps</p>
                        <button className='cardBtn'>Shop Now</button>
                    </div>
                
        </div>
        </div>
    );
};

export default Poster;