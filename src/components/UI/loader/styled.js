import styled from 'styled-components';

export const Wrap = styled.div`

position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 4rem;
height: 4rem;
border: 1px solid #cabdb0;
border-radius: 50%;

&::before,
&::after {
  position: absolute;
  content: "";
  top: calc(calc(4rem / 2) * 0.25);
  width: 1px;
  background: #cabdb0;
  border-radius: 10px;
  transform-origin: center calc(100% - calc(0.2rem / 2));
  animation: spin infinite linear;
}

&::before {
  height: calc(4rem * 0.4);
  animation-duration: 2s;
}

&::after {
  top: calc(calc(4rem / 2) * 0.25 + calc(4rem * 0.2));
  height: calc(4rem * 0.2);
  animation-duration: 15s;
}
}

@keyframes spin {
to {
  transform: rotate(1turn);
}
}
`