// RightSideFilterForm.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function RightSideFilterForm() {
  const [controlNumber, setControlNumber] = useState("");
  const [policyholderNumber, setPolicyholderNumber] = useState("");
  const [productType, setProductType] = useState("all");

  const handleClearFilters = () => {
    setControlNumber("");
    setPolicyholderNumber("");
    setProductType("all");
  };

  const handleNumberInput = (e, setter) => {
    const value = e.target.value;
    // Allow only digits and limit to 7 characters
    if (/^\d*$/.test(value) && value.length <= 7) {
      setter(value);
    }
  };

  return (
    <Box sx={{ maxWidth: 440, width: "100%", mt: "75px" }}>
      <Typography sx={{ color: "text.secondary", fontSize: "0.9rem" }}>
        Filter by
      </Typography>

      <Box sx={{ display: "grid", gap: 1 }}>
        {/* Control Number */}
        <Typography
          component="label"
          htmlFor="control-number"
          sx={{
            fontWeight: 600,
            fontSize: "0.9rem",
            color: "text.primary",
            mb: 0.5,
          }}
        >
          Control number
        </Typography>
        <TextField
          placeholder="xxxxxxx"
          id="control-number"
          aria-label="Control number"
          fullWidth
          variant="outlined"
          value={controlNumber}
          onChange={(e) => handleNumberInput(e, setControlNumber)}
          InputLabelProps={{ shrink: true, style: { display: "none" } }}
          InputProps={{
            sx: {
              borderRadius: 3,
              height: 48,
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton className="icon-search" size="small">
                  <SearchIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* OR */}
        <Typography
          sx={{
            fontSize: "0.75rem",
            color: "text.secondary",
            pl: 0.5,
            textTransform: "capitalize",
          }}
        >
          or
        </Typography>

        {/* Policyholder Number */}
        <Typography
          component="label"
          htmlFor="policyholder-number"
          sx={{
            fontWeight: 600,
            fontSize: "0.9rem",
            color: "text.primary",
            mb: 0.5,
          }}
        >
          Policyholder number
        </Typography>
        <TextField
          placeholder="xxxxxxx"
          id="policyholder-number"
          aria-label="Policyholder number"
          fullWidth
          variant="outlined"
          value={policyholderNumber}
          onChange={(e) => handleNumberInput(e, setPolicyholderNumber)}
          InputLabelProps={{ shrink: true, style: { display: "none" } }}
          InputProps={{
            sx: {
              borderRadius: 3,
              height: 48,
            },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton className="icon-search" size="small">
                  <SearchIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Divider sx={{ my: 1 }} />

        {/* Product Type Radio Group */}
        <Box>
          <Typography
            variant="caption"
            sx={{ mb: 0.5, display: "block", fontWeight: 500 }}
          >
            Product types
          </Typography>

          <RadioGroup
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          >
            <FormControlLabel
              value="all"
              control={<Radio size="small" />}
              label="All"
            />
            <FormControlLabel
              value="medical"
              control={<Radio size="small" />}
              label="Medical"
            />
            <FormControlLabel
              value="dental"
              control={<Radio size="small" />}
              label="Dental"
            />
          </RadioGroup>
        </Box>

        <Divider />

        {/* Clear Filters */}
        <Button
          variant="text"
          onClick={handleClearFilters}
          sx={{
            width: "fit-content",
            justifyContent: "flex-start",
            p: 0,
            textTransform: "none",
            color: "primary.main",
            "&:hover": {
              backgroundColor: "transparent",
              textDecoration: "underline",
            },
          }}
        >
          Clear filters
        </Button>
      </Box>
    </Box>
  );
}