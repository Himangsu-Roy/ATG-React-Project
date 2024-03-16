import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <div className="d-flex hero">
        <div className="w-50 hero__left">
          <h1 className="fst-italic hero__heading">
            Explore your <span className="hobby">hobby</span> or
            <span className="passion"> passion </span>
          </h1>
          <p className="hero__paragraph__one">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p className="hero__paragraph__two">
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
          <img
            className="hero__image"
            src="../../../public/hero/Hero_Image.svg"
            alt="hero_image"
          />
        </div>

        {/* Sign in */}
        <div className=" hero__right">
          <div className="d-flex hero__right__nav">
            <a className="active" href="">
              Sign In
            </a>
            <a href="">Join In</a>
          </div>
          <div className="hero__right__google mb-3 ">
            <button className="hero__right__google__button" type="button">
              Continue with Google
            </button>
            <img
              className="hero__right__google__image"
              src="../../../public/hero/Google.svg"
              alt="google"
            />
          </div>

          <div className="hero__right__facebook">
            <button className="hero__right__facebook__button" type="button">
              Continue with Facebook
            </button>
            <img
              className="hero__right__facebook__image"
              src="../../../public/hero/Facebook.svg"
              alt="facebook"
            />
          </div>

          {/* Divider */}
          <div className="divider">
            <div className="line"></div>
            <p className="line__text m-0 ">Or connect with</p>
          </div>

          {/* Email and Password */}
          <div className="email__password">
            <input
              className="email__input"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <div className="password">
              <input
                className="password__input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <img
                className="password__eye"
                src="../../../public/hero/Eye_close.svg"
                alt=""
              />
            </div>
          </div>

          {/* Remember me */}
          <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
            <div class="form-check remember__me">
              <input
                class="form-check-input remember__me__checkbox"
                type="checkbox"
                value="checkbox"
                id="checkbox"
              />
              <label class="form-check-label" for="remember-me">
                Remember me
              </label>
            </div>
            <div className="forgot__password">
              <img
                className="forgot__password__lock"
                src="../../../public/hero/Lock.svg"
                alt="forgot__password__lock"
              />
              <a className="forgot__password__link " href="#">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Continue */}
          <div className="hero__right__continue">
            <button className="hero__right__continue__button" type="button">
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
