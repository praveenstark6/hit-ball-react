import {
  Button,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material";
import "./css/gameover.css";
import React from "react";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const GameOver = ({
  handleStartOver,
  handleResetHighScore,
  highestScore,
  isNewHigh,
}) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box className="gameover">
          <Typography variant="h1">Game Over</Typography>
          {isNewHigh && (
            <Typography variant="h2">New Highest Score!</Typography>
          )}
          <Typography variant="h3">Highest Score: {highestScore}</Typography>
          <div className="button">
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
      </ThemeProvider>
    </div>
  );
};

export default GameOver;
