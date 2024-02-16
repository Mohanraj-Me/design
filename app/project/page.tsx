"use client";

import React, { useState } from "react";
import Styles from "./page.module.css";
import { Button, Modal, Carousel } from "react-bootstrap";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";

const Project = () => {
  const [isSection1Open, setIsSection1Open] = useState(false);

  const toggleSection1 = () => {
    setIsSection1Open(!isSection1Open);
  };

  return (
    <div>
      {/* <Button
        variant="light"
        className={`${Styles.collap} ms-2 mt-5 px-4 d-flex align-items-center justify-content-between`}
        onClick={toggleSection1}
      >
        <span>
          <b>Project</b>
        </span> */}

      {/* {isSection1Open ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />} */}
      {/* </Button> */}

      {/* {isSection1Open && ( */}
      <div className="d-flex">
        <div>
          <Button
            className={`${Styles.card} ms-2 p-5 d-flex flex-column justify-content-start align-items-start`}
          >
            <span style={{ marginBottom: "-50px" }}>REACT</span>
            <span style={{ marginBottom: "-50px" }}>QUIZ</span>
            <span style={{ marginBottom: "-50px" }}>APP</span>
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
              <span style={{ marginBottom: "-50px" }}>REACT</span>
              <span style={{ marginBottom: "-50px" }}>TODO</span>
              <span style={{ marginBottom: "-50px" }}>LIST</span>{" "}
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="d-flex ">
          <Button
            className={`${Styles.cardland} ms-2 mt-5 p-5 d-flex flex-column justify-content-start align-items-start`}
          >
            <span style={{ marginBottom: "-50px" }}>REACT</span>
            <span style={{ marginBottom: "-50px" }}>CHAT</span>
            <span style={{ marginBottom: "-50px" }}>APPLICATION</span>{" "}
          </Button>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Project;
