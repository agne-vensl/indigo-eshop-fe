import React from "react";
import * as S from "./ProductDetails.style";
import TwinBlock from "../TwinBlock/TwinBlock";

const ProductDetails = ({ image, title, price, description, children }) => (
  <div>
    <TwinBlock>
      <S.ImageContainer>
        <S.ProductImage src={image} />
      </S.ImageContainer>

      <S.ProductDetails>
        <S.ProductTitle>{title}</S.ProductTitle>
        <S.ProductPrice>{price}</S.ProductPrice>
        <S.ProductDescription>{description}</S.ProductDescription>
        {children}
      </S.ProductDetails>
    </TwinBlock>
  </div>
);

export default ProductDetails;
