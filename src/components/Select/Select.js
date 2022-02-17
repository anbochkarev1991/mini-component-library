import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px' }}>
          <Icon id='chevron-down' strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

// My naive approach

// const CustomSelect = styled.select`
//   -webkit-appearance: none;
//   font-size: 1rem;
//   background-color: ${COLORS.transparentGray15};
//   border: none;
//   border-radius: 8px;
//   padding: 12px 52px 12px 16px;
//   color: ${COLORS.gray700};

//   &:hover {
//     color: ${COLORS.black}
//   }
// `;

// Correct approach

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  -webkit-appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 12px 52px 12px 16px;
  border: none;
  border-radius: 8px;

  ${NativeSelect}:focus +& {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover +& {
    color: ${COLORS.black};
  }

`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  height: var(--size);
  width: var(--size);
  pointer-events: none;
`;

export default Select;
