import React from "react";
import styled from "styled-components";
import { BannerContact } from "../../images";

export const AboutUs = () => {
  return (
    <Container id="about-us">
      <div className="content-items">
        <h1 className="title">¿QUIENE SOMOS?</h1>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem
          dolore dolorum, eaque facilis ipsa omnis quo! Adipisci, blanditiis
          dicta dolorem fugit labore, magnam, maxime numquam obcaecati optio
          quos ullam!
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
  padding: 4rem 5rem;
  position: relative;

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
    }
    .title {
      font-weight: 600;
      margin-bottom: 2rem;
    }
    .description {
      max-width: 40rem;
      font-weight: 500;
    }
  }
`;
