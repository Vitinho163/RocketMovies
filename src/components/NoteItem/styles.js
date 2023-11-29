import styled from "styled-components";

export const Container = styled.div`
  padding: 1.6rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-right: 5px;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.GRAY_600};

  border-radius: 1rem;
  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.GRAY_600}` : "none"};

  width: fit-content;

  > input {
    width: 11rem;
    flex-grow: 1;
    background-color: transparent;
    border: none;
    outline: none;
    color: white;

    cursor: ${({ isNew }) => !isNew && "not-allowed"};
  }

  > button {
    border: none;
    background-color: transparent;
    display: grid;
    place-content: center;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK_800};
      font-size: 2.5rem;
    }
  }
`;