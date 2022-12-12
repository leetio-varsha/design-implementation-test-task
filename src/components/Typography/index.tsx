import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type THeadings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TVariants =
  | 'HeadingLargeStrong'
  | 'HeadingMediumStrong'
  | 'HeadingMediumRegular'
  | 'BodyMediumStrong'
  | 'BodyMediumRegular'
  | 'BodySmallStrong'
  | 'BodySmallRegular';

interface ITypography extends HTMLAttributes<HTMLElement> {
  tag?: THeadings | 'p' | 'span' | 'div';
  variant: TVariants;
  children?: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<ITypography> = ({
  tag = 'span',
  variant,
  children,
  className,
  ...rest
}) => {
  return (
    <TypographyStyled
      as={tag}
      className={className}
      variant={variant}
      {...rest}
    >
      {children}
    </TypographyStyled>
  );
};

const TypographyStyled = styled.p<{ variant: TVariants }>`
  ${({ variant }) => variantStyles[variant]}
`;

const variantStyles = {
  HeadingLargeStrong: css`
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  `,
  HeadingMediumStrong: css`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  `,
  HeadingMediumRegular: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  `,
  BodyMediumStrong: css`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  `,
  BodyMediumRegular: css`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `,
  BodySmallStrong: css`
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  `,
  BodySmallRegular: css`
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  `,
};
