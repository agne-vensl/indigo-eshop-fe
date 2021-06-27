import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

export const HeartCont = styled(NavLink)`
  color: #565656;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:after {
    background: blue;
    border-radius: 50%;
    color: #fff;
    content: "${props => props.amount || "0"}";
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    position: absolute;
    top: 0;
    left: 1.1rem;
    height: 0.85rem;
    width: 0.85rem;
    min-width: fit-content;
    padding: 2px;
  }

  &:hover {
    color: #222;
    transition: all 0.2s ease-in-out;
  }

  &.active {
    & > * {
      color: #222;
      fill: inherit;
    }
  }
`;

export const Heart = styled(FiHeart)`
  font-size: 1.75rem;
  fill: #fff;
  transition: all 0.2s ease-in-out;
`;
