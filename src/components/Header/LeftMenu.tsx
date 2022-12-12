//In Real life we will use react-router here
import styled from 'styled-components';

export const LeftMenu = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/home" className="active">
            Invoices
            <NumberBadge>32</NumberBadge>
          </a>
        </li>
        <li>
          <a href="/home">Vendors</a>
        </li>
        <li>
          <a href="/home">Insights</a>
        </li>
      </ul>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  margin-right: auto;
  display: flex;
  ul {
    display: flex;
    align-items: center;
    padding-left: 0;
  }
  li {
    margin-left: 40px;
    list-style: none;
  }
  a {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    opacity: 0.8;
    color: ${({ theme }) => theme.palette.defaults.white};
    text-decoration: none;
    display: flex;
    align-items: center;
    &.active,
    :hover {
      opacity: 1;
    }
  }
`;
const NumberBadge = styled.div`
  margin-left: 4px;
  height: 20px;
  padding: 0 4px;
  background: ${({ theme }) => theme.palette.defaults.white};
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.palette.grey[800]};
`;
