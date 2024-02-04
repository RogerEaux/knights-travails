function translate(chessCords) {
  if (Number.isInteger(chessCords[0])) return chessCords;

  //  Convert any letter from the board to a valid x coordinate
  const coords = [
    chessCords[0].toUpperCase().charCodeAt(0) - 65,
    chessCords[1],
  ];

  return coords;
}
