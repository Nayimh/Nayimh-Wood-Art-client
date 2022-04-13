import React from 'react';
import Footer from '../../Footer/Footer';
import NavMenu from '../../NavMenu/NavMenu';
import Store from '../Store';

const StoreHome = () => {
    return (
        <div>
            <NavMenu />
            <Store />
            <Footer/>
        </div>
    );
};

export default StoreHome;