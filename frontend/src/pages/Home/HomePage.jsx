import React from "react";
import "../../styles/HomePage.css";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";
import Services from "./Services";
import SubServices from "./SubServices";
import Footer from "./Footer";
import PricingSection from "./Pricing";
import Clients from "./Clients";

import growthIconUrl from "../../assets/growth-icon.svg";
import pigIcon from "../../assets/pig-icon.svg";
import personImg from "../../images/home_img_1.png";
import piggyBankImg from "../../images/home_img_2.png";
import secureIcon from "../../assets/secure-icon.svg";
import coinIcon from "../../assets/coin-icon.svg";

function HomePage() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" homepage-content ">
      <div className="homepage-header pl-20 pr-20 pt-10">
        <div className="app-title">
          <img src={growthIconUrl} alt="Growth Icon" className="app-logo" />
          <span className="app-name">
            <span className="app-name-1">WEALTH</span>
            <span className="app-name-2">WISE</span>
          </span>
        </div>
        <div className="registration-btn-div">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded registration-btn">
            Register
          </button>
        </div>
      </div>

      <div className="taskbar">
        <span
          className="menu-item cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Home
        </span>
        <span
          className="menu-item cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          About
        </span>
        <span
          className="menu-item cursor-pointer"
          onClick={() => scrollToSection("services")}
        >
          Services
        </span>
        <span
          className="menu-item cursor-pointer"
          onClick={() => scrollToSection("pricing")}
        >
          Pricing
        </span>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center pl-30 pr-30">
        <div className="left-grid">
          <h1 className="headline text-blue-600 font-bold text-4xl leading-tight">
            SPEND SMART <br /> SAVE MORE <br />
            <span className="text-black">STRESS LESS</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg text-2">
            Take control of your financial journey with tools designed to
            simplify and empower.
            <br />
            Track, save and grow – all in one seamless platform built for your
            success.
          </p>
          <button className="mt-6 bg-[#0068FF] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 start-btn">
            <img src={pigIcon} alt="Pig Icon" className="start-btn-logo" />
            Start Tracking Today !
          </button>
        </div>

        <div className="hidden md:block">
          <img
            src={personImg}
            alt="Man Working"
            className="rounded-br-[125px] rounded-bl-[25px] rounded-tr-[25px] rounded-tl-[25px]"
          />
          <div className="bg-green-200 mt-5 p-6 rounded-tr-[75px] rounded-br-[25px] rounded-tl-[25px] rounded-bl-[25px]">
            <div className="flex items-center gap-3 mb-2">
              <img src={coinIcon} alt="Rupee" className="w-15 h-15" />
              <h2 className="text-lg font-semibold home-section-content heading">
                Count Every Rupee
              </h2>
            </div>
            <p className="home-section-content text">
              Monitor your spending, savings and investments with real-time
              insights. <br />
              Know where every rupee goes & gain full visibility of your
              finances.
            </p>
          </div>
        </div>
        {/* Right Cards */}
        <div className="space-y-6">
          <div className="bg-orange-300 text-white p-6 rounded-bl-[75px] rounded-br-[25px] rounded-tr-[25px] rounded-tl-[25px]">
            <div className="flex items-center gap-3 mb-2">
              <img src={secureIcon} alt="Secure" className="w-12 h-12" />
              <h2 className="text-lg font-semibold home-section-content heading">
                Stay Secure
              </h2>
            </div>
            <p className="home-section-content text text-items-right">
              Protect your data with top-tier encryption and security features.{" "}
              <br />
              All your data is in safe hands.
            </p>
          </div>

          <img
            src={piggyBankImg}
            alt="Piggy Bank"
            className="rounded-tl-[125px] rounded-bl-[25px] rounded-tr-[25px] rounded-br-[25px] mt-12"
          />
        </div>
      </div>

      {/* Home Section */}
      <div id="home" className="home-section">
        <HowItWorks />
      </div>

      {/* About Us Section */}
      <div id="about" className="about-us-section">
        <AboutUs />
      </div>

      {/* Services Section */}
      <div id="services" className="service-section ">
        <Services />
      </div>

      <div id="sub-services" className="sub-service-section">
        <SubServices />
      </div>

      <div id="pricing" className="pricing-section">
        <PricingSection />
      </div>

      <div className="client-section">
        <Clients />
      </div>

      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
