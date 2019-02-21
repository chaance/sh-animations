import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { CSSTransition } from 'react-transition-group';
import hexBlank from './hex-blank.svg';
import hexActive from './hex-blank-inverse.svg';
import hexWing from './hex-wing.svg';
import dummyData from '../../data/dummy';
import formatData from '../../lib/dataModel';
import {
  Hex,
  MapWrapper,
  PhaseList,
  TacticList,
  TechniqueList,
  Pointer,
  Pill,
} from './Map.styles';

const attackPhases = formatData(dummyData);

class Map extends PureComponent {
  static propTypes = {
    activePhase: PropTypes.number,
    activeTactic: PropTypes.number,
    className: PropTypes.string,
    updateActivePhase: PropTypes.func.isRequired,
    updateActiveTactic: PropTypes.func.isRequired,
  };

  state = {
    prevActivePhase: null,
    prevActiveTactic: null,
  };

  componentDidUpdate(prevProps) {
    if (this.props.activePhase !== prevProps.activePhase) {
      this.setState({ prevActivePhase: prevProps.activePhase });
    }
    if (this.props.activeTactic !== prevProps.activeTactic) {
      this.setState({ prevActiveTactic: prevProps.activeTactic });
    }
  }

  render() {
    const {
      activeTactic,
      activePhase,
      className,
      updateActivePhase,
      updateActiveTactic,
    } = this.props;
    const { prevActivePhase } = this.state;
    const mapIsActive = activePhase !== null;
    return (
      <MapWrapper
        className={cx(className, {
          'previousHex-start': prevActivePhase === null,
          [`previousHex-${prevActivePhase + 1}`]: prevActivePhase !== null,
          [`activePhase-${activePhase + 1}`]: activePhase !== null,
        })}
      >
        <Hex
          onClick={() => updateActivePhase(null)}
          mapIsActive={mapIsActive}
          className="header"
          element="header"
          label="Click to expand the menu"
          hideLabel={true}
          img={hexWing}
        />
        {[1, 2, 3].map(num => (
          <CSSTransition
            key={num}
            in={activePhase === num - 1}
            timeout={500}
            classNames="animating"
            unmountOnExit
          >
            <Pointer className={`pointer-${num}`} aria-hidden />
          </CSSTransition>
        ))}
        <PhaseList className="list">
          {attackPhases.map((phase, i) => {
            const isActivePhase = activePhase === i;
            return (
              <Hex
                key={phase.label}
                activeImg={hexActive}
                activeTactic={activeTactic}
                childNodes={phase.tactics}
                img={hexBlank}
                isActive={isActivePhase}
                label={phase.label}
                mapIsActive={mapIsActive}
                numberTag={i + 1}
                onClick={() => updateActivePhase(i, phase.tactics.length)}
              >
                {phase.tactics && (
                  <CSSTransition
                    in={isActivePhase}
                    timeout={{
                      enter: 500,
                      exit: 1500,
                    }}
                    classNames="animating"
                    unmountOnExit
                  >
                    <TacticList>
                      {phase.tactics.map((tactic, t) => {
                        const isActiveTactic = activeTactic === t;
                        return (
                          <Pill
                            count={phase.tactics.length}
                            key={tactic.label}
                            className={cx('tactic')}
                            isActive={isActiveTactic}
                            label={tactic.label}
                            parentIsActive={isActivePhase}
                            mapIsActive={mapIsActive}
                            onClick={() =>
                              updateActiveTactic(t, tactic.techniques.length)
                            }
                            scoreComposition={
                              tactic.techniques &&
                              tactic.techniques.reduce((acc, technique) => {
                                if (technique.score > -1) {
                                  const key = String(
                                    Math.floor(technique.score)
                                  );
                                  const count = acc[key]
                                    ? parseInt(acc[key], 10) + 1
                                    : 1;
                                  //console.log({ tactic: tactic.label, technique, key, count });
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
                                <TechniqueList>
                                  {tactic.techniques.map(({ technique, score }, q) => {
                                    return (
                                      <Pill
                                        count={tactic.techniques.length}
                                        key={technique}
                                        className={cx('technique')}
                                        // isActive={isActiveTactic}
                                        label={technique}
                                        parentIsActive={isActiveTactic}
                                        mapIsActive={mapIsActive}
                                        onClick={() => alert('you clicked me!')}
                                        score={score}
                                      >
                                        <span />
                                      </Pill>
                                    );
                                  })}
                                </TechniqueList>
                              </CSSTransition>
                            )}
                          </Pill>
                        );
                      })}
                    </TacticList>
                  </CSSTransition>
                )}
              </Hex>
            );
          })}
        </PhaseList>
      </MapWrapper>
    );
  }
}

export default Map;
