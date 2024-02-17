"use client";
import React, { useEffect, useState } from "react";
import { Button, Accordion, Card, Spinner } from "react-bootstrap";
import Styles from "./page.module.css";
import baffle from "baffle";
import Link from "next/link";
import HoverCarousel from "hover-carousel";
import Image from "next/image";

const HomePage = () => {
  const images = [
    "UX-Course-1.jpg",
    "UX-Course-2.jpg",
    "UX-Course-3.jpg",
    "UX-Course-4.jpg",
    "UX-Course-5.jpg",
    "UX-Course-6.jpg",
    "UX-Course-7.jpg",
  ];
  useEffect(() => {
    const designs = document.querySelectorAll(`.${Styles.design}`);

    designs.forEach((design) => {
      const text = baffle(design);
      text.set({
        characters: "IQLWXZY",
        speed: 100,
      });

      text.start();
      text.reveal(100000);
    });
  }, []);

  const handleDownload = () => {
    const resumeUrl = "/public/other/Mohanraj.pdf";
    window.open(resumeUrl, "_blank");
  };

  const handleButtonClick = () => {
    window.open("https://mohanraj130298.wixstudio.io/portfolio", "_blank");
  };

  return (
    <div className={Styles.body}>
      <div>
        <div
          className={`${Styles.hero} p-3 d-flex align-items-start justify-content-center flex-column`}
        >
          <span className={Styles.design}>MOHANRAJ</span>
          <span className={Styles.design}>DESIGN</span>
          <span className={Styles.design}>ENTHUSIAST</span>
          <div className="d-flex d-inline-block">
            {/* <Button variant="light" className={`${Styles.button} my-3 ms-3 `}>
                CONNECT FOR WORK
              </Button> */}
            <Button
              variant="outline-light"
              onClick={handleDownload}
              className={`${Styles.button} m-3`}
            >
              DOWNLOAD CV
            </Button>
          </div>
        </div>

        <div
          className={`${Styles.heroTwo}  p-3 d-flex align-items-center justify-content-center text-center flex-column`}
        >
          <span className={Styles.para}>
            I thrive on collaborating with creative teams and pushing the
            boundaries of what&apos;s possible in the design world. Whether
            it&apos;s crafting captivating graphics, crafting user-friendly web
            experiences, sculpting innovative products, weaving fashion
            statements, or diving into any other medium, I&apos;m always excited
            to embark on new journeys and stretch the limits of my imagination.
          </span>
        </div>
        <span
          className={`${Styles.showcaseee} d-flex align-item-center justify-content-center`}
        >
          BUCKLE UP
        </span>
        {/* <span
          className={`${Styles.showcasee} d-flex align-item-center justify-content-center`}
        >
          READY FOR DIVE
        </span> */}

        <div className={`${Styles.showcase} d-flex flex-column`}>
          <div
            className={`${Styles.showcasein} d-flex align-items-center justify-content-center`}
          >
            <Link href="/developer">
              <Button className={Styles.dev}>DEVELOPER</Button>
            </Link>
          </div>
          <div className="d-flex ">
            <div
              className={`${Styles.showcaseout} d-flex align-items-center justify-content-center`}
            >
              <Link href="/uidesigner">
                <Button className={Styles.dev}>UI</Button>
              </Link>
            </div>
            <div
              className={`${Styles.showcaseoutin} d-flex align-items-center justify-content-center`}
            >
              <Link href="/designer">
                <Button className={Styles.dev}>3D</Button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="bg-dark ">
          <span
            className={`${Styles.showcasee} d-flex align-item-center justify-content-center`}
          >
            CERTIFICATION
          </span>
          <HoverCarousel images={images} />
        </div> */}
        <div>
          <div className={`${Styles.back}`}>
            <div className={`${Styles.scroll} d-flex`}>
              <span>EXPLORE MY EARLY DESIGN</span>
            </div>
          </div>
        <div className="d-flex align-items-center justify-content-start">
            {/* <div className={Styles.imagepop} /> */}
            <div className={`${Styles.in} ms-5 d-flex flex-column `}>
              <span className={Styles.intotext}>
                &quot;Step into the past! Explore my early design crafted on
                Wix—a showcase of customized creativity.&quot;
              </span>
              <span className={`${Styles.intotext} ps-2`}>
                Click the button for a glimpse of my old portfolio version.
              </span>
              <Button
                variant="dark"
                className={`${Styles.butto} px-5 mt-4`}
                onClick={handleButtonClick}
              >
                Visit old version
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
