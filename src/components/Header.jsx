import React from "react";
import { Typography, Button } from "@mui/material";
import "./css/header.css";
const Header = ({ score, onReset, lives }) => {
  return (
    <div className="header">
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
