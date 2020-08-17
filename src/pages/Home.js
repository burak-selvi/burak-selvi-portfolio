import React from "react";
import { Grid, Box } from "@material-ui/core";
import { LinkedIn, GitHub } from "@material-ui/icons";

export default function Home() {
  return (
    <Grid container style={{ height: "100vh" }} className="header">
      <div className="header-overlay"></div>
      <Grid item xs={6} style={{ zIndex: "2" }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          height="100%"
        >
          <h1
            style={{
              fontSize: "6rem",
              fontWeight: "400",
              margin: "0",
              color: "#fff",
            }}
          >
            Burak <span style={{ color: "#eece1a" }}>Selvi</span>
          </h1>
          <h2
            style={{
              fontWeight: "400",
              padding: "0.2rem 1rem",
              background: "rgba(73,73,73,0.5)",
              color: "#fff",
            }}
          >
            Front End Developer & Web Developer
          </h2>
          <div>
            <LinkedIn style={{ color: "#fff" }} fontSize="large" />
            <GitHub
              style={{ color: "#fff", marginLeft: "1rem" }}
              fontSize="large"
            />
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}
