import React from 'react';
import { ListItem } from './Pill.styles';

const Pill = ({ children, className }) => (
  <ListItem className={className}>{children}</ListItem>
);

export default Pill;
