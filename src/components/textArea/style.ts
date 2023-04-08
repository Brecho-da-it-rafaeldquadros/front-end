import { motion } from "framer-motion"
import styled from "styled-components"

interface IPropsTextArea {
    message?: string
    maxwidth?: string
}

export const TextAreaStyled = styled(motion.textarea)<IPropsTextArea>`
    box-sizing: border-box;

    width: 100%;
    max-width: ${({ maxwidth }) => maxwidth ? maxwidth : "100%" };
    min-width: 100%;
    min-height: 72px;
    max-height: 50vh;

    height: 72px;

    display: flex;
    align-items: flex-start;

    outline: 0;
    z-index: 1;

    background-color: #FFF;
    color:#f5f5f5;

    border: none;
    border-radius: 8px;

    background-color: var(--color-white);
    border: 2px solid var(--color-frenchGray);

    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.20);

    font-size: var(--font-size-p6);

    font-family: 'Raleway';
    color: #1A1A1A;
    font-weight: 500;

    padding: 10px;

    margin-top: 30px;
    ::-webkit-scrollbar{
        background-color: #FFF;
    }
    ::-webkit-scrollbar-thumb{
        
    }
    ::placeholder{
        color: ${({ message }) => message ? "#FA505A" : "#868E96"};
    }
`

export const Label = styled(motion.label)<IPropsTextArea>`
    position: absolute;
    left: 5px;

    width: auto;
    height: 30px;
    z-index: 0;

    display: flex;
    justify-content: center;

    font-family: 'Raleway';
    font-weight: 500;
    font-size: 16px;
    color: ${({ message }) => message ? "#FA505A" : "#1A1A1A"};

    background-color:rgba(199, 199, 204, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding:5px;
`

export const Organization = styled(motion.div)`
    box-sizing: border-box;
    position: relative;

    width: 100%;

    margin-top: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`