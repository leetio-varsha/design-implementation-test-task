import styled from 'styled-components';
import { ReactComponent as Chevron } from 'src/assets/icons/chevron-left.svg';

export const AccountDropdown = () => {
  return (
    <AccountDropdownWrapper>
      <Avatar />
      <ChevronDown />
    </AccountDropdownWrapper>
  );
};

const AccountDropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px;
`;
const Avatar = styled.div`
  width: 36px;
  height: 36px;
  background: ${({ theme }) => theme.palette.defaults.black};
  border-radius: 50%;
`;
const ChevronDown = styled(Chevron)`
  transform: rotate(270deg);
  color: #fff;
  height: 16px;
  margin-left: 8px;
`;
