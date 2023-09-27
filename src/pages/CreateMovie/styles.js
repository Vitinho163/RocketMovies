import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  main {
    max-width: 1137px;
    height: 581px;
    text-align: justify;
    margin-top: 2.5rem;
    margin-inline: auto;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-button {
      height: 1rem;
    }

    &::-webkit-scrollbar-thumb {
      border-inline: 0.8rem solid ${({ theme }) => theme.COLORS.ROSE};
      border-radius: 1rem;
      background-clip: padding-box;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 69.5625rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: flex-start;

    svg {
      margin-right: 0.625rem;
      color: ${({ theme }) => theme.COLORS.ROSE};
    }

    h1 {
      font-weight: 500;
    }
  }

  div:nth-child(2),
  div:nth-child(6) {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
  }

  textarea {
    width: 100%;
    height: 17.125rem;
    resize: none;

    padding: 19px 16px;
    border: none;
    border-radius: 0.625rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
  .tagSpace {
    height: 5.5rem;
    padding: 16px;

    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.COLORS.BLACK};

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      padding-block: 1.25rem;
    }

    span:nth-child(2) {
      background: transparent;
      border: 2px dashed ${({ theme }) => theme.COLORS.GRAY_400};
    }

    svg {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
  }

  div:nth-child(6) {
    button:nth-child(1) {
      background: ${({ theme }) => theme.COLORS.BLACK};
      color: ${({ theme }) => theme.COLORS.ROSE};
    }
  }
`;
