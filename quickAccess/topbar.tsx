import Link from "next/link";
import React from "react";
const Topbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>Customers</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Book a demo</a>
            </li>
          </ul>
        </div>
        <label className="font-semibold normal-case text-xl text-indigo-600 pl-4">
          {" "}
          Nami Invoice
        </label>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>Customers</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Book a demo</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href="/components/signIn"
          className="text-indigo-600 font-medium pr-4"
        >
          Sign in{" "}
          <span aria-hidden="true" className="text-indigo-600">
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
};
export default Topbar;
