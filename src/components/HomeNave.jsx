import { NavLink } from "react-router";

function HomeNave() {
  const navList = ["mobilis", "djezzy", "ooredoo"];
  return (
    <nav className="bg-gray-800 text-white  ">
      <ul className="flex justify-between md:w-1/2 md:mx-auto">
        {navList.map((navItem) => (
          <li
            key={navItem}
            className="hover:bg-gray-700 w-full text-center h-10 flex justify-center items-center"
          >
            {/* <Link to={`/${navItem.toLowerCase()}`}>{navItem}</Link> */}
            <NavLink
              to={`/${navItem.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "text-red-300 bg-gray-500 w-full h-full flex justify-center items-center shadow-md"
                  : "text-white bg-gray-600 w-full h-full flex justify-center items-center"
              }
            >
              {navItem}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HomeNave;
