import styled from "styled-components";
import { NavLink as NLink, Link as RLink } from "react-router-dom";

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
    flex-direction: ${props => (props.$primary ? "row" : "row-reverse")};

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

export const NavLink = styled(NLink)`
  color: #565656;
  margin-bottom: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #6e6eff;
  }

  &.active {
    color: blue;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
  }

  @media screen and (min-width: 768px) {
    font-size: 0.85rem;
    margin: 0;
    margin-right: 2rem;
    white-space: nowrap;
  }
`;

export const IconLink = styled(NavLink)`
  @media screen and (min-width: 768px) {
    display: ${props => (props.$primary ? "none" : "initial")};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center !important;
  margin-bottom: 1rem;

  @media screen and (min-width: 768px) {
    justify-content: ${props =>
      props.$primary ? "center" : "flex-start !important"};
    margin: 0;
  }
`;

export const Link = styled(RLink)`
  text-decoration: none;
`;

export const IconContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    visibility: ${props => (props.$primary ? "visible" : "hidden")};
    flex: 1;

    & > * {
      margin-left: auto;
    }
  }
`;
