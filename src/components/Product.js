import styled from "styled-components";
import Concert from "./Concert";
import Movie from "./Movie";
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
      <Movie />
      <Concert />
      <Sport />
    </Container>
  );
};

export default Product;
