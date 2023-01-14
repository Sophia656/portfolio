import styled from 'styled-components';

export const Wrapper = styled.header`
    // position: absolute;
    // top: 0;
    // right: 0;
    width: 100vw;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;  
    // margin-top: 10vh;  
`


export const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-item: center;
    width: 100vw;
    height: 10vh;
    margin-top: 6vh;
`

export const MenuItem = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
    color: #a28666;
    // background: #a2866640;
    // text-shadow: 10px 10px 10px #a28666;
    width: 5vw;
    height: 3vh;
    cursor: pointer;
`