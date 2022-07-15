import React from "react";
import { Typography, Button } from "@mui/material";
const Header = ({ score, onReset, lives }) => {
  const styles = {
    fontWeight: "bold",
    fontSize: "20px",
    textAlign: "center",
    width: "500px",
    margin: "10px auto",
    display: "flex",
    justifyContent: "space-around",
  };
  return (
    <div style={styles}>
      <Typography style={{ textAlign: "center", fontSize: "24px" }}>
        Score: {score}
      </Typography>
      <Typography style={{ textAlign: "center", fontSize: "24px" }}>
        Lives: {lives}
      </Typography>
      <Button variant="contained" onClick={onReset}>
        Reset
      </Button>
    </div>
  );
};

export default Header;
