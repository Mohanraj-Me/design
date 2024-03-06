"use client";
import Header from "../header/page";
import HoverCarousel from "hover-carousel";
import Styles from "./page.module.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const uidesigner = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Header />
      <div
        className={`${Styles.backtest}  d-flex align-items-center justify-content-center`}
      >
        <span className={`${Styles.showcaseee}`}>SHOWCASE</span>
      </div>
      <div
        className={`${Styles.backer} d-flex align-items-center justify-content-center p-5 w-100`}
      >
        <div className={`${Styles.knownTwo} text-center`}>
          <span className={`${Styles.head} `}>UI UX DESIGN</span>
          <div className="d-flex justify-content-between m-5">
            <Image
              src="./figma.png"
              alt="Donation UI design"
              width={70}
              height={70}
              // layout="responsive"
              className={Styles.icon}
            />

            <Image
              src="./Illustrator.jpg"
              alt="Donation UI design"
              width={70}
              height={70}
              // layout="responsive"
              className={Styles.icon}
            />
            <Image
              src="./photoshop.png"
              alt="Donation UI design"
              width={70}
              height={70}
              // layout="responsive"
              className={Styles.icon}
            />
            <Image
              src="./miro.png"
              alt="Donation UI design"
              width={70}
              height={70}
              // layout="responsive"
              className={Styles.icon}
            />
            <Image
              src="./webflow.png"
              alt="Donation UI design"
              width={70}
              height={70}
              // layout="responsive"
              className={Styles.icon}
            />
            <Image
              src="./wix.png"
              alt="Donation UI design"
              width={70}
              height={70}
              // layout="responsive"
              className={Styles.icon}
            />
            <Image
              src="./spline.jpeg"
              alt="Donation UI design"
              width={70}
              height={70}
              // layout="responsive"
              className={Styles.icon}
            />

            <Image
              src="./canva.jpg"
              alt="Donation UI design"
              width={70}
              height={70}
              // layout="responsive"
              className={Styles.icon}
            />
          </div>

          <div>
            <div className={`${Styles.projectheaddiv} d-flex flex-wrap`}>
              <Link href="./uidonation" className="nav-link">
                <Button
                  className={`${Styles.card}  d-flex flex-column justify-content-start align-items-start`}
                >
                  <span
                    style={{ marginBottom: "-35px" }}
                    className={Styles.gap}
                  >
                    CASE
                  </span>
                  <span
                    style={{ marginBottom: "-35px" }}
                    className={Styles.gap}
                  >
                    STUDY
                  </span>
                  <span
                    style={{ marginBottom: "-35px" }}
                    className={Styles.gap}
                  >
                    ONE
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
                  CASE
                </span>
                <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                  STUDY
                </span>
                <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                  TWO
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

      <div className={`${Styles.container} `}>
        <div className={Styles.cardshow}>
          <Image
            src="./UI/a.jpg"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Mobile launcher - UI Design.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./UI/b.png"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Coffee shop - UI Design.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./UI/c.png"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>To Do - UI Design.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./UI/d.png"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Calcus - UI Design.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./UI/e.jpg"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Smart watch - UI Design.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./UI/f.png"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Comic app - UI Design.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./UI/g.png"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Music player - UI Design.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./UI/h.jpg"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Travel app - UI Design.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./UI/i.png"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Team build - UI Design.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./UI/j.png"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>File manager - UI Design.</div>
        </div>
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
  );
};

export default uidesigner;
