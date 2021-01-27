import styled, { keyframes } from 'styled-components';

import signInBackground from '../../../assets/sign-in-background.jpeg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background: var(--background-auth);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;

  width: 100%;
  max-width: 500px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
