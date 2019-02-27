import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  transition: height ${({ theme }) => theme.timing.baseAnimationTime}ms ease, width 0.5s ease;
  position: relative;
  will-change: height, width;
`;
