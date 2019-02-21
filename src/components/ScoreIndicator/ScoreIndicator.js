import React from 'react';
import cx from 'classnames';
import { range, camelCase } from 'lodash';
import { Indicator, IndicatorInner } from './ScoreIndicator.styles';

const ScoreIndicator = ({
  className,
  label,
  hasScoreComposition,
  score,
  scoreComposition,
}) => {
  // array of keys for each score in a compilation
  const scoreKeys = hasScoreComposition ? range(5) : null;

  // return total number of unique score range values within a tactic
  // This is how we know how many span elements to render for the different colors
  const getInnerIndicatorTotal = () => {
    let innerTotal = 0;
    if (hasScoreComposition) {
      scoreKeys.forEach(val => {
        // check if scores are present for this level and iterate the count
        if (scoreComposition[String(val)]) ++innerTotal;
      });
    } else if (score !== null) {
      innerTotal = 1;
    }
    return innerTotal;
  };

  // render the inner score indicators
  const renderInnerIndicators = () =>
    hasScoreComposition
      ? scoreKeys.map((val, i) => {
          const total = getInnerIndicatorTotal();
          // use flex-box to stack the inner layers
          // flex-basis determines how tall they are as a percentage of the container
          // number of scores per range / total number of inner spans
          const flexBasis = `${(val / total) * 100}%`;
          return scoreComposition[String(val)] ? (
            <IndicatorInner
              key={i}
              backgroundKey={Math.floor(val)}
              style={{
                flexBasis,
                WebkitFlexBasis: flexBasis,
              }}
            />
          ) : null;
        })
      : score !== null && (
          <IndicatorInner score={score} backgroundKey={Math.floor(score)} />
        );

  return (
    <Indicator
      score={score}
      label={label}
      className={cx('indicator', className, camelCase(label))}
      aria-hidden
    >
      {renderInnerIndicators()}
    </Indicator>
  );
};

export default ScoreIndicator;
