import React, {useEffect} from "react";
import styled from "styled-components";
import { Departments} from "../../components";
import {subDepartments} from "../../data-list";
import {useParams} from "react-router-dom";

export const SubDepartment = () => {

    const {departmentId} = useParams();

    const subDepartmentsView = subDepartments.filter((subDepartment) =>
        subDepartment.departmentId === departmentId

    );
    useEffect(()=>{
        window.scrollTo(0,0);

    },[]);

    return (
        <Container>
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
  padding-top: 130px;
`;
