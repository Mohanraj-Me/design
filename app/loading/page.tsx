// LoadingSpinner.js
import React from "react";
import Styles from "./page.module.css";

const LoadingSpinner = () => {
  return (
    <div className={`${Styles.loadingspinnercontainer}`}>
      MO<span className={Styles.dot}>.</span>
    </div>
  );
};

export default LoadingSpinner;
