import styled from "styled-components";

export const Container = styled.span`
  font-size: 0.75rem;
  padding: 5px 16px;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_50};
`;
