import { useState } from "react";
import logo from "../assets/images/logo_tpmajamicic.svg";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Header() {
  let Links = [
    { name: "Početna", link: "/" },
    { name: "O nama", link: "/o-nama" },
    { name: "Usluge", link: "/usluge" },
    { name: "Kontakt", link: "/kontakt" },
  ];
  let [open, setOpen] = useState(false);
  let [showCross, setShowCross] = useState(false);

  // Function: show icon of X after 0,35s
  const handleClick = () => {
    setOpen(!open);
    if (!open) {
      setTimeout(() => setShowCross(true), 350);
    } else {
      setShowCross(false);
    }
  };

  // Function: close menu
  const closeMenu = () => {
    setOpen(false);
    setShowCross(false);
  };

  // Function: Scroll to Top on Logo Click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Hook for animation, library called: AOS
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <header
      className="shadow-md w-full fixed top-0 left-0 bg-white z-50 "
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 py-2 relative">
        <div className="md:flex items-center justify-between">
          <img
            onClick={scrollToTop}
            src={logo}
            alt="logo firme"
            className="w-20 cursor-pointer"
          />
          <div
            onClick={handleClick}
            className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden"
          >
            {showCross ? (
              <RxCross2 className="hover:text-gray-400 duration-500" />
            ) : (
              <RxHamburgerMenu className="hover:text-gray-400 duration-500" />
            )}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ${
              open
                ? "top-20 opacity-100"
                : "top-[-490px] md:opacity-100 opacity-0"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-xl md:my-0 my-7 text-center"
              >
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    `text-gray-800 duration-500 ${
                      isActive
                        ? "border-b-2 border-gray-400 hover:text-gray-400 hover:border-none transition-all duration-200"
                        : "hover:text-gray-400"
                    }`
                  }
                  onClick={closeMenu}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
