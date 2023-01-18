import styled from 'styled-components';

export const Image = styled.img`
    position: absolute;
    margin-top: 48vh;
    z-index: ${props => props.zi || '30'};
    right: ${props => props.r || 'none'};
    left: ${props => props.l || 'none'};
    bottom: ${props => props.b || 'none'};
    width: 3vw;
    height: 3vw;
    cursor: pointer;
    opacity: 0;
    rotate: ${props => props.rotate || 'none'};
    ${props => props.visible&&`
        @keyframes arrow {
            0% {
                animation-timing-function: ease;
                opacity: 0;
                transform: translateY(11px);
            }

            12% {
                opacity: 0.1;
                animation-timing-function: ease;
                transform: translateY(10px);
            }
        
            24% {
                opacity: 0.1;
                animation-timing-function: ease;
                transform: translateY(9px);
            }
        
            40% {
                opacity: 0.2;
                animation-timing-function: ease;
                transform: translateY(8px);
            }

            53% {
                opacity: 0.3;
                animation-timing-function: ease;
                transform: translateY(7px);
            }
        
            65% {
                opacity: 0.4;
                animation-timing-function: ease;
                transform: translateY(6px);
            }

            85% {
                opacity: 0.7;
                animation-timing-function: ease;
                transform: translateY(3px);
            }
        
            100% {
                animation-timing-function: ease;
                opacity: 1;
                transform: translateY(0px);
            }
        
        }
        animation: arrow 1300ms ease-in-out 0s infinite alternate-reverse backwards;
    `}
`