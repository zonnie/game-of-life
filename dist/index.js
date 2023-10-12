"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const board_1 = require("./board");
const app = (0, express_1.default)();
const port = 3200;
/**
 * Starts game of life board and plays a single turn
 */
app.post("/play", (req, res) => {
    const board = new board_1.GameBoard();
    console.log("Initial state of board:");
    console.log(board.String());
    console.log("Playing a turn in the game of life");
    board.DoStep();
    let result = board.String();
    console.log(`Result: ${result}`);
    res.send(result);
});
// Start the app
app.listen(port, () => {
    return console.log(`Game of Life available at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map