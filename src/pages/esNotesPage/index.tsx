import React from "react";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function EsNotesPage() {
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
          href="/esThm1"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "block",
            marginBottom: "10px",
          }}
        >
          <Button variant="contained" color="primary">
            Convex Polygons - Introduction{" "}
          </Button>
        </a>
        <a
          href="/esThm2"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "block",
            marginBottom: "10px",
          }}
        >
          <Button variant="contained" color="primary">
            Convex Polygons - Proof and Bounds{" "}
          </Button>
        </a>
      </div>
    </>
  );
}
