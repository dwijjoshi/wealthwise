import React from "react";
import expenseImg from "../../assets/expense-dashboard.svg";
import betterManageImg from "../../assets/better-manage.svg";
import "../../styles/Services.css";

const OurServices = () => {
  return (
    <section className="bg-white py-16 px-4 text-black">
      <div className="text-center">
        <div className="mb-1">
          <span className="services-heading">OUR SERVICES</span>
        </div>
        <br />
        <div className="mb-10">
          <span className="services-sub-heading ">
            Personalized financial services for a brighter future
          </span>
        </div>
      </div>

      <div className="grid md:grid-cols-5 ml-15">
        {/* Left Block - Management */}

        <img
          src={betterManageImg}
          alt="Manage Better"
          className="rounded-t-xl h-90 w-200 self-start col-span-2"
        />

        {/* Right Block - Expense Tracking */}

        <img
          src={expenseImg}
          alt="Expense Tracking Dashboard"
          className="rounded-t-xl h-90 self-start col-span-3"
        />
      </div>

      {/* Bottom Boxes */}
      <div className="grid md:grid-cols-3 gap-4 mt-12 max-w-7xl mx-auto ">
        <div className="bg-black bg-opacity-90 text-white p-4 rounded-xl ml-14">
          <h5 className="text-lg font-bold card-heading">INCOME TRACKING</h5>
          <p className="mt-4 text-sm card-content">
            A monthly or yearly overview of income streams, with visual
            summaries of how much income was earned and how it was used.
          </p>
        </div>

        <div className="bg-[#0A1A36] text-white p-4 rounded-xl">
          <h5 className="text-lg font-bold card-heading">BILL REMINDERS</h5>
          <p className="mt-4 text-sm card-content">
            Set reminders for upcoming bills and due dates with notifications
            that alert users when a bill is approaching.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-200 to-orange-400 p-4 rounded-xl text-black">
          <h5 className="text-sm card-content">
            Monitor recurring payments like subscriptions and memberships
          </h5>
          <p className="text-2xl font-bold mt-2 text-right card-heading">
            TRANSACTION
            <br />
            TRACKING
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
