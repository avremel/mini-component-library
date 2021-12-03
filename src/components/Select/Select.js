import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Options value={value} onChange={onChange}>
        {children}
      </Options>
      <DisplayedValue>
        {displayedValue}
        <Icon id='chevron-down' />
      </DisplayedValue>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const Options = styled.select`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  color: transparent;
`;

const DisplayedValue = styled.div`
  /* pointer-events: none;  */
  font-size: 1rem;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  color: ${COLORS.gray700};

  ${Options}:hover + & {
    color: ${COLORS.black};
  }
  ${Options}:focus + & {
    border: -webkit-focus-ring-color auto 1px;
  }
`;

export default Select;
