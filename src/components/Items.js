import styled from "styled-components";
import Item from "./Item";
import { popularProducts } from "../data";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Items = () => {
  return (
    <Container>
      {popularProducts.map((product) => {
        return <Item key={product.id} item={product} />;
      })}
    </Container>
  );
};

export default Items;
