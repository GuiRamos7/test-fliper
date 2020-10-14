import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import * as S from './style';

interface IDropdownItems {
  onClick?: () => void;
  text: String;
}

interface IDropdown {
  items: Array<IDropdownItems>;
}

const Dropdown: React.FC<IDropdown> = ({ items }: IDropdown) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <S.DropdownContainer>
        <FaEllipsisV
          onClick={() => setOpen(!isOpen)}
          fontSize={18}
          color="#9aa3bc"
        />

        {isOpen && (
          <S.DropdownWrapper>
            {items.map(({ text, onClick }, idx) => (
              <S.DropdownItem key={idx} onClick={onClick}>
                {text}
              </S.DropdownItem>
            ))}
          </S.DropdownWrapper>
        )}
      </S.DropdownContainer>
      {isOpen && <S.DropdownCloseContainer onClick={() => setOpen(false)} />}
    </>
  );
};

export default Dropdown;
