import styled, {css} from 'styled-components';

interface TagProps {
  fontSize: number;
  fontWeight: number;
  color: string;
}


export const Tag = styled.h1<TagProps>`
  font-family: 'Open Sans', sans-serif;
  color: ${props => props.fontSize && css`${props.color}`};;
  font-size: ${props => props.fontSize && css`${props.fontSize}px`};
  font-weight: ${props => props.fontWeight && css`${props.fontWeight}`};

`
