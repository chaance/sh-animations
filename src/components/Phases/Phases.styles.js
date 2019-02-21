import styled from 'styled-components/macro';
import H from '../Hex';

export const Hex = styled(H)`
  z-index: 2;

  &.active {
    z-index: 1;
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
