import styled from "styled-components";
import Concert from "./Concert";
import Family from "./Family";
import MovieList from "./MovieList";
import Sport from "./Sport";

const Container = styled.main`
  margin-top: 6vh;
`;

const Title = styled.h2`
  margin-bottom: 5vh;
  margin-left: 1.5vw;
  font-weight: 600;
`;

const Product = () => {
  return (
    <Container>
      <Title>Top Selling</Title>
      <MovieList />
      <Concert />
      <Sport />
      <Family />
    </Container>
  );
};

export default Product;
