import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Header = styled.header`
  padding: 1.5rem 1rem;

  & > * {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const TopBarContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 768px) {
    align-items: center;
    flex: 2;
    flex-direction: row;

    & > * {
      width: 100%;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const NavLink = styled(Link)`
  color: #565656;
  margin-bottom: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #222;
  }

  &.active {
    color: #222;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    margin-right: 2rem;
  }
`;

export const IconLink = styled(NavLink)`
  @media screen and (min-width: 768px) {
    display: ${props => (props.$primary ? "none" : "initial")};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 768px) {
    justify-content: ${props => (props.$primary ? "center" : "flex-start")};
    margin: 0;
  }
`;

export const IconContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: ${props => (props.$primary ? "flex" : "none")};
    flex: 1;

    & > * {
      margin-left: auto;
    }
  }
`;
