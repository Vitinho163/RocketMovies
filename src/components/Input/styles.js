import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 39.375rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 1.5rem;
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUT};

  > input {
    width: 100% auto;
    height: 3.5rem;
    background: transparent;
    border: none;
    border-radius: 0.625rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`;
