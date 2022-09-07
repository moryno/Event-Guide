import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.main`
  height: 10vh;
  background-color: teal;
`;

const Wrapper = styled.section`
  padding: 0.625rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const Left = styled.article`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

const Center = styled.article`
  flex: 2;
  display: flex;
  text-align: center;
  margin-right: 2rem;
  justify-content: space-evenly;
`;

const MenuItems = styled.article`
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 500;
  margin-left: 25px;
`;

const Right = styled.article`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const TopInput = styled.input`
  padding: 0.5rem;
  outline: none;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  cursor: pointer;
  position: absolute;
  right: 2%;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            <em>eventguide</em>
          </Logo>
        </Left>
        <Center>
          <NavLink to={"/"}>
            <MenuItems>Home</MenuItems>
          </NavLink>
          <NavLink to={"/products/movies"}>
            <MenuItems>Movies</MenuItems>
          </NavLink>
          <NavLink to={"/products/concerts"}>
            <MenuItems>Concerts</MenuItems>
          </NavLink>
          <NavLink to={"/products/sports"}>
            <MenuItems>Sports</MenuItems>
          </NavLink>

          <MenuItems>Recommendations</MenuItems>

          <NavLink to={"/products/families"}>
            <MenuItems>Family</MenuItems>
          </NavLink>
        </Center>
        <Right>
          <TopInput placeholder="Search..." />
          <Icon>
            <i
              className="topSearchIcon fas fa-search"
              style={{
                fontSize: "1.125rem",
                color: "#666",
                cursor: "pointer",
              }}
            ></i>
          </Icon>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
