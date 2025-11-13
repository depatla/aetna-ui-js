import React from "react";
import styles from "./header.module.css";

export default function IDCardHeader() {
  return (
    <div className={styles.container}>
      {/* Purple strip */}
      <div className={styles.purpleBar}></div>

      {/* Title */}
      <h1 className={styles.title}>ID card management center</h1>

      {/* Subtitle */}
      <p className={styles.subtitle}>
        Approve ID cards, create configuration overrides and search for approved
        configurations.
      </p>
    </div>
  );
}
