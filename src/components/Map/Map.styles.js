import styled from 'styled-components/macro';
import H from '../Hex';
import { getHexValues } from '../../lib/getHexValues';

// calculations don't account for overlapping borders. Math is hard :(
const HEX_BORDER = 4;
const BEZIER = `cubic-bezier(.17,.24,.04,.99)`;

const POINTER_TRANSLATE_MATH = `(100% + 2px)`;

export const Hex = styled(H)`
  position: absolute;
  height: ${({ theme }) => theme.hexSize}px;
  width: ${({ theme }) => getHexValues(theme.hexSize).width}px;
  transition: 1.5s transform ${BEZIER};
  z-index: 1;

  &:focus,
  &:focus-within * {
    outline: 0;
  }

  &.header {
    top: ${({ theme }) =>
      getHexValues(theme.hexSize).offsetY - HEX_BORDER / 1.7}px;
    left: 0;
    z-index: 2;

    &.mapIsActive {
      transform: translateX(
        ${({ theme }) => getHexValues(theme.hexSize).offsetX * -1.5}px
      );
    }
  }

  .list & {
    &:nth-child(1) {
      top: 0;
      left: ${({ theme }) =>
        getHexValues(theme.hexSize).offsetX - HEX_BORDER / 2}px;
    }

    &:nth-child(2) {
      top: ${({ theme }) =>
        getHexValues(theme.hexSize).offsetY - HEX_BORDER / 1.7}px;
      right: 0;
    }

    &:nth-child(3) {
      bottom: 0;
      left: ${({ theme }) =>
        getHexValues(theme.hexSize).offsetX - HEX_BORDER / 2}px;
    }
  }
`;

export const MapWrapper = styled.div`
  position: relative;
  height: ${({ theme }) =>
    getHexValues(theme.hexSize).boxHeight - HEX_BORDER - 1}px;
  width: ${({ theme }) => getHexValues(theme.hexSize).boxWidth - HEX_BORDER}px;
`;

export const List = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Pointer = styled.span`
  display: block;
  position: absolute;
  width: 80%;
  top: calc(50% - 2px);
  left: 0;
  height: 4px;
  transition: 0.5s opacity ease-in, 0.3s filter ease-in;
  transform-origin: left center;
  transform: scaleX(1) rotate(0);
  background: #fff;
  opacity: 0;
  z-index: 0;

  .previousHex-start & {
    transition-delay: 0.35s;
  }

  &.animating-enter {
    opacity: 0.01;
    filter: blur(8px);
  }

  &.animating-enter-active,
  &.animating-enter-done,
  &.animating-exit {
    opacity: 1;
    filter: blur(0);
  }

  &.animating-exit-active {
    transition: none;
    opacity: 0;
    filter: blur(8px);
  }

  &.pointer-1 {
    transform: rotate(-45deg) translate(0, calc(${POINTER_TRANSLATE_MATH} * -1));
  }

  &.pointer-2 {
    transform: rotate(0) translate(0, 0);
  }

  &.pointer-3 {
    transform: rotate(45deg) translate(0, calc(${POINTER_TRANSLATE_MATH}));
  }
`;
