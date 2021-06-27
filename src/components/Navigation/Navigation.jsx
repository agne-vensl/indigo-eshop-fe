import React from "react";
import * as S from "./Navigation.style";
import Container from "../Container/Container";
import TextLogo from "../TextLogo/TextLogo";
import FavHeart from "../../components/FavHeart/FavHeart";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Add Product",
    url: "/add-product",
  },
];

const Navigation = ({ $primary, favourites }) => {
  const Heart = (
    <FavHeart amount={favourites} title="Favourites" url="/favourites" />
  );

  return (
    <Container>
      <S.Header>
        <S.TopBarContainer $primary={$primary}>
          <S.LinksContainer>
            {links &&
              links.map(item => {
                return (
                  <S.NavLink
                    key={item.url}
                    exact
                    to={item.url}
                    activeClassName="active"
                  >
                    {item.title}
                  </S.NavLink>
                );
              })}
            {Heart && (
              <S.IconLink
                exact
                to={Heart && Heart.props.url}
                activeClassName="active"
                $primary={$primary}
              >
                {Heart.props.title}
              </S.IconLink>
            )}
          </S.LinksContainer>

          <S.LogoContainer $primary={$primary}>
            <S.Link to="/">
              <TextLogo>INDIGO</TextLogo>
            </S.Link>
          </S.LogoContainer>
        </S.TopBarContainer>

        <S.IconContainer $primary={$primary}>{Heart}</S.IconContainer>
      </S.Header>
    </Container>
  );
};

export default Navigation;
