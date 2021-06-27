import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Navigation from "../../components/Navigation/Navigation";
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from "../../components/Container/Container";
import FilterLinks from "../../components/FilterLinks/FilterLinks";
import ProductList from "../../components/ProductList/ProductList";
import Product from "../../components/Product/Product";

const FILTER_MAP = {
  All: () => true,
  Men: product => product.category === "men",
  Women: product => product.category === "women",
  Kids: product => product.category === "kids",
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const Home = () => {
  const [masterData, setMasterData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [favourites] = useState(
    JSON.parse(localStorage.getItem("indigo-visitor")) || []
  );

  const history = useHistory();

  const routeChange = id => {
    const path = `/product/${id}`;
    history.push(path);
  };

  useEffect(() => {
    fetch("http://localhost:3030/products")
      .then(res => res.json())
      .then(data => setMasterData(data));
  }, []);

  return (
    <>
      <Navigation
        $primary={true}
        favourites={favourites.length || favourites}
      />

      <Wrapper>
        <Container>
          <FilterLinks
            links={FILTER_NAMES}
            filter={filter}
            setFilter={setFilter}
          />

          <ProductList>
            {masterData &&
              masterData.filter(FILTER_MAP[filter]).map(item => {
                return (
                  <Product
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    onClick={() => routeChange(item.id)}
                  />
                );
              })}
          </ProductList>
        </Container>
      </Wrapper>
    </>
  );
};

export default Home;
