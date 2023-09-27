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

  button:nth-child(7) {
    margin-top: calc(1rem - 0.5rem);
  }

  .buttonText {
    margin-inline: auto;
    margin-top: 2.625rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    > svg {
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center center;
  background-size: cover;
`;
