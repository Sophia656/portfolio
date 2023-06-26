import styled from 'styled-components';
import {BACK_DARK} from '../../colors/index';

export const Wrapper = styled.div`
    color: white;
    width: 100vw;
    height: ${props => props.h || 'fit-content'};
    background: ${BACK_DARK};
    display: flex;
    justify-content: center;
    overflow-y: scroll;
    ${props => props.openImg && `
        overflow-y: hidden;
    `};
`

export const Page = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: ${props => props.w || '100vw'};
    height: ${props => props.h || '100vh'};
    background: ${props => props.back || BACK_DARK};
    transition-duration: 0.8s;
    transition-timing-function: easy-in-out;
`