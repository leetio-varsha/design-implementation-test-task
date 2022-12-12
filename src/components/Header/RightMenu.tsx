//In Real life we will use react-router here and combined with right menu in one component
import styled from 'styled-components';

export const RightMenu = () => {
  return (
    <NavStyled>
      <ul>
        <li>
          <a href="/home">Logs</a>
        </li>
        <li>
          <a href="/home">Liquidity</a>
        </li>
        <li>
          <a href="/home">Policies</a>
        </li>
      </ul>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
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
