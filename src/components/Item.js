import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  width: 24%;
  margin-bottom: 2.5rem;
  overflow: hidden;
`;
const ImageContainer = styled.article`
  width: 100%;
  height: 50vh;
  display: flex;
  align-item: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  border-radius: 0.2375rem;
  overflow: hidden;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 0.375rem;
  object-fit: cover;
`;

const InfoContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 0.4rem;
`;

const Category = styled.article``;

const CategoryTitle = styled.span`
  font-family: "Varela Round", sans-serif;
  font-size: 1rem;
  color: darkgray;
  line-height: 1.25rem;
  cursor: pointer;
`;

const Title = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: 0.4rem;
  cursor: pointer;
`;

const Date = styled.span`
  font-family: "Lora", serif;
  font-style: italic;
  font-size: 0.8125rem;
  color: #999;
  margin-top: 0.4rem;
`;

const Button = styled.button`
  border: none;
  border-radius: 1.2rem;
  padding: 0.65rem 1rem;
  cursor: pointer;
  margin-top: 0.6rem;
  color: #fff;
  background-color: #8b0000;
  font-weight: 600;
`;

const Item = ({ item }) => {
  return (
    <Container>
      <Link to={`/product/${item.id}`}>
        <ImageContainer>
          <Image src={item.img} alt="movieImg" />
        </ImageContainer>
        <InfoContainer>
          <Category>
            <CategoryTitle>{item.categories}</CategoryTitle>
          </Category>
          <Title>{item.title}</Title>
          <Date>{new window.Date(item.created_at).toDateString()}</Date>
        </InfoContainer>
        <Button>Learn More</Button>
      </Link>
    </Container>
  );
};

export default Item;
