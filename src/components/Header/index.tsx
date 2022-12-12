import styled from 'styled-components';
import { CompanySwitcher } from 'src/components/Header/CompanySwitcher';
import { LeftMenu } from 'src/components/Header/LeftMenu';
import { AccountDropdown } from 'src/components/Header/AccountMenu';
import { RightMenu } from 'src/components/Header/RightMenu';
import { SearchInput } from 'src/components/Forms/SearchInput';

export const Header = () => {
  return (
    <HeaderStyled>
      <CompanySwitcher />
      <LeftMenu />
      <SearchInput onChangeCallback={() => {}} placeholder={'Ask Ray...'} />
      <RightMenu />
      <AccountDropdown />
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  background: ${({ theme }) => theme.palette.grey[800]};
  padding: 8px 24px;
  display: flex;
`;
