import {describe, expect, test} from '@jest/globals';
import { GameBoard } from "./board";

test("testing [0,0],[1,0],[1,-1]", () => {
    const board = new GameBoard([[0,0],[1,0],[1,-1]])
    board.DoStep()
    expect(board.livingCells).toStrictEqual([[0,-1],[0,0],[1,0],[1,-1]])
});

test("testing [0, 2],[-1, 2],[0, 0],[1, 5]", () => {
    const board = new GameBoard([[0, 2],[-1, 2],[0, 0],[1, 5]])
    board.DoStep()
    expect(board.livingCells).toStrictEqual([[-1, 1],[0, 1]])
});