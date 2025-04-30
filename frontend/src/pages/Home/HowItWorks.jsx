import React from "react";

import RegisterIcon from "../../assets/icons/register.svg";
import ConnectIcon from "../../assets/icons/connect.svg";
import BudgetIcon from "../../assets/icons/budget.svg";
import ReviewIcon from "../../assets/icons/review.svg";
import NotifyIcon from "../../assets/icons/notify.svg";
import CommunityIcon from "../../assets/icons/community.svg";
import "../../styles/HowItWorks.css";

const steps = [
  {
    icon: RegisterIcon,
    title: "Register and create account in few minutes",
    description:
      "Create your account safely, start your journey with highest security features.",
  },
  {
    icon: ConnectIcon,
    title: "Connect bank accounts with WEALTHWISE",
    description:
      "Connect bank accounts, credit cards & other financial accounts for automatic transaction tracking.",
  },
  {
    icon: BudgetIcon,
    title: "Create a budget",
    description:
      "Create their first budget by offering pre-built categories and customize your own that fits you.",
  },
  {
    icon: ReviewIcon,
    title: "Review & Adjust Financial Plan",
    description:
      "It's easy to tweak budgets, savings goals or debt repayment plans anytime.",
  },
  {
    icon: NotifyIcon,
    title: "Set Up Notifications & Reminders",
    description:
      "Set up alerts to notify you when you're close to exceed budgets or to avoid late payments.",
  },
  {
    icon: CommunityIcon,
    title: "Join the Community",
    description:
      "Join a community space where users can share tips, success stories & financial advices.",
  },
];

function HowItWorks() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="home-heading mb-5">HOW IT WORKS</h2>
      <h1 className="home-sub-heading mb-12">
        Financial freedom starts with the right steps
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left gap-4"
          >
            <img
              src={step.icon}
              alt="Step Icon"
              className=" sub-content-icon"
            />

            <h3 className="font-semibold text-lg sub-content-heading">
              {step.title}
            </h3>
            <p className="text-gray-600 sub-content-description">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
