import React, { useEffect } from "react";
import Menu from "../../components/menu/menu";
import Team from "../.././assets/images/team.jpg";
import Aboutimg from "../.././assets/images/Company.jpg";
import Container from "../../components/container/container";
import Aos from "aos";
import "aos/dist/aos.css";
import { Type } from "./../../data/team";
import "./about.scss";
export default function About() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <React.Fragment>
      <Menu>About us</Menu>
      <div className="about">
        <Container>
          <div className="about__container">
            <header className="about__header">
              <div className="about__img">
                <img
                  src={Aboutimg}
                  alt="This is a about company img"
                  data-aos="zoom-in "
                  data-aos-duration="7000"
                  data-aos-easing="linear"
                  data-aos-delay="300"
                />
              </div>
              <div
                className="about__text"
                data-aos="zoom-in"
                data-aos-duration="4000"
                data-aos-easing="linear"
                data-aos-delay="450"
              >
                <h2 className="about__text__title">About of Company</h2>
                <p className="about__text__paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus voluptas maxime ad. Ratione sapiente officia
                  recusandae consequatur ducimus, eligendi eos debitis vero
                  aliquid similique doloremque. Perspiciatis molestias sequi
                  eaque dolorem repellendus distinctio enim quam sint quis
                  maxime! Id nemo at eius ullam ad culpa illo possimusam
                  doloremque! Praesentium animi et, saepe reprehenderit repellat
                  nam, rem cupiditate debitis mollitia doloremque odit harum
                  nisi optio! Facere doloribus accusantium, dicta nostrum natus
                  ipsam! Officiis nobis, voluptatum quod qui provident earum,
                  numquam atque temporibus iusto reiciendis distinctio ea vitae
                  nisi fugiat eaque nihil ipsum.
                </p>
              </div>
            </header>
            <section className="about__team">
              <div className="about__img">
                <img
                  src={Team}
                  alt="This is a about img"
                  data-aos="zoom-in "
                  data-aos-duration="7000"
                  data-aos-easing="linear"
                  data-aos-delay="300"
                />
              </div>
              <div className="about__text">
                <p className="about__text__title">About Team</p>
                <ul>
                  {Type.map((item, index) => (
                    <li
                      className="about__text__li"
                      data-aos="zoom-in"
                      data-aos-duration="7000"
                      data-aos-easing="linear"
                      data-aos-delay="450"
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}
