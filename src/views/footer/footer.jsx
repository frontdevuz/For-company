import React, { useEffect } from "react";
import Container from "../../components/container/container";
import Aos from "aos";
import "aos/dist/aos.css";
// import {
//   Insta,
//   Facebook,
//   Linke,
//   Gmail,
// } from "./../../assets/images/icons/icons";
import "./footer.scss";
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
            <p className="footer__name">Izzatillo Davlatov</p>
            <p className="footer__about">
              Copyright @2023. All rights Reserved.
            </p>
            <div
              className="footer__social"

            >
              <a
                href={"https://izzatillodavlatov5/linkedin.com"}
                target="__blank"
              >
                {/* <Linke /> */}
              </a>
              <a
                href={"https://davlatovizzatillo7/instagram.com"}
                target="__blank"
              >
                {/* <Insta /> */}
              </a>
              <a
                href="https://davlatovizzatillo7/facebook.com"
                target="__blank"
              >
                {/* <Facebook /> */}
              </a>
              <a href="https://davlatovizzatillo7@gmail.com" target="__blank">
                {/* <Gmail /> */}
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
