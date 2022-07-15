import React from "react";

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
  };
  return <div className="ball" style={styles} onClick={onHit}></div>;
};

export default Ball;
