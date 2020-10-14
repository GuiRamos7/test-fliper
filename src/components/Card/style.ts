import styled from 'styled-components';

export const CardItem = styled.div`
  margin: 50px auto;
  background-color: #FFFFFF;
  width: 350px;
  height: 352px;
  border-radius: 25px;
  box-shadow: 1px 1px 1px #9AA3BC;
  padding: 25px;
`
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CardTotal = styled.div`
  margin: 35px 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 0 0 7px;
  }
`

export const CardInfo = styled.div`
  margin: 35px 0 0;
  .info-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 22px;
    }
  }
`
export const CardFooter = styled.div`
  border-top: 1px solid #9AA3BC;
  display: flex;
  flex-direction: row-reverse;
  button {
    margin: 10px 0;
  }
`
