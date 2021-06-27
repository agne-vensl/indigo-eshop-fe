import React from "react";
import * as S from "./PageTitle.style";
import Wrapper from "../Wrapper/Wrapper";
import Container from "../Container/Container";

const PageTitle = ({ children }) => (
  <S.TitleBlock>
    <Wrapper>
      <Container>
        <S.Title>{children}</S.Title>
      </Container>
    </Wrapper>
  </S.TitleBlock>
);

export default PageTitle;
