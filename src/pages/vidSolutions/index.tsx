import React from "react";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function VidSolutions() {
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4
          style={{
            backgroundColor: "green",
            padding: "20px",
            color: "white",
            width: "300px",
            textAlign: "center",
          }}
        >
          Ramsey's Theorem
        </h4>
      </div>
      <div>
        <a
          href="/rSol1"
          style={{
            textDecoration: "none",
            color: "inherit",
            marginBottom: "10px",
          }}
        >
          <Button variant="contained" color="primary">
            Question 1
          </Button>
        </a>
      </div>
    </>
  );
}
