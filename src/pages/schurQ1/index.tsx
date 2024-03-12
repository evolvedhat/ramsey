import React, { useState } from "react";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Q1() {
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
      <h1>Schur's Theorem - Question 1</h1>
      <p style={{ backgroundColor: "white", padding: "20px" }}>
        Consider a Schur triple (x, y, z). Do x, y, and z need to be distinct?
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
        <p style={{ backgroundColor: "white", padding: "20px" }}>
          Correct! Consider x=1, y=1, z=2 1 + 1 = 2.
        </p>
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
