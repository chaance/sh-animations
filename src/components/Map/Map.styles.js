import styled from 'styled-components/macro';
import H from '../Hex';
import P from '../Pill';
import PillList from '../PillList';

// calculations don't account for overlapping borders. Math is hard :(
const BEZIER = `cubic-bezier(.17,.24,.04,.99)`;
const POINTER_TRANSLATE_MATH = `(100% + 2px)`;

export const Pill = styled(P)``;

export const Hex = styled(H)`
  position: absolute;
  height: ${({ theme }) => theme.dimensions.hexHeight}px;
  width: ${({ theme }) => theme.dimensions.hexWidth}px;
  transition: 1.5s transform ${BEZIER};
  z-index: 2;

  &.active {
    z-index: 1;
  }

  &:focus,
  &:focus-within * {
    outline: 0;
  }

  &.header {
    top: ${({ theme }) =>
      theme.dimensions.hexOffsetY - theme.dimensions.hexBorder / 1.7}px;
    left: 0;
    z-index: 3;

    &.mapIsActive {
      transform: translate3d(
        ${({ theme }) => theme.dimensions.hexOffsetX * -1.5}px,
        0,
        0
      );
    }
  }

  .list & {
    &:nth-child(1) {
      top: 0;
      left: ${({ theme }) =>
        theme.dimensions.hexOffsetX - theme.dimensions.hexBorder / 2}px;
    }

    &:nth-child(2) {
      top: ${({ theme }) =>
        theme.dimensions.hexOffsetY - theme.dimensions.hexBorder / 1.7}px;
      right: 0;
    }

    &:nth-child(3) {
      bottom: 0;
      left: ${({ theme }) =>
        theme.dimensions.hexOffsetX - theme.dimensions.hexBorder / 2}px;
    }
  }
`;

export const MapWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 0);
  height: ${({ theme }) =>
    theme.dimensions.hexBoxHeight - theme.dimensions.hexBorder - 1}px;
  width: ${({ theme }) =>
    theme.dimensions.hexBoxWidth - theme.dimensions.hexBorder}px;
`;

export const PhaseList = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TacticList = styled(PillList)`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.dimensions.pillListOffsetX * 2}px;
  z-index: -1;
  clip-path: polygon(0 -5000%, 0 5000%, 5000% 5000%, 5000% 0);
`;

export const TechniqueList = styled(PillList)`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.dimensions.pillOffsetX}px;
  z-index: -2;
  font-size: 12px;
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
    transform: rotate(-45deg)
      translate3d(0, calc(${POINTER_TRANSLATE_MATH} * -1), 0);
  }

  &.pointer-2 {
    transform: rotate(0) translate3d(0, 0, 0);
  }

  &.pointer-3 {
    transform: rotate(45deg) translate3d(0, calc(${POINTER_TRANSLATE_MATH}), 0);
  }
`;
