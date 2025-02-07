"use client";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#2b2b2b] bg-opacity-75 rounded-lg z-20 fixed top-0 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open navigation</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`w-full md:flex md:w-auto transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col hover:text-mainText md:whitespace-nowrap md:flex-row items-center p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6 text-base md:text-lg lg:text-xl">
            <li>
              <a href="#" className="hover:text-textHover transition">
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutSection"
                className="hover:text-textHover transition"
              >
                Über uns
              </a>
            </li>
            <li>
              <a
                href="#recommendation"
                className="hover:text-textHover transition"
              >
                Empfehlung
              </a>
            </li>
            <li>
              <a href="#favorites" className="hover:text-textHover transition">
                Favoriten
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-textHover transition">
                Speisekarte
              </a>
            </li>
            <li>
              <a href="#catering" className="hover:text-textHover transition">
                Catering
              </a>
            </li>
            <li>
              <a
                href="#reservation"
                className="hover:text-textHover transition"
              >
                Reservierung
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
