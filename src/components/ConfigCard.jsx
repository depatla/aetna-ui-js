// ConfigCard.jsx
import React from "react";
import { Box, Paper, Typography, Link } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

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
    <Paper
      sx={{
        position: "relative",
        p: 2.2,
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        overflow: "hidden",
        borderRadius: 2,
        "&::before": {
          content: '""',
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 8,
          background:
            "linear-gradient(180deg, #6A1B9A 0%, #8E24AA 50%, #B388FF 100%)",
        },
      }}
    >
      {/* LEFT SIDE */}
      <Box sx={{ display: "grid", gap: 0.5 }}>
        {/* Status */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: "#1E40AF",
            }}
          />
          <Typography sx={{ fontWeight: 700 }}>{status}</Typography>
        </Box>

        <Typography sx={{ fontWeight: 600 }}>{company}</Typography>
        <Typography>{plan}</Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {policyId}
        </Typography>

        {approvalRequired && (
          <Typography
            variant="body2"
            sx={{ color: "error.main", fontWeight: 600 }}
          >
            Approval required
          </Typography>
        )}

        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {age}
        </Typography>
      </Box>

      {/* RIGHT SIDE */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          textAlign: "right",
          columnGap: 3,
          minWidth: 240,
        }}
      >
        {/* Initiation Date */}
        <Box>
          <Typography sx={{ fontSize: "0.75rem", color: "text.secondary" }}>
            Initiation date
          </Typography>
          <Typography
            sx={{ fontWeight: 600, fontSize: "0.9rem", color: "text.primary" }}
          >
            {resolutionDate}
          </Typography>
        </Box>

        {/* Last Updated */}
        <Box>
          <Typography sx={{ fontSize: "0.75rem", color: "text.secondary" }}>
            Last updated
          </Typography>
          <Typography
            sx={{ fontWeight: 600, fontSize: "0.9rem", color: "text.primary" }}
          >
            {lastUpdated || "--"}
          </Typography>
        </Box>
      </Box>

      {/* FOOTER ACTION ROW */}
      <Box
        sx={{
          position: "absolute",
          bottom: 8,
          right: 20,
          display: "flex",
          alignItems: "center",
          gap: 3,
          fontSize: "0.85rem",
        }}
      >
        <Link
          underline="hover"
          color="primary"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.7,
            cursor: "pointer",
          }}
        >
          <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />
          Preview ID cards ({previewCount})
        </Link>

        <Link
          underline="hover"
          color="primary"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.3,
            cursor: "pointer",
          }}
        >
          View details
          <ArrowForwardIosRoundedIcon sx={{ fontSize: 14 }} />
        </Link>
      </Box>
    </Paper>
  );
}