import { useEffect, useState } from "react";
import "./App.css";
import Ball from "./components/Ball";
import GameOver from "./components/GameOver";
import Header from "./components/Header";

function App() {
  const [coordinates, setCoordinates] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [lives, setLives] = useState(3);
  const [isBallTouch, setIsBallTouch] = useState(false);
  const changeCoordinates = () => {
    let randomCoordinates = [0, 0, 0, 0];
    const size = window.innerWidth <= 600 ? 300 : 500;
    for (let i = 0; i < 4; i++) {
      const random = parseInt(Math.random() * size);
      randomCoordinates[i] = random;
    }
    setCoordinates(randomCoordinates);
  };

  const onReset = () => {
    setScore(0);
    setLives(3);
    changeCoordinates();
  };

  const onHit = () => {
    setScore(score + 10);
    changeCoordinates();
    setIsBallTouch(true);
  };
  useEffect(() => {
    console.log(isBallTouch);
    setIsBallTouch(true);
  });
  const reduceLife = () => {
    if (!isBallTouch) setLives(lives - 1);
  };

  return (
    <div className="App">
      <div className="header">
        <Header score={score} onReset={onReset} lives={lives} />
      </div>
      {gameOver ? (
        <GameOver />
      ) : (
        <div className="playground" onClick={reduceLife}>
          <Ball coordinates={coordinates} onHit={onHit} />
        </div>
      )}
    </div>
  );
}

export default App;
