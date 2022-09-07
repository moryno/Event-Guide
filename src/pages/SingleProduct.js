import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/Context";
import { publicRequest } from "../requestMethod";

const Container = styled.div``;

const Wrapper = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.section`
  display: flex;
  margin-bottom: 5vh;
  position: relative;
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
  padding: 0 50px 0 30px;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 23vw; ;
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
`;
const BottomContainer = styled.section``;

const Category = styled.p`
  opacity: 0.8;
  margin-bottom: 0.5rem;
`;

const Desc = styled.p`
  margin: 20px 0;
  font-size: 0.9rem;
`;

const Price = styled.span`
  font-weight: 100;
`;

const Score = styled.span`
  margin-bottom: 0.5rem;
`;

const DescriptionContainer = styled.article``;

const DescriptionTitle = styled.h3``;

const CommentContainer = styled.section``;

const Comment = styled.article`
  border-radius: 0.1rem;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid lightgray;
`;

const CommentHeader = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
`;

const CommentDate = styled.span`
  font-size: 0.9rem;
`;

const CommentTitle = styled.h3``;

const Post = styled.span`
  font-size: 0.8rem;
`;

const UserName = styled.span`
  font-size: 0.9rem;
`;

const ComposeForm = styled.form`
  background-color: teal;
  border-radius: 0.3rem;
  box-sizing: border-box;
  padding: 1rem;
`;

const FormWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  font-size: 1.2rem;
  margin-top: 5vh;
`;

const FormDesc = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const FormLabel = styled.label``;

const Content = styled.textarea`
  font-size: 1.25rem;
  height: 10vh;
  padding: 1.25rem;
  border: none;
  margin-bottom: 1rem;
  border-radius: 0.2rem;
  &:focus {
    outline: none;
  }
`;

const CommentScore = styled.input`
  width: 5rem;
  padding: 1rem;
`;

const Button = styled.button`
  width: 10rem;
  margin-top: 1rem;
  border: none;
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const { user } = useContext(UserContext);

  const [input, setInput] = useState({
    reviews: "",
    score: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
      product_id: product.id,
      user_id: user?.id,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await publicRequest.post(`/reviews`, input);
    } catch (err) {
      console.log(err);
    }
  };

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
        <TopContainer>
          <ImageContainer>
            <Image
              src="https://images.unsplash.com/photo-1647671195638-2a7cf32e3dbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGV2ZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              alt="movieImg"
            />
          </ImageContainer>
          <InfoContainer>
            <Category>Movies</Category>
            <Title>Disney Land</Title>
            <Score>Rating: 9.0</Score>
            <Price>Ticket: 1900</Price>
          </InfoContainer>
        </TopContainer>
        <BottomContainer>
          <DescriptionContainer>
            <DescriptionTitle>Description</DescriptionTitle>
            <Desc>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Desc>
          </DescriptionContainer>
          <CommentContainer>
            <CommentTitle>2 Comments</CommentTitle>
            <Comment>
              <CommentHeader>
                <UserName>Moryno</UserName>
                <CommentDate>7th January</CommentDate>
              </CommentHeader>
              <Post>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen boo
              </Post>
            </Comment>
            <Comment>
              <CommentHeader>
                <UserName>Moryno</UserName>
                <CommentDate>7th January</CommentDate>
              </CommentHeader>
              <Post>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen boo
              </Post>
            </Comment>
          </CommentContainer>
          <FormTitle>Leave a Reply</FormTitle>
          <ComposeForm onSubmit={handleSubmit}>
            <FormWrapper>
              <FormDesc>
                Your email address will not be publish.Required fields are
                marked *
              </FormDesc>
              <FormLabel htmlFor="content">Comment *</FormLabel>
              <Content
                id="content"
                name="reviews"
                type="text"
                onChange={handleChange}
              />
              <FormLabel htmlFor="score">Score *</FormLabel>
              <CommentScore
                id="content"
                name="score"
                type="number"
                onChange={handleChange}
              />
              <Button>Post Comment</Button>
            </FormWrapper>
          </ComposeForm>
        </BottomContainer>
      </Wrapper>
    </Container>
  );
};

export default SingleProduct;
