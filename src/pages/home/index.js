import React from "react";
import styled from "styled-components";
import {AboutUs, Carousel, Contact, Departments,} from "../../components";
import {departments} from "../../data-list";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <AboutUs />
      <WrapperComponents>
        <Departments departments={departments}/>
      </WrapperComponents>
      <Contact />
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
