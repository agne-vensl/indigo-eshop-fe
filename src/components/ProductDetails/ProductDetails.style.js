import styled from "styled-components";

export const ImageContainer = styled.div`
  text-align: center;
`;

export const ProductImage = styled.img`
  max-width: 100%;
`;

export const ProductDetails = styled.div`
  & > :last-child {
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    & > :last-child {
      margin-left: 0;
      margin-right: auto;
    }
  }
`;

export const ProductTitle = styled.h2`
  font-size: 1.4rem;
  margin: 0;
  margin-bottom: 0.7rem;
  text-transform: uppercase;
`;

export const ProductPrice = styled.span`
  color: blue;
  font-size: 1.4rem;
  font-weight: bold;

  &:before {
    content: "$";
  }
`;

export const ProductDescription = styled.p`
  color: #565656;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;
