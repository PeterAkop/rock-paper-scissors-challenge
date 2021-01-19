import { playGame } from "./_helpers.js";
import { gestures } from "../../../utils/game.enum";

export default (req, res) => {
  const { gesture } = JSON.parse(req.body);
  // minimum validation
  if (!gestures[gesture]) {
    res.statusCode = 400;
    res.json({ error: "invalid gest" });
  } else {
    const results = playGame({ playerGesture: gesture });
    res.statusCode = 200;
    res.json(results);
  }
};
