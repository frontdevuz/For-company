import React from "react";
import { Link } from "react-router-dom";
import Container from "../container/container.jsx";
import "./menu.scss"
export default function Menu(props) {
  return (
    <section className="menu">
          <Container>
        <div className="menu__container">
          <Link to={"/"} className="menu__link">Home</Link>
          <span className="menu__center">/</span>
          <span className="menu__name">{props.children}</span>
        </div>
          </Container>
    </section>
  );
}
