import React from 'react';
import Footer from '../../Footer/Footer';
import NavMenu from '../../NavMenu/NavMenu';
import Order from '../Order/Order';

const OrderHome = () => {
    return (
        <div>
            <NavMenu/>
            <Order />
            <Footer/>
        </div>
    );
};

export default OrderHome;