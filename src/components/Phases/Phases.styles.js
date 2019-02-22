import styled from 'styled-components/macro';
import H from '../Hex';

export const Hex = styled(H)`
  z-index: 2;

  &:before {
    display: block;
    position: absolute;
    top: 50%;
    left: 100%;
    width: ${({ theme }) =>
      theme.dimensions.pillListOffsetX +
      theme.dimensions.pillCalculatedWidth / 2}px;
    height: 4px;
    background: #fff;
    content: '';
    transform: translate3d(-50%, 0, 0) scale(0);
    transform-origin: center left;
    transition: transform 0.5s ease-out;
    transition-delay: 0.68s;
    will-change: transform;
  }

  &.active {
    z-index: 1;
    &:before {
      transform: translate3d(0, -50%, 0) scale(1);
    }
  }

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
`;

export const PhaseList = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;
