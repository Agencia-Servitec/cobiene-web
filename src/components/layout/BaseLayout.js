import styled from "styled-components";
import { CobieneLogoLarge } from "../../images";

export const BaseLayout = ({ children }) => {
  return (
    <Container>
      <div className="header">
        <div className="menu-list">
          <li>INICIO</li>
          <li>NOSOTROS</li>
          <li>
            <img src={CobieneLogoLarge} alt="Cobiene logo" />
          </li>
          <li>DEPARTAMENTOS</li>
          <li>CONTÁCTO</li>
        </div>
      </div>
      <div className="body">{children}</div>
      {/*<div className="footer">Todos los derechos reservados</div>*/}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  position: relative;
  .header {
    position: absolute;
    width: 100%;
    height: auto;
    background: transparent;
    display: flex;
    justify-content: center;
    padding: 1rem;
    top: 0;
    left: 0;
    right: 0;
    z-index: 500;
    .menu-list {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        color: #fff;
        margin: 0.7rem 1.7rem;
        font-weight: bold;
        font-size: 1.2rem;
        img {
          width: 5rem;
          height: auto;
        }
      }
    }
  }

  .footer {
    width: 100%;
    height: auto;
    padding: 1rem;
    background: black;
    color: #fff;
  }
`;
