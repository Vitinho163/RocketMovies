import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  header {
    width: 100%;
    height: 9rem;

    background: ${({ theme }) => theme.COLORS.ROSE_900};

    display: flex;
    align-items: center;
    padding-inline: 9.125rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.ROSE};
      font-size: 1rem;

      svg {
        margin-right: 0.625rem;
        color: ${({ theme }) => theme.COLORS.ROSE};
      }
    }
  }
`;

export const Form = styled.form`
  max-width: 21.25rem;
  width: 100%;
  margin-inline: auto;
  margin-top: 9.8125rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div:nth-child(4){
    margin-top: 1.5rem;
  }

  div:nth-child(5){
    margin-bottom: 1.5rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -15.625rem auto calc(4rem - 0.5rem);
  width: 11.625rem;
  height: 11.625rem;

  img {
    border-radius: 50%;
    width: 11.625rem;
    height: 11.625rem;
  }

  label {
    width: 3rem;
    height: 3rem;
    background: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0.4375rem;
    right: 0.4375rem;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: #312e38;
    }
  }
`;
