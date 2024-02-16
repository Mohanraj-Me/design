"use client";

import React, { useState } from "react";
import Styles from "./page.module.css";
import { Button, Modal, Carousel } from "react-bootstrap";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import Image from "next/image";

const Projecttwo = () => {
  const [isSection1Open, setIsSection1Open] = useState(false);
  const [isSection2Open, setIsSection2Open] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleSection1 = () => {
    setIsSection1Open(!isSection1Open);
    setIsSection2Open(false);
  };

  const toggleSection2 = () => {
    setIsSection2Open(!isSection2Open);
    setIsSection1Open(false);
  };

  return (
    <div>
      <div>
        <Button
          variant="dark"
          className={`${Styles.collap} ms-5 mt-5 px-4 d-flex align-items-center justify-content-between`}
          onClick={toggleSection1}
        >
          <span>
            <b>Project 1 : </b>
            React Quiz Application
          </span>

          {isSection1Open ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
        </Button>

        {isSection1Open && (
          <div className="ms-5 d-flex justify-content-start align-items-center">
            <div className="m-5">
              <Carousel controls={false} className={`${Styles.img} d-block`}>
                <Carousel.Item>
                  <Image
                    className={`${Styles.img} d-block`}
                    src={"trivia.png"}
                    alt="project image"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className={`${Styles.img} d-block`}
                    src={"trivia.png"}
                    alt="project image"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className={`${Styles.img} d-block`}
                    src={"trivia.png"}
                    alt="project image"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className={`${Styles.img} d-block`}
                    src={"trivia.png"}
                    alt="project image"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div>
              <span className={`${Styles.info} d-flex flex-column`}>
                This React application, styled with Material UI, is a
                customizable quiz app. Users can set the number of questions,
                choose categories, and select difficulty levels. After
                completing the quiz, a result text is displayed based on the
                user&apos;s score, offering a personalized summary.
              </span>
              <Button
                className={`${Styles.button} my-3 px-5`}
                variant="dark"
                onClick={handleShow}
              >
                GitHub Code
              </Button>
            </div>

            <Modal
              dialogClassName={Styles.modalBox}
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Body></Modal.Body>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal>
          </div>
        )}
      </div>
      <div>
        <Button
          variant="dark"
          className={`${Styles.collap} ms-5 mt-3 px-4 d-flex align-items-center justify-content-between`}
          onClick={toggleSection2}
        >
          <span>
            <b>Project 2 : </b>
            React To-do list
          </span>

          {isSection2Open ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
        </Button>
        {isSection2Open && (
          <div className="ms-5 d-flex justify-content-start align-items-center">
            <div className="m-5">
              <Image src={"trivia.png"} className={Styles.img} alt="image" />
            </div>
            <div>
              <span className={`${Styles.info} d-flex flex-column`}>
                This React application, styled with Material UI, is a
                customizable quiz app. Users can set the number of questions,
                choose categories, and select difficulty levels. After
                completing the quiz, a result text is displayed based on the
                user&apos;s score, offering a personalized summary.
              </span>
              <Button
                className={`${Styles.button} my-3 px-5`}
                variant="dark"
                onClick={handleShow}
              >
                GitHub Code
              </Button>
            </div>

            <Modal
              dialogClassName={Styles.modalBox}
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Body></Modal.Body>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projecttwo;
