import UserIcon from "../../assets/icons/user-icon.svg";
import BudgetIcon from "../../assets/icons/wallet-icon.svg";
import TransactionsIcon from "../../assets/icons/connectivity-icon.svg";
import AboutUsBackground from "../../images/about-us-bg.jpeg";
import "../../styles/AboutUs.css";
function AboutUs() {
  return (
    <div className="relative bg-[#0A1A36] text-white py-20 px-6 md:px-16 overflow-hidden">
      <img
        src={AboutUsBackground}
        alt="Background Overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="about-us-heading mb-15">ABOUT WEALTHWISE</h3>
          <h1 className="mb-6 about-us-sub-heading">
            Where Smarter Spending&nbsp;{" "}
            <span className="inline-block">Meets Better Savings</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg mb-16">
            Track every rupee, build better budgets, and achieve your goals
            faster with our tailored financial solutions. We believe everyone
            deserves access to clear actionable financial insights, no matter
            where they are in the journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <div className="items-start">
                <img src={UserIcon} alt="User Icon" className="w-7 h-7 mt-1" />
                <div className="mt-4">
                  <span className="card-heading">5K+</span>
                  <p className="card-content  text-gray-300 mt-4">
                    Join more than 5K user managing their finance with ease
                  </p>
                </div>
              </div>
              <div className="hidden md:flex justify-center items-center">
                <div className="h-35 border-l-2 border-white-500"></div>
              </div>
            </div>

            {/* Divider (for medium+ screens only) */}

            {/* Item 2 */}
            <div className="flex items-start gap-4">
              <div className="items-start ">
                <img
                  src={BudgetIcon}
                  alt="Budget Icon"
                  className="w-7 h-7 mt-1"
                />

                <div className="mt-4 ">
                  <span className="card-heading">20%</span>
                  <p className="card-content text-gray-300 mt-4">
                    More Saving with our smart budgeting tools
                  </p>
                </div>
              </div>

              {/* Divider (for medium+ screens only) */}
              <div className="hidden md:flex justify-center items-center">
                <div className="h-35 border-l-2 border-white-500"></div>
              </div>
            </div>

            {/* Item 3 */}
            <div className=" items-start gap-4">
              <img
                src={TransactionsIcon}
                alt="Transaction Icon"
                className="w-7 h-7 mt-1"
              />
              <div className="mt-4">
                <span className="card-heading">+1 Million</span>
                <p className="card-content  text-gray-300 mt-4">
                  Transactions tracked every month with specific details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
