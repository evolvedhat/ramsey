import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

import "./App.css";
import Notes from "./views/Notes";
import Q1 from "./views/Q1";

function App() {
  const [currentPage, setCurrentPage] = useState("");
  const [currentQ, setCurrentQ] = useState("");
  const [anchorElBio, setAnchorElBio] = useState(null);
  const [anchorElNotes, setAnchorElNotes] = useState(null);
  const [anchorElPractice, setAnchorElPractice] = useState(null);
  const [anchorElSolutions, setAnchorElSolutions] = useState(null);
  //
  const showNotes = () => {
    setCurrentPage("Ramsey");
  };
  const showExample = () => {
    setCurrentQ("Q1");
  };

  const showBioPage = (event) => {
    setAnchorElBio(event.currentTarget);
  };

  const showPracticePage = (event) => {
    setAnchorElPractice(event.currentTarget);
  };

  const showSolutionsPage = (event) => {
    setAnchorElSolutions(event.currentTarget);
  };

  const showNotesMenu = (event) => {
    setAnchorElNotes(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElBio(null);
    setAnchorElNotes(null);
    setAnchorElPractice(null);
    setAnchorElSolutions(null);
  };

  if (currentPage === "Ramsey") {
    return <Notes />;
  } else if (currentQ === "Q1") {
    return <Q1 />;
  } else {
    return (
      <>
        <h1>Ramsey Theory</h1>
        <div className="main">
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: "10px" }}
            onClick={showBioPage}
          >
            Biography
          </Button>
          <Menu
            id="bio-menu"
            anchorEl={anchorElBio}
            keepMounted
            open={Boolean(anchorElBio)}
            onClose={handleClose}
          >
            <MenuItem onClick={showNotes}>Frank Ramsey</MenuItem>
            <MenuItem onClick={handleClose}>Paul Erdős</MenuItem>
            <MenuItem onClick={handleClose}>
              Bartel Leendert van der Waerden
            </MenuItem>
            <MenuItem onClick={handleClose}>Issai Schur</MenuItem>
            <MenuItem onClick={handleClose}>Richard Rado</MenuItem>
          </Menu>

          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: "10px" }}
            onClick={showNotesMenu}
          >
            Notes
          </Button>
          <Menu
            id="notes-menu"
            anchorEl={anchorElNotes}
            keepMounted
            open={Boolean(anchorElNotes)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Ramsey's Theorem</MenuItem>
            <MenuItem onClick={handleClose}>van der Waerden's Theorem</MenuItem>
            <MenuItem onClick={handleClose}>Schur's Theorem</MenuItem>
            <MenuItem onClick={handleClose}>Rado's Theorem</MenuItem>
            <MenuItem onClick={handleClose}>Hales-Jewett Theorem</MenuItem>
            <MenuItem onClick={handleClose}>Erdos-Szekeres Theorem </MenuItem>
            <MenuItem onClick={handleClose}>
              Chromatic Number of the Plane
            </MenuItem>
          </Menu>

          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: "10px" }}
            onClick={showPracticePage}
          >
            Practice
          </Button>
          <Menu
            id="practice-menu"
            anchorEl={anchorElPractice}
            keepMounted
            open={Boolean(anchorElPractice)}
            onClose={handleClose}
          >
            <MenuItem onClick={showExample}>Ramsey's Theorem</MenuItem>
            <MenuItem onClick={handleClose}>van der Waerden's Theorem</MenuItem>
            <MenuItem onClick={handleClose}>Schur's Theorem</MenuItem>
            <MenuItem onClick={handleClose}>Rado's Theorem</MenuItem>
            <MenuItem onClick={handleClose}>Hales-Jewett Theorem</MenuItem>
            <MenuItem onClick={handleClose}>Erdos-Szekeres Theorem </MenuItem>
            <MenuItem onClick={handleClose}>
              Chromatic Number of the Plane
            </MenuItem>
          </Menu>

          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: "10px" }}
            onClick={showSolutionsPage}
          >
            Solutions
          </Button>
          <Menu
            id="solutions-menu"
            anchorEl={anchorElSolutions}
            keepMounted
            open={Boolean(anchorElSolutions)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Ramsey's Theorem</MenuItem>
            <MenuItem onClick={handleClose}>van der Waerden's Theorem</MenuItem>
            <MenuItem onClick={handleClose}>Schur's Theorem</MenuItem>
            <MenuItem onClick={handleClose}>Rado's Theorem</MenuItem>
            <MenuItem onClick={handleClose}>Hales-Jewett Theorem</MenuItem>
            <MenuItem onClick={handleClose}>Erdos-Szekeres Theorem </MenuItem>
            <MenuItem onClick={handleClose}>
              Chromatic Number of the Plane
            </MenuItem>
          </Menu>
        </div>
      </>
    );
  }
}

export default App;
