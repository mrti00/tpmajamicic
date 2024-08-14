import { useState } from "react";
import logo from "../assets/images/logo_tpmajamicic.svg";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

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
    closeMenu();
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
      <div className="relative mx-auto max-w-full px-4 py-2 md:px-5 lg:px-16">
        <div className="items-center justify-between md:flex">
          <img
            onClick={scrollToTop}
            src={logo}
            alt="logo firme"
            className="w-20 cursor-pointer"
          />
          <div
            onClick={handleClick}
            className="absolute right-8 top-8 cursor-pointer text-3xl md:hidden"
          >
            {showCross ? (
              <RxCross2 className="duration-500 hover:text-gray-400" />
            ) : (
              <RxHamburgerMenu className="duration-500 hover:text-gray-400" />
            )}
          </div>
          <ul
            className={`absolute left-0 z-[-1] w-full bg-white pb-12 pl-9 transition-all duration-500 md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
              open
                ? "top-20 opacity-100"
                : "top-[-490px] opacity-0 md:opacity-100"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="my-7 text-center text-xl md:my-0 md:ml-8"
              >
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    `text-gray-800 duration-500 ${
                      isActive
                        ? "border-b-2 border-gray-400 transition-all duration-200 hover:border-none hover:text-gray-400"
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
