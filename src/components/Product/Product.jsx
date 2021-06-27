import React from "react";
import * as S from "./Product.style";

const Product = ({ image, title, price, onClick }) => (
  <S.ProductContainer onClick={onClick}>
    <S.ProductImage src={image} alt={title} />
    <S.ProductTitle>{title}</S.ProductTitle>
    <S.ProductPrice>{price}</S.ProductPrice>
  </S.ProductContainer>
);

export default Product;
