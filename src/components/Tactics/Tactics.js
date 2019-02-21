import React, { Component } from 'react';
import cx from 'classnames';
import { range } from 'lodash';
import { CSSTransition } from 'react-transition-group';
import { List, TacticsWrapper, Pill, Pointer } from './Tactics.styles';

class Tactics extends Component {
  state = {
    prevActiveTactic: 0,
  };

  componentDidUpdate(prevProps) {
    if (this.props.activeTactic !== prevProps.activeTactic) {
      this.setState({ prevActiveTactic: prevProps.activeTactic });
    }
  }

  render() {
    const { updateActiveTactic, activeTactic, className } = this.props;
    const { prevActiveTactic } = this.state;
    return (
      <TacticsWrapper
        className={cx(className, {
          'previousTactic-start': prevActiveTactic === null,
          [`previousTactic-${prevActiveTactic}`]: prevActiveTactic !== null,
          [`activeTactic-${activeTactic}`]: activeTactic !== null,
        })}
      >
        {range(3).map(num => (
          <CSSTransition
            key={num}
            in={activeTactic === num}
            timeout={500}
            classNames="animating"
            unmountOnExit
          >
            <Pointer className={`pointer-${num + 1}`} aria-hidden />
          </CSSTransition>
        ))}
        <List className="list">
          {range(3).map(num => (
            <Pill
              key={num}
              onClick={() => updateActiveTactic(num)}
              mapIsActive={activeTactic !== null}
              isActive={activeTactic === num}
              numberTag={num + 1}
              label={num}
              nodeData={num}
            />
          ))}
        </List>
      </TacticsWrapper>
    );
  }
}

export default Tactics;
