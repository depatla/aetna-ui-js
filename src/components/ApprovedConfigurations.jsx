// ApprovedConfigurations.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Tabs,
  Tab,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
    <Container sx={{ px: 4 }}>
      {/* Section Title */}
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        Approved configurations
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          fontSize: "0.85rem",
          mb: 2,
        }}
      >
        Search for approved configurations by 7-digit plan approval number or by control number
      </Typography>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        sx={{
          mb: 2,
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: 500,
            fontSize: "0.85rem",
            color: "text.secondary",
            minHeight: 40,
          },
          "& .Mui-selected": {
            color: "primary.main",
            fontWeight: 600,
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "primary.main",
          },
        }}
      >
        <Tab label="Search by policyholder number" />
        <Tab label="Search by control number" />
      </Tabs>

      {/* Search Row — EXACT SAME DESIGN */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          maxWidth: 800,
        }}
      >
        <TextField
          fullWidth
          placeholder={isPolicyholderTab ? "XXXXXXX" : "xxxxxxx"}
          value={inputValue}
          onChange={handleInputChange}
          variant="outlined"
          inputProps={{
            maxLength: 7,
            inputMode: "numeric",
          }}
          InputProps={{
            sx: { height: 46, borderRadius: "0" }, // UNCHANGED
          }}
        />

        <Button
          variant="contained"
          disabled={!isValid}
          sx={{
            bgcolor: "#6A1B9A",
            px: 4,
            height: 46,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": { bgcolor: "#5b1488" },
            "&:disabled": { bgcolor: "#B0B0B0" },
            borderRadius: "0",
          }}
          endIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Box>
    </Container>
  );
}