import styled from 'styled-components/macro';
import P from '../Pill';
import PillList from '../PillList';

export const Pill = styled(P)``;

export const TacticList = styled(PillList)`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.dimensions.pillListOffsetX * 2}px;
  z-index: -1;
  clip-path: polygon(0 -5000%, 0 5000%, 5000% 5000%, 5000% 0);
  font-size: 14px;
`;
