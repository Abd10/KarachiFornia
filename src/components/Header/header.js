import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isBar, setBar] = useState(false);
  console.log(isBar);
  return (
    <header>
      <div className="bar" onClick={() => setBar(!isBar)}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
     
      </div>
      {/* {!isBar &&  <p className="author_line d-flex">author<ul><li>storyteller</li></ul></p> } */}
     
      <nav className={isBar ? "active" : ""}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/books">
            <li>Book</li>
          </Link>
          <Link to="/writing">
            <li>Writings</li>
          </Link>
          <Link to="/introvideo">
            <li>Media</li>
          </Link>
          <Link to="/events">
            {" "}
            <li>Events</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
