import { useState } from "react";
import { Link } from "react-router";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["HOME", "ABOUT"];

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="md:hidden flex justify-between ">
        <span>Menu</span>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
      <ul
        className={`md:flex md:place-content-end md:w-1/2 md:mx-auto ${
          isOpen ? "block z-10 absolute" : "hidden"
        } md:block`}
      >
        {navItems.map((navItem) => (
          <li
            className="hover:text-gray-300 md:px-4 bg-gray-800 w-screen p-4"
            key={navItem}
          >
            <Link
              to={navItem === "HOME" ? "/" : `/${navItem.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
            >
              {navItem}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
