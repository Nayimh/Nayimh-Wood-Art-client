import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './HomeRating.css';


const HomeRating = () => {

    const [ratings, setRatings] = useState([]);
  
 
    useEffect(() => {
        fetch('https://serene-everglades-89059.herokuapp.com/ratings')
            .then(res => res.json())
            .then(dt => setRatings(dt))
    }, [])

   
    return (
        <div className='mt-5 pt-5 bg'>
            <h1 className='cgHead  text-center'>FeedBack</h1>
            <div className='container mt-5'>
                <div className='row'>
                {ratings?.map(rating => 
                <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 '>
                        <Card className='rcard  mb-5' >     
                        <Card.Img className='mx-auto mt-1' style={{width: "100px", borderRadius: "100%"}}  variant="top" src={rating?.img} />
     
      <Card.Body>
                      <Card.Title> <h4 className='text-center'>  Name: { rating?.name } </h4> </Card.Title>
        <Card.Text>
                                    <p className='cgpara text-center'>Email: ${rating?.email}  </p> 
        </Card.Text>
     
                                <Card.Text>
                                    <p className='text-center'>{rating?.desc}</p>
         
                                </Card.Text>
                                <h4 className='text-center'>  <span style={{color: "gold"}}>{rating?.rating}</span>   </h4> 
      </Card.Body>
    
                    
                           
                                 
    
    </Card>
          
              </div> )
              }
                </div>

            </div>
            
        </div>
    );
};

export default HomeRating;