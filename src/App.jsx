import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Volunteers from "./pages/Volunteers";
import "./App.css";
import "typeface-montserrat";
import "typeface-roboto";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/volunteer" element={<Volunteers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
