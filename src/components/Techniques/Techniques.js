import React from 'react';
import cx from 'classnames';
import { TechniqueList, Pill } from './Techniques.styles';

const Techniques = ({ className, techniques, isActiveTactic, mapIsActive }) => (
  <TechniqueList className={className}>
    {techniques.map(({ technique, score }) => {
      return (
        <Pill
          count={techniques.length}
          key={technique}
          className={cx('technique')}
          // isActive={isActiveTactic}
          label={technique}
          parentIsActive={isActiveTactic}
          mapIsActive={mapIsActive}
          onClick={() => alert('you clicked me!')}
          score={score}
        />
      );
    })}
  </TechniqueList>
);

export default Techniques;
