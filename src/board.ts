/**
 * Cell represents a cell in the Game of Life game board
 */
class Cell {
  cell: Number[];
  alive: Number | null;

  constructor(
    ldu: Number,
    u: Number,
    rdu: Number,
    l: Number,
    r: Number,
    ldd: Number,
    d: Number,
    rdd: Number
  ) {
    this.alive = null;
    this.cell = [ldu, u, rdu, l, r, ldd, d, rdd];
  }

  print() {
    let state: Number | String = this.alive === null ? "-" : this.alive
    console.log(this.cell[0] + " " + this.cell[1] + " " + this.cell[2]);
    console.log(this.cell[3] + " " + state + " " + this.cell[4]);
    console.log(this.cell[5] + " " + this.cell[6] + " " + this.cell[7]);
  }
}

/**
 * GameBoard represents the state of the Game of Life run
 */
export class GameBoard {
  board: Array<Cell>;

  constructor() {
    this.board = new Array<Cell>();
    this.board.push(new Cell(1, 1, 0, 0, 1, 1, 0, 0));
    this.board.push(new Cell(0, 0, 0, 0, 1, 0, 0, 0));
    this.board.push(new Cell(1, 0, 0, 0, 1, 0, 0, 0));
  }

  print() {
    this.board.forEach(cell => {
        cell.print()
    });
  }
}
