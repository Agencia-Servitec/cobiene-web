import React from "react";
import styled from "styled-components";
import { Department } from "./Department";

export const Departments = ({ titleLargeDepartment, departments }) => {
  return (
    <Container id="departments">
      <h1>
        {titleLargeDepartment ? titleLargeDepartment : "NUESTROS DEPARTAMENTOS"}
      </h1>
      <hr />
      <WrapperDepartments>
        {departments.map((department, index) => (
          <Department
            key={index}
            departmentId={department.id}
            titleLarge={department.titleLarge}
            banner={department.banner}
            title={department.title}
            url={department.url}
            withSubDepartments={department.withSubDepartments}
          />
        ))}
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
    margin: 5rem 0 1rem 0;
    text-align: center;
    text-transform: uppercase;
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
  display: grid;
  justify-content: center;
  flex-wrap: wrap;

  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 1.5rem;
`;
