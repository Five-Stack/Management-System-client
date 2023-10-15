import React from "react";

const Footer = () => {
  return (
    <>
      <div className="text-white mt-5 footer-bg md:px-0 px-4 py-[35px]">
        <div className="w-[1280px] mx-auto grid md:grid-cols-6 grid-cols-1 md:gap-4 gap-12">
          <div className="col-span-2">
            <h2 className="md:text-2xl text-xl font-bold  ">
              SAIC INSTITUTE OF <br /> MANAGEMENT & TECHNOLOGY
            </h2>
            <br />
            <ul>
              <li>
                <h5 className="text-white text-lg">Address</h5>
                <span className="text-gray-300 text-sm">
                  {" "}
                  M/3, Section-14, Mirpur, Dhaka-1216
                </span>
              </li>
              <li className="mt-5">
                <h5 className="text-white text-lg">Mobile</h5>
                <span className="text-gray-300 text-sm">
                  {" "}
                  01936-005817, 01936-005818
                </span>
              </li>
              <li className="mt-5">
                <h5 className="text-white text-lg">Email</h5>
                <span className="text-gray-300 text-sm">
                  {" "}
                  simt.dhaka@gmail.com
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h5 className="text-xl font-semibold">Links</h5>
            <ul>
              <li className="mt-5">
                <a className="text-gray-200" href="#">
                  BTEB
                </a>
              </li>
              <li className="mt-5">
                <a className="text-gray-200" href="#">
                  Ministry of Education
                </a>
              </li>
              <li className="mt-5">
                <a className="text-gray-200" href="#">
                  Directorate of Tech. Edu
                </a>
              </li>
              <li className="mt-5">
                <a className="text-gray-200" href="#">
                  Ministry Of ICT
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <h5 className="text-xl font-semibold">QUICK ACCESS</h5>
            <ul>
              <li className="mt-5">
                <a className="text-gray-200" href="#">
                  About Us
                </a>
              </li>
              <li className="mt-5">
                <a className="text-gray-200" href="#">
                  All Courses
                </a>
              </li>
              <li className="mt-5">
                <a className="text-gray-200" href="#">
                  Job Placement
                </a>
              </li>
              <li className="mt-5">
                <a className="text-gray-200" href="#">
                  Facility
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
