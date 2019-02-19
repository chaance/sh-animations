/**
 * Helper function to get all the dimensions we'll need to position things.
 * @param {number} height - Longest measurement across the hexagon.
 */
export const getHexValues = (height = 10) => {
  const HEX_VAR = 0.866025403786; // constant for calculations: do not change!
  const width = height * HEX_VAR;
  const spaceX = width / 2;
  const spaceY = Math.sqrt(Math.pow(width / 3, 2) - Math.pow(width / 3 / 2, 2));
  const edgeLength = height - spaceY * 2;
  const boxHeight = spaceY * 4 + edgeLength * 3;
  const boxWidth = width * 2;
  const offsetX = width / 2;
  const offsetY = spaceY + edgeLength;
  return {
    height,
    width,
    spaceX,
    spaceY,
    edgeLength,
    boxHeight,
    boxWidth,
    offsetX,
    offsetY
  };
};
