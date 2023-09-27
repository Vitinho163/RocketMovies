import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 7.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_800};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 7.6875rem;
  gap: 4rem;

  > h1 {
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5625rem;

  > img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 1.125rem;
    font-size: 0.875rem;

    > strong {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    > a {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }
`;
