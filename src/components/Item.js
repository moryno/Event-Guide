import styled from "styled-components";

const Container = styled.section`
  width: 18rem;
  margin-bottom: 2.5rem;
  //   box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
  width: 100%;
  height: 17.5rem;
  border-radius: 0.4375rem;
  object-fit: cover;
`;

const InfoContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const Category = styled.article``;

const CategoryTitle = styled.span`
  font-family: "Varela Round", sans-serif;
  font-size: 0.8125rem;
  color: #be9656;
  line-height: 1.25rem;
  margin-top: 1rem;
  margin-right: 0.625rem;
  cursor: pointer;
`;

const Title = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1rem;
  cursor: pointer;
`;

const Date = styled.span`
  font-family: "Lora", serif;
  font-style: italic;
  font-size: 0.8125rem;
  color: #999;
  margin-top: 1rem;
`;

const Button = styled.button`
  border: none;
  border-radius: 1.2rem;
  padding: 0.65rem 1rem;
  cursor: pointer;
  margin-top: 1rem;
  color: #fff;
  background-color: #8b0000;
  font-weight: 600;
`;

const Item = () => {
  return (
    <Container>
      <Image
        src="https://images.unsplash.com/photo-1603037738996-a04f1c6a9ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
        alt="movieImg"
      />
      <InfoContainer>
        <Category>
          <CategoryTitle>Music</CategoryTitle>
        </Category>
        <Title>Thor Ragnarok</Title>
        <Date>12Jan 2022</Date>
      </InfoContainer>
      <Button>Buy Ticket</Button>
    </Container>
  );
};

export default Item;
