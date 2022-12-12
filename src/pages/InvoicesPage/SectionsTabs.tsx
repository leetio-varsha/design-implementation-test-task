import React from 'react';

import styled from 'styled-components';

interface ISectionsTabs {
  changeTabCallback: (section: string) => void;
  activeSection: string;
}

export const SectionsTabs: React.FC<ISectionsTabs> = ({
  changeTabCallback,
  activeSection,
}) => {
  const getActiveSectionClass = (section: string) =>
    activeSection === section ? 'active' : '';
  return (
    <SectionsWrapper>
      <li
        className={getActiveSectionClass('inbox')}
        onClick={() => changeTabCallback('inbox')}
      >
        Inbox
      </li>
      <li
        className={getActiveSectionClass('approving')}
        onClick={() => changeTabCallback('approving')}
      >
        Approving<sup>1</sup>
      </li>
      <li
        className={getActiveSectionClass('scheduled')}
        onClick={() => changeTabCallback('scheduled')}
      >
        Scheduled
      </li>
      <li
        className={getActiveSectionClass('processing')}
        onClick={() => changeTabCallback('processing')}
      >
        Processing<sup className={'dot'}></sup>
      </li>
      <li
        className={getActiveSectionClass('paid')}
        onClick={() => changeTabCallback('paid')}
      >
        Paid<sup>321</sup>
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
