import { playGame } from "./_helpers.js";
import { gestures } from "../../../utils/game.enum";

// Validation can be added to end point
export default (req, res) => {
  const { gesture } = JSON.parse(req.body);
  const results = playGame({ playerGesture: gesture });
  res.statusCode = 200;
  res.json(results);
};
