import React, { useEffect, useRef, useState } from 'react';
import './Order.css';

import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from 'react-router-dom';
import useAuth from '../../../../Firebase/Hooks/useAuth';
import { Card } from 'react-bootstrap';

const Order = () => {
  //animation
  useEffect(() => {
    AOS.init();
  });
    
    const { id } = useParams();
    const { user } = useAuth();

    const [bookings, setBookings] = useState([]);
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`https://serene-everglades-89059.herokuapp.com/furniture`)
            .then(res => res.json())
            .then(dt => setBookings(dt))
    }, [])

    useEffect(() => {
        const foundDetails = bookings?.find(
          (booking) => booking?._id === id
        );
        setDetails(foundDetails);
      }, [bookings, id]);


    // form 
    const phoneRef = useRef();
    const addressRef = useRef();

    const handleOrderSubmit = (e) => {
        const person = user?.displayName;
        const email = user?.email;
        const productId = details?.id;
        const name = details?.name;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const img = details?.img;
        const desc = details?.desc;
        const designer = details?.by;
        const price = details?.price;
        const status = "Pending";
        const ordersInfo = {
          foodId: productId,
          name,
          desc,
          person,
          email,
          phone, 
          address,
            img,
          designer,
          price,
          status,
        };
    
        fetch("https://serene-everglades-89059.herokuapp.com/orders", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(ordersInfo),
        })
          .then((res) => res.json())
          .then((dt) => {
            if (dt?.insertedId) {
              alert("Purchase order submitted.");
    
              e.target.reset();
            }
          });
        e.preventDefault();
      };


    return (
        <div
      style={{ backgroundColor: "#a6dcf5" }}
      className="container shadow-lg mt-5 pt-5"
    >
      <h1 className="mt-5 text-center cgHead">
        Our Mission is To Fulfill Your Expectations
      </h1>
      <div className="row align-items-center mt-5">
        <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
          <Card
            data-aos="zoom-in-down"
            data-aos-duration="3000"
            className="shadow-lg"
          >
            <Card.Img variant="top" src={details?.img} />
            <Card.Body>
              <Card.Title>
                Name: {details?.name} <br />{" "}
              </Card.Title>
              <Card.Text>{details?.desc}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6 text-center">
          <form
            data-aos="zoom-out"
            data-aos-duration="3000"
            className="shadow-lg"
            onSubmit={handleOrderSubmit}
          >
            <input
              type="text"
              className="w-100 my-2 p-1"
              name=""
              id="1"
              defaultValue={user?.displayName || ""}
              disabled
            />
            <input
              type="email"
              className="w-100 my-2 p-1"
              name=""
              id="2"
              defaultValue={user?.email || ""}
              disabled
            />

            <input
              type=""
              className="w-100 my-2 p-1"
              name=""
              id="3"
              defaultValue={details?.img || ""}
              disabled
            />
            <input
              type="name"
              className="w-100 my-2 p-1"
              name=""
              id=""
              defaultValue={details?.name || ""}
              disabled
            />
            <input
          
              className="w-100 my-2 p-1"
              name=""
              id="4"
              defaultValue={details?.price}
              disabled
            />
            <input
              type="number"
              className="w-100 my-2 p-1"
              name=""
              id="phone"
              ref={phoneRef}
              placeholder="Your Phone Number"
            />

            <textarea
              name=""
              placeholder="Home Address"
              id="6"
              ref={addressRef}
              className="w-100"
              required
            ></textarea>
           
            <input
              className="w-100 button border-0 p-2 my-2 rounded-1"
              type="submit"
              value="Purchase"
            />
          </form>
        </div>
      </div>
    </div>
    );
};

export default Order;