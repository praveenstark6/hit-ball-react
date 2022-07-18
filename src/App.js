import { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import "./App.css";
import Ball from "./components/Ball";
import GameOver from "./components/GameOver";
import Header from "./components/Header";
import ballHitAudio1 from "./components/assets/mixkit-arcade-game-jump-coin-216.wav";
import ballNotHitAudio1 from "./components/assets/mixkit-click-error-1110.wav";
import restartAudio1 from "./components/assets/mixkit-fast-tape-rewind-cinematic-transition-1092.wav";
import resetHighScoreAudio1 from "./components/assets/mixkit-explainer-video-game-reveal-235.wav";
import gameOverAudio1 from "./components/assets/mixkit-retro-arcade-game-over-470.wav";
import resetScoreAudio1 from "./components/assets/mixkit-retro-game-notification-212.wav";

function App() {
  const easyTimeInterval = 1500;
  const ballHitAudio = new Audio(ballHitAudio1);
  const ballNotHitAudio = new Audio(ballNotHitAudio1);
  const restartAudio = new Audio(restartAudio1);
  const resetHighScoreAudio = new Audio(resetHighScoreAudio1);
  const resetScoreAudio = new Audio(resetScoreAudio1);
  const gameOverAudio = new Audio(gameOverAudio1);
  const [coordinates, setCoordinates] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [lives, setLives] = useState(3);
  const [highestScore, setHighestScore] = useState(0);
  const [isNewHigh, setIsNewHigh] = useState(false);
  const [timeInterval, setTimeInterval] = useState(easyTimeInterval);
  const [clicked, setClicked] = useState(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      changeCoordinates();
    }, timeInterval);
    return () => {
      clearInterval(interval);
    };
  });

  const onReset = () => {
    setScore(0);
    setLives(3);
    setTimeInterval(easyTimeInterval);
    changeCoordinates();
  };

  const onHit = () => {
    playAudioBallHit();
    setScore(score + 10);
    setTimeInterval(timeInterval - 25);
    changeCoordinates();
    setClicked(true);
  };
  useEffect(() => {
    if (lives <= 0) {
      playGameOverAudio();
      setIsGameOver(true);
    }
  }, [lives]);

  const handleStartOver = () => {
    onReset();
    setTimeout(() => {
      setIsGameOver(false);
    }, 1500);
  };
  const handleResetHighScore = () => {
    onReset();
    setHighestScore(0);
  };

  const playAudioBallHit = () => {
    ballHitAudio.play();
  };
  const playAudioBallNotHit = () => {
    ballNotHitAudio.play();
  };
  const playRestartAudio = () => {
    restartAudio.play();
  };
  const playResetHighScoreAudio = () => {
    resetHighScoreAudio.play();
  };
  const playResetScoreAudio = () => {
    resetScoreAudio.play();
  };
  const playGameOverAudio = () => {
    gameOverAudio.play();
  };
  return (
    <div className="App">
      <div className="header">
        <Header
          score={score}
          onReset={onReset}
          lives={lives}
          playResetScoreAudio={playResetScoreAudio}
        />
      </div>
      {isGameOver ? (
        <GameOver
          handleStartOver={handleStartOver}
          handleResetHighScore={handleResetHighScore}
          highestScore={highestScore}
          isNewHigh={isNewHigh}
          playRestartAudio={playRestartAudio}
          playResetHighScoreAudio={playResetHighScoreAudio}
        />
      ) : (
        <div className="playground">
          <OutsideClickHandler
            onOutsideClick={() => {
              playAudioBallNotHit();
              setLives(lives - 1);
              setClicked(false);
            }}
          >
            <Ball coordinates={coordinates} onHit={onHit} />
          </OutsideClickHandler>
        </div>
      )}
      <p>{clicked ? "ball hit" : "outside hit"}</p>
    </div>
  );
}

export default App;
