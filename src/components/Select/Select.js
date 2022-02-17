import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <CustomSelect value={value} onChange={onChange} size='1'>
      {children}

    </CustomSelect>
  );
};

const CustomSelect = styled.select`
  -webkit-appearance: none;
  font-size: 1rem;
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  padding: 12px 52px 12px 16px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black}
  }
`;

export default Select;
