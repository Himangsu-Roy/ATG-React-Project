import React from "react";
import "./Testimonial.scss";
import AudioPlayer from "../../utils/AudioPlayer";

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

      {/*  */}

      <div className="testimonial__audio">
        <div className="testimonial">
          <div className="d-flex align-items-center testimonial__add">
            <img
              className="testimonial__icon"
              src="../../../public/testimonial/Quote.svg"
              alt="Quote"
            />
            <p className="testimonial__heading m-0">Testimonials</p>
          </div>
          <p className="testimonial__paragraph">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>
          {/* <button className="testimonial__button" type="button">
            Add new
          </button> */}
          <div className="d-flex  align-items-center justify-content-between ">
            {/* <audio src="../../../public/testimonial/Afnan_The_Horror_World_Eid_Special_3_Episode_1_July_2023.mp3"></audio> */}
            {/* <div class="audio-player">
              <audio id="myAudio" controls>
                <source src="audio_file.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <button id="playButton">Play</button>
              <button id="pauseButton">Pause</button>
              <img src="audio_icon.png" alt="Audio Icon" class="audio-icon" />
            </div> */}
            <div className="audio">
              <AudioPlayer />
            </div>

            <div className="d-flex  align-items-center column-gap-3">
              <img
                className="testimonial_frame"
                src="../../../public/testimonial/Testimonial_frame.png"
                alt="Shubha Nagarajan"
              />
              <div className="testimonial_frame__details">
                <h6 className="m-0 ">Shubha Nagarajan</h6>
                <small>Classical Dancer</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
