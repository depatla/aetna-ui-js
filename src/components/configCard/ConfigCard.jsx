import React from "react";
import styles from "./card.module.css";
import iconStyles from "./icons.module.css";

export default function ConfigCard({
  status,
  company,
  plan,
  policyId,
  approvalRequired,
  age,
  resolutionDate,
  lastUpdated,
  previewCount,
}) {
  return (
    <div className={styles.card}>
      {/* LEFT SIDE */}
      <div className="grid gap-1">
        {/* Status Row */}
        <div className="flex items-center gap-2">
          <div className={styles.statusDot}></div>
          <p className="font-bold">{status}</p>
        </div>

        <p className="font-semibold">{company}</p>
        <p>{plan}</p>

        <p className="text-sm text-gray-500">{policyId}</p>

        {approvalRequired && (
          <p className="text-sm font-semibold text-red-600">
            Approval required
          </p>
        )}

        <p className="text-xs text-gray-500">{age}</p>
      </div>

      {/* RIGHT SIDE */}
      <div className={styles.rightGrid}>
        <div>
          <p className={styles.rightLabel}>Initiation date</p>
          <p className={styles.rightValue}>{resolutionDate}</p>
        </div>

        <div>
          <p className={styles.rightLabel}>Last updated</p>
          <p className={styles.rightValue}>{lastUpdated || "--"}</p>
        </div>
      </div>

      {/* FOOTER ACTION ROW */}
      <div className={styles.footer}>
        <button className={iconStyles.linkBtn}>
          <span className={iconStyles.eyeIcon}>👁️</span>
          Preview ID cards ({previewCount})
        </button>

        <button className={iconStyles.linkBtn}>
          View details
          <span className={iconStyles.arrowIcon}>›</span>
        </button>
      </div>
    </div>
  );
}
