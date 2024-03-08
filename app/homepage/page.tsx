"use client";
import React, { useEffect, useState } from "react";
import { Button, Badge } from "react-bootstrap";
import Styles from "./page.module.css";
import baffle from "baffle";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
    const heroHead = document.querySelectorAll(`.${Styles.heroHead}`);

    heroHead.forEach((heroHead) => {
      const text = baffle(heroHead);
      text.set({
        characters: "IQLWXZY",
        speed: 100,
      });

      text.start();
      text.reveal(100000);
    });
  }, []);

  const handleDownload = () => {
    const resumeUrl = "./other/Mohanraj_CV.pdf";
    window.open(resumeUrl, "_blank");
  };

  const handleButtonClick = () => {
    window.open("https://mohanraj130298.wixstudio.io/portfolio", "_blank");
  };

  return (
    <div className={Styles.body}>
      <div
        className={`${Styles.fixed}  d-flex flex-column align-items-center justify-content-center`}
      >
        <span className={`${Styles.fixedHead}`}>SHOWCASE</span>
      </div>

      <div
        className={`${Styles.hero} p-3 d-flex align-items-center justify-content-center flex-column`}
      >
        <span className={Styles.heroHead}>MOHANRAJ</span>
        <span className={Styles.heroHead}>DESIGN</span>
        <span className={Styles.heroHead}>ENTHUSIAST</span>
      </div>

      <div
        className={`${Styles.heroTwo}  p-3 d-flex align-items-center justify-content-center text-center flex-column`}
      >
        <span className={Styles.heroTwoPara}>
          I thrive on collaborating with creative teams and pushing the
          boundaries of what&apos;s possible in the design world. Whether
          it&apos;s crafting captivating graphics, crafting user-friendly web
          experiences, sculpting innovative products, weaving fashion
          statements, or diving into any other medium, I&apos;m always excited
          to embark on new journeys and stretch the limits of my imagination.
        </span>
        <div className="d-flex d-inline-block">
          <Button onClick={handleDownload} className={`${Styles.resumeButton}`}>
            <span className="me-3">RESUME</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708" />
            </svg>
          </Button>
        </div>
      </div>
      <div
        className={`${Styles.developer} d-flex align-items-center justify-content-center p-5 w-100`}
      >
        <div className={`${Styles.developerhero} text-center`}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <span className={`${Styles.developerhead}`}>DEVELOPER</span>
          </div>
          <div className="d-flex justify-content-center my-5 ">
            <Image
              src="./html.png"
              alt="Donation UI design"
              width={50}
              height={50}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./css.png"
              alt="Donation UI design"
              width={50}
              height={50}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./scss.png"
              alt="Donation UI design"
              width={80}
              height={50}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./boot.png"
              alt="Donation UI design"
              width={60}
              height={50}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./tailwind.png"
              alt="Donation UI design"
              width={80}
              height={50}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./js.png"
              alt="Donation UI design"
              width={50}
              height={50}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./ts.png"
              alt="Donation UI design"
              width={50}
              height={50}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./react.png"
              alt="Donation UI design"
              width={60}
              height={50}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./next.svg"
              alt="Donation UI design"
              width={50}
              height={50}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />

            <Image
              src="./redux.png"
              alt="Donation UI design"
              width={50}
              height={50}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./Git.png"
              alt="Donation UI design"
              width={50}
              height={50}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./github.png"
              alt="Donation UI design"
              width={50}
              height={50}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./konva.png"
              alt="Donation UI design"
              width={50}
              height={50}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                marginRight: "60px",
              }}
            />
            <Image
              src="./post.png"
              alt="Donation UI design"
              width={50}
              height={50}
              style={{
                filter:
                  "brightness(0) invert(1) grayscale(100%) contrast(100%)",
                // marginRight: "60px",
              }}
            />
          </div>

          <div className={`${Styles.developercard} d-flex flex-wrap`}>
            <Button
              className={`${Styles.card}  d-flex flex-column justify-content-start align-items-start`}
              onClick={handleScrollToTop}
            >
              <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                NEXT.JS
              </span>
              <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                PORTFOLIO
              </span>
              <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                DESIGN
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
                  <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                </svg>
              </span>
            </Button>

            <Button
              disabled
              className={`${Styles.card}  d-flex flex-column justify-content-start align-items-start`}
            >
              <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                REACT
              </span>
              <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                QUIZ
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
      <div
        className={`${Styles.designer} d-flex align-items-center justify-content-center p-5 w-100`}
      >
        <div className={`${Styles.designerhero} text-center`}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <span className={`${Styles.designerhead}`}>DESIGNER</span>
          </div>
          <div className="d-flex justify-content-center my-5 ">
            <Image
              src="./figma.png"
              alt="Donation UI design"
              width={60}
              height={60}
              style={{
                marginRight: "60px",
              }}
              className={Styles.icon}
            />
            <Image
              src="./Illustrator.jpg"
              alt="Donation UI design"
              width={60}
              height={60}
              style={{
                marginRight: "60px",
              }}
              className={Styles.icon}
            />
            <Image
              src="./photoshop.png"
              alt="Donation UI design"
              width={60}
              height={60}
              style={{
                marginRight: "60px",
              }}
              className={Styles.icon}
            />
            <Image
              src="./miro.png"
              alt="Donation UI design"
              width={60}
              height={60}
              style={{
                marginRight: "60px",
              }}
              className={Styles.icon}
            />
            <Image
              src="./webflow.png"
              alt="Donation UI design"
              width={60}
              height={60}
              style={{
                marginRight: "60px",
              }}
              className={Styles.icon}
            />
            <Image
              src="./wix.png"
              alt="Donation UI design"
              width={60}
              height={60}
              style={{
                marginRight: "60px",
              }}
              className={Styles.icon}
            />
            <Image
              src="./spline.jpeg"
              alt="Donation UI design"
              width={60}
              height={60}
              style={{
                marginRight: "60px",
              }}
              className={Styles.icon}
            />
            <Image
              src="./canva.jpg"
              alt="Donation UI design"
              width={60}
              height={60}
              style={{
                marginRight: "60px",
              }}
              className={Styles.icon}
            />
            <Image
              src="./blend.png"
              alt="Donation UI design"
              width={60}
              height={60}
              style={{ marginRight: "60px" }}
              className={Styles.icon}
            />
            <Image
              src="./catia.png"
              alt="Donation UI design"
              width={60}
              height={60}
              style={{
                marginRight: "60px",
              }}
              className={Styles.icon}
            />
            <Image
              src="./solid.jpg"
              alt="Donation UI design"
              width={60}
              height={60}
              style={{
                marginRight: "60px",
              }}
              className={Styles.icon}
            />
            <Image
              src="./autocad.jpg"
              alt="Donation UI design"
              width={60}
              height={60}
              style={{
                marginRight: "60px",
              }}
              className={Styles.icon}
            />
            <Image
              src="./builder.png"
              alt="Donation UI design"
              width={60}
              height={60}
              style={{ marginRight: "60px" }}
              className={Styles.icon}
            />
          </div>

          <div className={`${Styles.designercard} d-flex flex-wrap`}>
            <Link href="/caseone" className="nav-link">
              <Button
                className={`${Styles.cardtwo}  d-flex flex-column justify-content-start align-items-start`}
              >
                <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                  WEB PAGE
                </span>
                <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                  & APP
                </span>
                <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                  UI DESIGN
                </span>
                <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
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
            <Link href="/casetwo" className="nav-link">
              <Button
                className={`${Styles.cardtwo}  d-flex flex-column justify-content-start align-items-start`}
              >
                <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                  STORYCUT
                </span>
                <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                  APP
                </span>
                <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
                  UI DESIGN
                </span>
                <span style={{ marginBottom: "-35px" }} className={Styles.gap}>
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
          <div className={Styles.cardtext}>
            <Badge pill bg="warning">
              User Interface
            </Badge>{" "}
            - Mobile launcher design
          </div>
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
          <div className={Styles.cardtext}>
            <Badge pill bg="warning">
              User Interface
            </Badge>{" "}
            - Coffee store App design
          </div>
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
          <div className={Styles.cardtext}>
            <Badge pill bg="warning">
              User Interface
            </Badge>{" "}
            - TO DO Application
          </div>
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
          <div className={Styles.cardtext}>
            <Badge pill bg="warning">
              User Interface
            </Badge>{" "}
            - Calcus App design
          </div>
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
          <div className={Styles.cardtext}>
            <Badge pill bg="warning">
              User Interface
            </Badge>{" "}
            - Smart watch design
          </div>
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
          <div className={Styles.cardtext}>
            <Badge pill bg="warning">
              User Interface
            </Badge>{" "}
            - Comic App design
          </div>
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
          <div className={Styles.cardtext}>
            <Badge pill bg="warning">
              User Interface
            </Badge>{" "}
            - Music App design
          </div>
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
          <div className={Styles.cardtext}>
            <Badge pill bg="warning">
              User Interface
            </Badge>{" "}
            - Travel App design
          </div>
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
          <div className={Styles.cardtext}>
            <Badge pill bg="warning">
              User Interface
            </Badge>{" "}
            - Team Build App design
          </div>
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
          <div className={Styles.cardtext}>
            <Badge pill bg="warning">
              User Interface
            </Badge>{" "}
            - File Manager App design
          </div>
        </div>
        <div className={Styles.cardshow}>
          <Image
            src="./3D/3DA.png"
            alt="Donation UI design"
            width={1334}
            height={4166}
            layout="responsive"
            className={Styles.cardimage}
          />
          <div className={Styles.cardtext}>
            <Badge pill bg="primary">
              3D Modeling
            </Badge>{" "}
            - Robos 3D design
          </div>
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
          <div className={Styles.cardtext}>
            <Badge pill bg="primary">
              3D Modeling
            </Badge>{" "}
            - Mini Room 3D design
          </div>
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
          <div className={Styles.cardtext}>
            <Badge pill bg="primary">
              3D Modeling
            </Badge>{" "}
            - Secret Room 3D design
          </div>
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
          <div className={Styles.cardtext}>
            <Badge pill bg="primary">
              3D Modeling
            </Badge>{" "}
            - Keyboard 3D design
          </div>
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
          <div className={Styles.cardtext}>
            {" "}
            <Badge pill bg="dark">
              Logo Design
            </Badge>
          </div>
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
          <div className={Styles.cardtext}>
            <Badge pill bg="dark">
              Logo Design
            </Badge>
          </div>
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
          <div className={Styles.cardtext}>
            <Badge pill bg="danger">
              Microart
            </Badge>{" "}
            - Pencil Curving
          </div>
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
          <div className={Styles.cardtext}>
            {" "}
            <Badge pill bg="info">
              HandCraft
            </Badge>{" "}
            - Pendents
          </div>
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
          <div className={Styles.cardtext}>
            {" "}
            <Badge pill bg="success">
              Graphic Design
            </Badge>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mb-5">
        <Button
          className={`${Styles.buttonback} d-flex align-items-center px-4 py-3
        `}
          variant="light"
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
          <span className="ms-3">Back to top</span>
        </Button>
      </div>
      <div>
        <div className={`${Styles.in} d-flex flex-column align-items-center `}>
          <span className={Styles.intotext}>
            &quot;Step into the past! Explore my early design crafted on Wix—a
            showcase of customized creativity.&quot;
          </span>
          <span className={`${Styles.intotext}`}>
            Click the button for a glimpse of my old portfolio version.
          </span>
          <Button
            variant="dark"
            className={`${Styles.footButton} px-5 mt-4 `}
            onClick={handleButtonClick}
          >
            <span className="pe-2">Visit old version</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
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
  );
};

export default HomePage;
