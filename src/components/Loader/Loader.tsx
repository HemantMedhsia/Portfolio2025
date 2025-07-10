import React from "react";
import styles from "./Loader.module.scss"; // Assuming you're writing styles separately

const Loader: React.FC = () => {
  return (
    <>
      <div className={`${styles.bodyx} ${styles.bodyAll}`}>
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className={styles.base}>
          <span></span>
          <div className={styles.face}></div>
        </div>
      </div>
      <div className={styles.longfazers}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className={`${styles.redirecting} animated-gradient-text`}>Loading...</h1>
    </>
  );
};

export default Loader;
