import { getHexValues } from '../lib/getHexValues';

export const theme = {
  colors: {
    black: `#272727`,
    blueLight: `#5CADE8`,
    blueMedium: `#2475D9`,
    grayDark: `#6e6f72`,
    grayMedium: `#6e6f72`,
    score: ['#ee2436', '#fd8b24', '#fadc00', '#46be6e', '#0a8228'],
  },
};

// hex sizes
const hexSize = 140;
const hexBorder = 4;
const hexWidth = getHexValues(hexSize).width;
const hexHeight = hexSize;
const hexOffsetX = getHexValues(hexSize).offsetX;
const hexOffsetY = getHexValues(hexSize).offsetY;
const hexBoxHeight = getHexValues(hexSize).boxHeight;
const hexBoxWidth = getHexValues(hexSize).boxWidth;

// pill sizes
const pillWidth = 190;
const pillHeight = 50;
const pillBorder = 4;
const pillMargin = 10;
const pillCalculatedWidth = pillWidth + pillBorder * 2;
const pillCalculatedHeight = pillHeight + pillBorder * 2;
const pillListOffsetX = hexWidth;
const pillEvenOffsetY = (pillCalculatedHeight + pillMargin) / 2;
const pillOffsetX = pillCalculatedWidth + pillListOffsetX;

// other measurements
const pointerOffset = hexOffsetY - hexBorder / 2;

export const dimensions = {
  hexSize,
  hexBorder,
  hexWidth,
  hexHeight,
  hexOffsetX,
  hexOffsetY,
  hexBoxHeight,
  hexBoxWidth,
  pillWidth,
  pillHeight,
  pillBorder,
  pillMargin,
  pillCalculatedWidth,
  pillCalculatedHeight,
  pillListOffsetX,
  pillEvenOffsetY,
  pillOffsetX,
  pointerOffset,
};

export const timing = {
  baseAnimationTime: 400,
};
