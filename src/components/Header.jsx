import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import logo from '../../../src/images/scrnli_12_12_2022_9-04-16 PM (1).png';
// import menu from '../../../src/images/white-menu.png';
// import '../../index.css';
import profile from "../assets/signature (1).png";
import { FaCloudDownloadAlt } from "react-icons/fa";

import AnchorLink from "react-anchor-link-smooth-scroll";
const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    document.querySelector("body").classList.add("menu-is-open");
  };
  const handleCloseMenu = () => {
    document.querySelector("body").classList.remove("menu-is-open");
  };
  const menuOpen = document.querySelector("menu-is-open");
  if (menuOpen) {
    document
      .querySelector("menu-is-open")
      .addEventListener("click", handleCloseMenu);
  }

  const isSticky = (e) => {
    const header = document.querySelector(".header-sticky");
    const scrollTop = window.scrollY;
    scrollTop >= 150
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const secondHeader = (e) => {
    const header = document.querySelector(".header2");
    const scrollTop = window.scrollY;
    scrollTop >= 550
      ? header.classList.add("header2-sticky2", "secondHeader")
      : header.classList.remove("header2-sticky2");
  };

  useEffect(() => {
    window.addEventListener("scroll", secondHeader);
    return () => {
      window.removeEventListener("scroll", secondHeader);
    };
  });
  return (
    <>
      <div className="navbar-mobile ">
        <div className="w-full">
          <div className="w-full text-right">
            <button
              aria-label="Close Menu"
              title="Close Menu"
              className="p-2 !fill-white hover:opacity-[.7] !pr-0 -mt-2 -mr-2 transition duration-200 roundedfocus:bg-gray-200 focus:outline-none focus:shadow-outline"
              onClick={handleCloseMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
              >
                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
              </svg>
            </button>
          </div>
          <div className="social-design">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/abdulmomin748/"
              className="p-2 font-semibold text-whiteinline-flex items-center space-x-2 rounded"
            >
              <svg
                className="w-5 h-7 fill-current"
                role="img"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                </g>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/mominur11055195"
              className="p-2 font-semibold text-whiteinline-flex items-center space-x-2 rounded"
            >
              <svg
                className="w-7 h-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="64"
                height="64"
                viewBox="0 0 64 64"
              >
                <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M44.927,26.226 c0.012,0.271,0.017,0.543,0.017,0.816c0,8.34-6.189,17.958-17.51,17.958c-3.476,0-6.711-1.045-9.435-2.835 c0.482,0.059,0.973,0.089,1.469,0.089c2.884,0,5.538-1.009,7.644-2.702c-2.693-0.051-4.966-1.877-5.749-4.384 c0.375,0.072,0.761,0.112,1.157,0.112c0.562,0,1.107-0.077,1.622-0.221c-2.816-0.579-4.937-3.13-4.937-6.188 c0-0.027,0-0.052,0-0.079c0.83,0.472,1.779,0.756,2.788,0.789c-1.651-1.131-2.737-3.063-2.737-5.252 c0-1.158,0.303-2.242,0.832-3.175c3.037,3.819,7.571,6.333,12.686,6.595c-0.104-0.46-0.159-0.943-0.159-1.438 c0-3.485,2.755-6.311,6.154-6.311c1.77,0,3.369,0.767,4.492,1.994c1.403-0.284,2.721-0.809,3.909-1.532 c-0.459,1.474-1.434,2.711-2.706,3.492C45.71,23.8,46.896,23.462,48,22.959C47.175,24.224,46.131,25.335,44.927,26.226z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/mdmominur.rahman.188478/"
              className="p-2 font-semibold text-whiteinline-flex items-center space-x-2 rounded"
            >
              <svg
                className="w-7 h-7 fill-current"
                fill="#000"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="64"
                height="64"
                viewBox="0 0 64 64"
              >
                <path d="M48,7H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h17V38h-6v-7h6v-5c0-7,4-11,10-11c3.133,0,5,1,5,1v6h-4 c-2.86,0-4,2.093-4,4v5h7l-1,7h-6v17h8c4.418,0,8-3.582,8-8V15C56,10.582,52.418,7,48,7z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/abdulmomin748"
              className="p-2 font-semibold text-white inline-flex pr-0 items-center space-x-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                className="w-7 h-7 fill-current"
                fill="#000"
                height="30"
                viewBox="0 0 30 30"
              >
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </a>
          </div>
          <nav>
            <ul className="space-y-4 list-none">
              <li className="">
                <AnchorLink
                  onClick={handleCloseMenu}
                  href="#home"
                  aria-label="Home"
                  title="Home"
                  className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Home
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  onClick={handleCloseMenu}
                  href="#about"
                  aria-label="topics"
                  title="Cart"
                  className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  About
                </AnchorLink>
              </li>
              {/* <li>
                <AnchorLink
                  onClick={handleCloseMenu}
                  href="#experience"
                  aria-label="statistics"
                  title="Statistics"
                  className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Experience
                </AnchorLink>
              </li> */}
              <li>
                <AnchorLink
                  onClick={handleCloseMenu}
                  href="#skills"
                  aria-label="Blog"
                  title="Blog"
                  className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Skills
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  onClick={handleCloseMenu}
                  href="#projects"
                  aria-label="About"
                  title="Blog"
                  className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Projects
                </AnchorLink>
              </li>
              {/* <li>
                <AnchorLink
                  onClick={handleCloseMenu}
                  href="#blog"
                  aria-label="About"
                  title="Blog"
                  className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Blog
                </AnchorLink>
              </li>
              <li>
                <AnchorLink
                  onClick={handleCloseMenu}
                  href="#testimonial"
                  aria-label="About"
                  title="Blog"
                  className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Testimonials
                </AnchorLink>
              </li> */}
              <li>
                <AnchorLink
                  onClick={handleCloseMenu}
                  href="#contact"
                  aria-label="About"
                  title="Blog"
                  className="font-bold tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Contact
                </AnchorLink>
              </li>
            </ul>
            <div className="bnr-btn-1 flex text-gray-400! mt-5 rounded-xl ">
              <a
                href="AbMominResume.pdf"
                rel="noreferrer"
                download="AbMominResume.pdf"
                className="btn-1 bg-white! rounded-xl resume-btn  hover:shadow-[0_4px_25px_rgba(253,110,10,0.4)] "
                onClick="window.open('abduleMominResume2.pdf')"
              >
                <FaCloudDownloadAlt className="mr-2 text-2xl" />
                Download Cv
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex header-sticky transition-all px-4 relative z-10 text-white ">
        <div className="flex items-center max-w-7xl w-full mx-auto justify-between navbar">
          <Link to="/">
            <img src={profile} alt="Profile" className="rounded-full w-80" />
          </Link>
          <div className="flex  d-none items-center transition-all c-text-white text-[16px]">
            <a className="lg:pr-20 md:pr-12" href="tel: +8801701910748">
              +880 <span className="ltr-spacing">1701910748</span>
            </a>
            <a href="mailto: mominurrahman10748@gmail.com">
              mominurrahman10748@gmail.com
            </a>
          </div>
          <div className="menu">
            <div className="">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 !pr-0 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={handleMenu}
              >
                <svg
                  className="w-10 c-fill-white fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40px"
                  height="40px"
                  viewBox="0 0 48 48"
                >
                  <path d="M 5.5 9 A 1.50015 1.50015 0 1 0 5.5 12 L 42.5 12 A 1.50015 1.50015 0 1 0 42.5 9 L 5.5 9 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 5.5 22.5 z M 5.5 36 A 1.50015 1.50015 0 1 0 5.5 39 L 42.5 39 A 1.50015 1.50015 0 1 0 42.5 36 L 5.5 36 z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex header2 transition-all z-50">
        <div className="flex items-center max-w-7xl w-full mx-auto justify-between navbar">
          <Link to="/">
            <div className="">
              <img src={profile} alt="Profile" className="rounded-full w-80" />
            </div>
          </Link>
          <div className="flex d-none items-center transition-all c-text-white text-white text-[16px]">
            <a className="lg:pr-20 md:pr-12" href="tel: +8801701910748">
              +880 <span className="ltr-spacing">1701910748</span>
            </a>
            <a href="mailto: mominurrahman10748@gmail.com">
              mominurrahman10748@gmail.com
            </a>
          </div>
          <div className="menu">
            <div className="">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 !pr-0 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={handleMenu}
              >
                <svg
                  className="w-10 c-fill-white fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40px"
                  height="40px"
                  viewBox="0 0 48 48"
                >
                  <path d="M 5.5 9 A 1.50015 1.50015 0 1 0 5.5 12 L 42.5 12 A 1.50015 1.50015 0 1 0 42.5 9 L 5.5 9 z M 5.5 22.5 A 1.50015 1.50015 0 1 0 5.5 25.5 L 42.5 25.5 A 1.50015 1.50015 0 1 0 42.5 22.5 L 5.5 22.5 z M 5.5 36 A 1.50015 1.50015 0 1 0 5.5 39 L 42.5 39 A 1.50015 1.50015 0 1 0 42.5 36 L 5.5 36 z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
