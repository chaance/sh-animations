import React from 'react';
import { range } from 'lodash';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import { Wrapper, List, Label, Bubble, Toggle } from './Key.styles';

const Key = ({ active, toggle }) => (
  <Wrapper className={cx({ active })}>
    <Toggle onClick={toggle}>{active ? 'Hide' : 'Show'} Key</Toggle>
    <CSSTransition
      in={active}
      timeout={500}
      classNames="animating"
      unmountOnExit={false}
    >
      <div>
        <List>
          <Label>Worst</Label>
          {range(5).map((i, x, arr) => (
            <Bubble
              key={i}
              className={`color-${arr.length - i}`}
            >{`${i}.0-${i}.9`}</Bubble>
          ))}
          <Label>Best</Label>
        </List>
        <List>
          <Label>Worst</Label>
          {range(5).map((i, x, arr) => (
            <Bubble key={i} className={`scale-${arr.length - i}`} />
          ))}
          <Label>Best</Label>
        </List>
      </div>
    </CSSTransition>
  </Wrapper>
);

export default Key;
