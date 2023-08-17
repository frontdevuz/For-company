import React, { useEffect } from "react";
import Container from "../../components/container/container";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./notfound.scss";
const Notfound = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <React.Fragment>
      <section className="notfound">
        <Container>
          <div className="notfound__container">
            <div
              className="notfound__about"
              data-aos="flip-up"
              data-aos-duration="8000"
              data-aos-easing="linear"
            >
              <h1 className="notfound__title">404</h1>
              <p className="notfound__text">Sorry this page is can't found</p>
          <Link to={"/"} className="notfound__link">Back to home</Link>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Notfound;
