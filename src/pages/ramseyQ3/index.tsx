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
  // TODO: move this to van der waerden section
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
      <a href="/ramseyProblems">
        <Button
          variant="contained"
          color="primary"
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
      <h1>Ramsey Theory - Question 1</h1>
      <p style={{ backgroundColor: "white", padding: "20px" }}>
        In an infinite word W on the alphabet {"{A, B, C}"} (meaning the word
        can only have letters A, B, or C), a two-letter word can appear a
        certain number of times in W in such a way that separate consecutive
        appearances of XY all have the same length, but the number of times this
        two-letter word can appear is upper bounded.
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
        True
      </Button>
      <Button
        variant="contained"
        style={{ backgroundColor: "red", color: "white", marginRight: "10px" }}
        onClick={handleFalseClick}
        disabled={isTrueClicked || isFalseClicked}
      >
        False
      </Button>
      {isCorrect && (
        <p style={{ backgroundColor: "white", padding: "20px" }}>
          Correct! van der Waerden's theorem guarantees any number.
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
