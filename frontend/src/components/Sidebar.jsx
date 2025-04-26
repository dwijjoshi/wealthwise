export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen p-4 pl-6 w-64 sticky top-0">
      <div className="flex items-center mb-6 gap-x-2">
        <img className="h-[47px] w-[60px]" src="/logo.png" alt="" />
        <div className="font-semibold text-[20px]">
          <span className="text-[#0068FF]">WEALTH</span>
          <span className="text-[#11FF09]">WISE</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 flex-1">
        <div>
          <h2 className="text-gray-500/70 text-sm mb-6 tracking-wide">
            Manage
          </h2>
          <nav className="flex flex-col gap-4 gap-y-6">
            <a
              href="/dashboard/"
              className="flex gap-x-2 items-center text-gray-700 hover:text-blue-600"
            >
              <img className="h-5 w-5" src="/DashboardIcon.png" alt="" />
              Dashboard
            </a>
            <a
              href="/dashboard/cards"
              className="flex gap-x-2 items-center text-gray-700 hover:text-blue-600"
            >
              <img className="h-5 w-5" src="/Card icon'.png" alt="" />
              My Cards
            </a>
            <a
              href="/dashboard/transactions"
              className="flex gap-x-2 items-center text-gray-700 hover:text-blue-600"
            >
              <img className="h-5 w-5" src="/Transcation icon.png" alt="" />
              Transactions
            </a>
            <a
              href="/dashboard/recurring-bills"
              className="flex gap-x-2 items-center text-gray-700 hover:text-blue-600"
            >
              <img className="h-5 w-5" src="/Recurring.png" alt="" />
              Recurring Bills
            </a>
            <a
              href="/dashboard/analytics"
              className="flex gap-x-2 items-center text-gray-700 hover:text-blue-600"
            >
              <img className="h-5 w-5" src="/Analytics icon.png" alt="" />
              Analytics
            </a>
            <a
              href="/dashboard/settings"
              className="flex gap-x-2 items-center text-gray-700 hover:text-blue-600"
            >
              <img className="h-5 w-5" src="/Settings icon.png" alt="" />
              Settings
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
