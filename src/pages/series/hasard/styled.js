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
    position: relative;
    margin-top: ${props => props.mt || '0'}
`

export const Description = styled.div`
    position: absolute;
    color: #cabdb0;
    top: 0;
    margin-top: 30vh;
    font-size: 2rem;
    width: 60vw;
    height: 40vh;
    line-height: 6vh;
    text-align: justify;
    ${props => props.rus && `
        font-family: 'Roboto Flex', sans-serif;
        word-spacing: 1px;
        text-transform: uppercase;
        font-weight: 200;
    `}
`

export const Title = styled.h1`
    color: #cabdb0;
    position: absolute;
    top: 0;
    margin-top: 10vh;
    ${props => props.rus && `
        font-size: 3.2rem;
        font-family: 'Roboto Flex', sans-serif;
    `}
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
    margin-top: 94vh;
`

export const ImageLineWrapper = styled.div`
    width: 100vw;
    height: 85vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
`