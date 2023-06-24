import styled from 'styled-components';
import image from '../../images/web/two_reclining2.jpg';

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
    `}
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
    color: black;
    margin-bottom: 8vh;
    text-align: center;
    margin-top: 0vh;
    ${props => props.rus && `
        // margin-top: -5vh;
        margin-bottom: 4vh;
        font-family: 'Roboto Flex', sans-serif;
        word-spacing: 1px;
        font-size: 1rem;
        text-transform: uppercase;
    `}
`

export const DescTitle = styled.div`
    // display: inline-block;
    color: #ba3100;
    font-size: 1.5rem;
    margin-bottom: 0vh;
    ${props => props.rus && `
        margin-bottom: -5vh;
        font-family: 'Roboto Flex', sans-serif;
    `}
`

export const ModalBtn = styled.div`
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
    color: black;
    cursor: pointer;
    width: 11vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background: #ba3200;
        color: #cabdb0;
    }
    ${props => props.rus && `
        font-family: 'Roboto Flex', sans-serif;
    `}
`