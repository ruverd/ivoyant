import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #F4F8FB;
  min-height: 100vh;
`;

export const Loading = styled.div`
  position: absolute;
  height: 12px;
  width: 100%;
  background-color: #407eff;
  animation: blinker 1s linear infinite;

  @keyframes blinker {
    5% {
      opacity: 0;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  padding: 20px;
  align-items: center;
  justify-content: space-between;

  img {
    width: 180px;
  }

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span {
      margin-right: 20px;
    }

    button {
      margin-left: auto;
      background: #407eff;
      height: 40px;
      border-radius: 3px;
      border: 0;

      transition: background 0.2s;

      &:hover {
        background: ${shade(0.2, '#407EFF')};
      }
    }
  }
`;

export const Content = styled.main`
  display: flex;
  margin: 20px;
  padding: 40px 20px;
  flex: 1;
  transition: all 0.4s ease-in-out;
  background-color: #ffffff;
`;

export const Footer = styled.footer`
  display: flex;
  background-color: #ffffff;
  width: 100%;
  padding: 30px;
  transition: all 0.4s ease-in-out;
  justify-content: center
`;
