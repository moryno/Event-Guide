import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";

const Container = styled.main`
  box-sizing: border-box;
`;

const Title = styled.h2`
  margin-bottom: 3vh;
  margin-left: 1.5vw;
  font-weight: 600;
`;

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const Category = () => {
  return (
    <Container>
      <Title>Browse by category</Title>
      <Wrapper>
        {categories.map((category) => {
          return <CategoryItem key={category.id} category={category} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default Category;
