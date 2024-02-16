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
          <div>
            <div className="d-flex align-item-center justify-content-start">
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

            <div className="d-flex align-item-center justify-content-start">
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
                <div className="d-flex">
                  <div>
                    <Button
                      className={`${Styles.card} ms-2 p-5 d-flex flex-column justify-content-start align-items-start`}
                    >
                      <span
                        style={{ marginBottom: "-50px" }}
                        className={Styles.gap}
                      >
                        REACT
                      </span>
                      <span
                        style={{ marginBottom: "-50px" }}
                        className={Styles.gap}
                      >
                        QUIZ
                      </span>
                      <span
                        style={{ marginBottom: "-50px" }}
                        className={Styles.gap}
                      >
                        APP
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
                          REACT
                        </span>
                        <span
                          style={{ marginBottom: "-50px" }}
                          className={Styles.gap}
                        >
                          TODO
                        </span>
                        <span
                          style={{ marginBottom: "-50px" }}
                          className={Styles.gap}
                        >
                          LIST
                        </span>{" "}
                      </Button>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex ">
                    <Button
                      className={`${Styles.cardland} ms-2 mt-5 p-5 d-flex flex-column justify-content-start align-items-start`}
                      href="/"
                    >
                      <span
                        style={{ marginBottom: "-50px" }}
                        className={Styles.gap}
                      >
                        NEXT.JS
                      </span>
                      <span
                        style={{ marginBottom: "-50px" }}
                        className={Styles.gap}
                      >
                        PORTFOLIO
                      </span>
                      <span
                        style={{ marginBottom: "-50px" }}
                        className={Styles.gap}
                      >
                        DESIGN
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
