"use client";

import { useState } from "react";
import Header from "../header/page";
import Styles from "./page.module.css";
import { Button, Modal } from "react-bootstrap";
import HoverCarousel from "hover-carousel";
import Image from "next/image";

const Developer = () => {
  const [edit, setEdit] = useState(false);
  const handleCloseEdit = () => setEdit(false);
  const handleShowEdit = () => setEdit(true);

  const handleOpenFigma = () => {
    window.open(
      "https://www.figma.com/proto/krFFajeKrkTvKef0s0HRZ7/Donation-Webdesign?type=design&node-id=1-2&t=PUR8JAYKcoTo8bHl-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1&mode=design",
      "_blank"
    );
  };

  const images = [
    "UI/a.jpg",
    "UI/b.png",
    "UI/c.png",
    "UI/d.png",
    "UI/e.jpg",
    "UI/f.png",
    "UI/g.png",
    "UI/h.jpg",
    "UI/i.png",
    "UI/j.png",
  ];

  return (
    <div>
      <Header />
      <div
        className={`${Styles.backer} d-flex align-items-center justify-content-between`}
      >
        <div className={`${Styles.knownTwo}`}>
          <span className={`${Styles.head} ps-4`}>UI UX DESIGN</span>
          <div>
            <div className="ps-4 d-flex align-item-center justify-content-start">
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                FIGMA
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                PHOTOSHOP
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                ILLUSTRATOR
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                WIX
              </Button>
            </div>

            <div className="ps-4 d-flex align-item-center justify-content-start">
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                WEBFLOW
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                SPLINE
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                CANVA
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                MIRO
              </Button>
            </div>

            <div className={`${Styles.projecthead} ps-4`}>
              <div>
                <div className="d-flex">
                  <div>
                    <Button
                      className={`${Styles.card} ms-2 p-5 d-flex flex-column justify-content-start align-items-start`}
                      // onClick={handleShowEdit}
                      onClick={handleOpenFigma}
                    >
                      <span
                        style={{ marginBottom: "-50px" }}
                        className={Styles.gap}
                      >
                        WEB
                      </span>
                      <span
                        style={{ marginBottom: "-50px" }}
                        className={Styles.gap}
                      >
                        DESIGN
                      </span>
                      <span
                        style={{ marginBottom: "-50px" }}
                        className={Styles.gap}
                      >
                        CASE
                      </span>
                      <span
                        style={{ marginBottom: "-50px" }}
                        className={Styles.gap}
                      >
                        STUDY
                      </span>
                      <span
                        style={{ marginBottom: "-50px" }}
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
                  </div>
                  <div>
                    <div>
                      <div
                        className={`${Styles.cardland1} disabled ms-2 p-5 d-flex flex-column justify-content-start align-items-start`}
                      ></div>
                    </div>
                    <div className="d-flex ">
                      <Button
                        className={`${Styles.cardland} ms-5 p-5 d-flex flex-column justify-content-start align-items-start`}
                      >
                        <span
                          style={{ marginBottom: "-50px" }}
                          className={Styles.gap}
                        >
                          MOBILE
                        </span>
                        <span
                          style={{ marginBottom: "-50px" }}
                          className={Styles.gap}
                        >
                          APP
                        </span>
                        <span
                          style={{ marginBottom: "-50px" }}
                          className={Styles.gap}
                        >
                          CASESTUDY
                        </span>
                        <span
                          style={{ marginBottom: "-50px" }}
                          className={Styles.gap}
                        >
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
            <div className="mt-5">
              <span
                className={`${Styles.showcase} d-flex align-item-center justify-content-center`}
              >
                SHOWCASE
              </span>
              <HoverCarousel images={images} />
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={edit}
        onHide={handleCloseEdit}
        backdrop="static"
        keyboard={false}
        dialogClassName={Styles.modal}
        centered
      >
        {/* <Image
          src="/UI/caseone.png"
          alt="caseone"
          layout="responsive"
          width={300}
          height={200}
        /> */}

        <div className="d-flex mx-5 my-4 justify-content-between align-items-center">
          <span className={`${Styles.figma}`}>DONATION FLOW UI</span>
          <div>
            <Button
              className={`${Styles.closebutton} px-5`}
              onClick={handleCloseEdit}
            >
              Cancel
            </Button>
            <Button
              className={`${Styles.closebutton} mx-3 px-5`}
              onClick={handleOpenFigma}
            >
              Open figma file
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Developer;
