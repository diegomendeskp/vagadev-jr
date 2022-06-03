import React from 'react';
import { Container, ImgCard } from './styles';

export function ModalImg() {
  return (
    <Container>
      <ImgCard src={require('../../../img/image 6.png')} />
    </Container>
  );
}

export default ModalImg;
