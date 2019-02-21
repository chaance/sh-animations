import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { noop } from 'lodash';
import { CSSTransition } from 'react-transition-group';
import Hide from '../Hide';
import {
  ListItem,
  HexWrapper,
  Img as I,
  Button,
  LabelWrapper,
  NumberWrapper,
} from './Hex.styles';

const Label = ({ children, hide }) =>
  hide ? <Hide>{children}</Hide> : <LabelWrapper>{children}</LabelWrapper>;

const Img = ({ img, alt, activeImg, isActive }) => {
  const transitionProps = {
    timeout: 150,
    classNames: 'animating',
    unmountOnExit: true,
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
  activeImg,
  children,
  className = '',
  element = 'li',
  hideLabel = false,
  img,
  isActive = false,
  label = 'Button',
  mapIsActive = false,
  numberTag,
  onClick = noop,
}) => {
  return (
    <ListItem
      element={element}
      className={cx(className, {
        active: isActive,
        mapIsActive: mapIsActive,
      })}
    >
      <HexWrapper>
        <Img
          img={img}
          activeImg={activeImg}
          isActive={isActive}
          alt="decorative hex icon"
        />
        <NumberWrapper aria-hidden>{numberTag}</NumberWrapper>
        <Button onClick={onClick}>
          <Label hide={hideLabel}>{label}</Label>
        </Button>
        {children}
      </HexWrapper>
    </ListItem>
  );
};

Hex.propTypes = {
  activeImg: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  hideLabel: PropTypes.bool,
  img: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  label: PropTypes.string,
  mapIsActive: PropTypes.bool,
  numberTag: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};

export default Hex;
