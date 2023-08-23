import React, { useEffect } from "react";
import Container from "./../../../components/container/container";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import prety from "../../../assets/images/img3.png";
import "./header.scss";

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
                data-aos-duration="7000"
                data-aos-easing="linear"
                data-aos-delay="500"
              >
                welcome <span className="header__container__span">company</span>
              </h1>
              <p
                className="header__container__text"
                data-aos="zoom-in"
                data-aos-duration="7000"
                data-aos-easing="linear"
                data-aos-delay="750"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                id aliquid voluptatibus fugiat eum. Ipsam, nisi non enim, odio
                porro error molestias voluptatum
              </p>
              <Link
                to="./about"
                className="header__container__button"
                data-aos="zoom-in"
                data-aos-duration="7000"
                data-aos-easing="linear"
                data-aos-delay="950"
              >
                Read more
              </Link>
            </div>
            <div className="header__container__img">
              <img
                src={prety}
                alt="This is a worker img"
                data-aos="zoom-in"
                data-aos-duration="7000"
                data-aos-easing="linear"
                data-aos-delay="750"
              />
            </div>
          </div>
        </Container>
      </header>
    </React.Fragment>
  );
};

export default Header;
