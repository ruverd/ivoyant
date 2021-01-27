import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

export const Container = styled.div`
  background: #ffffff;
  border-radius: 3px;
  padding: 16px;
  margin-top: 8px;
  width: 100%;

  display: flex;
  flex-flow: row;
  align-items: center;

  border: 1px solid #bababa;
  color: #5e5e5e;

  transition: color 0.2s;
  transition: border 0.2s;

  ${(props) => props.isErrored
    && css`
      border: 1px solid #c53030;
    `}

  ${(props) => props.isFocused
    && css`
      color: #1890ff;
      border: 1px solid #1890ff;
    `}

  ${(props) => props.isFilled
    && css`
      color: #1890ff;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0px;
    color: #5e5e5e;
    height: 20px;

    &::placeholder {
      color: #a3a3a3;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      border: 0px;
      -webkit-text-fill-color: #5e5e5e;
      -webkit-box-shadow: 0 0 0px 1000px #ffffff inset;
      transition: color 9999s ease-out, background-color 9999s ease-out;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #ffffff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
