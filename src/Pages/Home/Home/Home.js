import React from 'react';
import About from '../About/About';

import Banner from '../Banner/Banner';
import SubBanner from '../Banner/SubBanner/SubBanner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import AllHomeProducts from '../HomeProduct/AllHomeProducts/AllHomeProducts';
import HomeRating from '../HomeRating/HomeRating';
import NavMenu from '../NavMenu/NavMenu';
// import Poster from '../Poster/Poster';

const Home = () => {
    return (
        <div>
            <NavMenu />
            <Banner />
            <SubBanner />
            <hr />
            <AllHomeProducts/>
            {/* <Poster /> */}
            <HomeRating/>
            <About/>
            <Contact /> 
           
            <Footer />
        </div>
    );
};

export default Home;