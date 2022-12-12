import styled from 'styled-components';
import React, { useState } from 'react';
import { ReactComponent as ChevronLeftIcon } from 'src/assets/icons/chevron-left.svg';
import { IOption, Select } from 'src/components/Forms/Select';

interface IPagination {
  pagesLength: number;
}

export const Pagination: React.FC<IPagination> = ({ pagesLength = 13 }) => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const arrowClickHandler = (dir: 'prev' | 'next') => {
    if (dir === 'prev' && selectedPage > 1) {
      setSelectedPage(selectedPage - 1);
    }
    if (dir === 'next' && selectedPage < pagesLength) {
      setSelectedPage(selectedPage + 1);
    }
  };
  return (
    <PaginationWrapper>
      <PagesRow>
        <ArrowWrapper onClick={() => arrowClickHandler('prev')}>
          <ChevronLeftIcon />
        </ArrowWrapper>
        <PagesTiles>
          {/*@ts-ignore*/}
          {pagination(selectedPage, pagesLength).map(
            (value: number | string, index) => (
              <PageTile
                key={index}
                isActive={selectedPage === value}
                onClick={() => {
                  typeof value === 'number' && setSelectedPage(value);
                }}
              >
                {value}
              </PageTile>
            )
          )}
        </PagesTiles>
        <ArrowWrapper onClick={() => arrowClickHandler('next')}>
          <ChevronRightIcon />
        </ArrowWrapper>
      </PagesRow>
      <Select
        options={showPerPageOptions}
        defaultSelected={showPerPageOptions[0]}
      />
    </PaginationWrapper>
  );
};

const showPerPageOptions: IOption[] = [
  {
    value: '10',
    mainText: '10 / page',
  },
  {
    value: '20',
    mainText: '20 / page',
  },
  {
    value: '30',
    mainText: '30 / page',
  },
  {
    value: '40',
    mainText: '40 / page',
  },
  {
    value: '50',
    mainText: '50 / page',
  },
];

const pagination = (current: number, total: number) => {
  const center = [current - 2, current - 1, current, current + 1, current + 2],
    filteredCenter = center.filter((p) => p > 1 && p < total),
    includeThreeLeft = current === 5,
    includeThreeRight = current === total - 4,
    includeLeftDots = current > 5,
    includeRightDots = current < total - 4;

  if (includeThreeLeft) {
    filteredCenter.unshift(2);
  }
  if (includeThreeRight) {
    filteredCenter.push(total - 1);
  }

  if (includeLeftDots) {
    // @ts-ignore
    filteredCenter.unshift('...');
  }
  if (includeRightDots) {
    // @ts-ignore
    filteredCenter.push('...');
  }

  return [1, ...filteredCenter, total];
};

const PaginationWrapper = styled.div`
  display: flex;
`;
const PagesRow = styled.div`
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;
const PagesTiles = styled.div`
  display: flex;
`;
const ChevronRightIcon = styled(ChevronLeftIcon)`
  transform: rotate(180deg);
`;
const ArrowWrapper = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PageTile = styled.div<{ isActive: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border-radius: 4px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.palette.sky[600] : theme.palette.grey[500]};
  background: ${({ theme, isActive }) =>
    isActive ? theme.palette.sky[100] : 'transparent'};
  cursor: pointer;
`;
