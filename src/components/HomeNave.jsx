import { Link } from "react-router";

function HomeNave() {
  const navList = ["mobilis", "djezzy", "ooredoo"];
  return (
    <nav>
      <ul>
        {navList.map((navItem) => (
          <li key={navItem}>
            <Link to={`/${navItem.toLowerCase()}`}>{navItem}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HomeNave;
