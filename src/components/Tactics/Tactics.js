import React, { Component } from 'react';
import cx from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { List, TacticsWrapper, Pill, Pointer } from './Tactics.styles';

class Tactics extends Component {
  state = {
    prevActiveTactic: 0
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
          [`activeTactic-${activeTactic}`]: activeTactic !== null
        })}
      >
        {[1, 2, 3].map(num => (
          <CSSTransition
            key={num}
            in={activeTactic === num - 1}
            timeout={500}
            classNames="animating"
            unmountOnExit
          >
            <Pointer className={`pointer-${num}`} aria-hidden />
          </CSSTransition>
        ))}
        <List className="list">
          {[1, 2, 3].map((num, i) => (
            <Pill
              key={num}
              onClick={() => updateActiveTactic(i)}
              mapIsActive={activeTactic !== null}
              isActive={activeTactic === i}
              numberTag={i + 1}
              label={num}
              nodeData={num}
            >
              "Test"
            </Pill>
          ))}
        </List>
      </TacticsWrapper>
    );
  }
}

export default Tactics;
