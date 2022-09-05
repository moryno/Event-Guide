import { Add, Remove } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  margin: 140px 0 30px 0;
  padding: 40px;
  display: flex;
`;

const Product = styled.div`
  flex: 3;
`;

const ProductDetail = styled.div`
  display: flex;
`;

const Image = styled.img`
  min-width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 0px 20px;
`;

const Title = styled.span`
  margin-bottom: 10px;
`;

const ProductName = styled.span`
  font-weight: 300;
  color: #5caad9;
`;

const ProductCapacity = styled.span`
  font-weight: 300;
`;

const ProductRam = styled.span`
  font-weight: 300;
`;

const ProductColor = styled.span`
  font-weight: 300;
`;

const ProductPrice = styled.span`
  font-weight: 300;
`;

const SummaryContainer = styled.div`
  flex: 1;
  background-color: #f5f5f7;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryDetail = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "24px"};
  flex-wrap: wrap;
`;

const SummaryTitle = styled.span``;

const SummaryText = styled.span`
  width: 50%;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Quantity = styled.span`
  background-color: #f5f5f7;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

export const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Product>
          <ProductDetail>
            <Image
              src="https://images.unsplash.com/photo-1603037738996-a04f1c6a9ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="movieImg"
            />
            <Detail>
              <Title>Product</Title>
              <ProductName>RAYZEN DESKTOP MAC 1</ProductName>
              <ProductCapacity>
                Capacity:<b>512GB</b>
              </ProductCapacity>
              <ProductRam>
                Ram:<b>32GB</b>
              </ProductRam>
              <ProductColor>
                Color:<b>black</b>
              </ProductColor>
            </Detail>
            <Detail>
              <Title>Price</Title>
              <ProductPrice>Ksh132,0000</ProductPrice>
            </Detail>
            <Detail>
              <Title>Quantity</Title>
              <QuantityContainer>
                <Remove
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity("dec")}
                />
                <Quantity>{quantity}</Quantity>
                <Add
                  style={{ cursor: "pointer" }}
                  onClick={() => handleQuantity("inc")}
                />
              </QuantityContainer>
            </Detail>
            <Detail>
              <Title>Subtotal</Title>
              <ProductPrice>
                <b>Ksh192,0000</b>
              </ProductPrice>
            </Detail>
          </ProductDetail>
        </Product>
        <SummaryContainer>
          <SummaryDetail>
            <SummaryTitle>Subtotal</SummaryTitle>
            <SummaryText>Ksh118,000</SummaryText>
          </SummaryDetail>
          <SummaryDetail>
            <SummaryTitle>Shipping</SummaryTitle>
            <SummaryText>
              Flat rate: Ksh400.00 Shipping to <b>Nairobi County.</b>
            </SummaryText>
          </SummaryDetail>
          <SummaryDetail>
            <SummaryTitle>VAT</SummaryTitle>
            <SummaryText>Ksh18,000</SummaryText>
          </SummaryDetail>
          <SummaryDetail type="total">
            <SummaryTitle>Total</SummaryTitle>
            <SummaryText>Ksh18,000</SummaryText>
          </SummaryDetail>
          <Button>Proceed to checkout</Button>
        </SummaryContainer>
      </Wrapper>
    </Container>
  );
};
