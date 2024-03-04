"use client";

import React, { useState } from "react";
import Styles from "./page.module.css";
import { Button, Modal, Carousel } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Uidonation = () => {
  const router = useRouter();
  const handleOpenFigma = () => {
    window.open(
      "https://www.figma.com/proto/krFFajeKrkTvKef0s0HRZ7/Donation-Webdesign?type=design&node-id=1-2&t=PUR8JAYKcoTo8bHl-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design",
      "_blank"
    );
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goBack = () => {
    router.back();
  };

  return (
    <div className="">
      <div className={`${Styles.freeze} text-center`}>
        <span className={`${Styles.title}`}>DONATION FLOW UI</span>
      </div>

      <div>
        <div className={`${Styles.buttonadjust} d-flex justify-content-center`}>
          <Link href="./" className="nav-link">
            <Button
              className={`${Styles.buttonback} d-flex align-items-center px-3
        `}
              variant="outline-dark"
              onClick={goBack}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                />
              </svg>
              <span className="ms-2">Back</span>
            </Button>
          </Link>
          <Button
            className={`${Styles.buttonback} d-flex align-items-center ms-3 px-3
        `}
            variant="dark"
            onClick={handleOpenFigma}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
              />
            </svg>
            <span className="ms-2">Open in Figma </span>
          </Button>
        </div>
        <div className={`${Styles.work} d-flex justify-content-center`}>
          <Image
            src="./other/UI1.png"
            alt="Description of your image"
            width={1334}
            height={4166}
          />
        </div>
        <div className="d-flex justify-content-center align-items-center mb-5">
          <Button
            className={`${Styles.buttonback} d-flex align-items-center px-5
        `}
            variant="dark"
            onClick={handleScrollToTop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Uidonation;
