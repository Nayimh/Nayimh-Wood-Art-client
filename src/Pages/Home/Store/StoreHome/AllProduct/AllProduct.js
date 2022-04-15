import React, { useEffect, useState } from 'react';


import {  Card } from "react-bootstrap";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, Outlet } from 'react-router-dom';


const AllProduct = () => {
         //animation
 useEffect(() => {
    AOS.init();
  })

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://serene-everglades-89059.herokuapp.com/furniture')
            .then((res) => res.json())
            .then(dt => setProducts(dt)); 
    }, [])

    return (
        <div className='mt-5 '>
            <div className='div'>
            <h1 className='cgHead text-center'>Make Your Home Happy Place</h1>
                <p className='cgpara text-center'>Get that upgrade you've been looking for with best-selling furniture, game tables, and more.</p>
            </div>

            
            <div className='container mt-5 '>
            
                <div className="row">
                <Outlet/>
                    {products?.map(product => 
                <div className='col-lg-3 .col-md-4 col-sm-6 col-xs-12 '>
              <Card data-aos="zoom-in-up" data-aos-duration="2000" className='foodcard  mb-5'>
      <Card.Img className="cardimg" variant="top" src={product?.img} />
      <Card.Body>
                      <Card.Title> <h6>  Name: { product?.name } </h6> </Card.Title>
        <Card.Text>
                                    <p className='cgpara'>Price: ${product?.price} | By: { product.by } </p> 
        </Card.Text>
        <Card.Text>
                                    <p className='cgpara'>  </p> 
        </Card.Text>
                                <Card.Text>
                                    <p >{product?.desc?.slice(0, 100)}</p>
         
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Link to={`/order/${product?._id}`}>
                                  <button className='button'>Order</button>
                                  </Link>
      </Card.Footer>
    </Card>
          
              </div> )
              }
                    </div>
                </div>
                
        </div>
    );
};

export default AllProduct;