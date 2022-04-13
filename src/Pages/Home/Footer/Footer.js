import React from 'react';
import './Footer.css';
const Footer = () => {

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

    return (
        <>
        <div className='mt-5 footer'>
            <div>
                <h4>CONTACT</h4>
                <p>example@email.com</p>
                <p>+220118241</p>
                <p>www.example.com</p>
                <p>Bogura, Bangladesh</p>
           </div>
            <div>
            <h4>POPULAR FURNITURES</h4>
                <p>Upholstered bench</p>
                <p>Cantilever chair</p>
                <p>Waiting room seat</p>
                <p>Park bench</p>
           </div>
            <div>
            <h4>USEFUL LINKS</h4>
                <p>Get Furnitures Online</p>
                <p>Furnitures Pots</p>
                <p>Interior Design Online</p>
                <p>Furnitures Fair</p>
           </div>
            <div>
            <h4 >ABOUT <span className='red' id='#home'>WoodArt</span></h4>
                <p>OUR BLOGS</p>
                <p>OUR VIDEOS</p>
                <p>GET IN TOUCH</p>
                    <p>ABOUT US</p>
                    <button onClick={topFunction} className="cardBtn">Scroll To Top</button>
            </div>
          
            
            </div>
        
            <div className='copyr'>
                <p>©Copyright by Nayim Hasan</p>
            </div>
            </>
    );
};

export default Footer;