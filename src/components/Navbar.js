import React, { useState } from "react";
import { Grid, Box, IconButton } from "@material-ui/core";
import Portrait from "./Portrait";
import NavItems from "./NavItems";
import { Menu } from "@material-ui/icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <React.Fragment>
      <div
        style={{
          position: "absolute",
          right: "0",
          padding: "2rem",
          zIndex: "10",
        }}
      >
        <IconButton onClick={handleMenuClick}>
          <Menu style={{ color: "#fff" }} fontSize="large" />
        </IconButton>
      </div>
      {menuOpen && (
        <nav className="navbar">
          <Grid container style={{ height: "100%" }}>
            <Grid item xs={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                style={{ background: "rgba(68, 68, 68, 0.8)" }}
              >
                <Portrait />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                style={{ background: "rgba(55, 55, 55, 0.8)" }}
              >
                <NavItems />
              </Box>
            </Grid>
          </Grid>
        </nav>
      )}
    </React.Fragment>
  );
}
