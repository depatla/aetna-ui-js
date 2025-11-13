// ApprovedConfigurations.jsx
import React, { useState } from "react";
import styles from "./ApprovedConfigurations.module.css";

export default function ApprovedConfigurations() {
  const [activeTab, setActiveTab] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleTabChange = (_event, newValue) => {
    setActiveTab(newValue);
    setInputValue(""); // clear input on tab switch
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only digits, max 7
    if (/^\d*$/.test(value) && value.length <= 7) {
      setInputValue(value);
    }
  };

  const isPolicyholderTab = activeTab === 0;
  const isValid = inputValue.length === 7;

  return (
    <div className={styles.container}>
      {/* Section Title */}
      <h6 className={styles.title}>Approved configurations</h6>

      {/* Subtitle */}
      <p className={styles.subtitle}>
        Search for approved configurations by 7-digit plan approval number or by control number
      </p>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 0 ? styles.activeTab : ""}`}
          onClick={() => handleTabChange(null, 0)}
        >
          Search by policyholder number
        </button>
        <button
          className={`${styles.tab} ${activeTab === 1 ? styles.activeTab : ""}`}
          onClick={() => handleTabChange(null, 1)}
        >
          Search by control number
        </button>
        <div className={styles.tabIndicator} style={{ left: activeTab === 0 ? "0" : "50%" }} />
      </div>

      {/* Search Row */}
      <div className={styles.searchRow}>
        <input
          className={styles.input}
          placeholder={isPolicyholderTab ? "XXXXXXX" : "xxxxxxx"}
          value={inputValue}
          onChange={handleInputChange}
          maxLength={7}
          inputMode="numeric"
        />

        <button className={styles.button} disabled={!isValid}>
          Search
          <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}