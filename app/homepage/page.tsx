"use client";
import React, { useEffect, useState } from "react";
import { Button, Accordion, Card, Spinner, Modal } from "react-bootstrap";
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

  const [showModal, setShowModal] = useState(false);
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

    const isMobileOrTablet =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobileOrTablet) {
      // Delay showing the modal by 2 seconds
      setTimeout(() => {
        setShowModal(true);
      }, 2000);
      // Disable all clickable links on the homepage
      //   const links = document.querySelectorAll("a");
      //   links.forEach((link) => {
      //     link.addEventListener("click", (e) => {
      //       e.preventDefault();
      //     });
      //   });
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDownload = () => {
    const resumeUrl = "/other/Mohanraj_CV.pdf";
    window.open(resumeUrl, "_blank");
  };

  const handleButtonClick = () => {
    window.open("https://mohanraj130298.wixstudio.io/portfolio", "_blank");
  };

  return (
    <div className={Styles.body}>
      <div
        className={`${Styles.backtest}  d-flex align-items-center justify-content-center`}
      >
        <span className={`${Styles.showcaseee}`}>I&apos;M IN</span>
      </div>
      <div>
        <div
          className={`${Styles.hero} p-3 d-flex align-items-start justify-content-center flex-column`}
        >
          <span className={Styles.design}>MOHANRAJ</span>
          <span className={Styles.design}>DESIGN</span>
          <span className={Styles.design}>ENTHUSIAST</span>
          <div className="d-flex d-inline-block">
            <Button
              variant="outline-light"
              onClick={handleDownload}
              className={`${Styles.button}`}
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

        <div className={`${Styles.slideover}`}></div>
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
          <div className={`${Styles.twoCon}`}>
            <div
              className={`${Styles.showcaseout} d-flex align-items-center justify-content-center`}
            >
              <Link href="/uidesigner">
                <Button className={Styles.devui}>UI UX</Button>
              </Link>
            </div>
            <div
              className={`${Styles.showcaseoutin} d-flex align-items-center justify-content-center`}
            >
              <Link href="/designer">
                <Button className={Styles.devui}>&MORE</Button>
              </Link>
            </div>
          </div>
          {/* <span>my works in</span> */}
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
            <div className={`${Styles.scroll}`}>
              <span>EXPLORE MY EARLY DESIGN</span>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-start">
            {/* <div className={Styles.imagepop} /> */}
            <div className={`${Styles.in} d-flex flex-column `}>
              <span className={Styles.intotext}>
                &quot;Step into the past! Explore my early design crafted on
                Wix—a showcase of customized creativity.&quot;
              </span>
              <span className={`${Styles.intotext}`}>
                Click the button for a glimpse of my old portfolio version.
              </span>
              <Button
                variant="dark"
                className={`${Styles.butto} px-5 mt-4 `}
                onClick={handleButtonClick}
              >
                <span className="pe-2">Visit old version</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        backdrop="static"
        keyboard={false}
        onHide={handleCloseModal}
      >
        <Modal.Body>
          <div className="d-flex flex-column" style={{ fontSize: "20px" }}>
            Switch to desktop for best view.
            <Button variant="dark" className="mt-3" onClick={handleCloseModal}>
              Okay, got it
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HomePage;
