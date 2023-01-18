import styled from 'styled-components';

export const TitleWrapper = styled.div`
    display: flex;
    width: 25.2vw;
    height: 5vh;
    align-items: center;
    justify-content: flex-end;
`

export const TitleItem = styled.h1`
    top: 0;
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
        background: -webkit-linear-gradient(left, #cabdb0, #ba3200b2 90%, #ba3100 20%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        top: 50;
    `}
`

export const Line = styled.div`
    display: inline;
    height: 5vh;
    width: 2px;
    background: #cabdb0;
    margin-top: 1vh;
    ${props => props.secframe&&`
        @keyframes glowing {
            from { background: #cabdb020; }
            to {background: #cabdb0; }
        }
        animation: glowing 900ms infinite;
    `}
`