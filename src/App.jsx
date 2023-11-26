import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Feed from "./components/Feed";
import Info from "./components/Info";
import Report from "./components/Report";
import Cirilizator from "./components/Cirilizator";
import Fonts from "./components/Fonts";
import Board from "./components/Board";
import Post from "./components/Post";

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
        <Route path="/cirilizator" element={<Cirilizator />} />
        <Route path="/fontovi" element={<Fonts />} />
        <Route path="/reportboard" element={<Board />} />
        <Route path="/post" element={<Post />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
