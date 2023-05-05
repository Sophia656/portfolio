import styled from 'styled-components';
import image from '../../images/web/two_reclining2.jpg';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${image});
    background-size: 100vw 115vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: none;
    ${props => props.cursor &&`
        cursor: default;
    `}
`