import React from 'react';
// import NavMenu from '../../Home/NavMenu/NavMenu';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';
import MyOrder from '../MyOrder/MyOrder';
import AddNewProduct from '../AddNewProduct/AddNewProduct'

const TrialD = () => {
    return (
        <div>
            {/* <NavMenu /> */}
            <MakeAdmin />
            <MyOrder />
            <ManageAllOrder />
            <ManageAllProduct />
            <AddNewProduct/>
        </div>
    );
};

export default TrialD;