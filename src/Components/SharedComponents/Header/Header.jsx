import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img src={logo} className="w-[50px]" alt="Flowbite Logo" />
            <span className="flex flex-col gap-0">
              <b className="text-blue-700">SIMT</b>
              <p className="p-0 text-sm text-gray-400">
                Best politachnical of Dhaka
              </p>
            </span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none hover:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="#"
                  className="block primary-color font-[500] text-md"
                  aria-current="page"
                >
                  হোম
                </a>
              </li>

              <li>
                <a href="#" className="block primary-color font-[500] text-md">
                  আমাদে সম্পর্কে
                </a>
              </li>
              <li>
                <a href="#" className="block primary-color font-[500] text-md">
                  কোর্স
                </a>
              </li>
              <li>
                <a href="#" className="block primary-color font-[500] text-md">
                  ক্যাম্পাস
                </a>
              </li>
              <li>
                <a href="#" className="block primary-color font-[500] text-md">
                  জব প্লেসমেন্ট
                </a>
              </li>
              <li>
                <a href="#" className="block primary-color font-[500] text-md">
                  নোটিশ
                </a>
              </li>
              <li>
                <a href="#" className="block primary-color font-[500] text-md ">
                  যোগাযোগ
                </a>
              </li>
              <li>
                <Link to={'/login'}><buttom onClick={() => console.log('click')} className="btn btn-primary">লগইন</buttom></Link>
              </li>
            </ul>
          </div>
        </div>
        <aside
          className={`${open ? " px-4 pb-6 shadow-lg h-[330px]" : "h-[0px] "
            } overflow-hidden duration-150 `}
        >
          <ul className="  md:bg-white">
            <li className="mt-3">
              <a
                href="#"
                className="block primary-color font-[500] text-md"
                aria-current="page"
              >
                হোম
              </a>
            </li>

            <li className="mt-3">
              <a href="#" className="block primary-color font-[500] text-md">
                আমাদে সম্পর্কে
              </a>
            </li>
            <li className="mt-3">
              <a href="#" className="block primary-color font-[500] text-md">
                কোর্স
              </a>
            </li>
            <li className="mt-3">
              <a href="#" className="block primary-color font-[500] text-md">
                ক্যাম্পাস
              </a>
            </li>
            <li className="mt-3">
              <a href="#" className="block primary-color font-[500] text-md">
                জব প্লেসমেন্ট
              </a>
            </li>
            <li className="mt-3">
              <a href="#" className="block primary-color font-[500] text-md">
                নোটিশ
              </a>
            </li>
            <li className="mt-3">
              <a href="#" className="block primary-color font-[500] text-md ">
                যোগাযোগ
              </a>
            </li>
            <li className="mt-3">
              <Link to={'/login'}><buttom className="btn btn-primary">লগইন</buttom></Link>
            </li>
          </ul>
        </aside>
      </nav>
    </>
  );
};

export default Header;
