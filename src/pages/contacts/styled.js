import styled from 'styled-components';


export const Wrapper = styled.div`
    // z-index: 100;
    width: 100vw;
    // overflow-y: hidden;
    height: 100vh;
    // max-height: 100vh;
    background: #c3c3c1;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
`

export const Avatar = styled.img`
    width: 25vw;
    // box-shadow: 2px 1px 1px black,
    // -2px -1px 1px black;
`

export const Description = styled.div`
    display: flex;
    justify-content: center;
    width: 30vw;
    height: 70vh;
    color: black;
    font-weight: 200;
    font-family: 'Red Hat Mono', monospace;
`