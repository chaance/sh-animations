import { css } from 'styled-components/macro';

export const emptyBlock = (dir = 'left') => css`
  display: block;
  position: absolute;
  top: 0;
  ${dir}: 0;
  height: 100%;
  width: 100%;
`;

export const emptyPseudo = dir => css`
  content: '';
  ${emptyBlock(dir)}
`;

export const normalizeButton = () => css`
  appearance: none;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 0;
  overflow: visible;
  border: 0;
  box-shadow: none;
  text-transform: none;
`;
