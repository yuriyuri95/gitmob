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
        className={`md:flex md:justify-between md:w-1/2 md:mx-auto ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        {navItems.map((navItem) => (
          <li className="hover:text-gray-300" key={navItem}>
            <Link to={navItem === "HOME" ? "/" : `/${navItem.toLowerCase()}`}>
              {navItem}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
