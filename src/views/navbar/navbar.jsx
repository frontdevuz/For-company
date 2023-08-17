import React, { useRef, useEffect } from "react";
import Container from "../../components/container/container";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/images/png/Anonim logo.png"
import { navbar } from "../../data/navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Sidebar from "../sidebar/sidebar";
import "./navbar.scss";
const Navbar = () => {
  useEffect(() => {
    Aos.init();
  });
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("navbar__responsive");
  };
  return (
    <React.Fragment>
      <nav className="navbar">
        <Container>
          <div className="navbar__container">
            <div className="navbar__logo">
              <Link to={"/"} className="navbar__logo-link">
                <img src={Logo} alt="This is a logo img" />
              </Link>
            </div>
            <ul className="navbar__items" ref={navRef}>
              <NavLink to={"/"} className={"navbar__item__home"} onClick={showNavbar}>
                Home
              </NavLink>
              {navbar.map((nav) => {
                return (
                  <li
                    className="navbar__item"
                    data-aos="zoom-in"
                    data-aos-duration="7000"
                    data-aos-easing="linear"
                  >
                    <NavLink
                      to={nav.link}
                      className={"navbar__item-link"}
                      onClick={showNavbar}
                    >
                      {nav.title}
                    </NavLink>
                  </li>
                );
              })} 
            </ul>
            <button className="navbar__items__sidebar" onClick={showNavbar}>
              <Sidebar />
            </button>
          </div>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
