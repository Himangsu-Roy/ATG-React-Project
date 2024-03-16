import React from "react";
import "./Feature.scss";

const Feature = () => {
  return (
    <>
      <div className="features">
        <div className="feature">
          <div className="d-flex align-items-center  people">
            <img
              className="people__icon"
              src="../../../public/feature/People.svg"
              alt="People"
            />
            <p className="people__heading m-0">People</p>
          </div>
          <p className="people__paragraph">
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator.
          </p>
          <button className="people__button" type="button">
            Connect
          </button>
        </div>
        <div className="feature">
          <div className="d-flex align-items-center  place">
            <img
              className="place__icon"
              src="../../../public/feature/place.svg"
              alt="place"
            />
            <p className="place__heading m-0">Place</p>
          </div>
          <p className="place__paragraph">
            Find a class, school, playground, auditorium, studio, shop or an
            event venue. Book a slot at venues that allow booking through
            hobbycue.
          </p>
          <button className="place__button" type="button">
            Meet up
          </button>
        </div>
        <div className="feature">
          <div className="d-flex align-items-center  product">
            <img
              className="product__icon"
              src="../../../public/feature/Product.svg"
              alt="product"
            />
            <p className="product__heading m-0">Product</p>
          </div>
          <p className="product__paragraph">
            Find equipment or supplies required for your hobby. Buy, rent or
            borrow from shops, online stores or from community members.
          </p>
          <button className="product__button" type="button">
            Get it
          </button>
        </div>
        <div className="feature">
          <div className="d-flex align-items-center  program">
            <img
              className="program__icon"
              src="../../../public/feature/Program.svg"
              alt="program"
            />
            <p className="program__heading m-0">Program</p>
          </div>
          <p className="program__paragraph">
            Find events, meetups and workshops related to your hobby. Register
            or buy tickets online.
          </p>
          <button className="program__button" type="button">
            Attend
          </button>
        </div>
      </div>
    </>
  );
};

export default Feature;
