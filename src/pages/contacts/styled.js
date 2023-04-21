import styled from 'styled-components';


export const Wrapper = styled.div`
    // z-index: 100;
    width: 100vw;
    // overflow-y: hidden;
    height: 100vh;
    // max-height: 100vh;
    background: #c3c3c1;
    // color: #cabdb0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
`

export const DescWrap = styled.div`
    width: 60vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`

export const Avatar = styled.img`
    width: 22vw;
`

// export const Copyright = styled.div`
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     font-size: 11px;
//     margin-bottom: 1vh;
//     margin-left: 8.5vw;
//     line-height: 10px;
//     padding: 8px 8px;
//     border-radius: 4px;
//     box-shadow: 0 0 5px #222;
//     background: #cabdb0a9;
//     color: black;
// `
export const Description = styled.div`
    // display: flex;
    // justify-content: center;
    width: 30vw;
    // height: 25vh;
    color: black;
    font-weight: 200;
    font-family: 'Red Hat Mono', monospace;
`