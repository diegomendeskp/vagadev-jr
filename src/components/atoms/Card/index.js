import React from 'react';
import { P } from '../../molecules/ContrastCard/styles';
import { Container, ImgCard, Div, Text, Line } from './styles';

export function Card() {
  return (
    <Container>
      <Div>
        <ImgCard src={require('../../../img/zelda_banner.jpg')} />
        <Line />
        <Text>The Legend of Zelda - Breath of th wild</Text>
      </Div>
      <Div>
        <ImgCard src={require('../../../img/sekiro_banner.jpg')} />
        <Line />
        <Text>SEKIRO - Shadows die twice</Text>
      </Div>
    </Container>
  );
}

export default Card;
