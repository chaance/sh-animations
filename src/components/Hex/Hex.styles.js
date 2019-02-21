import styled from 'styled-components/macro';
import styledDynamicTag from '../../lib/styledDynamicTag';
const activeTransition = `all 150ms ease-in`;

export const ListItem = styledDynamicTag(styled.li`
  margin: 0;
  list-style: none;
`);

export const HexWrapper = styled.div`
  position: relative;
  margin: 0;
  list-style: none;
  height: 100%;
  width: 100%;
  clip-path: polygon(0 -5000%, 0 5000%, 5000% 5000%, 5000% 0);
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: ${activeTransition};
  opacity: 1;

  &.animating-enter {
    opacity: 0.01;
  }

  &.animating-enter-active,
  &.animating-exit {
    opacity: 1;
  }

  &.animating-exit-active {
    opacity: 0;
  }
`;

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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: ${activeTransition};
  background-color: transparent;
  color: #fff;

  .active & {
    color: ${({ theme }) => theme.colors.blueMedium};
  }
`;

export const LabelWrapper = styled.span`
  display: block;
  margin-right: 10px;
  margin-left: 10px;
  padding-top: 10px;
`;

export const NumberWrapper = styled.span`
  display: block;
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  transition: ${activeTransition};
  color: ${({ theme }) => theme.colors.blueLight};
  font-size: 18px;
  text-align: center;

  .active & {
    color: #fff;
  }
`;
