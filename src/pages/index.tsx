import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

import "./index.css";

function App() {
  const [anchorElBio, setAnchorElBio] = useState(null);
  const [anchorElNotes, setAnchorElNotes] = useState(null);
  const [anchorElPractice, setAnchorElPractice] = useState(null);
  const [anchorElSolutions, setAnchorElSolutions] = useState(null);

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
          <a
            href="/ramsey"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>Frank Ramsey</MenuItem>
          </a>
          <a href="/erdos" style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItem>Paul Erdős</MenuItem>
          </a>
          <a
            href="/vanDerWaerden"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>Bartel Leendert van der Waerden</MenuItem>
          </a>
          <a href="/schur" style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItem>Issai Schur</MenuItem>
          </a>
          <a href="/rado" style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItem>Richard Rado</MenuItem>
          </a>
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
          <a
            href="/notesPage"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>Ramsey's Theorem</MenuItem>
          </a>
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
          <a
            href="/ramseyProblems"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>Ramsey's Theorem</MenuItem>
          </a>
          <MenuItem
            href="/vanProblems"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            van der Waerden's Theorem
          </MenuItem>
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

export default App;
