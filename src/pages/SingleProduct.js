import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Add, Remove } from "@material-ui/icons";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { publicRequest } from "../requestMethod";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  width: 23vw;
  height: 60vh;
`;

const Image = styled.img`
  max-width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const Score = styled.span``;

const Category = styled.span``;

const CommentContainer = styled.article``;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  font-weight: 500;
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await publicRequest.get(`/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} alt="movieImg" />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Price>{product.price}</Price>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default SingleProduct;
