import styled from "styled-components";

export const FilterLinks = styled.div`
  margin-bottom: 1rem;
`;

export const FilterLink = styled.span`
  cursor: pointer;
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-right: 1.5rem;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #6e6eff;
  }

  &.active {
    color: blue;
  }
`;
