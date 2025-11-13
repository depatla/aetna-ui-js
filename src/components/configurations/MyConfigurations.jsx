import React, { useState, useMemo } from "react";
import styles from "./layout.module.css";
import menuStyles from "./sortMenu.module.css";
import ConfigCard from "../configCard/ConfigCard";
import CommonPagination from "../pagination/CommonPagination";

const sortOptions = [
  { label: "Oldest to newest (default)", value: "oldest" },
  { label: "Newest to oldest", value: "newest" },
  { label: "Ascending to descending", value: "asc" },
  { label: "Descending to ascending", value: "desc" },
];

export default function MyConfigurations() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  /* ---------- sort dropdown ---------- */
  const [sort, setSort] = useState("newest");
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);
  const closeMenu = () => setOpenMenu(false);

  const handleSortSelect = (value) => {
    setSort(value);
    setPage(1);
    closeMenu();
  };

  /* ---------- Data ---------- */
  const rawData = useMemo(
    () => [
      {
        status: "Pending",
        company: "Ford Motor Co",
        plan: "Open Choice PPO Medical",
        policyId: "PMH0355166",
        approvalRequired: true,
        age: "2 days old",
        resolutionDate: "11/03/2025",
        lastUpdated: "11/03/2025",
        previewCount: 11,
      },
      {
        status: "Pending",
        company: "Ford Motor Co",
        plan: "Open Choice PPO Dental",
        policyId: "PMH0355124",
        approvalRequired: true,
        age: "3 days old",
        resolutionDate: "11/02/2025",
        lastUpdated: "11/02/2025",
        previewCount: 8,
      },
      {
        status: "Pending",
        company: "LMI Co",
        plan: "Open Choice PPO Dental",
        policyId: "PMH0355224",
        approvalRequired: true,
        age: "1 day old",
        resolutionDate: "10/23/2025",
        lastUpdated: "10/23/2025",
        previewCount: 6,
      },
      {
        status: "Approved",
        company: "Tesla Inc",
        plan: "Premium Medical Plan",
        policyId: "PMH0355999",
        approvalRequired: false,
        age: "5 days old",
        resolutionDate: "11/01/2025",
        lastUpdated: "11/01/2025",
        previewCount: 15,
      },
      {
        status: "Rejected",
        company: "Apple Corp",
        plan: "Basic Dental",
        policyId: "PMH0355777",
        approvalRequired: true,
        age: "1 week old",
        resolutionDate: "10/30/2025",
        lastUpdated: "10/30/2025",
        previewCount: 3,
      },
    ],
    []
  );

  /* ---------- Sorting ---------- */
  const { sortedData, totalItems } = useMemo(() => {
    let sorted = [...rawData];

    if (sort === "oldest" || sort === "newest") {
      const parse = (d) => {
        const [m, day, y] = d.split("/").map(Number);
        return new Date(y, m - 1, day).getTime();
      };
      sorted.sort((a, b) =>
        sort === "oldest"
          ? parse(a.lastUpdated) - parse(b.lastUpdated)
          : parse(b.lastUpdated) - parse(a.lastUpdated)
      );
    } else if (sort === "asc") {
      sorted.sort((a, b) => a.company.localeCompare(b.company));
    } else if (sort === "desc") {
      sorted.sort((a, b) => b.company.localeCompare(a.company));
    }

    return { sortedData: sorted, totalItems: sorted.length };
  }, [sort, rawData]);

  /* ---------- Pagination ---------- */
  const paginatedData = sortedData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const selectedLabel =
    sortOptions.find((o) => o.value === sort)?.label || "Select";

  return (
    <div className={styles.wrapper}>
      {/* Title */}
      <h2 className={styles.title}>My configurations</h2>

      {/* Header Row */}
      <div className={styles.headerRow}>
        <p className={styles.countText}>
          Showing {paginatedData.length} of {totalItems} configurations
        </p>

        {/* Sort dropdown */}
        <div className={styles.sortRow}>
          <p className={styles.sortLabel}>Sort by:</p>

          <div className={menuStyles.dropdownWrapper}>
            <button className={menuStyles.dropdownButton} onClick={toggleMenu}>
              {selectedLabel}
              <span className={menuStyles.icon}>▾</span>
            </button>

            {openMenu && (
              <div className={menuStyles.menu}>
                {sortOptions.map((opt) => (
                  <div
                    key={opt.value}
                    className={`${menuStyles.menuItem} ${
                      opt.value === sort ? menuStyles.activeItem : ""
                    }`}
                    onClick={() => handleSortSelect(opt.value)}
                  >
                    {opt.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className={styles.cardGrid}>
        {paginatedData.map((item, idx) => (
          <ConfigCard key={idx} {...item} />
        ))}
      </div>

      <CommonPagination
        page={page}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onChange={setPage}
      />
    </div>
  );
}
