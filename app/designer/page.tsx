"use client";
import Header from "../header/page";
import HoverCarousel from "hover-carousel";
import Styles from "./page.module.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const designer = () => {
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
        <div className={`${Styles.knownTwo} text-start `}>
          <div className="d-flex flex-column">
            <span className={`${Styles.head} `}>MICROARTS,</span>
            <span className={`${Styles.head} `}>LOGO WORKS,</span>
            <span className={`${Styles.head} `}>PRODUCT DESIGN,</span>
            <span className={`${Styles.head} `}>& MORE</span>
          </div>

          <div className="d-flex justify-content-start my-5">
            <Image
              src="./blend.png"
              alt="Donation UI design"
              width={70}
              height={70}
              // layout="responsive"
              className={Styles.icon}
              style={{
                marginRight: "60px",
              }}
            />
            <Image
              src="./catia.png"
              alt="Donation UI design"
              width={70}
              height={70}
              // layout="responsive"
              className={Styles.icon}
              style={{
                marginRight: "60px",
              }}
            />
            <Image
              src="./solid.jpg"
              alt="Donation UI design"
              width={70}
              height={70}
              // layout="responsive"
              className={Styles.icon}
              style={{
                marginRight: "60px",
              }}
            />
            <Image
              src="./autocad.jpg"
              alt="Donation UI design"
              width={70}
              height={70}
              // layout="responsive"
              className={Styles.icon}
              style={{
                marginRight: "60px",
              }}
            />
            <Image
              src="./builder.png"
              alt="Donation UI design"
              width={70}
              height={70}
              // layout="responsive"
              className={Styles.icon}
              style={{
                marginRight: "60px",
              }}
            />
          </div>
        </div>
      </div>

      <div className={`${Styles.container} `}>
        <div className={Styles.cardshow}>
          <Image
            src="./3D/3DA.png"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Robos - 3D Model design.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./3D/3DB.png"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Mini room - 3D Model design.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./3D/3DD.png"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Recret room - 3D Model design.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./3D/3DC.png"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Keyboard - 3D Model design.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./3D/3DE.jpg"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Logo design.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./3D/3DF.jpg"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Pencil curving.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./3D/3DG.jpg"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Handcraft pendent.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./3D/3DI.jpg"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Logo design.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./3D/3DH.jpg"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Pencil sketch.</div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./3D/3DK.jpg"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>Short film poster design.</div>
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

export default designer;
