import styled from 'styled-components';
import {TEXT_LIGHT, ROBOTO} from '../../../colors/index';

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
    margin-top: ${props => props.mt || '0'};
`

export const Title = styled.h1`
    color: ${TEXT_LIGHT};
    position: absolute;
    top: 0;
    margin-top: 10vh;
    ${props => props.rus && `
        font-size: 3.2rem;
        font-family: ${ROBOTO};
    `};
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