import React from 'react';
import * as S from './style';

interface TextProps {
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span';
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  fontSize = 12,
  fontWeight = 500,
  color = '#606377',
  tag,
  children,
}: TextProps) => {
  return (
    <S.Tag as={tag} color={color} fontWeight={fontWeight} fontSize={fontSize}>
      {children}
    </S.Tag>
  );
};

export default Text;
