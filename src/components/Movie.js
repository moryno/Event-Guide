import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { publicRequest } from "../requestMethod";

const Container = styled.main`
  margin: 0 1.5vw;
  box-sizing: border-box;
  margin-bottom: 4vh;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Titlewrapper = styled.article`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  margin-bottom: 3vh;
  font-weight: 600;
`;

const Span = styled.span`
  color: #336cdf;
  cursor: pointer;
`;

const Card = styled.article`
  width: 23%;
  border-radius: 0.25rem;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: 3vh;
  cursor: pointer;
`;

const ImageContainer = styled.article`
  display: flex;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 0.25rem;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: rgba(30, 26, 27, 0.6);
  font-weight: 600;
  position: absolute;
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0.6rem;
  bottom: 5%;
  left: 2%;
`;

const InfoTitle = styled.span``;

const InfoText = styled.span``;

const Movie = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await publicRequest.get(`/products?category=movies`);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <Container>
      <Titlewrapper>
        <Title>Movies</Title>
        <Link to={`/products/movies`}>
          <Span>See All Movies</Span>
        </Link>
      </Titlewrapper>
      <Wrapper>
        {products.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={`/product/${item.id}`}>
                <ImageContainer>
                  <Image src={item.img} alt="movieImg" />
                  <InfoContainer>
                    <InfoTitle>{item.title}</InfoTitle>
                    <InfoText>Score: 9/10</InfoText>
                  </InfoContainer>
                </ImageContainer>
              </Link>
            </Card>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Movie;
