import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function SchurBio() {
  return (
    <div>
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
          // onClick={handleButtonClick}
        >
          <HomeIcon /> Home
        </Button>
      </a>
      <img src="/schur.jpeg" alt="Issai Schur" style={{ width: "20%" }} />
      <h1>Issai Schur</h1>
      <p>
        Issai Schur was born on January 10, 1875, in Mogilev, Russian Empire. He
        was a mathematician who transcended geographical boundaries, leaving a
        lasting mark on various branches of the discipline. Schur's mathematical
        journey traversed through different countries, ending in his passing on
        January 10, 1941, in Tel Aviv, Palestine/Israel. Schur's mathematical
        skilfulness is evident in various concepts and fields that bear his
        name, testament to his profound contributions across diverse fields.
        From the Frobenius-Schur indicator to the Schur-Zassenhaus theorem, his
        legacy carries on through combinatorics, linear algebra, functional
        analysis, and more. Despite his foundational role in advancing
        mathematical theory, Schur's personal and professional life was not
        without challenges. He suffered during Nazi persecutions, enduring
        forced retirement due to his Jewish heritage. The Nazis' discriminatory
        policies not only stripped him of his academic position but also
        inflicted deep emotional wounds, leading to his departure from Germany
        to Palestine in 1939. Schur's departure from Germany marked the end of
        an era which left him deeply unhappy. His poignant recollections reveal
        the loneliness and alienation he experienced amidst the backdrop of
        persecutions. Despite his significant contributions to the mathematical
        community, Schur found himself marginalized and overlooked, as
        exemplified by the Hebrew University's hesitance to embrace him fully.
        Schur's story depicts the intersection of his personal resilience and
        professional excellence in the face of adversity. His unwavering
        dedication to knowledge and mathematics, despite the tumultuous
        political climate and his endured hardships, serves as a beacon of
        inspiration for future generations. Beyond the honors bestowed upon him
        posthumously, Schur's enduring legacy lies in the profound impact of his
        ideas, which continue to shape the landscape of modern mathematics.{" "}
      </p>
    </div>
  );
}
