import React from "react";
import { Banner } from "../components/Banner/Banner";
import Header from "../components/Header/header";
import {Footer} from '../components/Footer/Footer'

export const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Footer />
    </div>
  );
};
