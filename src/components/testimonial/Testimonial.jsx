import React from "react";
import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <>
      <div className="testimonials">
        <div className="testimonial">
          <div className="d-flex align-items-center testimonial__add">
            <img
              className="testimonial__icon"
              src="../../../public/testimonial/Add.svg"
              alt="add"
            />
            <p className="testimonial__heading m-0">Add your own</p>
          </div>
          <p className="testimonial__paragraph">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </p>
          <button className="testimonial__button" type="button">
            Add new
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
