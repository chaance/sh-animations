import styled from 'styled-components/macro';
import P from '../Pill';
import PillList from '../PillList';

export const Pill = styled(P)`
  &:after {
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
    z-index: 0;
  }

  &.active {
    &:after {
      transform: translate3d(0, -50%, 0) scale(1);
    }
  }
`;

export const TacticList = styled(PillList)`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.dimensions.pillListOffsetX * 2}px;
  z-index: -1;
  clip-path: polygon(0 -5000%, 0 5000%, 5000% 5000%, 5000% 0);
  font-size: 14px;
`;
