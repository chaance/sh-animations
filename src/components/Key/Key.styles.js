import styled, { css } from 'styled-components/macro';
import { range } from 'lodash';
import { normalizeButton } from '../../lib/styledUtils';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 40px;
  left: 40px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin: ${({ theme }) => theme.dimensions.pillHeight * 0.4}px 0 0;
  padding: 0;
  list-style: none;
  transition: transform 0.25s ease-in;

  .animating-enter &,
  .animating-enter-active &,
  .animating-enter-done & {
      transform: translate3d(0, 0, 0);
  }

  .animating-exit &,
  .animating-exit-active &,
  .animating-exit-done & {
      transform: translate3d(0, 200px, 0);
  }
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
        background-color: ${({ theme }) => theme.colors.score[i]};
      }
    `
  )}
`;

export const Toggle = styled.button`
  ${normalizeButton()}
  position: fixed;
  z-index: 1;
  letter-spacing: 1px;
  left: 0;
  bottom: 0;
  padding: 8px 10px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.grayLight};
  color: ${({ theme }) => theme.colors.black};
`;
