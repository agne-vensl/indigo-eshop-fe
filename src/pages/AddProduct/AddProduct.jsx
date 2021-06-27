import React, { useState } from "react";
import { useHistory } from "react-router";

import Navigation from "../../components/Navigation/Navigation";
import BannerTitle from "../../components/BannerTitle/BannerTitle";
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from "../../components/Container/Container";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";
import image from "../../assets/banner-photo.jpg";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  function sendData(e) {
    e.preventDefault();

    const data = {
      image: url.trim(),
      title: title.trim(),
      price: Number(price),
      category,
      description: description.trim(),
    };

    fetch(`${process.env.REACT_APP_BASE_URL}/add-product`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          return console.log(data.error);
        }

        const path = `/product/${data.id}`;
        history.push(path);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <Navigation $primary={false} />
      <BannerTitle image={image}>Add Product</BannerTitle>

      <Wrapper>
        <Container>
          <Form onSubmit={sendData}>
            <div>
              <input
                type="text"
                name="title"
                placeholder="Product Name"
                required
                onChange={e => setTitle(e.target.value)}
              />
              <input
                type="number"
                name="price"
                step="0.01"
                min="0"
                placeholder="Product Price"
                required
                onChange={e => setPrice(e.target.value)}
              />
            </div>

            <div>
              <input
                type="url"
                name="image"
                placeholder="Product Image"
                required
                onChange={e => setUrl(e.target.value)}
              />
            </div>

            <div>
              <select
                name="category"
                required
                onChange={e => setCategory(e.target.value)}
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Choose category
                </option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
            </div>

            <div>
              <textarea
                cols="30"
                rows="10"
                placeholder="Product Description"
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </div>

            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      </Wrapper>
    </>
  );
};

export default AddProduct;
