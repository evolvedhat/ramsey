import React from "react";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function RamseyBio() {
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
          // onClick={handleButtonClick}
        >
          <HomeIcon /> Home
        </Button>
      </a>
      <img src="/ramsey.jpeg" alt="Frank Ramsey" />
      <h1>Frank Ramsey</h1>
      <p style={{ backgroundColor: "white", padding: "20px" }}>
        Frank Plumpton Ramsey was born on February 22, 1903 in Cambridge,
        England. He was a mathematician and philosopher, whose work continues to
        influence mathematics in various fields despite his short life. Ramsey's
        father was a mathematician and the President of Magdalene College. His
        brother, Michael Ramsey, later became the Archbishop of Canterbury. One
        of his sisters was a medical doctor, and one was a Fellow of Lady
        Margaret Hall, in Oxford. Despite his family's impressive background,
        Frank Ramsey's intelligence and accomplishments exceeded expectations.
        In 1924, at the age of only twenty one, he earned a Fellowship at King's
        College in Cambridge. Ramsey showed intellectual curiosity in various
        academic fields. Some of his work contributed significantly to
        epistemology, semantics, logic, philosophy of science, statistics,
        probability, decision theory, economics, and metaphysics. In
        epistemology, he challenged others with questions about the nature and
        scope of knowledge. In semantics, he explored the relationships between
        signs and symbols. His work in logic contributed to the principles of
        reasoning. In the philosophy of science, Ramsey explored the rigorous
        study of scientific knowledge and methodology. His knowledge in decision
        theory, a field spanning economics, psychology, philosophy, mathematics,
        and statistics, focused on identifying values, uncertainties, and
        rational decision-making. Other than mathematics, Ramsey showed interest
        in various other fields such as literature and politics. He also had a
        deep sense of social justice. Michael Ramsey, in regards to his
        brother's diverse interests, said that Frank was "interested in almost
        everything." Frank Ramsey later explored English literature, showing an
        interest for classics, while also expressing an interest in politics
        with a left-wing, caring-for-the-underdog outlook. Unfortunately,
        Ramsey's promising career was cut short by a chronic liver disease that
        grew increasingly worse. After contracting jaundice following an
        operation, he died on January 19, 1930, at the age of twenty six, at
        Guy's Hospital in London. Frank Ramsey's legacy is not limited to his
        contributions to various academic disciplines. He was also remembered by
        his approachable and humble demeanor. As Michael Ramsey said, despite
        Frank's intellectual superiority, he conversed in a friendly manner that
        never made others feel inferior. Frank Ramsey's intellectual curiosity,
        versatility, and contributions to various academic disciplines remain a
        source of inspiration and influence.{" "}
      </p>
    </div>
  );
}
