import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { noop } from 'lodash';
import { CSSTransition } from 'react-transition-group';
import Hide from '../Hide';
import {
  HexWrapper,
  Img as I,
  Button,
  LabelWrapper,
  NumberWrapper
} from './Hex.styles';

const NumberTag = ({ number }) => <NumberWrapper>{number}</NumberWrapper>;

const Label = ({ children, hide }) =>
  hide ? <Hide>{children}</Hide> : <LabelWrapper>{children}</LabelWrapper>;

const Img = ({ img, alt, activeImg, isActive }) => {
  const transitionProps = {
    timeout: 150,
    classNames: 'animating',
    unmountOnExit: true
  };
  return activeImg ? (
    <React.Fragment>
      {/* First image is here just to make sure there's never a fully transparent background */}
      <I src={img} alt="placeholder" aria-hidden />
      <CSSTransition in={!isActive} {...transitionProps}>
        <I src={img} alt="decorative hex icon" aria-hidden />
      </CSSTransition>
      <CSSTransition in={isActive} {...transitionProps}>
        <I src={activeImg} alt="decorative hex icon" aria-hidden />
      </CSSTransition>
    </React.Fragment>
  ) : (
    <I src={img} alt={alt} aria-hidden />
  );
};

const Hex = ({
  children,
  onClick = noop,
  isActive = false,
  mapIsActive = false,
  element = 'li',
  label = 'Button',
  numberTag,
  hideLabel = false,
  img,
  activeImg,
  className = ''
}) => {
  const El = element;

  return (
    <El
      className={cx(className, {
        active: isActive,
        mapIsActive: mapIsActive
      })}
    >
      <HexWrapper>
        <Img
          img={img}
          activeImg={activeImg}
          isActive={isActive}
          alt="decorative hex icon"
        />
        <NumberTag number={numberTag} />
        <Button onClick={onClick}>
          <Label hide={hideLabel}>{label}</Label>
        </Button>
        {children}
      </HexWrapper>
    </El>
  );
};

Hex.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  mapIsActive: PropTypes.bool,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  label: PropTypes.string,
  numberTag: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  img: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Hex;
