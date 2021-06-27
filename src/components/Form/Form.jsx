import React from "react";
import * as S from "./Form.style";

const Form = ({ children, onSubmit }) => (
  <S.Form onSubmit={onSubmit}>{children}</S.Form>
);

export default Form;
