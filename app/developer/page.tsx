"use client";
import Header from "../header/page";
import HoverCarousel from "hover-carousel";
import Styles from "./page.module.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const developer = () => {
  return (
    <div>
      <Header />

      <div
        className={`${Styles.backer} d-flex align-items-center justify-content-center p-5 w-100`}
      >
        <div className={`${Styles.knownTwo} text-center`}>
          <span className={`${Styles.head}`}>DEVELOPER</span>
          <div className="d-flex justify-content-center my-5 ">
            <Image
              src="./html.png"
              alt="Donation UI design"
              width={70}
              height={70}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./css.png"
              alt="Donation UI design"
              width={70}
              height={70}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./scss.png"
              alt="Donation UI design"
              width={100}
              height={70}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./boot.png"
              alt="Donation UI design"
              width={80}
              height={70}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./tailwind.png"
              alt="Donation UI design"
              width={100}
              height={70}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./js.png"
              alt="Donation UI design"
              width={70}
              height={70}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./ts.png"
              alt="Donation UI design"
              width={70}
              height={70}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./react.png"
              alt="Donation UI design"
              width={80}
              height={70}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./next.svg"
              alt="Donation UI design"
              width={70}
              height={70}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                // marginRight: "60px",
              }}
            />
          </div>
          <div className="d-flex justify-content-center my-5">
            <Image
              src="./redux.png"
              alt="Donation UI design"
              width={70}
              height={70}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./Git.png"
              alt="Donation UI design"
              width={70}
              height={70}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./github.png"
              alt="Donation UI design"
              width={70}
              height={70}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./konva.png"
              alt="Donation UI design"
              width={70}
              height={70}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./post.png"
              alt="Donation UI design"
              width={70}
              height={70}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                // marginRight: "60px",
              }}
            />
          </div>

          <div>
            <div className={`${Styles.projectheaddiv} d-flex flex-wrap`}>
              <Link href="/uidonation" className="nav-link">
                <Button
                  className={`${Styles.card}  d-flex flex-column justify-content-start align-items-start`}
                >
                  <span
                    style={{ marginBottom: "-35px" }}
                    className={Styles.gap}
                  >
                    REACT
                  </span>
                  <span
                    style={{ marginBottom: "-35px" }}
                    className={Styles.gap}
                  >
                    QUIZ
                  </span>
                  <span
                    style={{ marginBottom: "-35px" }}
                    className={Styles.gap}
                  >
                    APP
                  </span>
                  <span
                    style={{ marginBottom: "-35px" }}
                    className={Styles.gap}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                      />
                    </svg>
                  </span>
                </Button>
              </Link>
              <Button
                disabled
                className={`${Styles.card}  d-flex flex-column justify-content-start align-items-start`}
              >
                <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                  FULL
                </span>
                <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                  STACK
                </span>
                <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                  APP
                </span>
                <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default developer;
