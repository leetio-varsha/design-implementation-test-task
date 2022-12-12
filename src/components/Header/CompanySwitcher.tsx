import styled from 'styled-components';
import { ReactComponent as Chevron } from 'src/assets/icons/chevron-left.svg';

export const CompanySwitcher = () => {
  return (
    <CompanySwitcherWrapper>
      <CompanyLogo />
      <CompanyTitle>Acme Inc</CompanyTitle>
      <ChevronDown />
    </CompanySwitcherWrapper>
  );
};

const CompanySwitcherWrapper = styled.div`
  border-right: 1px solid ${({ theme }) => theme.palette.grey[700]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
`;
const CompanyLogo = styled.div`
  width: 36px;
  height: 36px;
  background: #ffffff;
  opacity: 0.2;
  border-radius: 4px;
  margin-right: 21.33px;
`;
const CompanyTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  color: #fff;
`;
const ChevronDown = styled(Chevron)`
  transform: rotate(270deg);
  margin: 0 21.33px;
  color: #fff;
  height: 16px;
`;
