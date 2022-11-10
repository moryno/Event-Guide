import styled from "styled-components";
import TopSelling from "./TopSelling";

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
      <TopSelling type="movies" title="See All Movies" />
      <TopSelling type="concerts" title="See All Concerts" />
      <TopSelling type="sports" title="See All Sports" />
      <TopSelling type="families" title="See All Family" />
    </Container>
  );
};

export default Product;
