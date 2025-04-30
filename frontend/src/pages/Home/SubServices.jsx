import React from "react";
import subServicesImg from "../../images/sub-services.png";
import "../../styles/SubServices.css";

const SubSection = () => {
  return (
    <section className="relative bg-[#0A1A36] text-white py-20 px-6 md:px-16 overflow-hidden h-[400px] md:h-[450px] flex items-stretch">
      {/* Background Image */}
      <img
        src={subServicesImg}
        alt="Sub Services Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
      />

      {/* Overlay Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col justify-between">
        {/* Text Content */}
        <div className="text-center">
          <span className="finance-heading">
            Your Journey to{" "}
            <span className="bg-[#D6652F] px-2 rounded text-white">
              Financial Freedom
            </span>{" "}
            Starts Here
          </span>
        </div>
        <div className="flex text-left w-100 mt-4 justify-end">
          <p className="finance-text">
            Stay on top of your finances with personalized insights and smart
            tracking all-in-one place with <strong>WEALTHWISE</strong>
          </p>
        </div>

        {/* CTA Button at bottom right */}
        <div className="flex justify-end mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300">
            Start Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubSection;
