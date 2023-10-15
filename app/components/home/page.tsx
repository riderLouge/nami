import Sidebar from "@/quickAccess/sidebar";
import Link from "next/link";
import React from "react";
import { BellIcon } from "@heroicons/react/20/solid";

const Home: React.FC = () => {
  return (
    <div className="flex" style={{ flexDirection: "column" }}>
      <div
        className="navbar bg-base-100"
        style={{ backgroundColor: "#f9fafb", justifyContent: "space-between" }}
      >
        <label className="font-semibold normal-case text-xl text-indigo-600 pl-4">
          {" "}
          Nami Invoice
        </label>
        <div>
          <div className="notification-icon pr-4">
            <BellIcon className="h-8 w-8 text-indigo-600 cursor-pointer" />
          </div>
          <div className="avatar pr-4">
            <div className="w-8 rounded-full bg-slate-600">
              <img src="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Sidebar />
        <div className="main">{/* Add your main content here */}</div>
      </div>
    </div>
  );
};
export default Home;
