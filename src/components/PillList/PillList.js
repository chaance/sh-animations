import React from 'react';
import cx from 'classnames';
import { List } from './PillList.styles';

const PillList = ({ children, className, element = 'ul' }) => (
  <List element={element} className={cx(className)}>
    {children}
  </List>
);

export default PillList;
