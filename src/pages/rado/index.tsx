import React from "react";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function RadoBio() {
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
      <img src="/rado.jpeg" alt="Richard Rado" style={{ width: "20%" }} />
      <h1>Richard Rado</h1>
      <p style={{ backgroundColor: "white", padding: "20px" }}>
        Richard Rado was born on April 28, 1906, in Berlin, Germany. He was a
        distinguished mathematician who left an indelible mark on various
        branches of mathematics, spanning from convergence of sequences and
        series to graph theory and Ramsey theory. Rado's mathematical journey
        was marked by remarkable achievements and profound contributions. Rado's
        academic pursuits led him to earn two Ph.D.s, the first in 1933 from the
        University of Berlin under the guidance of Isai Schur, and the second in
        1935 from the University of Cambridge under the supervision of Godfrey
        Harold Hardy. His diverse mathematical interests is evident in his
        extensive body of work, which encompassed areas such as inequalities,
        geometry, measure theory, and number theory. Beyond his mathematical
        endeavors, Rado was a man of various talents. He faced a pivotal
        decision between pursuing a career as a concert pianist or as a
        mathematician, ultimately choosing the latter while maintaining a deep
        passion for music throughout his life. His marriage to Luise Zadek not
        only enriched his personal life but also fostered a harmonious
        partnership, both musically and mathematically. Rado's collaboration
        with renowned mathematician Paul Erdős spanned over five decades,
        resulting in numerous joint papers and seminal contributions to set
        theory. Their groundbreaking work in partition calculus, a term coined
        by Rado himself, revolutionized the field and laid the foundation for
        further exploration into combinatorial mathematics. Despite his profound
        intellect and mathematical prowess, Rado was described as the "kindest
        and gentlest of men," known for his humility and generosity. His
        enduring legacy transcends academic accolades, resonating through the
        lives he touched and the lasting impact of his ideas on the mathematical
        community. In commemorating Richard Rado's life and work, we celebrate
        not only his mathematical brilliance but also his unwavering commitment
        to excellence and his profound humanity. His legacy serves as an
        inspiration for future generations of mathematicians, illustrating the
        transformative power of curiosity, collaboration, and compassion in the
        pursuit of knowledge.{" "}
      </p>
    </div>
  );
}
