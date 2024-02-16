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
          <span className={`${Styles.head} ps-4`}>UI DESIGNER</span>
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
                      onClick={handleShowEdit}
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
                        disabled
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
        <Image
          src="/UI/caseone.png"
          alt="caseone"
          layout="responsive"
          width={300}
          height={200}
        />

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
