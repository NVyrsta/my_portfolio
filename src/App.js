import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Work } from "./components/work/Work";
import { Certificates } from "./components/certificates/Certificates";
import { Contributions } from "./components/contributions/Contributions";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { ScrollUp } from "./components/scrollup/ScrollUp";

export const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Certificates />
        <Contributions />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};