import React, { useState, useRef, useEffect } from "react";
import styles from "./ApprovedConfigurations.module.css";

export default function ApprovedConfigurations() {
  const [activeTab, setActiveTab] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const tabRefs = [useRef(null), useRef(null)];
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeEl = tabRefs[activeTab].current;
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.clientWidth,
      });
    }
  }, [activeTab]);

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 7) {
      setInputValue(value);
    }
  };

  const isValid = inputValue.length === 7;

  return (
    <div className={styles.container}>
      <h6 className={styles.title}>Approved configurations</h6>

      <p className={styles.subtitle}>
        Search for approved configurations by 7-digit plan approval number or by control number
      </p>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          ref={tabRefs[0]}
          className={`${styles.tab} ${activeTab === 0 ? styles.activeTab : ""}`}
          onClick={() => handleTabChange(0)}
        >
          Search by policyholder number
        </button>

        <button
          ref={tabRefs[1]}
          className={`${styles.tab} ${activeTab === 1 ? styles.activeTab : ""}`}
          onClick={() => handleTabChange(1)}
        >
          Search by control number
        </button>

        {/* Animated Indicator */}
        <div
          className={styles.tabIndicator}
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />
      </div>

      {/* Search Input */}
      <div className={styles.searchRow}>
        <input
          className={styles.input}
          placeholder={activeTab === 0 ? "XXXXXXX" : "xxxxxxx"}
          value={inputValue}
          onChange={handleInputChange}
          maxLength={7}
          inputMode="numeric"
        />

        <button className={styles.button} disabled={!isValid}>
          Search
          <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.134 17 3 13.866 3 10C3 6.134 6.134 3 10 3C13.866 3 17 6.134 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
