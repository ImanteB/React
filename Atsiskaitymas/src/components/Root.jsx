import { Outlet } from "react-router-dom";
import { NavBar } from '../components/NavBar';
import styles from "../components/Root.module.css";

export const Root = () => {
  return (
    <>
      <NavBar />
      <main className={styles.layout}>
        <Outlet />
      </main>
    </>
  );
};