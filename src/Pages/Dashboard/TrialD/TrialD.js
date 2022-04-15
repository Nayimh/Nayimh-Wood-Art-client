import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';



const TrialD = () => {
    return (
        <div>
            <div className='text-center'>
                <ButtonGroup aria-label="Basic example">
                <Link to='/trial/all'><Button variant="secondary">All Product</Button></Link>
                <Link to='/trial/feature'><Button variant="secondary">Featured</Button></Link>
                <Link to='/trial/latest'><Button variant="secondary">Latest</Button></Link>
  
  
  
</ButtonGroup>
               
            </div>
            <div>
                <Outlet/>
               
            </div>
            
            
           
            
         
        </div>
    );
};

export default TrialD;