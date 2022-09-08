import {
  EventAvailable,
  GroupWork,
  SportsBasketball,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  flex: 9;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 4rem;
`;

const Wrapper = styled.article`
  width: 50%;
  margin: auto;
`;

const IconContainer = styled.article`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const Title = styled.h1`
  font-family: "Lora", serif;
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const SubTitle = styled.h4`
  font-family: "Varela Round", sans-serif;
  font-weight: 600;
  color: #be9656;
`;

const Hr = styled.hr`
  width: 7%;
  margin: auto;
  margin-top: 1rem;
`;

const Description = styled.p`
  font-family: "Varela Round", sans-serif;
  font-size: 0.975rem;
  color: #444;
  line-height: 1.5rem;
  margin-top: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        <IconContainer>
          <Link to={`/products/movies`}>
            <Icon>
              {" "}
              <GroupWork style={{ fontSize: "4rem", color: "#039f09" }} />{" "}
              <SubTitle style={{ color: "#039f09" }}>Movies</SubTitle>
            </Icon>
          </Link>
          <Link to={`/products/concerts`}>
            <Icon>
              {" "}
              <EventAvailable
                style={{ fontSize: "4rem", color: "#f68920" }}
              />{" "}
              <SubTitle style={{ color: "#f68920" }}>Events</SubTitle>
            </Icon>
          </Link>
          <Link to={`/products/sports`}>
            <Icon>
              {" "}
              <SportsBasketball
                style={{ fontSize: "4rem", color: "#ca1b37" }}
              />{" "}
              <SubTitle style={{ color: "#ca1b37" }}>Sports</SubTitle>
            </Icon>
          </Link>
          <Link to={`/products/families`}>
            <Icon>
              {" "}
              <i
                class="fas fa-child"
                style={{ fontSize: "4rem", color: "#f050ae" }}
              ></i>{" "}
              <SubTitle style={{ color: "#f050ae" }}>Family</SubTitle>
            </Icon>
          </Link>
        </IconContainer>
        <Title>Discover what to do today</Title>
        <Hr />
        <Description>
          Plan your weekends, off-days and holidays with little effort. Get
          updates and recommendations on movies, concerts, sports and any major
          events today.
        </Description>
      </Wrapper>
    </Container>
  );
};

export default About;
