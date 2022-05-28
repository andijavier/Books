import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  const navigate = useNavigate();

  function toHome() {
    navigate({
      pathname: "/",
    });
  }

  function toWishlists() {
    navigate({
      pathname: "/wishlists",
    });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ position: "sticky" }}>
        <Toolbar className="justify-content-between">
          <Typography
            onClick={toHome}
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "white",
              cursor: "pointer",
            }}
          >
            FindBooks
          </Typography>
          <Typography
            onClick={toWishlists}
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "white",
              cursor: "pointer",
              textAlign: "end",
            }}
          >
            Wishlists
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
