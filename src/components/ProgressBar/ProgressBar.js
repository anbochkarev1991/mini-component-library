/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 4 + 'px',
    radius: 4 + 'px',
    padding: 0 + 'px'
  },
  medium: {
    height: 8 + 'px',
    radius: 4 + 'px',
    padding: 0 + 'px'
  },
  large: {
    height: 12 + 'px',
    radius: 8 + 'px',
    padding: 4 + 'px'
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unrecognized size prop: ${size}`)
  }
  return (
    <Wrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
      style={{ '--radius': styles.radius, '--padding': styles.padding }}  
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper
        style={{ '--radius': styles.radius }}
      >
        <Bar style={{ '--width': value + '%', '--height': styles.height }}/>
      </BarWrapper>
      
    </Wrapper>

  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
  overflow: hidden;
`;

const BarWrapper = styled.div`
  border-radius: var(--radius);
  overflow: hidden;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  width: var(--width);
  height: var(--height);
  border-radius: 4px 0 0 4px;
`;


export default ProgressBar;
