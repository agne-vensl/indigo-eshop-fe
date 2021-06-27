import styled from "styled-components";

export const BannerContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(100%);
  height: 30vh;
  margin-bottom: 4rem;

  > * {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export const BannerTitle = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
`;
