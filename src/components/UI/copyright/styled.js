import styled from 'styled-components';

export const CopyrightWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 11px;
    margin-top: ${props => props.mt || '10vh'};
    margin-left: 15vw;
    line-height: 10px;
    padding: 8px 8px;
    border-radius: 4px;
    box-shadow: 0 0 5px #222;
    background: #cabdb0a9;
    color: black;
    // cursor: none;
    display: flex;
    flex-wrap: nowrap;
    width: 15vw;
    // text-wrap: nowrap;
`