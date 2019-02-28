import React from 'react';
import cx from 'classnames';
import hexBlank from './hex-blank.svg';
import hexActive from './hex-blank-inverse.svg';

import {
  Hex,
  PhaseList,
} from './Phases.styles';

const Phases = ({
  children,
  className,
  activePhase,
  activeTactic,
  mapIsActive,
  updateActivePhase,
  phases,
}) => {
  return (
    <PhaseList className={cx('list', className)}>
      {phases.map((phase, i) => {
        const isActivePhase = activePhase === i;
        return (
          <Hex
            key={phase.label}
            activeImg={hexActive}
            activeTactic={activeTactic}
            childNodes={phase.tactics}
            img={hexBlank}
            active={isActivePhase}
            label={phase.label}
            mapIsActive={mapIsActive}
            numberTag={i + 1}
            onClick={() => updateActivePhase(i, phase.tactics.length)}
          >
            {children({ tactics: phase.tactics, isActivePhase })}
          </Hex>
        );
      })}
    </PhaseList>
  );
};

export default Phases;
