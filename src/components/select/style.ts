import styled from "styled-components"
import { motion } from "framer-motion"

interface IPropsSelect {
  message?: string
}

export const SelectStyled = styled.div<IPropsSelect>`
  box-sizing: border-box;

  width: 100%;

  margin-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  position: relative;

  z-index: 4;

  .select_value{
      box-sizing: border-box;

      position: relative;
      transition: 300ms;

      width: 100%;
      height: 40px;

      border: none;
      border-radius: 8px;
      
      outline: 0;

      background-color: var(--color-white);
      border: 2px solid var(--color-frenchGray);

      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.20);
    
      font-size: var(--font-size-p6);

      font-family: 'Inter';
      color: #1A1A1A;
      font-weight: 400;


      padding: 10px;

      cursor: pointer;    
      caret-color: transparent;

      ::placeholder{
          color: ${({ message }) => message ? "#FA505A" : "#868E96"};
      }
  }
  .select_label{
      position: absolute;

      left: 5px;
      width: auto;
      height: 30px;

      display: flex;
      justify-content: center;

      font-family: 'Inter';
      font-weight: 400;
      font-size: 16px;

      color: ${({ message }) => message ? "#FA505A" : "#1A1A1A"};

      background-color:rgba(199, 199, 204, 0.2);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
      padding:5px ;
  }
  .select_list{
      box-sizing: border-box;

      width: 100%;
      height: auto;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      .list_move{
          box-sizing: border-box;

          width: 100%;
          height: auto;

          background-color: #FFF;

          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.20);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
      }
  }
`
interface IPropsOption {
  value: string
  item: string
  defaultoption?: string 
}

export const Option = styled(motion.label)<IPropsOption>`
  box-sizing: border-box;

  transition: 200ms;

  width: 100%;
  height: 40px;
  cursor: pointer;

  border-left: 2px solid var(--color-frenchGray);
  border-right: 2px solid var(--color-frenchGray);

  background-color: ${({ value, item }) => value === item ? "background-color: #e7e7e7;" : "#FFF" };

  color:#1A1A1A;

  padding: 10px 15px;
  
  text-align: start;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 15px;
  :hover{
      transition: 200ms;
      background-color: #e7e7e7;
  }
`