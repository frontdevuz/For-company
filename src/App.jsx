import React from "react";
import { Route, Routes } from "react-router-dom";
// import Home from "./pages/home/home";
// import About from "./pages/about/about";
// import Skills from "./pages/skills/skills";
// import Work from "./pages/work/work";
// import Contact from "./pages/contact/contact";
import Notfound from "./views/notfound/notfound";
import Navbar from "./views/navbar/navbar";
import Footer from "./views/footer/footer";
import { ToastContainer } from "react-toastify";
import "./App.scss";
function App() {
  return (
    <React.Fragment>
      {/* <ToastContainer theme="colored" />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about/" element={<About />} />
        <Route path="skills/" element={<Skills />} />
        <Route path="work/" element={<Work />} />
        <Route path="contact/" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer /> */}
    </React.Fragment>
  );
}

export default App;
