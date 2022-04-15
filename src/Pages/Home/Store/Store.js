import React from 'react';
import './Store.css';

import { Button, ButtonGroup } from "react-bootstrap";

// import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, Outlet } from 'react-router-dom';


const Store = () => {



    return (
        <div className='mt-5 pt-2 storeh'>
         

            
            <div className='container mt-5 '>
            <div className='text-center'>
                <ButtonGroup aria-label="Basic example">
                <Link to='/store/all'><Button variant="secondary">All Product</Button></Link>
                <Link to='/store/feature'><Button variant="secondary">Featured</Button></Link>
                <Link to='/store/latest'><Button variant="secondary">Latest</Button></Link>
  
  
  
</ButtonGroup>
               
            </div>
                <div className="row">
                <Outlet/>
                   
                    </div>
                </div>
                
        </div>
    );
};

export default Store;