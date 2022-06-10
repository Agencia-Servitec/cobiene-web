import React from "react";
import styled from "styled-components";
import { Carousel, Contact, Departments, Footer } from "../../components";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <WrapperComponents>
        <Departments />
      </WrapperComponents>
      <Contact />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const WrapperComponents = styled.div`
  width: 100%;
  max-width: 1250px;
  height: auto;
  margin: auto;
`;