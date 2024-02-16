"use client";

import Image from "next/image";
import Header from "../header/page";
import Styles from "./page.module.css";

const Designer = () => {
  const handleLinkedClick = () => {
    window.open("https://www.linkedin.com/in/mohanraj-designer/", "_blank");
  };

  const handleInstaClick = () => {
    window.open(
      "https://www.instagram.com/mohanraj_sketcher?igsh=MWwxZ241ZnAybnUzag==",
      "_blank"
    );
  };

  return (
    <div>
      <Header />
      <div
        className={`${Styles.knownTwo}  d-flex justify-content-center align-items-center flex-column`}
      >
        <a
          className={`${Styles.mail} nav-link`}
          href="mailto: mohanraj130298@gmail.com"
        >
          mohanraj130298@gmail.com
        </a>
        <span
          className={`${Styles.text} my-3 d-flex align-item-center justify-content-center text-center`}
        >
          Ready to explore new horizons and connect on innovative projects when
          my calendar permits. My aim is to redefine the landscape of social
          products. Reach out, and let&apos;s start a conversation that could
          change the game.
        </span>
        <span>
          <div className="d-flex">
            <div
              className={`${Styles.icon} my-5`}
              onClick={handleLinkedClick}
            />

            <div
              className={`${Styles.icontwo} my-5 ms-3`}
              onClick={handleInstaClick}
            />
          </div>
        </span>
        <span
          className={`${Styles.text} my-3 d-flex align-item-center justify-content-center`}
        >
          This site is hand-crafted by Mohanraj
        </span>
      </div>
    </div>
  );
};

export default Designer;
