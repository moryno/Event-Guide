import styled from "styled-components";
import Category from "./Category";

const Container = styled.main``;

const Wrapper = styled.section`
  width: 80%;
  margin: auto;
`;

const Title = styled.h3``;

const ProductList = () => {
  return (
    <Container>
      <Wrapper>
        <Category />
      </Wrapper>
    </Container>
  );
};

export default ProductList;
