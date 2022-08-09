import React from "react";
import { Link } from "react-router-dom";
import WritingBook from "../../assets/writing-book.jpg";
import HumanInterest from "../../assets/Cultural_and_Human_Interest_thumb.JPG";
import HumanInterestPDF from "../../assets/Cultural_and_Human_Interest.pdf";
import OtherWritingPDF from "../../assets/Other_Writings.pdf";
import bookImage from "../../assets/book_box.jpg";
import { AiOutlineFilePdf } from "react-icons/ai";

import OtherWriting from "../../assets/Other Writings_thumb.JPG";
import "./Writing.css";
export const Write = () => {
  return (
    <div className="bg">
      <div className="container px-2 py-4  min-vh-100">
        <div className="row mt-2">
          <div className="col-lg-12 mt-2">
            <section className="d-flex justify-content-center align-items-center mt-5 flex-column">
            <h1 className="text-center fw-bold text-uppercase my-2 ">Writings</h1>
              <img src={WritingBook} alt="" className="book_image mt-5" />
              <a
                href="https://www.amazon.com/Snackman-His-Son-Subia-Johri/dp/1456015478"
                target="_blank"
              >
                <h1 className="my-3  text-center">
                  The Snackman and His Son, 2010
                </h1>
              </a>
              <p className="fs-6 w-100 px-3  lh-lg  text-left fw-normal">
                Inspired by the lack of multi-cultural children’s literature,
                The Snackman and His Son respectfully and subtly depicts the
                reality of rich and poor to young readers. Subia J. Ali
                introduces a humble Snackman, his son and a neighborhood of
                affluent children. The lyrical call of the Snackman for lemon
                snow cones to his young customers asks for a more meaningful
                ingredient than the one growing on their lemon tree.   <a
                    href="http://thesnackcart.weebly.com/"
                    target="_blank"
                    className="link"
                  >
                    Go to the Snack Cart
                  </a>
              </p>
              {/* <ul style={{ listStyle: "none" }} className="align-left">
                <h5 className=" text-center">
                  The Snack Cart{" "}
                  
                </h5>
              </ul> */}
            </section>
          </div>
        </div>
        <div className="container box-container ">
          <div className="box">
            <div className="box-img">
              <img src={HumanInterest} alt="" />
            </div>
            <div className="box-content">
              <div className="box-text">
                <h6>Journalistic Publications</h6>
                <h6>By Sobia J. Ali</h6>
              </div>
              <div>
                <span>
                  <a href={HumanInterestPDF} target="_blank">
                    <AiOutlineFilePdf className="icon" />
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-img">
              <img src={bookImage} alt=""  />
            </div>
            <div className="box-content">
              <div className="box-text">
                <h6> Other Writing</h6>
                <h6>By Sobia J. Ali</h6>
              </div>
              <div>
                <span>
                <a href={OtherWritingPDF} target="_blank">
                    <AiOutlineFilePdf className="icon" />
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="box-img">
              <img src={bookImage} alt="" />
            </div>
            <div className="box-content">
              <div className="box-text">
                <h6> Digital Publications / Magazine</h6>
                <h6>By Sobia J. Ali</h6>
              </div>
              <div>
                <span>
                <a href="https://voicebowl.com/" target="_blank">
                    <AiOutlineFilePdf className="icon" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="row mt-5">
        <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column">
          <img src={HumanInterest} width="400px" height="600px" alt="" />
          <h4 className="my-3 font-monospace  fw-bold">
            Journalistic Publications
          </h4>
          <a href={HumanInterestPDF} target="_blank" className="link mb-5">
            (Click here)
          </a>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column">
          <img src={OtherWriting} width="400px" alt="" height="600px" />
          <h4 className="my-3 font-monospace  fw-bold">More Publications</h4>
          <a href={OtherWritingPDF} target="_blank" className="link mb-5">
            (Click here)
          </a>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column">
          <img src={HumanInterest} width="400px" alt="" height="600px" />
          <h4 className="my-3 font-monospace fw-bold">
            Digital publication/magazine
          </h4>
          <a
            href="https://www.Voicebowl.com"
            target="_blank"
            className="link mb-4"
          >
            (Click here)
          </a>
        </div>
      </div> */}
      </div>
    </div>
  );
};
