import React from "react";
import { Route, Routes } from "react-router-dom";
import Notfound from "./views/notfound/notfound";
import Navbar from "./views/navbar/navbar";
import Footer from "./views/footer/footer";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Service from "./pages/service/service";
import Contact from "./pages/contact/contact";
import "./sass/allres";
import { ToastContainer } from "react-toastify";
import "./App.scss";
function App() {
  return (
    <React.Fragment>
      <ToastContainer theme="colored" />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about/" element={<About />} />
        <Route path="service/" element={<Service />} />
        <Route path="contact/" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
