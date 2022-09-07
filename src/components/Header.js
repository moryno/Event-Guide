import React from "react";
import styled, { keyframes } from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../data";

const Container = styled.main`
  width: 100%;
  height: 40vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const move = keyframes`
   25% { transform: translateX(-50px)}
   50% { transform: translateX(-100px)}
   75% { transform: translateX(-150px)}
   100% { transform: translateX(-200px)}
`;

const Wrapper = styled.section`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -20}vw);
  transition: all 1.5s ease;
  animation: ${move} 20s ease-in-out infinite alternate;
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
  flex: 1;
  position: relative;
`;

const Image = styled.img`
  max-width: 100%;
`;

const InfoContainer = styled.div`
  width: 100%;
  padding: 1rem;
  color: #ffffff;
  box-sizing: border-box;
  position: absolute;
  background-color: rgba(30, 26, 27, 0.6);
  bottom: 0;
  cursor: pointer;
`;

const Title = styled.p``;

const Venue = styled.p``;

const Header = () => {
  const [slideIndex, setSlideIndex] = useState(0);

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
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
              <InfoContainer>
                <Title>{item.title}</Title>
                <Venue>Science Park</Venue>
              </InfoContainer>
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction={"right"} onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Header;
