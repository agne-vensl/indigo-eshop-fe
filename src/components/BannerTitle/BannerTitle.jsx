import React from "react";
import * as S from "./BannerTitle.style";

import Wrapper from "../Wrapper/Wrapper";
import Container from "../Container/Container";

const BannerTitle = ({ children, image }) => (
  <S.BannerContainer image={image}>
    <Wrapper>
      <Container>
        <S.BannerTitle>{children}</S.BannerTitle>
      </Container>
    </Wrapper>
  </S.BannerContainer>
);

export default BannerTitle;
