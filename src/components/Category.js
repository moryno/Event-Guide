import styled from "styled-components";

const Container = styled.main`
  box-sizing: border-box;
`;

const Title = styled.h2`
  margin-bottom: 3vh;
  margin-left: 1.5vw;
  font-weight: 600;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
`;

const Card = styled.article`
  width: 23%;
  border-radius: 0.25rem;
  flex-direction: column;
  box-sizing: border-box;
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

const Button = styled.button`
  border: none;
  padding: 0.7rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 600;
  color: #ffffff;
  background-color: rgba(30, 26, 27, 0.6);
  position: absolute;
  bottom: 5%;
  left: 2%;
`;

const Category = () => {
  return (
    <Container>
      <Title>Browse by category</Title>
      <Wrapper>
        <Card>
          <ImageContainer>
            <Image
              src="https://images.unsplash.com/photo-1603037738996-a04f1c6a9ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="categoryImg"
            />
            <Button>Movies</Button>
          </ImageContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image
              src="https://images.unsplash.com/photo-1603037738996-a04f1c6a9ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="categoryImg"
            />
            <Button>Movies</Button>
          </ImageContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image
              src="https://images.unsplash.com/photo-1603037738996-a04f1c6a9ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="categoryImg"
            />
            <Button>Movies</Button>
          </ImageContainer>
        </Card>
        <Card>
          <ImageContainer>
            <Image
              src="https://images.unsplash.com/photo-1603037738996-a04f1c6a9ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="categoryImg"
            />
            <Button>Movies</Button>
          </ImageContainer>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Category;
