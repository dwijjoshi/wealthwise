import React from "react";
import { FaRegStar, FaRegClock, FaCrown, FaBolt } from "react-icons/fa";
import "../../styles/Pricing.css";

const plans = [
  {
    name: "Basic Plan",
    icon: <FaRegClock />,
    price: "₹ 1500",
    description:
      "Affordable and easy-to-use features for everyday money management & get 14-days free trial.",
    features: [
      "Essential account management",
      "Basic financial reporting",
      "Access to fundamental tools",
      "Standard customer support",
    ],
  },
  {
    name: "PRO Plan",
    icon: <FaCrown />,
    price: "₹ 5000",
    description:
      "Unlock powerful features for deeper financial analysis and goal tracking & get 7-days free trail.",
    features: [
      "Customized financial planning tools",
      "Integration with Third - Party services",
      "Enhanced security features",
      "Priority customer support",
    ],
  },
  {
    name: "Ultimate Plan",
    icon: <FaBolt />,
    price: "₹ 6000",
    description:
      "Get ultimate package for complete financial management and expert guidance & get 7-days free trail.",
    features: [
      "Personalized financial advisory",
      "Comprehensive tax optimization",
      "Advanced portfolio management",
      "Customizable automation features",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="text-center py-20 px-4 md:px-12">
      <p className="pricing-title mb-2">OUR PRICING</p>
      <h2 className="pricing-heading mb-2">
        Flexible Plans, Powerful Tools : Pick Yours Today
      </h2>
      <p className="pricing-sub-heading mb-12">
        Unlock premium tools and insights with flexible pricing options.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border-2 border-dashed rounded-xl p-6 flex flex-col justify-between"
          >
            {/* Plan Header */}
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                  {plan.icon} {plan.name}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{plan.description}</p>

              {/* Pricing */}
              <div className="text-3xl font-bold my-4">
                {plan.price}{" "}
                <span className="text-base font-medium text-gray-600">
                  /month
                </span>
              </div>

              {/* Button */}
              <div className="flex justify-center">
                <button className="bg-white w-50 border border-purple-500 text-purple-700 font-semibold px-5 py-2 rounded-lg hover:bg-purple-100 transition duration-300">
                  Get Started
                </button>
              </div>
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaRegStar className="text-purple-600" /> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
