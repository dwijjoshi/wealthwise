import React from "react";
import { FaStar } from "react-icons/fa";
import client1 from "../../images/client1.jpeg";
import client2 from "../../images/client2.jpeg";
import client3 from "../../images/client3.jpeg";
import "../../styles/Clients.css";

const testimonials = [
  {
    name: "Nishant Sinha",
    image: client1,
    review:
      "Wealthwise has completely transformed my financial planning. Their expert advice and user-friendly tools have mad managing my investments so much easier.",
  },
  {
    name: "Priya Sharma",
    image: client2,
    review:
      "Wealthwise has completely transformed my financial planning. Their expert advice and user-friendly tools have mad managing my investments so much easier.",
  },
  {
    name: "Anna Robbins",
    image: client3,
    review:
      "Wealthwise has completely transformed my financial planning. Their expert advice and user-friendly tools have mad managing my investments so much easier.",
  },
];

const Clients = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-20 px-4 text-white text-center">
      <p className="clients-title uppercase mb-2">Trusted by Our Clients</p>
      <div className="mb-15">
        <span className="clients-heading text-white">
          Discover how our tailored financial solutions have made a difference
          in the lives of our clients
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white text-black rounded-3xl p-6 pt-12 shadow-lg text-left"
          >
            {/* Profile Image on Top Right */}
            <div className="absolute -top-10 right-6">
              <div className="w-20 h-20 rounded-full border-4 border-blue-900 overflow-hidden">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <span className="client-name mb-1">{testimonial.name}</span>
            <div className="flex gap-1 text-yellow-500 mb-3">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
            <p className="client-comment leading-relaxed">
              “ {testimonial.review} ”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
