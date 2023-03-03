import styled from 'styled-components';


export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
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

export const PhotosLine = styled.div`
    display: flex;
    width: 100vw;
    height: 90vh;
    align-items: center;
    justify-content: space-between;
`

export const Image = styled.img`
    width: ${props => props.width || '28vw'};
    margin-right: ${props => props.mr || 0};
    height: auto;
    position: relative;
`

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