import styled from "styled-components";
import Category from "./Category";
import Items from "./Items";
import Product from "./Product";

const Container = styled.main``;

const Wrapper = styled.section`
  width: 90%;
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
