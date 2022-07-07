import React, { useEffect } from "react";
import styled from "styled-components";
import { Departments } from "../../components";
import { departments, subDepartments } from "../../data-list";
import { useParams } from "react-router-dom";

export const SubDepartment = () => {
  const { departmentId } = useParams();

  const subDepartmentsView = subDepartments.filter(
    (subDepartment) => subDepartment.departmentId === departmentId
  );

  const department = departments.filter(
    (department) => department.id === departmentId
  );

  const titleLargeDepartment = department[0].titleLarge;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <WrapperComponents>
        <Departments
          titleLargeDepartment={titleLargeDepartment}
          departments={subDepartmentsView}
        />
      </WrapperComponents>
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
  padding-top: 130px;
`;
