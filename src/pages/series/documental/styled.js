import styled from 'styled-components';


export const Wrapper = styled.div`
    overflow: hidden;
    width: 100vw;
    height: inherit;
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
`
export const Title = styled.h1`
    color: #cabdb0;
    position: absolute;
    top: 0;
    margin-top: 10vh;
`

export const PhotosLine = styled.div`
    width: 100vw;
    min-height: 90vh;
    height: fit-content;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    top: 0;
    margin-top: 20vh;
`

export const ImageLineWrapper = styled.div`
    width: 100vw;
    height: 75vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
`

export const ImageWrapper = styled.div`
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`

export const Image = styled.img`
    width: ${props => props.w || '35vw'};
    height: auto;
    transition-duration: 1.4s;
    transition-timing-function: easy-in;
    cursor: pointer;
    &:hover {
        width: ${props => props.hw || '37vw'};
        margin-left: ${props => props.ml || 0};
    }
`

export const ImageDescription = styled.div`
    color: #cabdb0;
    text-align: center;
    margin-right: 1.5vw;
    margin-top: 2vh;
    opacity: 0;
    transition-duration: 1s;
    transition-timing-function: easy-in;
    ${props => props.showdesc&&`
        opacity: 1;
    `}
`