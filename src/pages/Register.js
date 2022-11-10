import { useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethod";

const Register = () => {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confPassword: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (input.password === input.confPassword) {
        const { data } = await publicRequest.post(`/register`, input);
        data && window.location.replace("/login");
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            name="first_name"
            placeholder="First Name"
          />
          <Input
            onChange={handleChange}
            name="last_name"
            placeholder="Last Name"
          />
          <Input
            onChange={handleChange}
            name="username"
            placeholder="Username"
          />
          <Input onChange={handleChange} name="email" placeholder="Email" />
          <Input
            onChange={handleChange}
            name="password"
            placeholder="Password"
          />
          <Input
            onChange={handleChange}
            name="confPassword"
            placeholder="Confirm Password"
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
          {error && (
            <span style={{ color: "red", marginTop: "10px" }}>
              Password does not match!
            </span>
          )}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://play-lh.googleusercontent.com/FAh9yamRzyAZiFHAUWSTtJxy0S7MZE5c-vwF3W9aAvJVzm6EKnJ3N_mVp_s5RL7sLBQ=w3840-h2160-rw")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 50%;
  background-color: teal;
  color: white;
  padding: 15px 20px;
  cursor: pointer;
  border: none;
`;
