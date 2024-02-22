import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <img src="https://reactjs.org/logo-og.png" alt="React Image" />
      </div>
      <div className={styles.content}>
        <h1>What is react!</h1>
        <p>React is an open-source frontend JavaScript library123that is used for building user interfaces, especially for single page applications1. 
            It is a component-based front-end library responsible only for the view layer of a Model View Controller (MVC) architecture3. 
            React is used to create modular user interfaces and promotes the development of reusable UI components that display dynamic data3. 
            React was created by Jordan Walke, a software engineer working for Facebook.</p>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
