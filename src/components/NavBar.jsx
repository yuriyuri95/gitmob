import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["HOME", "STORE", "ABOUT", "CONTACT", "NEWS", "FAQ"];

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
            {navItem}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
