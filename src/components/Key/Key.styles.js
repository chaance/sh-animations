import styled, { css } from 'styled-components/macro';
import { range } from 'lodash';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 30px;
  left: 30px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin: ${({ theme }) => theme.dimensions.pillHeight * 0.4}px 0 0;
  padding: 0;
  list-style: none;
`;

export const Label = styled.li`
  margin: 0 8px;
`;

export const Bubble = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 6px;
  color: #000;
  font-size: 10px;
  font-weight: bold;
  background: #fff;
  border-radius: ${({ theme }) => theme.dimensions.pillHeight / 2}px;
  width: ${({ theme }) => theme.dimensions.pillHeight}px;
  height: ${({ theme }) => theme.dimensions.pillHeight}px;

  ${range(5).map(
    (i, x, arr) => css`
      &.scale-${arr.length - i} {
        transform: scale(${(i + 1) / arr.length});
      }
      &.color-${arr.length - i} {
        color: #fff;
        background-color: ${({ theme }) =>
          theme.colors.score[i]};
      }
    `
  )}
`;
