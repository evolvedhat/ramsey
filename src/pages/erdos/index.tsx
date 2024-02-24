import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

export default function ErdosBio() {
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
      <img src="/erdos.jpeg" alt="Paul Erdős" />
      <h1>Paul Erdős</h1>
      <p style={{ backgroundColor: "white", padding: "20px" }}>
        Paul Erdős was born on March 26, 1913 in Budapest, Hungary and is
        considered the father of modern Ramsey Theory. His two sisters
        tragically died of scarlet fever days before his birth at the ages of
        three and five. Erdős led an interesting life with no home and no job in
        the pursuit of mathematical knowledge around the world. Erdős showed
        interest in mathematics from a young age which was a result of both his
        parents being teachers in the field and introducing him to mathematics
        from a young age. He was considered a child prodigy, publishing his
        first results in number theory and combinatorial analysis at the age of
        eighteen. Erdős had Jewish roots (the original family name being
        Engländer) although neither of his parents observed the Jewish religion.
        However, he was forced to leave Hungary during World War II to save his
        life. In 1941 at twenty-seven years old he was homesick and unhappy
        after his escape. He was also constantly worried about his mother who
        remained in Hungary. His personal hardships resulted in his pessimistic
        views on world affairs, politics, or human affairs in general. Erdős's
        contributions and influence can be seen in various branches of
        mathematics. Some of these fields include combinatorics, graph theory,
        number theory, classical analysis, approximation theory, set theory, and
        probability theory. By the age of sixty, his work included more than
        seven hundred papers, displaying his deep understanding and influence on
        various mathematical fields. Paul Erdős's legacy goes beyond his
        mathematical contributions. It can also be seen in his commitment to the
        pursuit of knowledge, even in the face of personal challenges and
        tragedies. Paul Erdős passed away at the age of eighty three on
        September 20, 1996, in Warsaw, Poland. However, his legacy continues to
        inspire and shape the field of mathematics.{" "}
      </p>
    </div>
  );
}
