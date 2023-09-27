import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  height: 48px;
  padding: 0 2rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 500;

  &:disabled{
    opacity: 0.5;
  }
`;
