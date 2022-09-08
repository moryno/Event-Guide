import {
  Facebook,
  Instagram,
  LocationOn,
  MailOutline,
  Phone,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #000000;
  color: #ffffff;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialIcon = styled.div`
  display: flex;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  color: white;
  background-color: #${(props) => props.color};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <em>eventguide</em>
        </Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique
          semper nulla sed condimentum. Donec tristique, ipsum quis bibendum
          vulputate
        </Desc>
        <SocialIcon>
          <a href={`https://www.reddit.com/user/mngash`} target="_blank">
            <Icon color="ff4500">
              <i class="fab fa-reddit-alien"></i>
            </Icon>
          </a>
          <a href={`https://twitter.com/MauriceNganga5`} target="_blank">
            <Icon color="55ACEE">
              <Twitter />
            </Icon>
          </a>

          <Icon color="E4405F">
            <Instagram />
          </Icon>
          <a
            href={`https://www.linkedin.com/in/maurice-nganga-a6668b213/`}
            target="_blank"
          >
            <Icon color="0077b5">
              <i class="fab fa-linkedin"></i>
            </Icon>
          </a>
        </SocialIcon>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to={`/`}>Home</Link>
          </ListItem>
          <ListItem>
            <Link to={`/products/movies`}>Movies</Link>
          </ListItem>
          <ListItem>
            <Link to={`/products/sports`}>Sports</Link>
          </ListItem>
          <ListItem>
            <Link to={`/products/concerts`}>Concerts</Link>
          </ListItem>
          <ListItem>
            {" "}
            <Link to={`/products/families`}>Family</Link>
          </ListItem>
          <ListItem>
            <Link to={`/login`}>Login</Link>
          </ListItem>
          <ListItem>
            <Link to={`/register`}>Register</Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOn style={{ marginRight: "10px" }} /> Event House, Event
          Street
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +254 715 018 410
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          mauricenganga41@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};
