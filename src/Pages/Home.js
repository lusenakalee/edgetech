import "../Pages/Home.css";
import Contact from "../components/Contact";
import Laptops from "../components/Laptops";
import Mobiles from "../components/Mobiles";
import Header from "../components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/20/solid";

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="et-hero-tabs">
        <h1>EDGE TECHWORLD IT SOLUTIONS</h1>
        <h3>COMPUTER | LAPTOP | PHONE SOLUTIONS</h3>
        <div className="flex mb-8 pt-5  justify-center">
          <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-white ring-1 ring-white hover:ring-gray-900/20">
            Quick Response on Whatsapp .{" "}
            <a
              href="https://api.whatsapp.com/send?phone=254701364322"
              className="font-semibold text-indigo-600"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              Chat now. <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <div className="et-hero-tabs-container">
          <a className="et-hero-tab" href="#Laptops">
            Laptops
          </a>
          <a className="et-hero-tab" href="#Mobiles">
            Mobiles
          </a>
          <a className="et-hero-tab" href="#Contact">
            Contact
          </a>
          
          <span className="et-hero-tab-slider" />
        </div>
      </section>
      {/* Main */}
      <main className="et-main">
        <section className="et-slide w-full" id="Laptops">
          <Laptops />
        </section>

        <section className="et-slide" id="Mobiles">
          <Mobiles />
        </section>

        <section className="pb-10"></section>

        <section className="et-slide" id="Contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default Home;
