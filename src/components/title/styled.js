import styled from 'styled-components';

export const TitleWrapper = styled.div`
    display: flex;
    width: 25.2vw;
    height: 5vh;
    align-items: center;
    justify-content: flex-end;
    // background: pink;
`

export const TitleItem = styled.h1`
    color: #cabdb0;
    @keyframes slidein {
        0% { color: #ba320009; }
        25% { color: #ba32003e; }
        50% { color: #ba32006f; }
        75% { color: #ba3200b2; }
        100% {color: #ba3100; }
    }
    animation: slidein 300ms;
    ${props => props.color&&`
        color: #ba3100;
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