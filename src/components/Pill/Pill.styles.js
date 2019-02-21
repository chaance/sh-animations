import styled, { css } from 'styled-components/macro';
import { range } from 'lodash';
import SI from '../ScoreIndicator';
import styledDynamicTag from '../../lib/styledDynamicTag';
const activeTransition = `all 150ms ease-in`;

export const ListItem = styledDynamicTag(styled.li`
  position: relative;
  margin: ${({ theme }) => theme.dimensions.pillMargin}px 0 !important;
  transition: transform 0.5s ease-out 0.75s;
  list-style: none;

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
              transition-delay: ${0.5 + (Math.abs(multiplier) * 0.125)}s;
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
  width: 176px;
  height: ${({ theme }) => theme.dimensions.pillHeight}px;
  border: ${({ theme }) => theme.dimensions.pillBorder}px solid #fff;
  border-radius: 999px;
  text-align: left;
  transition: ${activeTransition};
  background-color: ${({ theme }) => theme.colors.blueLight};
  color: #fff;

  .technique & {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.grayDark};
  }

  .active & {
    /* color: ${({ theme }) => theme.colors.blueMedium}; */
  }
`;

export const Label = styled.span`
  display: block;
  margin-right: ${({ theme }) => theme.dimensions.pillMargin}px;
  margin-left: ${({ theme }) =>
    theme.dimensions.pillMargin + theme.dimensions.pillHeight}px;
`;