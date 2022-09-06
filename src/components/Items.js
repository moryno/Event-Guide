import styled from "styled-components";
import Item from "./Item";
import { popularProducts } from "../data";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Items = ({ category, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          category
            ? `http://localhost:9292/products?category=${category}`
            : "http://localhost:9292/products"
        );
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [category]);

  // useEffect(() => {
  //   if (filter === "Latest") {
  //     setFilteredProducts((prev) => {
  //       [...prev].sort((a, b) => b.created_at - a.createdAt);
  //     });
  //   } else {
  //     setFilteredProducts((prev) => {
  //       [...prev].sort((a, b) => a.created_at - b.createdAt);
  //     });
  //   }
  // }, [filter]);

  // useEffect(() => {
  //   if (sort === "asc") {
  //     setFilteredProducts((prev) => {
  //       [...prev].sort((a, b) => a.price - b.price);
  //     });
  //   } else {
  //     setFilteredProducts((prev) => {
  //       [...prev].sort((a, b) => b.price - a.price);
  //     });
  //   }
  // }, [sort]);

  return (
    <Container>
      {products?.map((product) => {
        return <Item key={product.id} item={product} />;
      })}
    </Container>
  );
};

export default Items;
