import React from "react";
import Container from "./../../../components/container/container";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import prety from "../../../assets/images/img3.png";
import "./header.scss";
useEffect(() => {
  Aos.init();
});
const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <Container>
          <div className="header__container">
            <div className="header__container__name">
              <h1
                className="header__container__title"
                data-aos="zoom-in"
                data-aos-duration="6000"
                data-aos-easing="linear"
              >
                welcome <span className="header__container__span">company</span>
              </h1>
              <p className="header__container__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                id aliquid voluptatibus fugiat eum. Ipsam, nisi non enim, odio
                porro error molestias voluptatum
              </p>
              <Link to="./about" className="header__container__button">
                Ko'proq o'qish
              </Link>
            </div>
            <div className="header__container__img">
              <img src={prety} alt="This is a worker img" />
            </div>
          </div>
        </Container>
      </header>
    </React.Fragment>
  );
};

export default Header;
