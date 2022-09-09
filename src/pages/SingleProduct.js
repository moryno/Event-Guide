import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Link, useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/Context";
import { publicRequest } from "../requestMethod";
import VideoPlayer from "../components/VideoPlayer";
import {
  EventAvailable,
  GroupWork,
  SportsBasketball,
} from "@material-ui/icons";

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  overflow: hidden;
  flex-direction: column; ;
`;

const TopContainer = styled.section`
  display: flex;
  margin-bottom: 5vh;
  position: relative;
`;

const ImageContainer = styled.div`
  width: 15vw;
  height: 45vh;
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
  left: 15vw; ;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;
const BottomContainer = styled.section``;

const Category = styled.p`
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 1rem;
`;

const Desc = styled.p`
  margin: 20px 0;
  font-size: 0.9rem;
`;

const Price = styled.span`
  font-weight: 100;
  margin-bottom: 1rem;
`;

const Score = styled.span`
  margin-bottom: 1rem;
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
  float: right;
`;
const CommentEdit = styled.article`
  float: right;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.625rem;
  cursor: pointer;
  &:first-child {
    color: teal;
  }
  &:last-child {
    color: tomato;
  }
`;

const CommentTitle = styled.h3``;

const Post = styled.span`
  font-size: 0.8rem;
`;

const UserName = styled.span`
  font-size: 0.9rem;
`;

const ComposeForm = styled.form`
  background-image: -webkit-linear-gradient(
    45deg,
    rgb(200, 25, 38) 30%,
    rgb(239, 110, 27) 70%
  );
  border-radius: 0.3rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
  padding: 1rem;
  color: #ffffff;
  font-weight: 600;
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
  color: #000000;
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
  color: #000000;
`;

const Button = styled.button`
  width: 10rem;
  margin-top: 1rem;
  border: none;
  alighn-self: end;
  padding: 1rem;
  background-color: #000000;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [updateMode, setUpdateMode] = useState(false);

  const [input, setInput] = useState({
    reviews: "",
    score: null,
  });

  const [tempVal, setTempVa] = useState(input.reviews);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await publicRequest.get(`/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

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
      setProduct({ ...product, data });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  console.log(tempVal);
  const handleKeyDown = (event) => {
    const key = event.keyCode;
    if (key === 13 || key === 27) {
      setUpdateMode(false);
    }
  };

  const handleUpdate = async (reviewId) => {
    try {
      await publicRequest.patch(`/reviews/${reviewId}`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (reviewId) => {
    try {
      await publicRequest.delete(`/reviews/${reviewId}`);
      setProduct((prevProduct) => {
        return prevProduct.reviews.filter((review) => {
          return review.id !== reviewId;
        });
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <VideoPlayer product={product} />
      <Wrapper>
        <TopContainer>
          <ImageContainer>
            <Image src={product.img} alt="movieImg" />
          </ImageContainer>
          <InfoContainer>
            <Category>{product.categories}</Category>
            <Title>{product.title}</Title>
            <Score>Rating: 9.0</Score>
            <Price>Ticket: {product.price}</Price>
          </InfoContainer>
        </TopContainer>
        <BottomContainer>
          <DescriptionContainer>
            <DescriptionTitle>Description</DescriptionTitle>
            <Desc>{product.description}</Desc>
          </DescriptionContainer>
          <CommentContainer>
            <CommentTitle>{product.reviews?.length} Comments</CommentTitle>
            {product.reviews?.map((review) => {
              return (
                <Comment key={review.id}>
                  <CommentHeader>
                    <UserName>{review.user.username}</UserName>
                    <CommentDate>
                      7th January
                      <CommentEdit>
                        <Icon>
                          <i
                            className="singlePostIcon far fa-edit"
                            onClick={() => setUpdateMode(!updateMode)}
                          ></i>
                        </Icon>
                        <Icon>
                          <i
                            className="singlePostIcon far fa-trash-alt"
                            onClick={() => handleDelete(review.id)}
                          ></i>
                        </Icon>
                      </CommentEdit>
                    </CommentDate>
                  </CommentHeader>
                  <Post>{review.reviews}</Post>
                </Comment>
              );
            })}
            {updateMode && (
              <Content
                autoFocus={true}
                onKeyDown={handleKeyDown}
                style={{
                  color: "#000",
                  border: "1px solid lightgray",
                  width: "100%",
                }}
              />
            )}
          </CommentContainer>
          <FormTitle>Leave a Reply</FormTitle>
          {user ? (
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
          ) : (
            <Link to={"/register"}>
              <Button>Subscribe</Button>
            </Link>
          )}
        </BottomContainer>
      </Wrapper>
    </Container>
  );
};

export default SingleProduct;
