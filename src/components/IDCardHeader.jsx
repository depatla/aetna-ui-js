// IDCardHeader.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function IDCardHeader() {
  return (
    <Container sx={{ px: 4 }}>
      {/* Top purple Brand Strip */}
      <Box
        sx={{
          height: 2,
          bgcolor: "primary.main",
          borderRadius: 1,
          mb: 2,
        }}
      />

      {/* Title */}
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, color: "#111827" }}
      >
        ID card management center
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body2"
        sx={{
          mt: 0.5,
          color: "#4B5563",
          fontSize: "0.9rem",
        }}
      >
        Approve ID cards, create configuration overrides and search for approved configurations.
      </Typography>
    </Container>
  );
}