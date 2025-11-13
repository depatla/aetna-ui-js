import React from "react";
import styles from "./pagination.module.css";
import icons from "./icons.module.css";

export default function CommonPagination({
  page,
  totalItems,
  itemsPerPage,
  onChange,
}) {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const startItem = totalItems === 0 ? 0 : (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, totalItems);

  return (
    <div className={styles.wrapper}>
      {/* LEFT ARROW */}
      <button
        className={`${styles.arrowBtn} ${
          page === 1 ? styles.arrowDisabled : ""
        }`}
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
      >
        <span className={icons.arrowLeft}>‹</span>
      </button>

      {/* PAGE BUTTON */}
      <button className={styles.pageButton}>
        Page {page}
        <span className={icons.dropdown}>▾</span>
      </button>

      {/* "of X" text */}
      <span className={styles.rangeText}>
        of {totalPages} ({startItem}–{endItem} of {totalItems})
      </span>

      {/* RIGHT ARROW */}
      <button
        className={`${styles.arrowBtn} ${
          page === totalPages ? styles.arrowDisabled : ""
        }`}
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
      >
        <span className={icons.arrowRight}>›</span>
      </button>
    </div>
  );
}
