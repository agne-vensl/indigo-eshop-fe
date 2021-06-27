import React from "react";
import * as S from "./Button.style";

const Button = ({ children, onClick, type }) => (
  <S.Button type={type || "button"} onClick={onClick}>
    {children}
  </S.Button>
);

export default Button;
