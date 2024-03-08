"use client";

import Styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  return (
    <div
      className={`${Styles.header} d-flex align-items-center justify-content-between`}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <span className={`${Styles.home} `}>MO.</span>
      </Link>
      <div>
        <Link href="/contact" style={{ textDecoration: "none" }}>
          <Button className={`${Styles.contactme} px-4 py-2 `}>Contact</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
