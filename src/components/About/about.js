import React from "react";
import "./about.css";
import logo from "../../assets/author.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-lg-12 mt-5">
          {" "}
          <h1 className="text-center fw-bold text-uppercase mt-4 ">About Subia</h1>
        </div>
      </div>

      <div className="row ">
        <div className="col-lg-12 d-flex justify-content-center ">
          <img src={logo} className="img" alt="" />
        </div>
        <div className="col-lg-12 mx-1">
          <p className="fs-6 mt-4 font-bolder">
            “Subia J. Ali is an American writer and author who weaves her
            Pakistani heritage and immigrant experience into her writing work.
            She inherited her prose by a master storyteller – her grandmother on
            whose bedside Ali listened to Arabian Nights like chronicles as a
            child in Karachi, Pakistan. She has been using the power of
            storytelling to guide her readers to introspection within themselves
            and the world around them.
          </p>
          <p className="fs-6 my-2">
            {" "}
            Ali’s first book, The Snackman and His Son, a children’s story was
            quickly incorporated into an anti-bias curriculum program in select
            Southern California schools. Ali expanded her writing career to
            journalism with in-print newspaper publications that focused on
            human interest and cultural awareness pieces. Both of which needed
            to be told in an informative and entertaining manner to reach
            readers with a limited view of minority and marginalized people.
          </p>
          <p className="fs-6 my-3">
            Ali’s debut novel, <Link to="/books" className="link">Foreseeing Nisa</Link>, illuminates the
            struggle of a young Pakistani-American woman in pursuit of her
            passion. With a relatable protagonist and a page turning storyline,
            Ali invites readers on an adventure across the world. Ali is
            currently seeking a publisher who appreciates the integrity in
            minority voices and understands its need in the literary world. Read
            more about
             <Link to="/books" className="link ml-2">Foreseeing Nisa</Link>.
          </p>
          <p className="fs-6 my-3">
            Ali can be found managing her yoga business in Southern California
            and is currently working on two writing projects. The first is a
            deeply personal telling of her family’s immigration struggle in the
            US and the heavy price that is often paid to become a hyphenated
            American. The second is a collection of stunning photographic
            portraits of Muslim women and their relatable stories ranging from
            comical to traumatic. Its aim is to change the false narrative of
            the victimized Muslim female often depicted in the media with a peek
            into the lives of this underrepresented and often misunderstood
            group. More importantly, to create a sense of solidarity and
            sisterhood through honest storytelling for all womenkind.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
