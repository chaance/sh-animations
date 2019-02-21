import styled from 'styled-components/macro';
import P from '../Pill';
import PillList from '../PillList';

export const Pill = styled(P)``;

export const TechniqueList = styled(PillList)`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.dimensions.pillOffsetX}px;
  z-index: -2;
  font-size: 11px;
`;
