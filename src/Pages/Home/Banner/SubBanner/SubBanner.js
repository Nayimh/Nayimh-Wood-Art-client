import React, { useEffect } from 'react';
import './Sub.css'
import img1 from '../../../../image/img7.jpg'
import img2 from '../../../../image/img18.jpg'
import img3 from '../../../../image/img8.jpg'
import img4 from '../../../../image/img15.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const SubBanner = () => {

    useEffect(() => {
        AOS.init();
      })

    return (
        <div className='sub mt-5'>
            <h1 className='text-center  cgHead'>HOT DEALS</h1>
            <p className='text-center cgpara'>Don't Miss Today's Featured Deals</p>
             <div className='container mt-4'>
            <div className='row'>
                    <div data-aos="zoom-in-down" data-aos-duration="2100" className='col-lg-3 col-md-3 col-xs-6 mb-2 scard'><img className='w-100 mb-1  shadow-lg simg' src={img1} alt="" />
                        <h4 className='text-center cgpara'>Flower Vase</h4>
                        <h5 className='cgpara text-center'>Price: $30</h5>
                        
                    </div>
                    <div data-aos="zoom-in-down" data-aos-duration="2100" className='col-lg-3 col-md-3 col-xs-6 mb-2 scard'><img className='w-100 mb-1 shadow-lg simg' src={img2} alt="" />
                        <h4 className='text-center cgpara'>Chair</h4>
                        <h5 className='cgpara text-center'>Price: $30</h5>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="2300" className='col-lg-3 col-md-3 col-xs-6 mb-2 scard'><img className='w-100 mb-1 shadow-lg simg' src={img3} alt="" />
                        <h4 className='text-center cgpara'>Coastal Table Lamp</h4>
                        <h5 className='cgpara text-center'>Price: $30</h5>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-duration="2300" className='col-lg-3 col-md-3 col-xs-6 mb-2 scard'><img className='w-100 mb-1 shadow-lg simg' src={img4} alt="" />
                        <h4 className='text-center cgpara'>East OAK Book Shelf</h4>
                        <h5 className='cgpara text-center'>Price: $30</h5>
                    </div>
                </div>

                </div>
        </div>
    );
};

export default SubBanner;