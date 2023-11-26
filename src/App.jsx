import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Feed from "./components/Feed";
import Info from "./components/Info";
import Report from "./components/Report";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/razvoj" element={<Feed />} />
        <Route path="/resursi" element={<Feed />} />
        <Route path="/magazin" element={<Feed />} />
        <Route path="/dizajn" element={<Feed />} />
        <Route path="/info/*" element={<Info />} />
        <Route path="/report" element={<Report />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
