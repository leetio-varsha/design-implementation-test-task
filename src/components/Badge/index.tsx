import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CheckIcon } from 'src/assets/icons/check.svg';

type TType = 'scan' | 'approve' | 'scheduled' | 'paid' | 'error' | 'rejected';

interface IBadge {
  type: TType;
  children?: React.ReactNode;
  withCheck?: boolean;
}

export const Badge: React.FC<IBadge> = ({ type, children, withCheck }) => {
  return (
    <BadgeStyled type={type}>
      {withCheck ? <CheckIcon /> : null}
      {children}
    </BadgeStyled>
  );
};

const BadgeStyled = styled.span<{ type: TType }>`
  padding: 2px 8px;
  border-radius: 36px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: inline-flex;
  align-items: center;
  svg {
    margin-right: 4px;
  }
  ${({ type }) => types[type]};
`;

const types = {
  scan: css`
    background: ${({ theme }) => theme.palette.grey[100]};
    color: ${({ theme }) => theme.palette.grey[500]};
  `,
  approve: css`
    background: ${({ theme }) => theme.palette.sky[100]};
    color: ${({ theme }) => theme.palette.grey[600]};
  `,
  scheduled: css`
    background: ${({ theme }) => theme.palette.emerald[50]};
    color: ${({ theme }) => theme.palette.emerald[600]};
  `,
  paid: css`
    background: ${({ theme }) => theme.palette.emerald[50]};
    color: ${({ theme }) => theme.palette.emerald[600]};
  `,
  error: css`
    background: ${({ theme }) => theme.palette.yellow[50]};
    color: ${({ theme }) => theme.palette.yellow[600]};
  `,
  rejected: css`
    color: ${({ theme }) => theme.palette.orange[50]};
    background: ${({ theme }) => theme.palette.orange[600]};
  `,
};
