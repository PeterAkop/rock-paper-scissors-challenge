import { useState } from "react";

import { play } from "./_helpers.js";
import styles from "../../styles/Game.module.css";
import { gestures } from "../../utils/game.enum";

const Game = () => {
  const [result, setResult] = useState(null);

  const playGame = (gesture) => {
    play(gesture).then(({ message }) => {
      setResult(message);
    });
  };

  const handleClick = () => setResult(null);

  if (result)
    return (
      <div className={styles.container}>
        <div className={styles.winnerWrapper}>
          <h1>{result}</h1>
          <span onClick={handleClick}>
            Click here or refresh the page to start over
          </span>
        </div>
      </div>
    );

  return (
    <div className={styles.container}>
      {Object.keys(gestures).map((k) => (
        <button className={styles.button} key={k} onClick={() => playGame(k)}>
          {k}
        </button>
      ))}
    </div>
  );
};

export default Game;
