import React from "react";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function EsThm() {
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
      <a href="/esNotesPage">
        <Button
          variant="contained"
          color="warning"
          style={{
            position: "absolute",
            top: "10px",
            left: "150px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <ArrowBackIcon /> Back
        </Button>
      </a>
      <iframe
        src="/esThm1.pdf"
        width="100%"
        height="900px"
        title="PDF"
        style={{ marginTop: "50px" }}
      ></iframe>
    </>
  );
}
