import styled from "styled-components";

export const ProductContainer = styled.div`
  cursor: pointer;
  margin-bottom: 1.5rem;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ProductImage = styled.img`
  filter: grayscale(100%);
  height: 30rem;
  width: 100%;
  object-fit: cover;
  object-position: top;
`;

export const ProductTitle = styled.h5`
  margin-bottom: 0.5rem;
  text-align: center;
  text-transform: uppercase;
`;

export const ProductPrice = styled.span`
  font-size: 0.85rem;

  &::before {
    content: "$";
  }
`;
