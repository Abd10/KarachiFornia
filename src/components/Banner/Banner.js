import React from "react";
import "./Banner.css";
import SobiaLogo from "../../assets/Subia_Name_Logo.gif";
import Book from "../../assets/guided by nisa book.png";
import BannerImage from "../../assets/Nisa_Banner.jpg";
import Video from "../../assets/Karachifornia-V6-hb.m4v";
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
export const Banner = () => {
  return (
    <div>
      <section className="section-banner">
        <div className="banner">
          <img src={BannerImage} className="banner_image" alt="" />
          <img src={SobiaLogo} alt="" className="sobia_logo" />
        </div>
        <div className="banner_content">
          <img src={Book}  className="book_image" alt="" />
          <h2 className="text-uppercase">Foreseeing Nisa</h2>
          <h6 className="my-2">seeking agents/publisher</h6>
          {/* <p className="fs-6">
          Subia J. Ali is an American writer and author who weaves her Pakistani heritage and immigrant experience into her writing work. She inherited her prose by a master storyteller
          </p> */}
          <video src={Video} className="video" controls></video>
         </div>
      </section>
    </div>
  );
};
