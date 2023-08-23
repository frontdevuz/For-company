import React from "react";
import Menu from "../../components/menu/menu";
import Team from "../.././assets/images/team.jpg";
import Aboutimg from "../.././assets/images/Company.jpg";
import Container from "../../components/container/container";
import "./about.scss";
export default function About() {
  return (
    <React.Fragment>
      <Menu>About us</Menu>
      <div className="about">
        <Container>
          <div className="about__container">
            <header className="about__header">
              <div className="about__img">
                <img src={Aboutimg} alt="This is a about company img" />
              </div>
              <div className="about__text">
                <h2 className="about__text__title">About of Company</h2>
                <p className="about__text__paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus ad, quaerat temporibus dolores eaque repellat
                  maxime ullam dolor, cupiditate sed, tenetur accusantium
                  cumque? Corporis maiores voluptate placeat molestias, corrupti
                  perferendis, sit dolorem alias voluptas maxime ad. Ratione
                  sapiente officia recusandae consequatur ducimus, eligendi eos
                  debitis vero aliquid similique doloremque. Perspiciatis
                  molestias sequi eaque dolorem repellendus distinctio enim quam
                  sint quis maxime! Id nemo at eius ullam ad culpa illo
                  possimus.
                </p>
              </div>
            </header>
            <section className="about__team">
              <div className="about__img">
                <img src={Team} alt="This is a about img" />
              </div>
              <div className="about__text">
                <p className="about__text__title">About Team</p>
                <p className="about__text__paragraph">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto esse vel soluta, inventore repudiandae quidem id,
                  provident voluptates ad, illo asperiores sed! Aperiam expedita
                  itaque laudantium consequatur aspernatur harum esse assumenda
                  ad voluptate at, repudiandae quis repellendus provident libero
                  totam qui iste vero consequuntur a molestiae. Ullam odio harum
                  atque magnam, illum rem, quos officiis recusandae impedit vel
                  reiciendis temporibus soluta, distinctio quae pariatur iure
                  libero expedita. Ea, facere velit.
                </p>
              </div>
            </section>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}
