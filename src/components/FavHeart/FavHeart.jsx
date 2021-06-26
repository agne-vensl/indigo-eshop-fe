import React from "react";
import * as S from "./FavHeart.style";

const FavHeart = ({ amount, title, url }) => (
  <S.HeartCont exact to={url} activeClassName="active">
    <S.Heart amount={amount} />
  </S.HeartCont>
);

export default FavHeart;
