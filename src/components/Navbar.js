import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/Context";
import { useContext, useState } from "react";

const Container = styled.main`
  height: 10vh;
  width: 100%;
  background-color: #ca1b37;
  color: #fff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.section`
  width: 100%;
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
  box-sizing: border-box;
`;

const TopInput = styled.input`
  padding: 0.7rem;
  outline: none;
  background-color: transparent;
  border-radius: 1rem;
  border: 1px solid #fff;
  &::placeholder {
    color: #fff;
    font-weight: 600;
  }
`;

const Icon = styled.div`
  display: flex;
  font-size: 1.125rem;
  color: #fff;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  cursor: pointer;
  position: absolute;
  right: 5%;
`;

const Navbar = ({ onSearch }) => {
  const { user, dispatch } = useContext(UserContext);
  const [input, setInput] = useState("");

  onSearch(input);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/login");
  };

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
          <TopInput
            onChange={(event) => setInput(event.target.value)}
            name="title"
            value={input.title}
            placeholder="Search..."
          />
          <Icon>
            <i className="topSearchIcon fas fa-search"></i>
          </Icon>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
