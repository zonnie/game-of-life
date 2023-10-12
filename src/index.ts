import express from "express";

const app = express();
const port = 3200;

/**
 Rules
 step in time, the following transitions occur:
 - Any live cell with fewer than two live neighbors dies, as if by underpopulated.
 - Any live cell with two or three live neighbors lives on to the next generation.
 - Any live cell with more than three live neighbors dies, as if by overpopulation.
 - Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 These rules, which compare the behavior of the automaton to real life, can be condensed into the following:
 - Any live cell with two or three live neighbors survives.
 - Any dead cell with three live neighbors becomes a live cell.
 - All other live cells die in the next generation. Similarly, all other dead cells stay dead.
 */

/**
 * Starts game of life board
 */
app.post("/init", (req, res) => {
  res.send("Initialized a Game of Life board...");
});

// Start the app
app.listen(port, () => {
  return console.log(`Game of Life available at http://localhost:${port}`);
});
