import React from "react";
import "./EndBanner.scss";

const EndBanner = () => {
  return (
    <div className="end__banner">
      <h3 className="m-0 fst-italic">
        Your <span className="hobby">Hobby</span>, Your{" "}
        <span className="community">Community...</span>
      </h3>
      <div className="d-flex align-items-center justify-content-between w-100">
        <div
          className="py-2 px-3 rounded-3 fw-medium text-white  get__started"
          type="button"
        >
          Get started
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center ">
          <button className="rounded-circle shadow-sm " type="button">
            <img src="../../../public/endBanner/Arrow__up.svg" alt="arrow-up" />
          </button>
          <p className="m-0 bg-white mt-2 shadow-sm px-2 rounded-1 go__top">
            Go to top (Ctrl+Home)
          </p>
        </div>
      </div>

      <img
        className="w-100 end__banner__img"
        src="../../../public/endBanner/End_Banner.svg"
        alt="end-banner"
      />
    </div>
  );
};

export default EndBanner;
