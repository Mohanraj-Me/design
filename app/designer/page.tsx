"use client";

import Header from "../header/page";
import Styles from "./page.module.css";
import { Button } from "react-bootstrap";
import HoverCarousel from "hover-carousel";

const Designer = () => {
  const images = [
    "3D/3DA.png",
    "3D/3DB.png",
    "3D/3DD.png",
    "3D/3DC.png",
    "3D/3DE.jpg",
    "3D/3DF.jpg",
    "3D/3DG.jpg",
    "3D/3DI.jpg",
    "3D/3DH.jpg",
    "3D/3DK.jpg",
  ];

  return (
    <div>
      <Header />
      <div
        className={`${Styles.backer} d-flex align-items-center justify-content-between`}
      >
        <div className={`${Styles.knownTwo}`}>
          <div className="d-flex flex-column">
            <span className={`${Styles.head}`}>3D MODEL DESIGN</span>
            <span className={`${Styles.head}`}>LOGO WORKS</span>
            <span className={`${Styles.head}`}>MICROS & MORE</span>
          </div>

          <div>
            <div
              className={`${Styles.con} ps-4 align-item-center justify-content-start`}
            >
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                BLENDER
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                CATIA V5
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                SOLIDWORKS
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                AUTOCAD
              </Button>
              <Button
                className={`${Styles.buttonOne} px-5 py-2 mx-2 mt-3`}
                variant="outline-dark"
              >
                3D BUILDER
              </Button>
            </div>

            <div className="mt-5">
              <span
                className={`${Styles.showcase} d-flex align-item-center justify-content-center`}
              >
                SHOWCASE
              </span>

              <div className={`${Styles.image}`}>
                <HoverCarousel images={images} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designer;
