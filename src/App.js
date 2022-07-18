import { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import "./App.css";
import Ball from "./components/Ball";
import GameOver from "./components/GameOver";
import Header from "./components/Header";

function App() {
  const [coordinates, setCoordinates] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [lives, setLives] = useState(3);
  const [highestScore, setHighestScore] = useState(0);
  const [isNewHigh, setIsNewHigh] = useState(false);

  useEffect(() => {
    const checkIsNewHigh = () => {
      if (score > highestScore) {
        setHighestScore(score);
        setIsNewHigh(true);
      }
    };
    checkIsNewHigh();
    return function cleanup() {
      setIsNewHigh(false);
    };
  }, [score]);
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
  };

  const checkLife = () => {
    if (lives === 0) {
      setIsGameOver(true);
    }
  };
  const handleStartOver = () => {
    onReset();
    setIsGameOver(false);
  };
  const handleResetHighScore = () => {
    onReset();
    setHighestScore(0);
  };
  return (
    <div className="App">
      <div className="header">
        <Header score={score} onReset={onReset} lives={lives} />
      </div>
      {isGameOver ? (
        <GameOver
          handleStartOver={handleStartOver}
          handleResetHighScore={handleResetHighScore}
          highestScore={highestScore}
          isNewHigh={isNewHigh}
        />
      ) : (
        <div className="playground" onClick={checkLife}>
          <OutsideClickHandler
            onOutsideClick={() => {
              setLives(lives - 1);
            }}
          >
            <Ball coordinates={coordinates} onHit={onHit} />
          </OutsideClickHandler>
        </div>
      )}
    </div>
  );
}

export default App;
