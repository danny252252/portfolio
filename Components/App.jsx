import React from "react";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";


function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/Home" element={<Home />}>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
