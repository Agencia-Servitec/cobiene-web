import React from "react";
import styled from "styled-components";
import { BannerContact } from "../../images";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const AboutUs = () => {
  return (
    <Container id="about-us">
      <div className="content-items">
        <h1 className="title">¿QUIENE SOMOS?</h1>
        <div className="description">
            Este comando con el firme compromiso , servicio de promover y desarrollar actividades que aseguren el bienestar del personal de la institución y de sus familiares directos, con la finalidad de contribuir a elevar su moral y rendimiento.
        </div>
      </div>
      <img src={BannerContact} alt="Contact cobiene" className="image-bg" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background-blend-mode: multiply;
  background: linear-gradient(
    -92.65deg,
    #000000 47.21%,
    rgba(0, 0, 0, 0.48) 77.8%
  );
  padding: 1.2rem;
  position: relative;
  ${mediaQuery.minTablet} {
    padding: 4rem 5rem;
  }

  .image-bg {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 70%;
    height: 100%;
    z-index: -10;
    object-fit: cover;
  }
  .content-items {
    width: 100%;
    max-width: 1250px;
    margin: 2rem auto;
    position: relative;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    .title,
    .description {
      text-align: right;
      font-family: "MontserratRegular";
    }
    .title {
      font-weight: 600;
      margin-bottom: 2rem;
      font-family: "MontserratRegular";
    }
    .description {
      max-width: 40rem;
      font-weight: 500;
    }
  }
`;
