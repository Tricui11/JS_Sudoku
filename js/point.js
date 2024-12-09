export class Point {
    constructor(x, y, isInitial = false, nCandidates = 0) {
      this.x = x;
      this.y = y;
      this.isInitial = isInitial;
      this.nCandidates = nCandidates;
    }
  }
  