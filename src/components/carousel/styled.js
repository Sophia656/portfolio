import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    height: ${props => props.h || 'fit-content'};
    width: 100vw;
    display: flex;
    align-item: center;
    justify-content: center;
`

export const Window = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
`

export const AllItemsContainer = styled.div`
    height: 100%;
    margin-right: -600vw;
    display: flex;
`