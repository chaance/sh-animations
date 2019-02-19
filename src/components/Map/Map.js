import React, { Component } from 'react';
import cx from 'classnames';
import { CSSTransition } from 'react-transition-group';
import hexBlank from './hex-blank.svg';
import hexActive from './hex-blank-inverse.svg';
import hexWing from './hex-wing.svg';
import dummyData from '../../data/dummy';
import formatData from '../../lib/dataModel';
import { Hex, MapWrapper, List, Pointer } from './Map.styles';

const attackPhases = formatData(dummyData);

class Map extends Component {
  state = {
    prevActiveHex: 0
  };

  componentDidUpdate(prevProps) {
    if (this.props.activeHex !== prevProps.activeHex) {
      this.setState({ prevActiveHex: prevProps.activeHex });
    }
  }

  render() {
    const { updateActiveHex, activeHex, className } = this.props;
    const { prevActiveHex } = this.state;
    return (
      <MapWrapper
        className={cx(className, {
          'previousHex-start': prevActiveHex === null,
          [`previousHex-${prevActiveHex + 1}`]: prevActiveHex !== null,
          [`activeHex-${activeHex + 1}`]: activeHex !== null
        })}
      >
        <Hex
          onClick={() => updateActiveHex(null)}
          mapIsActive={activeHex !== null}
          className="header"
          element="header"
          label="Click to expand the menu"
          hideLabel={true}
          img={hexWing}
        />
        {[1, 2, 3].map(num => (
          <CSSTransition
            key={num}
            in={activeHex === num - 1}
            timeout={500}
            classNames="animating"
            unmountOnExit
          >
            <Pointer className={`pointer-${num}`} aria-hidden />
          </CSSTransition>
        ))}
        <List className="list">
          {attackPhases.map((phase, i) => (
            <Hex
              key={phase.label}
              onClick={() => updateActiveHex(i)}
              mapIsActive={activeHex !== null}
              isActive={activeHex === i}
              numberTag={i + 1}
              label={phase.label}
              img={hexBlank}
              activeImg={hexActive}
              nodeData={phase.techniques}
            >
            </Hex>
          ))}
        </List>
      </MapWrapper>
    );
  }
}

export default Map;
