import { css } from 'styled-components/macro';

export const emptyBlock = (dir = 'left') => css`
  display: block;
  position: absolute;
  top: 0;
  ${dir}: 0;
  height: 100%;
  width: 100%;
`;

export const emptyPseudo = (dir) => css`
  content: '';
  ${emptyBlock(dir)}
`
