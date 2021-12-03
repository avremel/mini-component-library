/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const HEIGHT_BY_SIZE = {
  small: '8px',
  medium: '12px',
  large: '24px',
};
const BORDER_RADIUS_BY_SIZE = {
  small: '4px',
  medium: '4px',
  large: '8px',
};

const ProgressBar = ({ value, size }) => {
  value = value > 99 ? Math.ceil(value) : value;

  return (
    <>
      <VisuallyHidden>{value}</VisuallyHidden>
      <Wrapper
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        size={size}
        style={{
          '--height': HEIGHT_BY_SIZE[size],
          '--borderRadius': BORDER_RADIUS_BY_SIZE[size],
        }}
      >
        <Bar
          value={value}
          style={{
            '--width': value + '%',
            '--borderRadius': size === 'large' ? '5px' : '4px',
          }}
        />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  width: 100%;
  border-radius: var(--borderRadius);
  padding: ${p => p.size === 'large' ? '4px' : ''};
`;

const Bar = styled.div`
  width: var(--width);
  height: 100%;
  background: ${COLORS.primary};
  border-radius: ${p => p.value === 100 ? 'var(--borderRadius)' : 'var(--borderRadius) 0 0 var(--borderRadius)'};
`;

export default ProgressBar;
