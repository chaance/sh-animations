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

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    transform: translate3d(-50%, -50%, 0) scaleY(0);
    transition: transform 0.425s ease-out;
    transition-delay: 1.5s;
    background: #fff;
    height: calc(100% - ${({ theme }) => theme.dimensions.pillHeight * 2}px);
    width: 4px;
    left: 50%;
  }

  &.animating-enter-active:before,
  &.animating-enter-done:before {
    transform: translate3d(-50%, -50%, 0) scaleY(1);
  }

  &.animating-exit:before,
  &.animating-exit-active:before {
    transition-delay: 0s;
  }

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
