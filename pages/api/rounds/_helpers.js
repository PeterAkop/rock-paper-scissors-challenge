import { gestures } from "../../../utils/game.enum";

export const playGame = ({ playerGesture }) => {
  let keys = Object.keys(gestures);

  const index = Math.floor(Math.random() * keys.length);
  const computerGesture = keys[index];

  let message = "user wins";

  if (gestures[computerGesture].includes(playerGesture)) {
    message = "computer wins";
  } else if (computerGesture === playerGesture) {
    message = "draw game";
  }

  return { message };
};
