"use client";

import Styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div
      className={`${Styles.header} d-flex align-items-center justify-content-between p-4`}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <span className={`${Styles.home} `}>MO.</span>
      </Link>

      <div>
        <Button
          variant="outline-dark"
          onClick={handleShow}
          className={`${Styles.button} px-3`}
        >
          Menu
        </Button>

        <Offcanvas show={show} onHide={handleClose} placement={"bottom"}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="d-flex align-items-center justify-content-center flex-column">
              <Link href="/developer" className="nav-link">
                <span className={`${Styles.contact}`}>DEVELOPER</span>
              </Link>

              <Link href="/uidesigner" className="nav-link">
                <span className={`${Styles.contact}`}>UI</span>
              </Link>

              <Link href="/designer" className="nav-link">
                <span className={`${Styles.contact}`}>3D</span>
              </Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        <Link href="/contact" style={{ textDecoration: "none" }}>
          <Button className={`${Styles.contactme} ms-3 px-3`} variant="light">
            Contact
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
