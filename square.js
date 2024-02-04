function createSquare(x, y, path = []) {
  if (x > 7 || x < 0 || y > 7 || y < 0) return null;

  const cordX = x;
  const cordY = y;
  const pathTaken = path;

  return {
    get x() {
      return cordX;
    },

    get y() {
      return cordY;
    },

    get path() {
      return pathTaken;
    },
  };
}

export default createSquare;
