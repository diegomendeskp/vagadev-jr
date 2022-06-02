import React from 'react';
import { Container, ImgCard } from './styles';

export function Card() {
  return (
    <Container>
      <ImgCard src={require('../../../img/zelda_banner.jpg')} />
      <ImgCard src={require('../../../img/sekiro_banner.jpg')} />
    </Container>
  );
}

export default Card;
