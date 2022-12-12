import React from 'react';
import styled from 'styled-components';

interface IInvoiceTabs {
  changeTabCallback: (section: string) => void;
  activeSection: string;
}

export const InvoiceTabs: React.FC<IInvoiceTabs> = ({
  changeTabCallback,
  activeSection,
}) => {
  const getActiveSectionClass = (section: string) =>
    activeSection === section ? 'active' : '';
  return (
    <SectionsWrapper>
      <li
        className={getActiveSectionClass('details')}
        onClick={() => changeTabCallback('details')}
      >
        Details
      </li>
      <li
        className={getActiveSectionClass('history')}
        onClick={() => changeTabCallback('history')}
      >
        History
      </li>
    </SectionsWrapper>
  );
};

const SectionsWrapper = styled.ul`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[100]};
  padding-left: 8px;
  margin: 16px 0;
  li {
    position: relative;
    margin-right: 32px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.palette.grey[500]};
    border-bottom: 1px solid transparent;
    cursor: pointer;
    padding-bottom: 8px;
    &.active,
    :hover {
      color: ${({ theme }) => theme.palette.grey[900]};
      border-color: ${({ theme }) => theme.palette.grey[900]};
    }
    sup {
      position: absolute;
      top: -4px;
      left: 104%;
      font-size: 10px;
      &.dot {
        width: 4px;
        height: 4px;
        background: ${({ theme }) => theme.palette.sky[600]};
        top: 0;
        border-radius: 50%;
      }
    }
  }
`;
