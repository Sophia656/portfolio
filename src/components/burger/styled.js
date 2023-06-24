import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
    width: 100vw;
    height: 5vh;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 60;
    margin-top: 10vh;
`
export const BurgerWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    display: inline-block;
    width: 80px;
    height: 80px;
    vertical-align: middle;
    line-height: 80px;
    text-align: right;
    cursor: pointer;
`

export const BurgerItemTop = styled.span`
    background: ${props => props.dotback || '#cabdb0'};
    position: absolute;
    width: 40px;
    height: 8px;
    border-radius: 4px;
    left: 35px;
    top: 26px;
    width: 8px;
    transition: all 1s ease;
	text-align: center;
	font-size: 1.5em;
    ${props => props.active&&`
        background: #ba3100;
        transform: rotate(45deg);
        top: 46px;
    `}
`
export const BurgerItemBottom = styled.span`
    background: ${props => props.dotback || '#cabdb0'};
    position: absolute;
    width: 40px;
    height: 8px;
    border-radius: 4px;
    left: 35px;
    bottom: 26px;
    width: 8px;
    transition: all 1s ease;
	text-align: center;
	font-size: 1.5em;
    ${props => props.active&&`
        background: #ba3100;
    `}
`

export const BurgerMenu = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 75vh;
    justify-content: stretch;
    height: 15vh;
    background: black;
    width: 100vw;
    position: relative;
    opacity: 0;
    display: none;
    transition-duration: 0.6s;
    transition-timing-function: easy-in-out;
    ${props => props.active&&`
        opacity: 1;
        display: flex;
    `}
`

export const BurgerItem = styled.div`
    width: 20vw;
    height: inherit;
    background-image: ${props => props.backimg || 'none'};
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BurgerItemTitle = styled(Link)`
    padding: 0.4vw 0.9vh;
    text-decoration: none;
    color: ${props => props.col || '#cabdb0'};
    width: 15vw;
    height: 8vh;
    backdrop-filter: blur(15px);
    cursor: pointer;
    font-weight: bold;
    font-size: 1.4rem;
    border-radius: 4px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5vh;
    &:hover {
        border: ${props => props.border || '1px solid #cabdb0'};
    }
    ${props => props.rus && `
        font-weight: 800;
        font-size: 1.3rem;
        font-family: 'Roboto Flex', sans-serif;
    `}
`