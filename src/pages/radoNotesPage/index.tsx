import React from "react";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function RadoNotesPage() {
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
          href="/radoThm"
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "block",
            marginBottom: "10px",
          }}
        >
          <Button variant="contained" color="primary">
            Rado's Theorem{" "}
          </Button>
        </a>
      </div>
    </>
  );
}
