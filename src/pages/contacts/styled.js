import styled from 'styled-components';


export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: #c3c3c1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
`

export const DescWrap = styled.div`
    width: 60vw;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: relative;
`

export const Avatar = styled.img`
    width: 22vw;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30vw;
    color: black;
`
export const DescTitle = styled.div`
    font-size: 2.7rem;
    margin-top: 10vh;
    ${props => props.rus && `
        font-size: 2.6rem;
        font-family: 'Roboto Flex', sans-serif;
    `}
`

export const DescContent = styled.div`
    color: black;
    margin-top: 5vh;
    width: 30vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    ${props => props.rus && `
        font-family: 'Roboto Flex', sans-serif;
    `}
`

export const DescLinkWrap = styled.p`
    color: black;
`

export const DescLink = styled.a`
    color: black;
    border-bottom: none;
    text-decoration: none;
    cursor: pointer;
`