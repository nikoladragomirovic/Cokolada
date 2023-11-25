import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Feed from "./components/Feed";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/razvoj" element={<Feed />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
