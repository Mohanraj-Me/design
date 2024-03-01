"use client";
import Header from "../header/page";

import Styles from "./page.module.css";
import { Button, Accordion, Card, Spinner } from "react-bootstrap";

const Developer = () => {
  return (
    <div>
      <Header />
      <div
        className={`${Styles.backer} d-flex align-items-center justify-content-between p-4`}
      >
        <div className={`${Styles.knownTwo}`}>
          <span className={Styles.head}>DEVELOPER</span>
          <div className={Styles.align}>
            <div
              className={`${Styles.con} ps-4 align-item-center justify-content-start`}
            >
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                HTML
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                CSS
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                SCSS
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                BOOTSTRAP
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                JAVASCRIPT
              </Button>

              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                TYPESCRIPT
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                REACT.JS
              </Button>
            </div>
            <div
              className={`${Styles.con} ps-4 align-item-center justify-content-start`}
            >
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                NEXT.JS
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                REDUX TOOLKIT
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                GIT
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                GITHUB
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                KONVA
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                LEAFLET
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                POSTGRESQL
              </Button>
            </div>

            <div className={`${Styles.projecthead} `}>
              <div>
                <div className={`${Styles.projectheaddiv} `}>
                  <Button
                    className={`${Styles.card} ms-2  d-flex flex-column justify-content-start align-items-start`}
                  >
                    <span
                      style={{ marginBottom: "-40px" }}
                      className={Styles.gap}
                    >
                      REACT
                    </span>
                    <span
                      style={{ marginBottom: "-40px" }}
                      className={Styles.gap}
                    >
                      QUIZ
                    </span>
                    <span
                      style={{ marginBottom: "-40px" }}
                      className={Styles.gap}
                    >
                      APP
                    </span>
                    <span
                      style={{ marginBottom: "-40px" }}
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

                  <Button
                    disabled
                    className={`${Styles.cardland} ms-5 d-flex flex-column justify-content-start align-items-start`}
                  >
                    <span
                      style={{ marginBottom: "-40px" }}
                      className={Styles.gap}
                    >
                      REACT
                    </span>
                    <span
                      style={{ marginBottom: "-40px" }}
                      className={Styles.gap}
                    >
                      TODO
                    </span>
                    <span
                      style={{ marginBottom: "-40px" }}
                      className={Styles.gap}
                    >
                      APPLICATION
                    </span>
                    <span
                      style={{ marginBottom: "-40px" }}
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
                <Button
                  className={`${Styles.cardland} ms-2 mt-5 d-flex flex-column justify-content-start align-items-start`}
                  href="/"
                >
                  <span
                    style={{ marginBottom: "-40px" }}
                    className={Styles.gap}
                  >
                    NEXT.JS
                  </span>
                  <span
                    style={{ marginBottom: "-40px" }}
                    className={Styles.gap}
                  >
                    PORTFOLIO
                  </span>
                  <span
                    style={{ marginBottom: "-40px" }}
                    className={Styles.gap}
                  >
                    DESIGN
                  </span>
                  <span
                    style={{ marginBottom: "-40px" }}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
