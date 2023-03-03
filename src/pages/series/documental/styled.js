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
    height: 75vh;
    align-items: center;
    justify-content: space-between;
`

export const Image = styled.img`
    width: ${props => props.width || '40vw'};
    margin-right: ${props => props.mr || 0};
    height: auto;
`