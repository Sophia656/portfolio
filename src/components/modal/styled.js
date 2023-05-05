import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    scroll: disabled;
    background: rgb(255,255,255);
    z-index: 300;
    position: relative;
`

export const ClosingCrossWrap = styled.div`
    position: absolute;
    background: pink;
    width: 2vw;
    height: 2vh;
    top: 0;
    right: 0;
`

export const ClosingCross = styled.span`

`