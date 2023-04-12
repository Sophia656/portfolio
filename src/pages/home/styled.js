import styled from 'styled-components';
import image from '../../images/web/two_reclining.jpg';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${image});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`