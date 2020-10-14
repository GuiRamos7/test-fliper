import React from 'react';
import { Button as ButtonStyled } from './style';

interface IwealthSummaryData {
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<IwealthSummaryData> = ({
  children,
  onClick,
}: IwealthSummaryData) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

export default Button;
