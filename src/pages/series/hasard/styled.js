import styled from 'styled-components';
import { DARK } from '../../../colors';


export const Wrapper = styled.div`
    width: 100vw;
    height: inherit;
    // position: relative;
    overflow: hidden;
    background: ${DARK};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    color: #cabdb0;
    // font-weight: 200;
    // font-family: 'Red Hat Mono', monospace;
`

// export const PhotosLine = styled.div`
//     display: flex;
//     // flex-wrap: wrap;
//     flex-direction: column;
//     width: 100vw;
//     min-height: 90vh;
//     height: fit-content;
//     align-items: center;
//     justify-content: space-between;
// `

// export const Image = styled.img`
//     width: ${props => props.width || '40vw'};
//     margin-right: ${props => props.mr || 0};
//     height: auto;
//     position: relative;
// `

// export const ImageWrapper = styled.div`
//     position: absolute;
//     // background: pink;
//     width: ${props => props.width || '30vw'};
//     height: ${props => props.height || '30vh'};
//     box-shadow: inset 5px 5px 15px rgba(0,0,0,0.15),
//     inset -5px -5px 15px rgba(255,255,255,0.15),
//     5px 5px 15px rgba(0,0,0,0.15),
//     -5px -5px 15px rgba(255,255,255,0.15);
// `

// export const DivWrap = styled.div`
//     width: 50vw;
//     height: 30vh;
//     background: green;
//     display: flex;
//     // flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     position: relative;
// `

// export const Page = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: ${props => props.w || '50vw'};
//     height: ${props => props.h || '30vh'};
//     background: ${props => props.back || 'pink'};
// `

// export const Btn = styled.button`
// cursor: pointer;
//     z-index: 900;
//     position: absolute;
//     width: 5vw;
//     height: 4vh;
//     background: red;
//     margin-top: 13vh;
//     right: ${props => props.r || 'none'};
//     left: ${props => props.l || 'none'};
// `