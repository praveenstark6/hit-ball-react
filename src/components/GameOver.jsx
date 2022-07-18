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
  playRestartAudio,
  playResetHighScoreAudio,
}) => {
  const onStartOverClick = () => {
    handleStartOver();
    playRestartAudio();
  };
  const onResetHighScore = () => {
    handleResetHighScore();
    playResetHighScoreAudio();
  };
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
              onClick={onStartOverClick}
              style={{ background: "green" }}
              variant="contained"
            >
              Start Over
            </Button>
            <Button
              onClick={onResetHighScore}
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
