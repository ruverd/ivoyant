import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 16px;
  background: #407eff;
  height: 40px;
  border-radius: 3px;
  border: 0;
  min-width: 190px;

  font-size: 14px;
  color: #ffffff;
  font-weight: 400;

  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#407EFF')};
  }
`;
