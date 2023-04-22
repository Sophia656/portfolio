import styled from 'styled-components';

export const ImageWrapper = styled.div`
height: 75vh;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
position: relative;
`

export const ImageItem = styled.img`
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