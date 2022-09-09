import styled from "styled-components";
import Item from "./Item";
import { popularProducts } from "../data";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethod";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Items = ({ category, filter, sort, input }) => {
  const [products, setProducts] = useState([]);
  // const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await publicRequest.get(
          category ? `/products?category=${category}` : "/products"
        );
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [category]);

  const filteredProducts = products?.filter((product) => {
    if (input === "") {
      return product;
    } else if (product.title?.toLowerCase().includes(input?.toLowerCase())) {
      return product;
    }
  });
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
      {category
        ? filteredProducts?.map((product) => (
            <Item key={product.id} item={product} />
          ))
        : products
            ?.slice(0, 8)
            .map((product) => <Item key={product.id} item={product} />)}
    </Container>
  );
};

export default Items;
