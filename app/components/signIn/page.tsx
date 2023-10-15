import Toggle from "@/quickAccess/toggle";
import Link from "next/link";
//
export default function signIn() {
  let initialToggle = false;

  return (
    <>
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
          <Toggle value={initialToggle} />
        </div>
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="shop"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Select Shop
              </label>
              <div className="mt-2">
                <select
                  id="shop"
                  name="shop"
                  required
                  className="block w-full pl-4 rounded-md border-0 py-2.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="" disabled selected>
                    Select Shop
                  </option>
                  <option value="Apple">Apple</option>
                  <option value="Samsung">Samsung</option>
                  <option value="OnePlus">OnePlus</option>
                  <option value="Apple">Motorola</option>
                  <option value="Samsung">Redmi</option>
                  <option value="OnePlus">Oppo</option>
                  <option value="Apple">Vivo</option>
                  <option value="Samsung">Nokia</option>
                  <option value="OnePlus">Asus</option>
                  {/* Add more brands here */}
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  style={{ outline: "none" }}
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  style={{ outline: "none" }}
                  className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex items-center justify-between pt-6">
                <div className="text-sm">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="text-indigo-600 cursor-pointer"
                  />
                  <a href="#" className="font-semibold text-gray-900 pl-2">
                    Remember Me
                  </a>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Link
                href={"../components/home"}
                type="submit"
                className="btn flex w-full justify-center rounded-md bg-indigo-600 px-3 pr-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </Link>
              {/* <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button> */}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Click here to become one
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
