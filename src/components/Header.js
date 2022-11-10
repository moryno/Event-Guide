import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";

import { publicRequest } from "../requestMethod";
import { Link } from "react-router-dom";

const Header = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await publicRequest.get("/products");
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction={"left"} onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {items.map((item) => (
          <Link to={`/product/${item.id}`}>
            <Slide key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Venue>Science Park</Venue>
                </InfoContainer>
              </ImgContainer>
            </Slide>
          </Link>
        ))}
      </Wrapper>
      <Arrow direction={"right"} onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Header;
const Container = styled.main`
  width: 100%;
  height: 40vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin: 2vh 0 5vh;
`;

const move = keyframes`
   25% { transform: translateX(-336px)}
   50% { transform: translateX(-672px)}
   75% { transform: translateX(-1008px)}
   100% { transform: translateX(-1344px)}
`;

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -20}vw);
  transition: all 1.5s ease;
  animation: ${move} 30s ease-in-out infinite alternate;
`;

const Slide = styled.article`
  width: 25vw;
  height: 100%;
  display: flex;
  margin-right: 10px;
  align-items: center;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-item: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  &:hover {
    transform: scale(1.1);
    transition: all 1.2s ease-in-out;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  padding: 1rem;
  color: #ffffff;
  box-sizing: border-box;
  position: absolute;
  background-color: rgba(30, 26, 27, 0.6);
  bottom: 0;
  z-index: 9;
`;

const Title = styled.p``;

const Venue = styled.p``;
