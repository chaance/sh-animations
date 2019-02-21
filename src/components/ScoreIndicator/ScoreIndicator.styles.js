import styled, { css } from 'styled-components/macro';
import { camelCase } from 'lodash';

export const Indicator = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ theme }) => theme.dimensions.pillHeight}px;
  height: ${({ theme }) => theme.dimensions.pillHeight}px;
  transform: scale(0);
  transition: transform 0.5s ease-out;
  transform: scale(0);
  transform-origin: center;
  border: ${({ theme }) => theme.dimensions.pillBorder}px solid #fff;
  border-radius: 999px;
  overflow: hidden;

  ${({ score, label }) => css`
    ${!isNaN(score) && css`
      .animating-enter-done &.${camelCase(label)} {
        transform: scale(${score > 0 ? score / 5 : '1'});
      }
    `}
  `}
`;

export const IndicatorInner = styled.div`
  flex-basis: 100%;
  background-color: ${({ theme, backgroundKey }) => theme.colors.score[backgroundKey]};
`;

