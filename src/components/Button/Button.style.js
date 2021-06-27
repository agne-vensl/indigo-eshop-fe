import styled from "styled-components";

export const Button = styled.button`
  background: blue;
  border: 0;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  outline: none;
  padding: 1rem 3rem;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    background: #0101be;
  }
`;
