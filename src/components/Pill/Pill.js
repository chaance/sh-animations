import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import cx from 'classnames';
import {
  ListItem,
  PillWrapper,
  Button,
  Label,
  Meta,
  ScoreIndicator,
} from './Pill.styles';

const Pill = ({
  children,
  className = '',
  count = 1,
  element = 'li',
  isActive = false,
  label = 'Button',
  mapIsActive = false,
  onClick = noop,
  parentIsActive = false,
  renderMeta,
  score = null,
  scoreComposition = {},
}) => {
  // check for a score compilation for tactics pills
  const hasScoreComposition =
    scoreComposition && Object.entries(scoreComposition).length > 0;

  return (
    <ListItem
      count={count}
      element={element}
      className={cx(className, {
        active: isActive,
        parentIsActive,
        mapIsActive,
      })}
    >
      <PillWrapper className="wrapper">
        <Button className="button" onClick={onClick}>
          {(score || hasScoreComposition) && (
            <ScoreIndicator
              hasScoreComposition={hasScoreComposition}
              label={label}
              score={score}
              scoreComposition={scoreComposition}
            />
          )}
          <Label>{label}</Label>
          {renderMeta && <Meta>{renderMeta()}</Meta>}
        </Button>
        {children}
      </PillWrapper>
    </ListItem>
  );
};

Pill.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  count: PropTypes.number,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isActive: PropTypes.bool,
  label: PropTypes.string,
  mapIsActive: PropTypes.bool,
  onClick: PropTypes.func,
  parentIsActive: PropTypes.bool,
  renderMeta: PropTypes.func,
  score: PropTypes.number,
  scoreComposition: PropTypes.shape({
    '0': PropTypes.number,
    '1': PropTypes.number,
    '2': PropTypes.number,
    '3': PropTypes.number,
    '4': PropTypes.number,
  }),
};

export default Pill;
