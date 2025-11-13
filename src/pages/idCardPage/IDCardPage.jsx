import React from "react";
import styles from "./page.module.css";

import IDCardHeader from "../../components/idCardHeader/IDCardHeader";
import MyConfigurations from "../../components/configurations/MyConfigurations";
import RightSideFilterForm from "../../components/filter/Filter";
import ApprovedConfigurations from "../../components/approvedCofiguration/ApprovedConfigurations";

export default function IDCardPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* Full-width header */}
      <div className={styles.headerWrapper}>
        <IDCardHeader />
      </div>

      {/* Container */}
      <div className={styles.mainContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.gridWrapper}>
            {/* LEFT SIDE */}
            <div className={styles.leftColumn}>
              <MyConfigurations />
            </div>

            {/* RIGHT SIDE */}
            <div className={styles.rightColumn}>
              <RightSideFilterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <ApprovedConfigurations />
      </div>
    </div>
  );
}
