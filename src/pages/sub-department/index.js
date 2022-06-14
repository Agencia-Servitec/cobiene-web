import React from "react";
import styled from "styled-components";
import {Carousel, Departments,} from "../../components";
import {subDepartments} from "../../data-list";
import {useParams} from "react-router-dom";

export const SubDepartment = () => {

    const {departmentId} = useParams();

    const subDepartmentsView = subDepartments.filter((subDepartment) =>
        subDepartment.departmentId === departmentId
    );

    return (
        <Container>
            <Carousel/>
            <WrapperComponents>
                <Departments departments={subDepartmentsView}/>
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
`;
