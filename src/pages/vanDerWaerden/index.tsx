import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function VanBio() {
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
      <img src="/waerden.jpeg" alt="Van der Waerden" style={{ width: "20%" }} />
      <h1>Bartel Leendert Van der Waerden</h1>
      <p>
        Bartel Leendert Van der Waerden was born on February 2, 1903, in
        Amsterdam, Netherlands, and passed away at the age of 92 on January 12,
        1996, in Zurich, Switzerland. He was the oldest of three children to his
        parents, Theodorus and Dorothea. His father, Theo was a left-wing
        Socialist and a civil engineer. Bartel Leendert Van der Waerden was a
        mathematician and a historian of mathematics and science, whose work had
        a significant influence on the fields of mathematics and its history.
        Van der Waerden's brilliance as a student was evident from an early age.
        His quick wit and sharp mind sometimes made life challenging for his
        teachers. Despite this, he thrived academically and remained a devoted
        student of mathematics throughout his life. During the challenging times
        of World War II, Van der Waerden chose to stay in Leipzig, turning down
        opportunities to leave Nazi Germany. This has been viewed as a
        controversial decision, although it has been know that he was not a
        Nazi. Van der Waerden's also showed interest in the history of
        mathematics. His historical writings covered various aspects of ancient
        mathematics, astronomy, and science, including contributions from
        Egyptian, Babylonian, Greek, and Indian scholars. This passion is
        evident in his book "A History of Algebra from Al-Khwarizmi to Emmy
        Noether" published in 1985. In this work, he traced the evolution of
        algebra, highlighting key figures like Al-Khwarizmi, Galois, and Emmy
        Noether. One of Van der Waerden's significant contributions to
        mathematics was his eponymous theorem, now considered one of the pillars
        of Ramsey theory. Alongside other notable theorems such as Hilbert’s
        Cube Lemma, Schur’s theorem, and Ramsey’s theorem, Van der Waerden’s
        theorem stands as a testament to his mathematical skills. Bartel
        Leendert Van der Waerden's legacy extends beyond his contributions to
        abstract algebra, algebraic geometry, and other mathematical fields. His
        dedication to the history of mathematics, along with his resilience
        during challenging times, has had a lasting impact in the mathematical
        community.{" "}
      </p>
    </div>
  );
}
