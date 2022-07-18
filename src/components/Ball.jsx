import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
let theme = createTheme();
theme = responsiveFontSizes(theme);

const Ball = ({ coordinates, onHit }) => {
  let [top, bottom, left, right] = coordinates;
  const styles = {
    background: "orange",
    height: "100px",
    width: "100px",
    border: "2px solid black",
    borderRadius: "100%",
    position: "relative",
    top: `${top}px`,
    bottom: `${bottom}px`,
    left: `${left}px`,
    right: `${right}px`,
    cursor: "pointer",
    objectFit: "contain",
    outline: "none",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="ball" style={styles} onClick={onHit}>
      <ThemeProvider theme={theme}>
        <Typography>Hit Me!</Typography>
      </ThemeProvider>
    </div>
  );
};

export default Ball;
