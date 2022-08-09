import React from "react";
import "./book.css";
import author from "../../assets/author.jpg";
import BooksAuthor from "../../assets/book_author.png";
const Book = () => {
  return (
    // <div className="container-fluid m-0 p-0">
    //   <div className="row">
    //     <div className="col-lg-12">
          <section className="books-container">
              <h1 className="fw-bold  margin-top">Foreseeing Nisa</h1>        
            <div>
              <img src={BooksAuthor} alt="" className="author_book" />
            </div>  
          
            <span></span>
            <p className="w-75 fs-6">
              {/* */}
              “Growing up in the suburbs of Southern California with a family
              holding tight to their Pakistani heritage, Hena struggled to meet
              cultural expectations of idealized beauty and strict obedience to
              her parents. Her constant longing to fulfil unmet ambitions in
              life  sets her off on a journey to her beloved grandmother’s home
              in the bustling city of Karachi, Pakistan, to pursue a lifelong
              passion for jewelry design.</p><p className="w-75 fs-6 "> When Hena reunites with her
              mysterious childhood crush and his unpredictable sister, she is
              further guided to rural Balochistan. There, she has an opportunity
              to create a socially conscious business with a group of humble,
              artisanal jewelry-making women. Hena finds herself at the
              threshold of her dream becoming reality, but her life’s plan takes
              a sobering twist. Foreseeing Nisa attempts to answer the question:
              How do we shape our lives for an unforeseeable future?”
            </p>
            <div>
              <img src={author} alt="" className="author_pic" />
            </div>
          </section>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Book;
