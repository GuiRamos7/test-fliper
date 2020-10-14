import styled from 'styled-components';


export const DropdownContainer = styled.div`
  position: relative;
  svg {
    cursor: pointer;
  }
`

export const DropdownWrapper = styled.div`

  position: absolute;
  top: 100%;
  background: #FFF;
  box-shadow: 0 0 7px #9AA3BC;
  padding: 5px 0;
  border-radius: 7px;
  min-width: 100px;
  z-index: 50;
`
export const DropdownItem = styled.div`
  cursor: pointer;
  text-align:center;
  padding:  5px 10px;
  &:hover {
    background-color: #f0f0f0;

  }
`
export const DropdownCloseContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
`
