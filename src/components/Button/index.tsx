import React from 'react';
import { Button as ButtonStyled } from './style';

const Button: React.FC = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
