import React from "react";
import styled from "styled-components";
import { Department } from "./Department";

export const Departments = () => {
  return (
    <Container>
      <h1>NUESTROS DEPARTAMENTOS</h1>
      <hr />
      <WrapperDepartments>
        <Department />
        <Department />
        <Department />
        <Department />
        <Department />
        <Department />
      </WrapperDepartments>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  position: relative;
  h1 {
    color: #fff;
    margin: 5rem 0 3rem 0;
    text-align: center;
  }
  hr {
    max-width: 23rem;
    width: auto;
    height: 1px;
    margin: 1.2rem auto 5rem auto;
    border: none;
    background: #b3b6b7;
  }
`;

const WrapperDepartments = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
