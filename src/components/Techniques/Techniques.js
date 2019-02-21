import React from 'react';
import cx from 'classnames';
import { TechniqueList, Pill } from './Techniques.styles';

const Techniques = ({ className, techniques, isActiveTactic, mapIsActive }) => (
  <TechniqueList className={className}>
    {techniques.map(({ technique, score, ...data }) => {
      console.log(data);
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
          renderMeta={() => (
            <React.Fragment>
              <span>{data.sensor}</span>{' '}
              <span>{data.investigate.visibility}</span> /{' '}
              <span>{data.evasion.resilience}</span> /{' '}
              <span>{data.tacticScore}</span>
            </React.Fragment>
          )}
        />
      );
    })}
  </TechniqueList>
);

export default Techniques;
