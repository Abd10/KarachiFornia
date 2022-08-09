import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/About";
import BookPage from "./Pages/Books";
import ContactPage from "./Pages/Contact";
import { Events } from "./Pages/Events";
import {Home} from './Pages/Home'
import { VideoPage } from "./Pages/Media";
import Writing from "./Pages/Writing";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/books" element={<BookPage />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/introvideo" element={<VideoPage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<ContactPage />}/>

    </Routes>
  );
};

export default Routing;
