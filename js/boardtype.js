import { Point } from '/js/point.js';

export class BoardType {
    static Dimension = 9;
    static NCELLS = BoardType.Dimension * BoardType.Dimension;

    constructor() {
      this.m = Array(BoardType.Dimension).fill().map(() => Array(BoardType.Dimension));
      this.freecount = BoardType.NCELLS;
      this.move = Array(BoardType.NCELLS + 1).fill().map(() => new Point(0, 0));
    }
}
