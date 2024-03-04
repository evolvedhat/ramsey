import React from "react";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function HjNotesPage() {
  return (
    <>
      <a href="/">
        <Button
          variant="contained"
          color="primary"
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <HomeIcon /> Home
        </Button>
      </a>
      <div style={{ marginTop: "50px" }}>
        <a
          href="/hjThm1"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "block",
            marginBottom: "10px",
          }}
        >
          <Button variant="contained" color="primary">
            Hales-Jewett Theorem - Part 1{" "}
          </Button>
        </a>
        <a
          href="/hjThm2"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "block",
            marginBottom: "10px",
          }}
        >
          <Button variant="contained" color="primary">
            Hales-Jewett Theorem - Part 2{" "}
          </Button>
        </a>
      </div>
    </>
  );
}
