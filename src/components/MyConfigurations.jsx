// MyConfigurations.jsx
import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  ListItemText,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ConfigCard from "./ConfigCard";
import CommonPagination from "./CommonPagination";

/* --------------------------------------------------------------
   Sort options – plain JS array (no `as const`)
   -------------------------------------------------------------- */
const sortOptions = [
  { label: "Oldest to newest (default)", value: "oldest" },
  { label: "Newest to oldest", value: "newest" },
  { label: "Ascending to descending", value: "asc" },
  { label: "Descending to ascending", value: "desc" },
];

export default function MyConfigurations() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 3;

  /* ---------- sort state ---------- */
  const [sort, setSort] = useState("newest"); // default
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleSortClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSortClose = () => setAnchorEl(null);

  const handleSortSelect = (value) => {
    setSort(value);
    setPage(1); // reset to first page
    handleSortClose();
  };

  /* ---------- raw data ---------- */
  const rawData = useMemo(() => [
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
  ], []);

const { sortedData, totalItems } = useMemo(() => {
  let sorted = [...rawData];

  if (sort === "oldest" || sort === "newest") {
    const parse = (dateStr) => {
      const [m, d, y] = dateStr.split('/').map(Number);
      return new Date(y, m - 1, d).getTime();
    };

    sorted.sort((a, b) => {
      const dateA = parse(a.lastUpdated);
      const dateB = parse(b.lastUpdated);
      return sort === "oldest" ? dateA - dateB : dateB - dateA;
    });
  } else if (sort === "asc") {
    sorted.sort((a, b) => a.company.localeCompare(b.company));
  } else if (sort === "desc") {
    sorted.sort((a, b) => b.company.localeCompare(a.company));
  }

  return { sortedData: sorted, totalItems: sorted.length };
}, [sort, rawData]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedData.slice(start, end);
  }, [sortedData, page]);

  const selectedLabel =
    sortOptions.find((o) => o.value === sort)?.label || "Select an option";

  return (
    <Box sx={{ width: "100%" }}>
      {/* Title */}
      <Typography sx={{ fontWeight: 700, fontSize: "1.5rem", mb: 1 }}>
        My configurations
      </Typography>

      {/* Showing count + Sort */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1.5,
        }}
      >
        <Typography sx={{ fontSize: "0.8rem", color: "text.secondary" }}>
          Showing {paginatedData.length} of {totalItems} configurations
        </Typography>

        {/* Sort UI */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "text.primary",
            }}
          >
            Sort by:
          </Typography>

          <Box>
            <IconButton
              size="small"
              onClick={handleSortClick}
              sx={{ p: 0, color: "primary.main" }}
            >
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  textTransform: "none",
                }}
              >
                {selectedLabel}
              </Typography>
              <ArrowDropDownIcon sx={{ fontSize: 18 }} />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleSortClose}
              PaperProps={{ sx: { mt: 0.5, minWidth: 220 } }}
            >
              {sortOptions.map((opt) => (
                <MenuItem
                  key={opt.value}
                  selected={opt.value === sort}
                  onClick={() => handleSortSelect(opt.value)}
                >
                  <ListItemText primary={opt.label} />
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Box>

      {/* Cards */}
      <Box sx={{ display: "grid", gap: 2 }}>
        {paginatedData.map((config, i) => (
          <ConfigCard key={i} {...config} />
        ))}
      </Box>

      {/* Pagination */}
      <CommonPagination
        page={page}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onChange={setPage}
      />
    </Box>
  );
}