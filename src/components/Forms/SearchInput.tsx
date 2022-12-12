import styled from 'styled-components';
import { ReactComponent as MagnifyingGlass } from 'src/assets/icons/magnifying-glass.svg';
import React, { useEffect } from 'react';
import { debounce } from 'src/utils/helpers';

interface ISearchInput {
  onChangeCallback: (val: string) => void;
  waitSeconds?: number;
  placeholder?: string;
  className?: string;
  hideCommandHelper?: boolean;
}

export const SearchInput: React.FC<ISearchInput> = ({
  onChangeCallback,
  waitSeconds = 1000,
  placeholder = 'Search...',
  hideCommandHelper,
  className,
}) => {
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeCallback(e.target.value);
  };
  const [debouncedFun, teardown] = debounce(inputChangeHandler, waitSeconds);

  useEffect(() => () => teardown(), []);

  return (
    <SearchInputWrapper className={className}>
      <MagnifyingGlassStyled />
      <SearchInputStyled placeholder={placeholder} onChange={debouncedFun} />
      {!hideCommandHelper ? <CommandHelper>CMD + K</CommandHelper> : null}
    </SearchInputWrapper>
  );
};

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 402px;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 10px 16px;
  color: ${({ theme }) => theme.palette.grey[50]};
  margin-left: 20px;
`;
const SearchInputStyled = styled.input`
  border: none;
  background: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  flex: 1;
  color: ${({ theme }) => theme.palette.grey[50]};
  outline: none;
`;
const MagnifyingGlassStyled = styled(MagnifyingGlass)`
  margin-right: 12.33px;
  opacity: 0.5;
`;
const CommandHelper = styled.div`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: ${({ theme }) => theme.palette.grey[50]};
  opacity: 0.5;
`;
