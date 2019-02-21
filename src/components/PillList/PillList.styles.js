import styled from 'styled-components/macro';
import styledDynamicTag from '../../lib/styledDynamicTag';

export const List = styledDynamicTag(styled.ul`
  margin: 0;
  padding: 0;
  transform: translate3d(
    ${({ theme }) =>
      (theme.dimensions.pillOffsetX) * -1}px,
    -50%,
    0
  );
  transition: transform 0.5s ease-out 0s;
  list-style: none;

  &.animating-enter-active,
  &.animating-enter-done,
  &.animating-exit {
    transform: translate3d(0, -50%, 0);
  }
  &.animating-enter,
  &.animating-exit-active,
  &.animating-exit-done {
    transform: translate3d(
      ${({ theme }) =>
        (theme.dimensions.pillOffsetX) * -1}px,
      -50%,
      0
    );
  }

  &.animating-exit,
  &.animating-exit-active {
    transition-delay: 0.75s;
  }
`);