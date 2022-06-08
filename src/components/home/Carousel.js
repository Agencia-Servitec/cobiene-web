import React from "react";
import CarouselAntd from "antd/lib/carousel";
import { Slider1, Slider2 } from "../../images";
import styled from "styled-components";

export const Carousel = () => {
  return (
    <CarouselAntd autoplay>
      <ItemCarousel>
        <img src={Slider1} alt="banner" />
      </ItemCarousel>
      <ItemCarousel>
        <img src={Slider2} alt="banner" />
      </ItemCarousel>
    </CarouselAntd>
  );
};

const ItemCarousel = styled.div`
  width: 100%;
  height: auto;
`;
