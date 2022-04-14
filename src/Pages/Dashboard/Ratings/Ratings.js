import React, { useRef, useState } from 'react';
import useAuth from '../../../Firebase/Hooks/useAuth';

import { FaStar } from "react-icons/fa";


const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};

const Ratings = () => {


    const { user } = useAuth();
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const stars = Array(5).fill(0)
  
    const handleClick = value => {
        setCurrentValue(value)
        
    }
  
    const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
    };
  
    const handleMouseLeave = () => {
      setHoverValue(undefined)
    }


    const descRef = useRef();
    
    
    // const desc = descRef.current?.value;

    const postRating = (e) => {
        const name = user?.displayName;
        const email = user?.email;
        const rating = currentValue;
        const desc = descRef.current?.value;
        const review = {name, email, desc, rating}
        console.log(review)
        fetch("https://serene-everglades-89059.herokuapp.com/ratings", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(review),
        })
          .then((res) => res.json())
          .then((dt) => {
            if (dt?.insertedId) {
              alert("Purchase order submitted.");
    
                desc.target.reset() ;
            }
          });



        e.preventDefault();
    }
  



    return (
        <div className='mt-5' style={styles.container}>
          <h2 className='cgHead'> Give Your FeedBack! </h2>
          <div style={styles.stars}>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                      onMouseOver={() => handleMouseOver(index + 1)}
                   
                  onMouseLeave={handleMouseLeave}
                  color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                  style={{
                    marginRight: 10,
                    cursor: "pointer"
                  }}
                />
              )
            })}
          </div>
          <input
            placeholder={user?.displayName}
                style={styles.textarea}
                name="name"
                type="text"
               
                disabled
          />
          <input
            placeholder={user?.email}
                style={styles.textarea}
                
                name="email"
                type="email"
                disabled
          />
          <textarea
            placeholder="What's your experience?"
                style={styles.textarea}
                name="desc"
                type="text"
                ref={descRef}
                required
          />
    
          <button onClick={postRating}
            style={styles.button}
          >
            Submit
          </button>
          
        </div>
      );
    };
    

    const styles = {
        container: {
          display: "flex",
          flexDirection: "column",
            alignItems: "center"
          

        },
        stars: {
          display: "flex",
          flexDirection: "row",
        },
        textarea: {
          border: "1px solid #a9a9a9",
          borderRadius: 5,
          padding: 10,
          margin: "20px 0",
          
          width: 300
        },
        button: {
          border: "1px solid #a9a9a9",
          borderRadius: 5,
          width: 300,
          padding: 10,
        }
};

export default Ratings;