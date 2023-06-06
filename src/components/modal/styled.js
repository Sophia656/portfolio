import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    scroll: disabled;
    background: rgb(255,255,255);
    z-index: 300;
    position: relative;
`

export const ClosingCrossWrap = styled.div`
position: absolute;
top: 30px;
right: 20px;
width: 24px;
height: 24px;
opacity: 0.2;
cursor: pointer;
transition: opacity ease 0.5s;
&:after {
    content: '';
	position: absolute;
	top: 10px;
	display: block;
	width: 24px;
	height: 3px;
	background: #000;
    transform: rotate(-45deg);
}
&:before {
    content: '';
	position: absolute;
	top: 10px;
	display: block;
	width: 24px;
	height: 3px;
	background: #000;
    transform: rotate(45deg);
}
&:hover {
    opacity: 1;
}
`