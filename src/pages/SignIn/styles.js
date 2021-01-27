import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    margin-top: 80px;
    width: 200px;
  }

  form {
    margin: 100px 0;
    width: 340px;
    text-align: center;

    h1 {
      font-size: 16px;
      font-weight: 400;
      margin-bottom: 24px;
    }

    ul {
      text-align: left;
      color: #a3a3a3;
      margin-top: 20px;

      li {
        padding-top: 10px;
      }
    }

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;
