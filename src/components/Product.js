import styled from "styled-components";
import Movie from "./Movie";

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
    </Container>
  );
};

export default Product;
