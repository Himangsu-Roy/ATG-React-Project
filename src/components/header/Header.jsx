import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="d-flex align-items-center header">
        <img
          className="logo"
          src="../../../public/header/HobbyCue Logo.svg"
          alt="logo"
        />
        <div className="search left_header">
          <input
            className="search_input"
            placeholder="Search here..."
            type="text"
            name="search"
            id="search"
          />
          <img
            className="  search_icon"
            src="../../../public/header/Magnify.svg"
            alt="search_icon"
          />
        </div>

        <div className="right_header d-flex">
          <div className="d-flex align-items-center explore">
            <img src="../../../public/header/Explore.svg" alt="explore" />
            <p className="m-0">Explore</p>
            <img src="../../../public/header/Down_arrow.svg" alt="down_arrow" />
          </div>
          <div className="d-flex align-items-center hobbies">
            <img src="../../../public/header/Hobbies.svg" alt="explore" />
            <p className="m-0">Hobbies</p>
            <img src="../../../public/header/Down_arrow.svg" alt="down_arrow" />
          </div>
          <div className="icons">
            <img className="icons__bookmark" src="../../../public/header/Bookmark.svg" alt="Bookmark" />
            <img
              className="icons__notification"
              src="../../../public/header/Notification.svg"
              alt="Notification"
            />
            <img className="icons__cart" src="../../../public/header/Cart.svg" alt="Cart" />
          </div>
          <button className="signin_button">Sign In</button>
        </div>
      </div>
    </>
  );
};

export default Header;
