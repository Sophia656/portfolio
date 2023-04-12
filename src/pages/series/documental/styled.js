import styled from 'styled-components';


export const Wrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: inherit;
    // min-height: 100vh;
    // height: fit-content;
    display: flex;
    flex-direction: column;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${props => props.mt || '0'}
`
export const TitleWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
`
export const Title = styled.h1`
    color: #cabdb0;
    // font-weight: 200;
    // font-family: 'Red Hat Mono', monospace;
`

export const PhotosLine = styled.div`
    width: 100vw;
    min-height: 90vh;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const Image = styled.img`
    width: ${props => props.w || '35vw'};
    margin-right: ${props => props.mr || 0};
    height: auto;
    transition-duration: 1s;
    transition-timing-function: easy-in;
    &:hover {
        width: ${props => props.hw || '37vw'};
    }
`