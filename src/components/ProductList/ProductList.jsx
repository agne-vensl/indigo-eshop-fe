import React from "react";
import * as S from "./ProductList.style";

const ProductList = ({ children }) => (
  <S.ProductList>
    {children.length ? children : <S.NoResults>No results...</S.NoResults>}
  </S.ProductList>
);

export default ProductList;
