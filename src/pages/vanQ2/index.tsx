import React, { useState } from "react";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Q2() {
  const [isTrueClicked, setIsTrueClicked] = useState(false);
  const [isFalseClicked, setIsFalseClicked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showIncorrectMessage, setShowIncorrectMessage] = useState(false);

  const handleTrueClick = () => {
    setIsTrueClicked(true);
    setIsCorrect(true);
  };

  const handleFalseClick = () => {
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
      <a href="/vanProblems">
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
      <h1>van der Waerden Theorem - Question 2</h1>
      <p style={{ backgroundColor: "white", padding: "20px" }}>
        What is the the density of S = {"{(3n - 1) : n ∈ N}"}?{" "}
      </p>
      <Button
        variant="contained"
        style={{
          backgroundColor: "black",
          color: "white",
          marginRight: "10px",
        }}
        onClick={handleFalseClick}
        disabled={isTrueClicked || isFalseClicked}
      >
        1/2
      </Button>
      <Button
        variant="contained"
        style={{
          backgroundColor: "black",
          color: "white",
          marginRight: "10px",
        }}
        onClick={handleFalseClick}
        disabled={isTrueClicked || isFalseClicked}
      >
        1/6
      </Button>
      <Button
        variant="contained"
        style={{
          backgroundColor: "black",
          color: "white",
          marginRight: "10px",
        }}
        onClick={handleTrueClick}
        disabled={isTrueClicked || isFalseClicked}
      >
        1/3
      </Button>
      <Button
        variant="contained"
        style={{
          backgroundColor: "black",
          color: "white",
          marginRight: "10px",
        }}
        onClick={handleFalseClick}
        disabled={isTrueClicked || isFalseClicked}
      >
        1/9
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
