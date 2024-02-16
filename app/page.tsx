"use client";
import React, { useEffect, useState } from "react";
import Header from "./header/page";
import LoadingSpinner from "./loading/page";
import Styles from "./page.module.css";
import HomePage from "./homepage/page";

export default function Home() {
  const [isLoadingg, setIsLoadingg] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can replace this with your actual data loading logic)
    const fakeApiCall = setTimeout(() => {
      setIsLoadingg(false);
    }, 2000);

    return () => clearTimeout(fakeApiCall); // Cleanup on component unmount
  }, []);

  return (
    <div>
      {isLoadingg ? (
        <LoadingSpinner />
      ) : (
        <div>
          <Header />
          <HomePage />
        </div>
      )}
    </div>
  );
}
