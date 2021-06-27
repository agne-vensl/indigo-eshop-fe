import styled from "styled-components";

export const TwinBlock = styled.div`
  & > :first-child {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;

    & > :first-child {
      margin-bottom: 0;
      margin-right: 5rem;
    }

    & > * {
      flex: 1;
    }
  }
`;
