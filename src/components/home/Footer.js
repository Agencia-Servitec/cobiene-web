import React from "react";
import styled from "styled-components";
import {CobieneLogoLarge} from "../../images";
import {faFacebook, faLinkedinIn, faTwitter, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <Container>
      <div className="item-logo-footer">
        <div className="item-logo">
          <img src={CobieneLogoLarge} alt="Cobiene logo" />
        </div>
        <div className="item-text">
          <h1>COBIENE</h1>
          <div>
            <span>COMANDO DE BIENESTAR DEL EJERCITO</span>
          </div>
        </div>
      </div>
      <div className="list-menu">
        <ul>
          <li>
            <span>LEGAL</span>
          </li>
          <li>
            <span>TERMINOS Y CONDICIONES</span>
          </li>
          <li>
            <span>POLITICA Y PRIVACIDAD</span>
          </li>
          <li>
            <span>CONTACTO</span>
          </li>
        </ul>
      </div>
      <div className="items-socials">
        <ul>
          <li>
            <FontAwesomeIcon icon={faWhatsapp} />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
        </ul>
      </div>
      <div className="bottom-footer">
        <div>
          © Copyright 2022 - COBIENE - Diseñado por{" "}
          <a href="#">Agencia Servitec</a>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 15.86%, #090808 100%);
  padding: 4rem 0 0 0;
  .item-logo-footer {
    margin: auto;
    .item-logo {
      display: flex;
      justify-content: center;
      img {
        width: 7rem;
        height: auto;
        margin: 0.5rem 0 1.5rem 0;
      }
    }
    .item-text {
      text-align: center;
      h1 {
        font-size: 3.8rem;
        font-weight: 600;
        margin: 1rem;
      }
      div span {
        font-size: 0.8rem;
      }
    }
  }

  .list-menu {
    width: 100%;
    margin: 3rem auto;
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      position: relative;
      &:after {
        content: "";
        width: 50%;
        max-width: 30rem;
        height: 1px;
        background: #fff;
        bottom: 0;
        text-align: center;
        position: absolute;
        margin-top: 2rem;
      }
      li {
        margin-bottom: 1.7rem;
        span {
          border-right: 1px solid #fff;
          padding: 0 1rem;
          font-size: 0.8rem;
        }
        &:last-child{
          span{
            border-right: none;
          }
        }
      }
    }
  }
  .items-socials {
    width: 100%;
    margin: 3rem auto;
    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      position: relative;
      li {
        color: #fff;
        padding: 0 1rem;
        font-size: 2.5rem;
      }
    }
  }
  .bottom-footer {
    width: 100%;
    padding: 1.5rem;
    div {
      width: 100%;
      text-align: center;
      font-size: 0.8rem;
      a {
        font-weight: 500;
        color: #fad249;
      }
    }
  }
`;
