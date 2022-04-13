import React from 'react';
import './Banner.css';

import img from '../../../image/banner/banner1.jpg';
const Banner = () => {
    return (
        <>
        <div  className="banner mt-5  shadow-sm">
        <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
              <div className="center mt-5">
              <h1 className="bannerHeading">“Be faithful to your own taste, because nothing you really like is ever out of style.”</h1>
              <p className="paragraph"> Real comfort, visual and physical, is vital to every room.“Luxury is when it seems flawless, when you reach the right balance between all elements. Understated theatricality – that is what my luxury is all about.”</p>
                <button className="button">Order Now</button>
                </div>
          </div>
          
        <div className="col-lg-6 col-md-6 col-sm-12 ">
            <img  className="bannerImg  pt-5 mb-5 pb-5" src={img} alt="" />
        </div>
        
                </div>
              
            </div>
            
        </div>
       
        </>
    );
};

export default Banner;