import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;

  form {
    h1 {
      font-size: 20px;
    }
  }
`;

export const AddContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;

  div {
    margin-right: 10px;
    margin-top: 0px;
  }

  & > button {
    margin-top: 0px;
  }
`;

export const ListContact = styled.div`
  margin-top: 40px;

  button {
    margin-left: auto;
    width: 100% !important;
    color: #191919 !important;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#407EFF')} !important;
    }
  }
`;
