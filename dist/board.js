"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameBoard = void 0;
/**
 * GameBoard represents the state of the Game of Life run
 */
class GameBoard {
    constructor() {
        this.livingCells = [
            [0, 0], [1, 0], [1, -1]
        ];
    }
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
    DoStep() {
        let resultBoard = [];
        let visited = [];
        const neighborLocations = [
            [-1, 1],
            [0, 1],
            [1, 1],
            [-1, 0],
            [1, 0],
            [-1, -1],
            [0, -1],
            [1, -1],
        ];
        this.livingCells.forEach((cell) => {
            let aliveNeighbors = 0;
            // check each living cell's neighbor to determine if
            // it will live of the next generation
            neighborLocations.forEach((neighbor) => {
                let neighborX = cell[0] + neighbor[0];
                let neighborY = cell[1] + neighbor[1];
                if (this.checkNeighborCell(neighborX, neighborY)) {
                    aliveNeighbors += 1;
                }
                else if (!visited.some((item) => item[0] == neighborX && item[1] == neighborY)) {
                    // Any dead cell with three live neighbors becomes a live cell.
                    let deadNeighborAliveNeighbors = 0;
                    neighborLocations.forEach((neighbor) => {
                        let x = neighborX + neighbor[0];
                        let y = neighborY + neighbor[1];
                        if (this.checkNeighborCell(x, y)) {
                            deadNeighborAliveNeighbors += 1;
                        }
                    });
                    if (deadNeighborAliveNeighbors === 3) {
                        resultBoard.push([neighborX, neighborY]);
                    }
                    visited.push([neighborX, neighborY]);
                }
            });
            // Any live cell with two or three live neighbors survives.
            if (aliveNeighbors === 2 || aliveNeighbors === 3) {
                resultBoard.push(cell);
            }
        });
        let unique = new Set(resultBoard);
        this.livingCells = [...unique];
    }
    checkNeighborCell(x, y) {
        for (let index = 0; index < this.livingCells.length; index++) {
            const cell = this.livingCells[index];
            if (cell[0] === x && cell[1] == y) {
                return true;
            }
        }
        return false;
    }
    String() {
        let result = [];
        this.livingCells.forEach((cell) => {
            result.push(`Living cell at x:${cell[0]}, y:${cell[1]}`);
        });
        return result.join("\r\n");
    }
}
exports.GameBoard = GameBoard;
//# sourceMappingURL=board.js.map