import React, { useState } from "react";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Q6() {
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
      <h1>van der Waerden Theorem - Question 6</h1>
      <p style={{ backgroundColor: "white", padding: "20px" }}>
        What is the minimum and maximum value of x3 so that the sequence S = 1,
        10, x3 be a 3-term quasi-progression of diameter 7? Select your answer
        of the form minimum, maximum.
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
        13,26
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
        12,24
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
        13,23
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
        12,26
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
