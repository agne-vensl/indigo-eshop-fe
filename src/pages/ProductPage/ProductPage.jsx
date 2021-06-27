import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import Navigation from "../../components/Navigation/Navigation";
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Button from "../../components/Button/Button";

const ProductPage = () => {
  const [data, setData] = useState([]);
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("indigo-visitor")) || []
  );

  const id = useParams().id;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/product/${id}`)
      .then(res => res.json())
      .then(data => setData(data[0]));
  }, [id]);

  const updateFavourites = id => {
    let tmp = [...favourites];

    if (favourites.includes(id)) {
      tmp.splice(tmp.indexOf(id), 1);

      setFavourites(tmp);
    } else {
      tmp.push(id);

      setFavourites(tmp);
    }

    localStorage.setItem("indigo-visitor", JSON.stringify(tmp));
  };

  return (
    <>
      <Navigation
        $primary={true}
        favourites={favourites && favourites.length}
      />

      <PageTitle>Shop</PageTitle>

      <Wrapper>
        <Container>
          {data && (
            <ProductDetails
              image={data.image}
              title={data.title}
              price={data.price}
              description={data.description}
            >
              <Button onClick={() => updateFavourites(data.id)}>
                {favourites && favourites.includes(data.id)
                  ? "Remove from favourites"
                  : "Add to favourites"}
              </Button>
            </ProductDetails>
          )}
        </Container>
      </Wrapper>
    </>
  );
};

export default ProductPage;
