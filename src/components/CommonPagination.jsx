// CommonPagination.jsx
import React from "react";
import { Box, IconButton, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        gap: 1.5,
        mt: 2,
        fontSize: "0.85rem",
        color: "text.secondary",
      }}
    >
      {/* Left Arrow */}
      <IconButton
        size="small"
        disableRipple
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        sx={{
          p: 0.4,
          color: page === 1 ? "#B0B0B0" : "text.primary",
        }}
      >
        <ArrowBackIcon sx={{ fontSize: 18, strokeWidth: 1, stroke: "currentColor" }} />
      </IconButton>

      {/* Page Button with Dropdown */}
      <Button
        variant="outlined"
        disableElevation
        endIcon={<ArrowDropDownIcon sx={{ fontSize: 18 }} />}
        sx={{
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.85rem",
          borderRadius: 1,
          px: 2,
          py: 0.3,
          height: 32,
          borderColor: "#D1D5DB",
          color: "text.primary",
        }}
      >
        Page {page}
      </Button>

      {/* "of X" + Item Range */}
      <Typography sx={{ fontSize: "0.8rem" }}>
        of {totalPages} ({startItem}–{endItem} of {totalItems})
      </Typography>

      {/* Right Arrow */}
      <IconButton
        size="small"
        disableRipple
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        sx={{
          p: 0.4,
          color: page === totalPages ? "#B0B0B0" : "text.primary",
        }}
      >
        <ArrowForwardIcon sx={{ fontSize: 18, strokeWidth: 1, stroke: "currentColor" }} />
      </IconButton>
    </Box>
  );
}