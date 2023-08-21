import React, { useEffect } from "react";
import Container from "../../components/container/container";
import Aos from "aos";
import "aos/dist/aos.css";
import "./footer.scss";
import { Icons } from "./../../data/fooicon";
const Footer = () => {
  useEffect(() => {
    Aos.init();
  });
  return (
    <React.Fragment>
      <footer className="footer">
        <Container>
          <div
            className="footer__container"
            data-aos="zoom-in"
            data-aos-duration="6000"
            data-aos-easing="linear"
          >
            <p className="footer__name">Com<span className="footer__span">pany</span></p>
            <p className="footer__about">
              Copyright @2023. All rights Reserved.
            </p>
            <div className="footer__social">
              {Icons.map((icon) => {
                return (
                  <a href="#">
                    <i className={icon.name}></i>
                  </a>
                );
              })}
            </div>
          </div>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
