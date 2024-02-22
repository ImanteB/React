import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tutorials"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Tutorial
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/description"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Add
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};