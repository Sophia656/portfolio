import styled from 'styled-components';


export const Wrapper = styled.div`
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background: #c3c3c1;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    // box-shadow: inset 5px 0 150px gold;
`

export const Avatar = styled.img`
    width: 25vw;
    box-shadow: 2px 1px 7px black,
    -2px -1px 7px black;
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