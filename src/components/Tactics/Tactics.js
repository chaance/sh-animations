import React from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import { TacticList, Pill } from './Tactics.styles';

const Tactics = ({
  children,
  className,
  tactics,
  isActivePhase,
  mapIsActive,
  updateActiveTactic,
  activeTactic,
}) => (
  <TacticList className={className}>
    {tactics.map((tactic, t) => {
      const isActiveTactic = activeTactic === t;
      return (
        <Pill
          count={tactics.length}
          key={tactic.label}
          className={cx('tactic')}
          active={isActiveTactic}
          label={tactic.label}
          parentIsActive={isActivePhase}
          mapIsActive={mapIsActive}
          onClick={() => updateActiveTactic(t, tactic.techniques.length)}
          scoreComposition={
            tactic.techniques &&
            tactic.techniques.reduce((acc, technique) => {
              if (technique.score > -1) {
                const key = String(Math.floor(technique.score));
                const count = acc[key] ? parseInt(acc[key], 10) + 1 : 1;
                acc[key] = count;
              }
              return acc;
            }, {})
          } // { '0': numTechs, '1': numTechs, ... }
        >
          {tactic.techniques && (
            <CSSTransition
              in={isActiveTactic}
              timeout={{
                enter: 500,
                exit: 1500,
              }}
              classNames="animating"
              unmountOnExit
            >
              {children({ techniques: tactic.techniques, isActiveTactic })}
            </CSSTransition>
          )}
        </Pill>
      );
    })}
  </TacticList>
);

export default Tactics;
