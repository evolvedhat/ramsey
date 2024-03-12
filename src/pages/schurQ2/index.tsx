import React, { useState } from "react";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Q2() {
  const [isTrueClicked, setIsTrueClicked] = useState(false);
  const [isFalseClicked, setIsFalseClicked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showIncorrectMessage, setShowIncorrectMessage] = useState(false);

  const handleFalseClick = () => {
    setIsTrueClicked(true);
    setIsCorrect(true);
  };

  const handleTrueClick = () => {
    setIsFalseClicked(true);
    setShowIncorrectMessage(true);
  };

  const handleRetry = () => {
    setIsTrueClicked(false);
    setIsFalseClicked(false);
    setIsCorrect(false);
    setShowIncorrectMessage(false);
  };
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
        >
          <HomeIcon /> Home
        </Button>
      </a>
      <a href="/schurProblems">
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
      <h1>Schur's Theorem - Question 2</h1>
      <p style={{ backgroundColor: "white", padding: "20px" }}>
        Let P be the set of points in the plane x + y − z = 0 whose coordinates
        are positive integers. Let an r-colouring of the positive integers be
        given. For each (a, b, c) ∈ P, do the following: if a, b, and c are the
        colour, then colour the point (a, b, c) by that colour; otherwise, mark
        (a, b, c) by an X. Can all of the points of the set P be marked by an X?
      </p>
      <Button
        variant="contained"
        style={{
          backgroundColor: "green",
          color: "white",
          marginRight: "10px",
        }}
        onClick={handleTrueClick}
        disabled={isTrueClicked || isFalseClicked}
      >
        Yes
      </Button>
      <Button
        variant="contained"
        style={{ backgroundColor: "red", color: "white", marginRight: "10px" }}
        onClick={handleFalseClick}
        disabled={isTrueClicked || isFalseClicked}
      >
        No
      </Button>
      {isCorrect && (
        <p style={{ backgroundColor: "white", padding: "20px" }}>Correct!</p>
      )}
      {showIncorrectMessage && (
        <p style={{ backgroundColor: "white", padding: "20px" }}>
          Incorrect, try again
        </p>
      )}
      {(isTrueClicked || isFalseClicked) && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleRetry}
          style={{ marginTop: "20px" }}
        >
          Retry
        </Button>
      )}
    </div>
  );
}
