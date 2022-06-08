import React from "react";
import styled from "styled-components";
import { ImgDefault } from "../../images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const Department = () => {
  return (
    <Container>
      <div className="item-picture">
        <img src={ImgDefault} alt="Image" />
      </div>
      <div className="item-title-card">
        <h4>Jefatura de Administración de Casas del Ejercito</h4>
      </div>
      <div className="footer-card">
        <div className="blog-divider-wrapper">
          <div className="blog-divider" />
        </div>
        <div className="item-bottom">
          <div className="item-more">
            <div className="bottom-txt">
              <h5>VER MÁS</h5> <FontAwesomeIcon icon={faPlay} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background: radial-gradient(100% 100% at 50.52% 0%, #686868 0%, #000000 100%);
  box-shadow: 0 10px 20px rgb(0 0 0 / 5%);
  border-radius: 8px;
  min-height: 25rem;
  max-height: 25rem;
  width: 100%;
  max-width: calc(33.3333% - 6rem);
  margin: 0 10px 20px;
  overflow: hidden;

  .item-picture {
    position: relative;
    transition: all 0.3s ease;
    z-index: 0;
    width: 100%;
    height: auto;
    overflow: hidden;

    img {
      width: 100%;
      height: 12rem;
      object-fit: cover;
    }
  }

  .item-title-card {
    width: 100%;
    height: auto;
    padding: 1rem 0.7rem;

    h4 {
      margin: 0;
    }
  }

  .footer-card {
    position: absolute;
    z-index: 10;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
    padding: 26px 20px;
    color: #ffffff;

    .blog-divider-wrapper {
      position: relative;
      width: 100%;
      height: 10px;
      z-index: 0;

      &:after {
        content: " ";
        position: absolute;
        top: 0;
        left: 93%;
        bottom: 0;
        width: 75px;
        height: 1px;
        background-color: #b3b6b7;
        z-index: 1;
        -webkit-transform: rotate(47deg);
        transform-origin: 0% 0%;
        transition: all 0.3s ease;
      }

      .blog-divider {
        &:before {
          content: " ";
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 65px;
          height: 6px;
          background-color: #b3b6b7;
          z-index: 1;
          transition: all 0.3s ease;
        }

        &:after {
          content: " ";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 93%;
          height: 1px;
          background-color: #b3b6b7;
          z-index: 1;
          transition: all 0.3s ease;
        }
      }
    }

    .item-bottom {
      width: 100%;
      height: auto;
      position: relative;

      .item-more {
        position: relative;

        .bottom-txt {
          margin: 1.7rem 0 0 0;
          display: flex;
          align-items: center;
          justify-content: flex-start;

          h5 {
            margin: 0 0.3rem 0 0;
          }
        }
      }
    }
  }
`;
