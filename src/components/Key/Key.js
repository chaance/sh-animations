import React from 'react';
import { range } from 'lodash';
import { Wrapper, List, Label, Bubble } from './Key.styles';

const Key = props => (
  <Wrapper>
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
  </Wrapper>
);

export default Key;
