import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function Q1() {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showIncorrectMessage, setShowIncorrectMessage] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
    setIsCorrect(false);
    setShowIncorrectMessage(false);
  };

  const handleSubmit = () => {
    setShowHint(false);
    if (answer === "17") {
      setIsCorrect(true);
    } else {
      setShowIncorrectMessage(true);
    }
  };

  const handleRetry = () => {
    setShowHint(false);
    setAnswer("");
    setIsCorrect(false);
    setShowIncorrectMessage(false);
  };

  const handleHint = () => {
    setShowHint(true);
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
      <a href="/ramseyProblems">
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
      <h1>Ramsey Theory - Question 2</h1>
      <p style={{ backgroundColor: "white", padding: "20px" }}>
        Suppose that a school has 2 different sports teams: baseball and hockey
        and suppose that the gymnasium can only be entered by members of those
        teams. How many people must there be to in the gymnasium to guarantee
        that there are at least 3 people who either play 0, 1 or 2 of the same
        sports?{" "}
      </p>
      <TextField
        label="Enter your answer"
        variant="outlined"
        value={answer}
        onChange={handleInputChange}
        // style={{ marginBottom: "10px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{
          marginLeft: "10px",
          marginTop: "10px",
          backgroundColor: "#4CAF50",
        }}
      >
        Submit
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleHint}
        style={{
          marginLeft: "10px",
          marginTop: "10px",
          backgroundColor: "#FFC107",
        }}
        startIcon={<LightbulbIcon />}
      >
        Hint
      </Button>
      {showHint && (
        <p style={{ backgroundColor: "white", padding: "20px" }}>
          What is the value for R(3,3,3)?
        </p>
      )}
      {isCorrect && (
        <p style={{ backgroundColor: "white", padding: "20px" }}>
          Correct! R(3,3,3) = 17. There are three possible edge colorings (no
          sports in common, one sport in common, two sports in common).
        </p>
      )}
      {showIncorrectMessage && (
        <p style={{ backgroundColor: "white", padding: "20px" }}>
          Incorrect, try again
        </p>
      )}
      {(isCorrect || showIncorrectMessage) && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleRetry}
          style={{ marginTop: "20px" }}
          startIcon={<RefreshIcon />}
        >
          Retry
        </Button>
      )}
    </div>
  );
}
