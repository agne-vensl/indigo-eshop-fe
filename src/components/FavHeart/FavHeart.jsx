import React from "react";
import * as S from "./FavHeart.style";

const FavHeart = ({ amount, title, url }) => {
  return (
    <S.HeartCont exact to={url} activeClassName="active" amount={amount}>
      <S.Heart />
    </S.HeartCont>
  );
};

export default FavHeart;
