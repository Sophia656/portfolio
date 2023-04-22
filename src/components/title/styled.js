import styled from 'styled-components';

export const TitleWrapper = styled.div`
    display: flex;
    width: 30vw;
    height: 5vh;
    align-items: center;
    justify-content: flex-end;
    cursor: none;
    ${props => props.cursor &&`
        cursor: default;
    `}
`

export const TitleItem = styled.h1`
    top: 0;
    text-shadow: 2px 2px 15px rgba(255,255,255,0.03);
    @keyframes slidein {
        0% { color: #ba320009; }
        25% { color: #ba32003e; }
        50% { color: #ba32006f; }
        75% { color: #ba3200b2; }
        100% {color: #ba3100; }
    }
    animation: slidein 300ms;
    color: ${props => props.color || '#cabdb0'};
    transition-duration: 0s;
    transition-timing-function: easy;
    ${props => props.back&&`
        background: -webkit-linear-gradient(left, black, #ba3200b2 90%, #ba3100 20%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        top: 50;
    `}
`

export const Line = styled.div`
    display: inline;
    height: 6vh;
    width: 1px;
    background: black;
    margin-top: 1.7vh;
    ${props => props.secframe&&`
        @keyframes glowing {
            from { background: #00000020; }
            to {background: black; }
        }
        animation: glowing 900ms infinite;
    `}
`