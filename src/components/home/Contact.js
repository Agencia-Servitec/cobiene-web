import React from "react";
import styled from "styled-components";
import {BannerContact} from "../../images";
import {mediaQuery} from "../../styles/constants/mediaQuery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <Container id="contact">
      <div className="content-items">
        <h1 className="title">Contáctanos</h1>
        {/*<div className="form-content">*/}
        {/*  <input type="text" placeholder="Ingrese email" /> <br />*/}
        {/*  <button type="submit">*/}
        {/*    <h4>Enviar</h4>*/}
        {/*  </button>*/}
        {/*</div>*/}
        <div className="contact-email">
            <li>
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </li>
            <a href="mailto:contacto@cobiene.com">
            <h4>contacto@cobiene.com</h4>
            </a>
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
    92.65deg,
    #000000 47.21%,
    rgba(0, 0, 0, 0.48) 77.8%
  );
  padding: 1rem;
  position: relative;
  ${mediaQuery.minTablet} {
    padding: 1rem 5rem;
  }

  .image-bg {
    position: absolute;
    top: 0;
    right: 0;
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
    .title {
      font-weight: 600;
    }
    .form-content {
      input {
        width: 100%;
        max-width: 30rem;
        margin-top: 1.3rem;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 0.7rem;
        padding: 0.8rem;
        background: transparent;
        font-size: 1.3rem;
      }
      button {
        margin-top: 1.2rem;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 7rem;
        padding: 0.7rem 1rem;
        width: 15rem;
        background: #1f3521;
        cursor: pointer;
        h4 {
          margin: 0;
          font-size: 10px;
          
        }
      }
    }
    .contact-email{
      display: flex;
      position: relative;
      list-style: none;
      
      li{
        padding: 0 1rem;
      }      
      
    }
  }
`;
