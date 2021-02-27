export class Game {
  squares: Square[][] = [];

  constructor() {
    this.initGame();
  }

  public movePiece(from: Square, to: Square) {
    const piece = from.removePiece();
    if (piece) to.addPiece(piece);
  }

  private initGame() {
    this.createBoardSquares();

    const whiteStartSquares = this.squares[0].concat(this.squares[1]);
    const blackStartSquares = this.squares[6].concat(this.squares[7]);
    this.addPiecesToSquares(whiteStartSquares, "white");
    this.addPiecesToSquares(blackStartSquares, "black");
  }

  private createBoardSquares() {
    const boardWidth = 8;
    for (let rankIndex = 0; rankIndex < boardWidth; rankIndex++) {
      let rank: Square[] = [];
      for (let file = 0; file < boardWidth; file++) {
        rank.push(new Square());
      }

      this.squares.push(rank);
    }
  }

  private addPiecesToSquares(squares: Square[], color: "black" | "white") {
    squares.forEach((square: Square) => {
      square.addPiece(new Piece(color));
    });
  }


}

class Square {
  piece?: Piece;

  public addPiece(piece: Piece) {
    this.piece = piece;
  }

  public removePiece() {
    const piece = this.piece;
    this.piece = undefined;
    return piece;
  }
}

class Piece {
  color: "black" | "white"

  constructor(color: "black" | "white") {
    this.color = color;
  }

}