import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { debounce } from 'src/utils/helpers';

interface IInput {
  label?: string;
  onChangeCallback: (val: string) => void;
  waitSeconds?: number;
  placeholder?: string;
  className?: string;
}

export const Input: React.FC<IInput> = ({
  label,
  onChangeCallback,
  waitSeconds = 300,
  placeholder,
  className,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeCallback(e.target.value);
  };
  const [debouncedFun, teardown] = debounce(inputChangeHandler, waitSeconds);

  useEffect(() => () => teardown(), []);

  return (
    <InputWrapper
      className={className}
      onClick={() => ref.current && ref.current.focus()}
    >
      {label ? <Label>{label}</Label> : null}
      <InputStyled
        ref={ref}
        placeholder={placeholder}
        onChange={debouncedFun}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  position: relative;
  background: ${({ theme }) => theme.palette.grey[100]};
`;
const Label = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.palette.grey[500]};
  margin-bottom: 6px;
`;
const InputStyled = styled.input`
  border: none;
  background: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  flex: 1;
  color: ${({ theme }) => theme.palette.grey[900]};
  outline: none;
`;
