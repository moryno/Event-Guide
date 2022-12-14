import { Link } from "react-router-dom";
import styled from "styled-components";
import Category from "./Category";

const Card = styled.article`
  width: 24%;

  border-radius: 0.25rem;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const ImageContainer = styled.article`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 20vh;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.25rem;
  object-fit: cover;
  &:hover {
    transform: scale(1.1);
    transition: all 1.2s ease-in-out;
  }
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
      <Link to={`/products/${category.cat}`}>
        <ImageContainer>
          <Image src={category.img} alt="categoryImg" />
        </ImageContainer>
        <Button>{category.cat}</Button>
      </Link>
    </Card>
  );
};

export default CategoryItem;
