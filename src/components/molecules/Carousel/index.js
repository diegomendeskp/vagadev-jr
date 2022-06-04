import React from 'react';
import { Fade, arrows } from 'react-slideshow-image';
import image1 from '../../../img/principal_banner_desktop.jpg';
import image2 from '../../../img/principal_banner_desktop_02.jpg';
import {
  Container,
  Img,
  P,
  Title,
  Price,
  Price2,
  Div,
} from './styles';
import 'react-slideshow-image/dist/styles.css';

const fadeImages = [image1, image2];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

function Carousel() {
  return (
    <Container>
      <Fade>
        <div className="each-fade">
          <Img src={fadeImages[0]} />
          <Div>
            <Title>MORTAL KOMBAT</Title>
            <Price>R$299</Price>
            <Price2>,99</Price2>
            <P>
              Mortal Kombat X combina uma apresentação cinemática
              única com uma jogabilidade totalmente nova. Os jogadores
              podem escolher pela primeira vez diversas variantes de
              cada personagem, afetando tanto a estratégia como o
              estilo de luta.
            </P>
          </Div>
        </div>
        <div className="each-fade">
          <Img src={fadeImages[1]} />
        </div>
      </Fade>
    </Container>
  );
}

export default Carousel;
