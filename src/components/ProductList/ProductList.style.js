import styled from "styled-components";

export const ProductList = styled.div`
  width: 100%;

  @media screen and (min-width: 660px) {
    display: flex;
    flex-wrap: wrap;

    & > *:not(:nth-child(2n)) {
      margin-right: 1rem;
    }

    & > * {
      width: calc(50% - 1rem);
    }
  }

  @media screen and (min-width: 830px) {
    display: flex;
    flex-wrap: wrap;

    & > *:nth-child(3n) {
      margin-right: 0;
    }

    & > *:not(:nth-child(3n)) {
      margin-right: 1rem;
    }

    & > * {
      width: calc(100% / 3 - 2rem / 3);
    }
  }
`;

export const NoResults = styled.div`
  color: #565656;
  margin: 4rem auto !important;
  text-align: center;
`;
