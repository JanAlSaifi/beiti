"use client";
import { useRef } from "react";

export default function Navigation() {
  const navRef = useRef<HTMLDivElement>(null);
  const toggleNav = () =>
    navRef.current && navRef.current.classList.toggle("hidden");
  return (
    <nav className="w-full bg-[#2b2b2b] bg-opacity-75 rounded-lg z-20 fixed top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleNav}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 z-21 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open navigation</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div ref={navRef} className="hidden w-full md:flex md:w-auto">
          <ul className="relative flex  flex-col p-4 m-2 md:p-0 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row ">
            <li>
              <a href="#" className="">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutSection" className="">
                Über uns
              </a>
            </li>
            <li>
              <a href="#recommendation" className="">
                Empfehlung
              </a>
            </li>
            <li>
              <a href="#favorites" className="">
                Favoriten
              </a>
            </li>
            <li>
              <a href="#menu" className="">
                Speisekarte
              </a>
            </li>
            <li>
              <a href="#catering" className="">
                Catering
              </a>
            </li>
            <li>
              <a href="#" className="">
                Reservierung
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
