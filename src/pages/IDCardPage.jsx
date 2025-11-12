// IDCardPage.jsx
import React from "react";
import { Box, Container, ThemeProvider } from "@mui/material";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "./../theme";
import IDCardHeader from "../components/IDCardHeader";
import MyConfigurations from "../components/MyConfigurations";
import RightSideFilterForm from "../components/RightSideFilterForm";
import ApprovedConfigurations from "../components/ApprovedConfigurations";

export default function IDCardPage() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: "#F9FAFB",
          minHeight: "100vh",
          py: 4,
          minWidth: "100%",
          backgroundColor: "#f6f2f2ff",
        }}
      >
        {/* Full-width header */}
        <Box
          sx={{
            width: "100%",
            bgcolor: "#ffffff",
            p: 3,
            mb: 4,
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <IDCardHeader />
        </Box>

        <Container sx={{ px: 4 }}>
          {/* Content wrapper */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "1440px",
              mx: "auto",
              px: 4,
            }}
          >
            <Grid container spacing={6} alignItems="flex-start">
              {/* LEFT SIDE - Cards */}
              <Grid
                size={{ xs: 12, md: 9 }}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <MyConfigurations />
              </Grid>

              {/* RIGHT SIDE - Filters */}
              <Grid
                size={{ xs: 12, md: 3 }}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <RightSideFilterForm />
              </Grid>
            </Grid>
          </Box>
        </Container>

        {/* Bottom section */}
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            p: 4,
            mt: 6,
            boxShadow: "0px 1px 3px rgba(0,0,0,0.08)",
          }}
        >
          <ApprovedConfigurations />
        </Box>
      </Box>
    </ThemeProvider>
  );
}