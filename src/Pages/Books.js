import React from "react";
import Book from "../components/Books/Book";
import { Footer } from "../components/Footer/Footer";
import Header from "../components/Header/header";

const Books = () => {
  return (
    <div>
      <Header />
      <Book />
      <Footer />
    </div>
  );
};

export default Books;
