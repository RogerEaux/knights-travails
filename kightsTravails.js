import createSquare from './square.js';

function translate(chessCords) {
  if (Number.isInteger(chessCords[0])) return chessCords;

  //  Convert any letter from the board to a valid x coordinate
  const coords = [
    chessCords[0].toUpperCase().charCodeAt(0) - 65,
    chessCords[1] - 1,
  ];

  return coords;
}

function makeMoves(square) {
  //  A knight can only make 8 moves given by these coordinate adjustments
  const adjustments = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  const nextMoves = [];

  //  Generate a square for each move the knight could move to
  adjustments.forEach((adjustment) => {
    const nextMove = createSquare(
      square.x + adjustment[0],
      square.y + adjustment[1],
      square.path.push([square.x, square.y]),
    );

    //  If it exists on the board, add it
    if (nextMove) {
      nextMoves.push(nextMove);
    }
  });

  return nextMoves;
}

function knightTravails(chessOrigin, chessTarget) {
  const translateOrigin = translate(chessOrigin);
  const translateTarget = translate(chessTarget);

  const origin = createSquare(translateOrigin[0], translateOrigin[1]);
  const target = createSquare(translateTarget[0], translateTarget[1]);

  if (!origin || !target) return null;

  const moves = [];

  moves.push(origin);

  while (moves.length !== 0) {
    const currentSquare = moves.shift();

    if (currentSquare.x === target.x && currentSquare.y === target.y) {
      console.log(
        `You made it in ${currentSquare.path.length} moves! Here is the path:`,
      );
      currentSquare.path.forEach((move) => {
        console.log(move);
      });

      return currentSquare.path;
    }

    //  Enqueue each possible valid move
    makeMoves(currentSquare).forEach((nextMove) => {
      moves.push(nextMove);
    });
  }

  return null;
}

export default knightTravails;
