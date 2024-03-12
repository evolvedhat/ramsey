import React, { useState } from "react";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Q3() {
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
      <h1>van der Waerden Theorem - Question 3</h1>
      <p style={{ backgroundColor: "white", padding: "20px" }}>
        A syndetic set is any set that can be represented as an increasing
        sequence of positive integers with bounded gaps, i.e., as a sequence{" "}
        {"a1 < a2 < . . ."} such that there is {"M > 0"} for which
        {" ai+1 − ai ≤ M for all i ∈ N."}. If {"N = A∪B"}, then either A
        contains arbitrarily long intervals or B is syndetic.
      </p>
      <Button
        variant="contained"
        style={{
          backgroundColor: "green",
          color: "white",
          marginRight: "10px",
        }}
        onClick={handleFalseClick}
        disabled={isTrueClicked || isFalseClicked}
      >
        True
      </Button>
      <Button
        variant="contained"
        style={{ backgroundColor: "red", color: "white", marginRight: "10px" }}
        onClick={handleTrueClick}
        disabled={isTrueClicked || isFalseClicked}
      >
        False
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
