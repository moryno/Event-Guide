import styled from "styled-components";
import Category from "./Category";

const Card = styled.article`
  width: 23%;
  height: 20rem;
  border-radius: 0.25rem;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  object-fit: cover;
`;

const Button = styled.button`
  border: none;
  padding: 0.7rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 600;
  color: #ffffff;
  background-color: rgba(30, 26, 27, 0.6);
  position: absolute;
  bottom: 5%;
  left: 2%;
`;

const CategoryItem = ({ category }) => {
  return (
    <Card>
      <Image src={category.img} alt="categoryImg" />
      <Button>{category.cat}</Button>
    </Card>
  );
};

export default CategoryItem;
