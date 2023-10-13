import express from "express";
import { GameBoard } from "./board";

const app = express();
const port = 3200;

/**
 * Starts game of life board and plays a single turn
 */
app.post("/play", (req, res) => {
    const board = new GameBoard([[0,0],[1,0],[1,-1]]);
    console.log("Initial state of board:")
    console.log(board.String())
    console.log("Playing a turn in the game of life")
    board.DoStep()
    let result = board.String()
    console.log(`Result: ${result}`)
    res.send(result);
  });

// Start the app
app.listen(port, () => {
  return console.log(`Game of Life available at http://localhost:${port}`);
});
