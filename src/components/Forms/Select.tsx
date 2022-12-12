import React, { MutableRefObject, useCallback, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as ChevronLeftIcon } from 'src/assets/icons/chevron-left.svg';
import { useOutsideClick } from 'src/hooks/useOutsideClick';

export interface IOption {
  value: string;
  image?: React.ReactNode;
  mainText: string;
  subText?: string;
  isRowContentText?: boolean;
  isReversedLabel?: boolean;
}

interface ISelect {
  label?: string;
  options: IOption[];
  defaultSelected?: IOption;
  className?: string;
}

export const Select: React.FC<ISelect> = ({
  label,
  options,
  defaultSelected,
  className,
}) => {
  const ref = useRef<MutableRefObject<HTMLDivElement>>(null);
  const [selectedOption, setOption] = useState(
    defaultSelected || {
      value: 0,
      mainText: 'Please Select',
      image: false,
      subText: '',
      isRowContentText: false,
    }
  );
  const [isOpen, setIsOpen] = useState(false);
  const outSideClickCallback = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  useOutsideClick(ref, outSideClickCallback);

  return (
    <SelectWrapper
      // @ts-ignore
      ref={ref}
      onClick={() => setIsOpen(!isOpen)}
      className={className}
    >
      {label ? <SelectLabel>{label}</SelectLabel> : null}
      <SelectContent>
        {selectedOption.image ? (
          <div className={'image-wrapper'}>{selectedOption.image}</div>
        ) : null}
        <SelectText isRowContentText={Boolean(selectedOption.isRowContentText)}>
          <div className={'main-text'}>{selectedOption.mainText}</div>
          {selectedOption.subText ? (
            <SubText>{selectedOption.subText}</SubText>
          ) : null}
        </SelectText>
      </SelectContent>
      <ChevronLeftIcon className="chevron" />
      {isOpen ? (
        <Dropdown>
          {options.map((option) => (
            <DropDownItem key={option.value} onClick={() => setOption(option)}>
              {option.mainText}
            </DropDownItem>
          ))}
        </Dropdown>
      ) : null}
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  padding: 8px 32px 8px 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.palette.grey[200]};
  position: relative;
  .chevron {
    transform: rotate(-90deg);
    position: absolute;
    top: 40%;
    right: 16px;
  }
`;
const SelectContent = styled.div`
  display: flex;
  align-items: center;
`;
const SelectLabel = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.palette.grey[500]};
  margin-bottom: 6px;
`;
const SubText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.palette.grey[500]};
`;
const SelectText = styled.div<{ isRowContentText: boolean }>`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.grey[800]};
  ${({ isRowContentText }) =>
    isRowContentText &&
    css`
      display: flex;
      align-items: flex-end;
      ${SubText} {
        margin-left: 5px;
      }
    `};
`;
const Dropdown = styled.div`
  position: absolute;
  top: 98%;
  right: -1px;
  min-width: 100%;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.palette.grey[200]};
  border-top: none;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  z-index: 2;
`;
const DropDownItem = styled.div`
  padding: 8px 16px;
  cursor: pointer;
  font-size: 12px;
  line-height: 16px;
`;
