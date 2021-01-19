import { useState } from "react";
import { play } from "./_helpers.js";
import styles from "../../styles/Game.module.css";

export default () => {
  const [ winner, setWinner ] = useState(null)

  const playGame = gesture => {
    play(gesture).then(results => {
      setWinner(results.winner)
    })
  }

  if (winner) return (
      <div className={styles.container}>
      <h1 className={styles.winner}>{winner} wins!</h1>
      </div>
  )

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => playGame("rock")}>rock</button>
    </div>
  )
}
