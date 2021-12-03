import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES_BY_SIZE = {
  small: {
    '--font-size': '14px',
    '--border-bottom': '1px solid black',
  },
  large: {
    '--font-size': '18px',
    '--border-bottom': '2px solid black',
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputWrapper>
        <Input
          placeholder={placeholder}
          width={width}
          style={STYLES_BY_SIZE[size]}
        />
        <IconWrapper size={size}>
          <Icon id={icon} size={size === 'large' ? '20' : '15'} />
        </IconWrapper>
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  all: unset;
  width: ${p => p.width ? p.width + 'px' : '100%'};
  font-size: var(--font-size);
  border-bottom: var(--border-bottom);
  padding-left: 25px;
  padding-bottom: 5px;
  color: ${COLORS.gray700};
  font-weight: bold;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: initial;
  }

  &:focus {
    outline-offset: 3px;
  }

  &:hover {
    color: ${COLORS.black}
  }
`;

const IconWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  color: ${COLORS.gray500};

  ${Input}:hover + & {
    color: ${COLORS.black}
  }
`;

export default IconInput;
