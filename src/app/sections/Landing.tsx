"use client";

import React from "react";
import Navbar from "../components/Navbar";
import MainBtn from "../components/MainBtn";
import styles from "../styles/Landing.module.css";
import AppButtons from "../components/AppButtons";
import UsersCount from "../components/UsersCount";

const Landing: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Unlock the Future of Finance</h1>
          <h2 className={`${styles.title}`}>Trade with Ease</h2>
          <h3 className={styles.subText}>
            Use <span className={styles.boosted}>our AI model</span> to know the
            moment to buy and sell with{" "}
            <span className={styles.boosted}>extreme precision</span>
            <br />
            Experience <span className={styles.boosted}>
              seamless trading
            </span>{" "}
            and secure your financial future with{" "}
            <span className={styles.boosted}>low risk cost</span>
          </h3>
          <p className={styles.boosted} style={{ fontSize: "1.5rem" }}>
            Boosted you with AI
          </p>
        </div>
        <div className={styles.bnsDisplayer}>
          <MainBtn text={"start now"} />
          <AppButtons />
        </div>
        <UsersCount/>
      </div>
      <Navbar />
    </div>
  );
};

export default Landing;
