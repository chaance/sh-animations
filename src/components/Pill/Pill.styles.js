import styled, { css } from 'styled-components/macro';
import { range } from 'lodash';
import SI from '../ScoreIndicator';
import styledDynamicTag from '../../lib/styledDynamicTag';
const activeTransition = `all 150ms ease-in`;

export const ListItem = styledDynamicTag(styled.li`
  position: relative;
  margin: ${({ theme }) => theme.dimensions.pillMargin}px 0 !important;
  transition: transform ${({ theme }) => theme.timing.baseAnimationTime}ms
    ease-out ${({ theme }) => theme.timing.baseAnimationTime * 1.5}ms;
  list-style: none;
  will-change: transform;

  ${({ count, theme }) =>
    count &&
    range(count).map(child => {
      /* let's do math! */
      child++;
      const { dimensions } = theme;
      const evenCount = count % 2 === 0;
      const mid = Math.ceil(count / 2);
      const zIndex = mid === child ? count : count - child;
      const multiplier = mid - child;
      let distance =
        multiplier * (dimensions.pillCalculatedHeight + dimensions.pillMargin);
      if (evenCount) distance = distance + dimensions.pillEvenOffsetY;

      return css`
        &:nth-child(${child}) {
          transform: translate3d(0, ${distance}px, 0);
          z-index: ${zIndex};

          .animating-enter-done > & {
            transform: translate3d(0, 0, 0);

            > .wrapper > .button .indicator {
              transition-delay: ${({ theme }) =>
                theme.timing.baseAnimationTime / 1000 +
                Math.abs(multiplier) *
                  (theme.timing.baseAnimationTime * 0.25)}ms;
              /* transform: scale(1); */
            }
          }

          .animating-exit > &,
          .animating-exit-active > &,
          .animating-exit-done > & {
            transform: translate3d(0, ${distance}px, 0);
            transition-delay: 0s;
          }
        }
      `;
    })}
`);

export const PillWrapper = styled.div`
  position: relative;
  margin: 0;
  list-style: none;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

export const ScoreIndicator = styled(SI)``;

export const Button = styled.button`
  /* normalize to remove button styles */
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

  display: block;
  overflow: hidden;
  width: ${({ theme }) => theme.dimensions.pillWidth}px;
  height: ${({ theme }) => theme.dimensions.pillHeight}px;
  border: ${({ theme }) => theme.dimensions.pillBorder}px solid #fff;
  border-radius: 999px;
  text-align: left;
  transition: ${activeTransition};
  background-color: ${({ theme }) => theme.colors.blueLight};
  color: #fff;

  &:hover:not(.active) {
    background-color: ${({ theme }) => theme.colors.blueMedium};
  }

  &.has-click-handler {
    cursor: pointer;
  }

  .technique & {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.grayDark};

    &:hover:not(.active) {
      background-color: #fff;
    }
  }

  &.active {
    background: #fff;
    color: ${({ theme }) => theme.colors.blueMedium};
    &:after {
      transform: translate3d(0, -50%, 0) scale(1);
    }
  }
`;

export const Label = styled.span`
  display: block;
  margin-right: ${({ theme }) => theme.dimensions.pillMargin}px;
  margin-left: ${({ theme }) =>
    theme.dimensions.pillMargin + theme.dimensions.pillHeight}px;
`;

export const Meta = styled.span`
  line-height: 1;
  display: block;
  margin-top: 4px;
  margin-right: ${({ theme }) => theme.dimensions.pillMargin}px;
  margin-left: ${({ theme }) =>
    theme.dimensions.pillMargin + theme.dimensions.pillHeight}px;

  span {
    display: inline-block;
    color: ${({ theme }) => theme.colors.grayMedium};
  }

  span:first-child {
    padding: 0.1em 0.4em 0.05em;
    color: ${({ theme }) => theme.colors.grayDark};
    border: 1px solid currentColor;
  }
`;
