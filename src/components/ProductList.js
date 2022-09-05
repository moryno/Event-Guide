import styled from "styled-components";
import Category from "./Category";
import Product from "./Product";

const Container = styled.main``;

const Wrapper = styled.section`
  width: 80%;
  margin: auto;
`;

const ProductList = () => {
  return (
    <Container>
      <Wrapper>
        <Category />
        <Product />
      </Wrapper>
    </Container>
  );
};

export default ProductList;
