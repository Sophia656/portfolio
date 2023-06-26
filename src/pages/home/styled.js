import styled from 'styled-components';
import image from '../../images/web/two_reclining2.jpg';
import {TEXT_DARK, TEXT_LIGHT, RED, ROBOTO} from '../../colors/index';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${image});
    background-size: 100vw 115vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: none;
    ${props => props.cursor &&`
        cursor: default;
    `};
`

export const AgeModalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${image});
    background-size: 100vw 115vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

export const AgeModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25vw;
    height: 50vh;
    padding: 1vw;
    position: relative;
    backdrop-filter: blur(20px);
    border-radius: 15px;
`

export const ModalDesc = styled.div`
    color: ${TEXT_DARK};
    margin-bottom: 8vh;
    text-align: center;
    margin-top: 0vh;
    ${props => props.rus && `
        margin-bottom: 4vh;
        font-family: ${ROBOTO};
        word-spacing: 1px;
        font-size: 1rem;
        text-transform: uppercase;
    `};
`

export const DescTitle = styled.div`
    color: ${RED};
    font-size: 1.5rem;
    margin-bottom: 0vh;
    ${props => props.rus && `
        margin-bottom: -5vh;
        font-family: ${ROBOTO};
    `};
`

export const ModalBtn = styled.div`
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    color: ${TEXT_DARK};
    cursor: pointer;
    width: 11vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background: ${RED};
        color: ${TEXT_LIGHT};
    }
    ${props => props.rus && `
        font-family: ${ROBOTO};
    `};
`