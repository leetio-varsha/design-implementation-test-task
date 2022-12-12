import React from 'react';
import styled, { css } from 'styled-components';

interface IButton {
  size?: 'medium' | 'small';
  variant: 'basic' | 'secondary' | 'confirm' | 'destructive';
  children: React.ReactNode;
  clickCallback?: () => void;
  type?: 'submit' | 'button' | 'reset';
  className?: string;
}

export const Button: React.FC<IButton> = ({
  size = 'small',
  variant,
  children,
  clickCallback,
  type,
  className,
}) => {
  const buttonClickHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    if (clickCallback) {
      e.preventDefault();
      clickCallback();
    }
  };
  return (
    <ButtonStyled
      size={size}
      variant={variant}
      type={type}
      onClick={buttonClickHandler}
      className={className}
    >
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<IButton>`
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  padding: ${({ size }) => (size === 'small' ? '6px 12px' : '10px 12px')};
  border-radius: 4px;
  ${({ variant }) => buttonVariants[variant]};
  display: flex;
  align-items: center;
`;

const buttonVariants = {
  basic: css`
    background-color: ${({ theme }) => theme.palette.defaults.white};
    border: 1px solid ${({ theme }) => theme.palette.grey[400]};
    filter: drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.04));
    color: ${({ theme }) => theme.palette.grey[700]};
    &:hover {
      background-color: ${({ theme }) => theme.palette.grey[400]};
      border: 1px solid ${({ theme }) => theme.palette.grey[400]};
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);
    }
    &:active {
      border: 2px solid ${({ theme }) => theme.palette.sky[600]};
      border-radius: 4px;
    }
    &:disabled {
      background: ${({ theme }) => theme.palette.grey[50]};
      border: 1px solid ${({ theme }) => theme.palette.grey[300]};
      color: ${({ theme }) => theme.palette.grey[300]};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.palette.grey[800]};
    border: 1px solid ${({ theme }) => theme.palette.grey[800]};
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);
    color: ${({ theme }) => theme.palette.defaults.white};
    &:hover {
      background-color: ${({ theme }) => theme.palette.grey[900]};
      border: 1px solid ${({ theme }) => theme.palette.grey[900]};
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);
    }
    &:active {
      border: 2px solid ${({ theme }) => theme.palette.sky[600]};
      border-radius: 4px;
    }
    &:disabled {
      background: ${({ theme }) => theme.palette.grey[50]};
      border: 1px solid ${({ theme }) => theme.palette.grey[300]};
      color: ${({ theme }) => theme.palette.grey[400]};
    }
  `,
  confirm: css`
    background-color: ${({ theme }) => theme.palette.sky[600]};
    border: 1px solid ${({ theme }) => theme.palette.sky[600]};
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);
    color: ${({ theme }) => theme.palette.defaults.white};
    &:hover {
      background-color: ${({ theme }) => theme.palette.sky[700]};
      border: 1px solid ${({ theme }) => theme.palette.sky[700]};
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);
    }
    &:active {
      box-shadow: inset 0 0 0 3px
        ${({ theme }) => theme.palette.defaults.white[600]};
      border: 2px solid ${({ theme }) => theme.palette.sky[600]};
      border-radius: 4px;
    }
    &:disabled {
      background: ${({ theme }) => theme.palette.grey[50]};
      border: 1px solid ${({ theme }) => theme.palette.grey[300]};
      color: ${({ theme }) => theme.palette.grey[400]};
    }
  `,
  destructive: css`
    background-color: ${({ theme }) => theme.palette.orange[600]};
    border: 1px solid ${({ theme }) => theme.palette.orange[600]};
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);
    color: ${({ theme }) => theme.palette.defaults.white};
    &:hover {
      background-color: ${({ theme }) => theme.palette.orange[700]};
      border: 1px solid ${({ theme }) => theme.palette.orange[700]};
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);
    }
    &:active {
      box-shadow: inset 0 0 0 3px
        ${({ theme }) => theme.palette.defaults.white[600]};
      border: 2px solid ${({ theme }) => theme.palette.sky[600]};
      border-radius: 4px;
    }
    &:disabled {
      background: ${({ theme }) => theme.palette.grey[50]};
      border: 1px solid ${({ theme }) => theme.palette.grey[300]};
      color: ${({ theme }) => theme.palette.grey[400]};
    }
  `,
};
