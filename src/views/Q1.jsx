import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

function Q1() {
  const [isTrueClicked, setIsTrueClicked] = useState(false);
  const [isFalseClicked, setIsFalseClicked] = useState(false);

  const handleTrueClick = () => {
    setIsTrueClicked(true);
  };

  const handleFalseClick = () => {
    setIsFalseClicked(true);
  };

  const handleYesClick = () => {
    setIsFalseClicked(false);
    // Handle "False" button action here, if needed
  };

  const handleNoClick = () => {
    setIsFalseClicked(false);
  };

  return (
    <div>
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
      <h1>Ramsey Theory - Question 1</h1>
      <p>
        The drink options at a party are cola, juice or water and there are more
        than 33 glasses of filled drinks at the party. There must be at least 13
        glasses of juice, 12 glasses of cola or 11 glasses of water.{" "}
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
      {isTrueClicked && <p>Correct! (13 - 1)+(12 - 1)+(11 - 1) = 33</p>}
      {isFalseClicked && (
        <p>
          Are you sure?
          <Button
            variant="contained"
            style={{
              backgroundColor: "green",
              color: "white",
              marginLeft: "10px",
            }}
            onClick={handleYesClick}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "red",
              color: "white",
              marginLeft: "10px",
            }}
            onClick={handleNoClick}
          >
            No
          </Button>
        </p>
      )}
    </div>
  );
}

export default Q1;
