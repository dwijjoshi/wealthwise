import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import growthIconUrl from "../../assets/growth-icon.svg";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <section className="bg-white text-black py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section - Logo and Tagline */}
        <div className="items-start gap-2 max-w-xs">
          <div className="flex flex-col items-center gap-2">
            {/* Logo centered */}
            <div className="flex justify-center">
              <img
                src={growthIconUrl}
                alt="Growth Icon"
                className="footer-app-logo"
              />
            </div>
            <div className="footer-heading text-center">WealthWise</div>
          </div>
          <p className="footer-sub-heading mt-2 text-center">
            Trusted financial advice tailored to your needs
          </p>
        </div>

        {/* Middle Section - Navigation */}
        <div className="flex gap-16 mt-15">
          <div className="flex flex-col gap-2">
            <ul className="space-y-1 text-black">
              <li>
                <a href="#" className="footer-menu">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="footer-menu">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="footer-menu">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-menu">
                  Plans
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <ul className="space-y-1 text-black">
              <li>
                <a href="#" className="footer-menu">
                  Further Information
                </a>
              </li>
              <li>
                <a href="#" className="footer-menu">
                  Terms & Condition
                </a>
              </li>
              <li>
                <a href="#" className="footer-menu">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-menu">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact and Social */}
        <div className="flex flex-col gap-4 mt-15">
          <div>
            <p className="email-us">Email us at:</p>
            <p className="email-address">hello@wealthwise.com</p>
          </div>
          <div>
            <p className="follow-us mt-5">Follow Us</p>
            <div className="flex gap-3 justify-center mt-5">
              <a
                href="#"
                aria-label="Instagram"
                className="text-pink-500 text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-blue-600 text-2xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-blue-700 text-2xl"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
