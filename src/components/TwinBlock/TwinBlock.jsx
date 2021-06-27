import React from "react";
import * as S from "./TwinBlock.style";

const TwinBlock = ({ children }) => (
  <S.TwinBlock>
    <section>{children && children[0]}</section>
    <section>{children && children[1]}</section>
  </S.TwinBlock>
);

export default TwinBlock;
