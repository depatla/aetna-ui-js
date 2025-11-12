// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#6A1B9A" }, // Brand purple
    info: { main: "#1976D2" }, // Matches existing theme
    text: { primary: "#111827", secondary: "#6B7280" },
    divider: "#E0E0E0", // Light divider color
  },
  typography: {
    fontFamily:
      "Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif",
    h5: { fontWeight: 700, fontSize: "22px", lineHeight: 1.3 },
    body2: { color: "#6B7280" },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 2px rgba(0,0,0,0.05), 0 2px 8px rgba(0,0,0,0.06)",
          border: "1px solid #E5E7EB",
          borderRadius: 12,
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "outlined" },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 48,
          borderRadius: 12,
          backgroundColor: "#fff",
          "& fieldset": { borderColor: "#D1D5DB" },
          "&:hover fieldset": { borderColor: "#B6BEC7" },
          "&.Mui-focused fieldset": {
            borderColor: "#6A1B9A",
            borderWidth: 1.5,
          },
        },
        input: { padding: "12px 14px" },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          height: 46,
          borderRadius: 10,
        },
        text: {
          color: "#6A1B9A", // "Clear filters" link
          "&:hover": {
            backgroundColor: "transparent",
            textDecoration: "underline",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#9B9B9B",
          "&.Mui-checked": { color: "#6A1B9A" },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.icon-search": {
            backgroundColor: "#6A1B9A",
            color: "#fff",
            width: 28,
            height: 28,
            "&:hover": { backgroundColor: "#5F1888" },
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { bgcolor: "#E0E0E0" },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: { minWidth: 32, height: 32, borderRadius: 10 },
      },
    },
  },
});

export default theme;
