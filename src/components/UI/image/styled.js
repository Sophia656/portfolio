import styled from 'styled-components';

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: relative;
`

export const ImageItem = styled.img`
    width: ${props => props.w || '35vw'};
    height: auto;
    transition-duration: 1.4s;
    transition-timing-function: easy-in;
    cursor: pointer;
    margin-top: ${props => props.mt || 0};
    &:hover {
        width: ${props => props.hw || '37vw'};
        margin-left: ${props => props.ml || 0};
    }
`

export const ImageDescription = styled.div`
    color: #cabdb0;
    text-align: center;
    margin-right: 1.5vw;
    margin-top: 2vh;
    opacity: 0;
    transition-duration: 1s;
    transition-timing-function: easy-in;
    ${props => props.showdesc&&`
        opacity: 1;
    `}
    ${props => props.rus && `
        font-family: 'Roboto Flex', sans-serif;
    `}
`

export const ImgLoaderWrapper = styled.div`
    background: #0a0602;
    box-shadow: 0 -200px 100px -120px #0a0602 inset;
    animation: background 3s infinite alternate;


    @keyframes background {
        50% {
        background: #24201c;
        box-shadow: 0 -200px 100px -100px #0a0602 inset;
        }
    }

    width: 100%;
    height: 100%;
    align-self: center;
    position: absolute;
`