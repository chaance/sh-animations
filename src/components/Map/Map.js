import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { range } from 'lodash';
import cx from 'classnames';
import { CSSTransition } from 'react-transition-group';
import Phases from '../Phases';
import Tactics from '../Tactics';
import Techniques from '../Techniques';
import dummyData from '../../data/dummy';
import formatData from '../../lib/dataModel';
import hexWing from './hex-wing.svg';
import { Hex, Wrapper, Pointer } from './Map.styles';

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
      <Wrapper
        className={cx(className, {
          'previousHex-start': prevActivePhase === null,
          [`previousHex-${prevActivePhase + 1}`]: prevActivePhase !== null,
          [`activePhase-${activePhase + 1}`]: activePhase !== null,
        })}
      >
        <Hex
          onClick={() => updateActivePhase(null)}
          mapIsActive={mapIsActive}
          element="header"
          label="Click to expand the menu"
          hideLabel={true}
          img={hexWing}
        />
        <Phases
          activePhase={activePhase}
          activeTactic={activeTactic}
          mapIsActive={mapIsActive}
          updateActivePhase={updateActivePhase}
          phases={attackPhases}
        >
          {({ tactics, isActivePhase }) =>
            tactics && (
              <CSSTransition
                in={isActivePhase}
                timeout={{
                  enter: 500,
                  exit: 1500,
                }}
                classNames="animating"
                unmountOnExit
              >
                <Tactics
                  tactics={tactics}
                  isActivePhase={isActivePhase}
                  mapIsActive={mapIsActive}
                  updateActiveTactic={updateActiveTactic}
                  activeTactic={activeTactic}
                >
                  {({ techniques, isActiveTactic }) => (
                    <CSSTransition
                      in={isActivePhase}
                      timeout={{
                        enter: 500,
                        exit: 1500,
                      }}
                      classNames="animating"
                      unmountOnExit
                    >
                      <Techniques
                        techniques={techniques}
                        isActiveTactic={isActiveTactic}
                        mapIsActive={mapIsActive}
                      />
                    </CSSTransition>
                  )}
                </Tactics>
              </CSSTransition>
            )
          }
        </Phases>
      </Wrapper>
    );
  }
}

export default Map;
