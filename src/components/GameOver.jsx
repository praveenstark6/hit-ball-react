import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const style = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  width: "auto",
  height: 500,
  margin: "auto",
  alignItems: "center",
  justifyContent: "center",
  gap: "2rem",
};

const GameOver = ({
  handleStartOver,
  handleResetHighScore,
  highestScore,
  isNewHigh,
}) => {
  return (
    <div>
      <Box sx={style}>
        <Typography variant="h1">Game Over</Typography>
        {isNewHigh && <Typography variant="h2">New Highest Score!</Typography>}
        <Typography variant="h3">Highest Score: {highestScore}</Typography>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Button
            onClick={handleStartOver}
            style={{ background: "green" }}
            variant="contained"
          >
            Start Over
          </Button>
          <Button
            onClick={handleResetHighScore}
            style={{ background: "red" }}
            variant="contained"
          >
            Reset High Score
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default GameOver;
