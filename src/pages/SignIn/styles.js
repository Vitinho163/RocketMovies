import styled from "styled-components";
import background from "/background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 8.375rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-size: 3rem;
    line-height: 3.9375rem;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  P {
    font-size: 14px;
    line-height: 18px;
    text-align: left;
  }

  h2 {
    padding-block: calc(3rem - 0.5rem);
  }

  button {
    margin-top: calc(1.5rem - 0.5rem);
  }

  a {
    margin-top: calc(3rem - 0.5rem);
    align-self: center;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center center;
  background-size: cover;
`;
