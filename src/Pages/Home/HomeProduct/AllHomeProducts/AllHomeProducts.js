import React, { useEffect, useState } from 'react';
import './AllHomeProducts.css';

import { Card } from "react-bootstrap";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const AllHomeProducts = () => {

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
        <div className='mt-5  mb-5'>
            <h1 className='text-center  cgHead'>Explore our Exclusive Brands</h1>
            <p className='cgpara text-center mt-3'>Bring your vision to life with hand-curated collections, priced just right.</p>
            <div className='container mt-5'>
                <div className='row'>
                {products?.slice(1, 9)?.reverse().map(product => 
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
                                    <p >{product?.desc}</p>
         
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

export default AllHomeProducts;