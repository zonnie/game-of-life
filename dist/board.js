"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameBoard = void 0;
/**
 * Cell represents a cell in the Game of Life game board
 */
class Cell {
    constructor(ldu, u, rdu, l, r, ldd, d, rdd) {
        this.alive = null;
        this.cell = [ldu, u, rdu, l, r, ldd, d, rdd];
    }
    print() {
        let state = this.alive === null ? "-" : this.alive;
        console.log(this.cell[0] + " " + this.cell[1] + " " + this.cell[2]);
        console.log(this.cell[3] + " " + state + " " + this.cell[4]);
        console.log(this.cell[5] + " " + this.cell[6] + " " + this.cell[7]);
    }
}
/**
 * GameBoard represents the state of the Game of Life run
 */
class GameBoard {
    constructor() {
        this.board = new Array();
        this.board.push(new Cell(1, 1, 0, 0, 1, 1, 0, 0));
        this.board.push(new Cell(0, 0, 0, 0, 1, 0, 0, 0));
        this.board.push(new Cell(1, 0, 0, 0, 1, 0, 0, 0));
    }
    print() {
        this.board.forEach(cell => {
            cell.print();
        });
    }
}
exports.GameBoard = GameBoard;
//# sourceMappingURL=board.js.map