import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {

  small: {
    fontSize: 14,
    borderThikness: 1,
    iconSize: 16,
    height: 24
  },
  large: {
    fontSize: 18,
    borderThikness: 2,
    iconSize: 24,
    height: 36
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unrecognized size prop: ${size}`)
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput {...delegated} style={{
        '--height': `${styles.height / 16}rem`,
        '--width': width + 'px', 
        '--border-thickness': styles.borderThickness + 'px',
        '--font-size': `${styles.fontSize / 16}rem`,
        }} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  font-size: var(--font-size);
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

export default IconInput;
