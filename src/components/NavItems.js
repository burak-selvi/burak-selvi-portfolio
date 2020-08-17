import React from "react";
import NavItem from "./NavItem";
import { Box } from "@material-ui/core";

export default function NavItems() {
  return (
    <Box component="ul" className="menu-nav">
      <NavItem text="Home" to="/" />
      <NavItem text="About Me" to="/about" />
      <NavItem text="My Projects" to="/portfolio" />
      <NavItem text="Contact Me" to="/contact" />
      <NavItem text="My Cv" to="/cv" />
    </Box>
  );
}
