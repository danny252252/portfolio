import React from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import WrokProject from "./WorkProjects";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <BrowserRouter
        basename={import.meta.env.DEV ? "/" : "/react-vite-gh-pages/"}
      >
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/WorkProjects" element={<WrokProject />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Resume" element={<Resume />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
