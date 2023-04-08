import styled from 'styled-components'

export const StyledSession = styled.div`
  box-sizing: border-box;

  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 20px 0px;

  border-bottom:2px solid #f5f5f5;

  :last-child{
    border-bottom:none
  }

  .session__block{
    box-sizing: border-box;

    margin: 10px;

    .block__key{
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 12px;

      color: #2A2A2A;
    }

    .block__value{
      font-family: 'Inter';
      font-weight: 400;
      font-size: 10px;

      margin-top: 30px;

      color: #2A2A2A;
    }
  }
`
