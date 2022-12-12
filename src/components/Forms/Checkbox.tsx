import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckIcon } from 'src/assets/icons/check.svg';
import { IDictionary } from 'src/utils/globalTypes';

interface ICheckbox {
  name: string;
  label?: string;
  changeCallback: (checkboxData: IDictionary<any>) => void;
  isChecked: boolean;
}

export const Checkbox: React.FC<ICheckbox> = ({
  name,
  label,
  changeCallback,
  isChecked,
}) => {
  const changeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    changeCallback({
      name,
      isChecked: e.currentTarget.checked,
    });
  };
  return (
    <label htmlFor={name}>
      <CheckboxWrapper>
        <input
          type="checkbox"
          name={name}
          id={name}
          onChange={changeHandler}
          checked={isChecked}
        />
        <CheckIcon />
        {label ? <span>{label}</span> : null}
      </CheckboxWrapper>
    </label>
  );
};

const CheckboxWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.grey[400]};
  width: 20px;
  height: 20px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  svg {
    opacity: 0;
  }
  input {
    display: none;
    &:checked + svg {
      opacity: 1;
    }
  }
`;
